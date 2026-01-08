import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Settings, Zap, Calendar, MapPin, DollarSign, Users } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  budget: string;
  location: string;
  startDate: string;
  endDate: string;
  assignedTo: string;
  progress: number;
}

export default function ProjectTracking() {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("");
  const [showWebhookSetup, setShowWebhookSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Barangay Road Concreting Phase 1",
      description: "Concrete road construction in various barangays to improve transportation infrastructure",
      category: "Infrastructure",
      status: "In Progress",
      priority: "High",
      budget: "₱15,750,000",
      location: "Multiple Barangays",
      startDate: "2025-03-01",
      endDate: "2025-08-28",
      assignedTo: "General Construction Corp.",
      progress: 25
    },
    {
      id: "2",
      title: "Municipal Health Center Equipment",
      description: "Procurement and installation of modern medical equipment for the health center",
      category: "Health",
      status: "Planning",
      priority: "High",
      budget: "₱2,500,000",
      location: "Municipal Health Center",
      startDate: "2025-03-05",
      endDate: "2025-05-04",
      assignedTo: "HealthTech Solutions Inc.",
      progress: 10
    },
    {
      id: "3",
      title: "Agricultural Extension Program",
      description: "Training and support program for local farmers to improve agricultural productivity",
      category: "Agriculture",
      status: "Active",
      priority: "Medium",
      budget: "₱1,200,000",
      location: "Various Farm Areas",
      startDate: "2025-02-15",
      endDate: "2025-12-15",
      assignedTo: "Agricultural Department",
      progress: 40
    }
  ]);

  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: "",
    description: "",
    category: "",
    status: "Planning",
    priority: "Medium",
    budget: "",
    location: "",
    startDate: "",
    endDate: "",
    assignedTo: "",
    progress: 0
  });

  const handleAddProject = async () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title!,
      description: newProject.description!,
      category: newProject.category || "General",
      status: newProject.status || "Planning",
      priority: newProject.priority || "Medium",
      budget: newProject.budget || "TBD",
      location: newProject.location || "TBD",
      startDate: newProject.startDate || "",
      endDate: newProject.endDate || "",
      assignedTo: newProject.assignedTo || "TBD",
      progress: newProject.progress || 0
    };

    setProjects(prev => [...prev, project]);

    // Send to Notion via Zapier if webhook is configured
    if (webhookUrl) {
      await sendToNotion(project, "Project Created");
    }

    // Reset form
    setNewProject({
      title: "",
      description: "",
      category: "",
      status: "Planning",
      priority: "Medium",
      budget: "",
      location: "",
      startDate: "",
      endDate: "",
      assignedTo: "",
      progress: 0
    });

    toast({
      title: "Success",
      description: "Project added successfully!",
    });
  };

  const updateProjectStatus = async (projectId: string, newStatus: string) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, status: newStatus }
          : project
      )
    );

    const project = projects.find(p => p.id === projectId);
    if (project && webhookUrl) {
      await sendToNotion({ ...project, status: newStatus }, "Status Updated");
    }

    toast({
      title: "Status Updated",
      description: `Project status changed to ${newStatus}`,
    });
  };

  const sendToNotion = async (project: Project, action: string) => {
    if (!webhookUrl) return;

    setIsLoading(true);
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          action,
          project: {
            title: project.title,
            description: project.description,
            category: project.category,
            status: project.status,
            priority: project.priority,
            budget: project.budget,
            location: project.location,
            startDate: project.startDate,
            endDate: project.endDate,
            assignedTo: project.assignedTo,
            progress: project.progress,
            municipality: "Municipality of Quezon, Bukidnon"
          },
          timestamp: new Date().toISOString(),
          source: "Municipal Project Tracking System"
        }),
      });

      toast({
        title: "Notion Updated",
        description: "Project information sent to Notion successfully",
      });
    } catch (error) {
      console.error("Error sending to Notion:", error);
      toast({
        title: "Error",
        description: "Failed to send to Notion. Please check your webhook URL.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800";
      case "in progress": return "bg-blue-100 text-blue-800";
      case "active": return "bg-blue-100 text-blue-800";
      case "planning": return "bg-yellow-100 text-yellow-800";
      case "on hold": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Helmet>
        <title>Project Tracking | Municipality of Quezon, Bukidnon</title>
        <meta name="description" content="Municipal project tracking and management system for the Municipality of Quezon, Bukidnon." />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background" id="main-content">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">Municipal Project Tracking</h1>
                <p className="text-muted-foreground">Monitor and manage municipal development projects</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowWebhookSetup(!showWebhookSetup)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Notion Setup
                </Button>
              </div>
            </div>

            {/* Notion Webhook Setup */}
            {showWebhookSetup && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Notion Integration Setup
                  </CardTitle>
                  <CardDescription>
                    Connect this tracking system to your Notion workspace via Zapier webhook
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="webhook-url">Zapier Webhook URL</Label>
                      <Input
                        id="webhook-url"
                        placeholder="https://hooks.zapier.com/hooks/catch/..."
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Create a Zapier webhook trigger and connect it to Notion to automatically sync project updates
                      </p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Setup Instructions:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm">
                        <li>Create a new Zap in Zapier</li>
                        <li>Choose "Webhooks by Zapier" as trigger</li>
                        <li>Select "Catch Hook" and copy the webhook URL</li>
                        <li>Choose "Notion" as action to create/update database entries</li>
                        <li>Paste the webhook URL above</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Add New Project */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={newProject.title || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter project title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={newProject.category || ""} onValueChange={(value) => setNewProject(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="Health">Health</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Tourism">Tourism</SelectItem>
                        <SelectItem value="Environment">Environment</SelectItem>
                        <SelectItem value="Social Services">Social Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={newProject.priority || "Medium"} onValueChange={(value) => setNewProject(prev => ({ ...prev, priority: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget</Label>
                    <Input
                      id="budget"
                      value={newProject.budget || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, budget: e.target.value }))}
                      placeholder="₱ 0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={newProject.location || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="Project location"
                    />
                  </div>

                  <div>
                    <Label htmlFor="assigned">Assigned To</Label>
                    <Input
                      id="assigned"
                      value={newProject.assignedTo || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, assignedTo: e.target.value }))}
                      placeholder="Contractor/Department"
                    />
                  </div>

                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={newProject.startDate || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, startDate: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={newProject.endDate || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, endDate: e.target.value }))}
                    />
                  </div>

                  <div className="md:col-span-2 lg:col-span-1">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={newProject.description || ""}
                      onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Project description"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={handleAddProject} disabled={isLoading}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Projects List */}
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Budget:</strong> {project.budget}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Location:</strong> {project.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Duration:</strong> {project.startDate} to {project.endDate}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Assigned:</strong> {project.assignedTo}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <Select 
                          value={project.status} 
                          onValueChange={(value) => updateProjectStatus(project.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Planning">Planning</SelectItem>
                            <SelectItem value="In Progress">In Progress</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="On Hold">On Hold</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
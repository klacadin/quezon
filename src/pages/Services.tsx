import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileText, 
  Briefcase, 
  Heart, 
  Download,
  Clock,
  MapPin,
  Phone,
  Users,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "business",
    title: "Business Permit & Licensing",
    description: "Complete business registration and permit services",
    icon: Briefcase,
    color: "bg-primary",
    requirements: [
      "DTI/SEC/CDA Registration",
      "Barangay Clearance",
      "Location Clearance",
      "Fire Safety Inspection Certificate",
      "Environmental Compliance Certificate"
    ],
    processingTime: "15-20 working days",
    fee: "Varies by business type"
  },
  {
    id: "civil",
    title: "Civil Registry Services", 
    description: "Birth, death, marriage certificates and related services",
    icon: FileText,
    color: "bg-accent",
    requirements: [
      "Valid ID of requestor",
      "Proof of relationship (if not direct)",
      "Payment of required fees",
      "Properly filled application form"
    ],
    processingTime: "1-3 working days",
    fee: "₱140 per copy"
  },
  {
    id: "building",
    title: "Building Permit",
    description: "Construction permits and building clearances",
    icon: Building2,
    color: "bg-success",
    requirements: [
      "Building plans (3 sets)",
      "Lot plan and title",
      "Structural analysis",
      "Electrical/Plumbing plans",
      "Environmental clearance"
    ],
    processingTime: "20-30 working days",
    fee: "Based on project cost"
  },
  {
    id: "social",
    title: "Social Assistance",
    description: "Social services and assistance programs",
    icon: Heart,
    color: "bg-warning",
    requirements: [
      "Barangay indigency certificate",
      "Medical certificate (if applicable)",
      "Valid ID",
      "Proof of residence",
      "Income statement"
    ],
    processingTime: "5-10 working days",
    fee: "Free"
  }
];

const forms = [
  {
    title: "Business Permit Application Form",
    description: "Complete application form for new business permits",
    category: "Business",
    fileType: "PDF"
  },
  {
    title: "Building Permit Application Checklist",
    description: "Requirements checklist for building permits",
    category: "Construction",
    fileType: "PDF"
  },
  {
    title: "Civil Registry Request Form",
    description: "Form for requesting civil documents",
    category: "Civil Registry",
    fileType: "PDF"
  },
  {
    title: "Social Assistance Application",
    description: "Application form for social assistance programs",
    category: "Social Services",
    fileType: "PDF"
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Municipal Services - Municipality of Quezon, Bukidnon</title>
        <meta name="description" content="Access comprehensive municipal services including business permits, civil registry, building permits, and social assistance programs in Quezon, Bukidnon." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
                  Citizen's Charter
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                  Municipal Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Your guide to efficient and accessible government services. We're committed to providing quality service with transparency and accountability.
                </p>
              </div>

              {/* Office Hours and Contact */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday<br />8:00 AM - 5:00 PM</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">Capitol Site, Quezon<br />Bukidnon 8707</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <p className="text-muted-foreground">(088) 123-4567<br />Emergency: 911 | MDRRMO: (088) 555-0123</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">Available Services</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={service.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-lg ${service.color}`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {service.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-foreground">Processing Time:</p>
                            <p className="text-muted-foreground">{service.processingTime}</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Fee:</p>
                            <p className="text-muted-foreground">{service.fee}</p>
                          </div>
                        </div>
                        
                        <Button className="w-full">
                          Apply for {service.title}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Forms and Downloads */}
          <section id="forms" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Forms & Downloads</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Download the required forms and documents to streamline your application process
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {forms.map((form, index) => (
                  <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <Badge variant="secondary">{form.fileType}</Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {form.title}
                      </CardTitle>
                      <CardDescription>{form.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {form.category}
                        </Badge>
                        <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
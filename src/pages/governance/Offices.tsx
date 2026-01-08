import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building, Users, Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Offices = () => {
  const offices = [
    {
      name: "Atty. Michael L. Cutor, CPA",
      position: "Municipal Administrator I",
      office: "Office of the Municipal Mayor",
      location: "2/F Executive Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Overall administrative operations", "Policy implementation", "Inter-departmental coordination"]
    },
    {
      name: "Queeny Pearl C. Vargas",
      position: "Executive Assistant II",
      office: "Office of the Municipal Mayor - MEMO",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["MEMO operations", "Administrative coordination", "Document management"]
    },
    {
      name: "Exel Therese G. Talaba",
      position: "Board Secretary IV/SBO-OIC",
      office: "Office of the Sangguniang Bayan",
      location: "Legislative Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Legislative documentation", "Session management", "Sangguniang Bayan support"]
    },
    {
      name: "Maria Aherma L. Baylomo, CPA",
      position: "Municipal Treasurer",
      office: "Municipal Treasurer's Office",
      location: "1/F Executive Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Financial management", "Revenue collection", "Budget execution"]
    },
    {
      name: "Ronald T. Ramao, MPA, REB, REA",
      position: "Assistant Municipal Assessor/MASSO-OIC",
      office: "Municipal Assessor's Office",
      location: "1/F Executive Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Property assessment", "Tax mapping", "Real property administration"]
    },
    {
      name: "Johnryan Anthony Q. Cabatac",
      position: "Assistant Municipal Accountant/Acting Municipal Accountant",
      office: "Municipal Accounting Office",
      location: "2/F Executive Building, Municipal Complex, Libertad",
      status: "Acting Department Head",
      responsibilities: ["Financial reporting", "Audit compliance", "Accounting systems"]
    },
    {
      name: "Philip R. Florenosos",
      position: "Budget Officer III/Acting Municipal Budget Officer",
      office: "Municipal Budget Office",
      location: "2/F Executive Building, Municipal Complex, Libertad",
      status: "Acting Department Head",
      responsibilities: ["Budget preparation", "Budget monitoring", "Financial planning"]
    },
    {
      name: "Jaireh James U. Pahalla, ME",
      position: "Planning Officer III/MPDO-OIC",
      office: "Municipal Planning and Development Office",
      location: "2/F Executive Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Development planning", "Project monitoring", "Statistical coordination"]
    },
    {
      name: "Annabelle A. Baluarte",
      position: "Registration Officer II/MCRO-OIC",
      office: "Municipal Civil Registrar's Office",
      location: "1/F Judiciary Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Civil registration", "Document issuance", "Records management"]
    },
    {
      name: "Rey D. Cubcuban",
      position: "Executive Assistant II/MPSO-OIC",
      office: "Municipal Public Safety Office",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Public safety coordination", "Emergency response", "Disaster management"]
    },
    {
      name: "Gary A. Galarrita",
      position: "Human Resource Management Officer III/HRMO-OIC",
      office: "Human Resource Management Office",
      location: "1/F Executive Building, Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Personnel management", "HR development", "Employee relations"]
    },
    {
      name: "Lea Paula P. Catalan-Densing, MD",
      position: "Municipal Health Officer/Chief of Hospital",
      office: "Municipal Health Office",
      location: "Quezon Health Center Infirmary, Blgy 4A, Poblacion",
      status: "Department Head",
      responsibilities: ["Public health programs", "Healthcare services", "Health policy implementation"]
    },
    {
      name: "Wena B. Pagayon, RSW",
      position: "Municipal Social Welfare and Development Officer I",
      office: "Municipal Social Welfare and Development Office",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Social services", "Welfare programs", "Community development"]
    },
    {
      name: "Roy N. Niones, CE",
      position: "Municipal Engineer",
      office: "Municipal Engineer's Office",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Infrastructure projects", "Construction supervision", "Public works"]
    },
    {
      name: "Roque S. Pepito, ABE",
      position: "Municipal Agriculturist",
      office: "Municipal Agriculture Office",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Agricultural extension", "Farming support", "Livelihood programs"]
    },
    {
      name: "Antonio M. Arcayera, CE, MGA",
      position: "Municipal Government Assistant Department Head I/MEMO-OIC",
      office: "Municipal Enterprise Management Office",
      location: "Quezon Public Terminal, P-2, Libertad",
      status: "Department Head",
      responsibilities: ["Enterprise management", "Business development", "Economic programs"]
    },
    {
      name: "Antonio M. Arcayera, CE, MGA",
      position: "Municipal Government Assistant Department Head I/MENRO-OIC",
      office: "Municipal Environment and Natural Resources Office",
      location: "Municipal Complex, Libertad",
      status: "Department Head",
      responsibilities: ["Environmental protection", "Natural resource management", "Forestry programs"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Municipal Offices - Municipal Government of Quezon, Bukidnon</title>
        <meta name="description" content="Directory of municipal offices and their heads in Quezon, Bukidnon. Find contact information and office locations for government services." />
        <meta name="keywords" content="municipal offices Quezon Bukidnon, government offices, department directory, local administration" />
        <link rel="canonical" href="/governance/offices" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Municipal Administration
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Municipal Offices
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Directory of offices and dedicated leaders serving the people of Quezon
              </p>
            </div>
          </div>
        </section>

        {/* Offices Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Municipal Office Directory</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional administrators and technical experts ensuring efficient delivery of municipal services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full w-20 h-20 flex items-center justify-center">
                      <User className="h-10 w-10 text-primary/60" />
                    </div>
                    <CardTitle className="text-lg text-primary text-center leading-tight">
                      {office.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{office.position}</p>
                    <Badge 
                      variant={office.status.includes("Department Head") || office.status === "Acting Department Head" ? "default" : "secondary"} 
                      className="mx-auto text-xs"
                    >
                      {office.status}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-primary" />
                          Office
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {office.office}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          Location
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {office.location}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1">
                          {office.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground">
                              • {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary text-center">
                    <Phone className="h-6 w-6" />
                    Contact Municipal Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">General Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>Municipal Hall: (088) 356-0130</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>info@quezonbukidnon.gov.ph</span>
                        </div>
                        <p className="text-muted-foreground">
                          Municipal Hall Complex, Poblacion, Quezon, Bukidnon
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                        <p><strong>Lunch Break:</strong> 12:00 PM - 1:00 PM</p>
                        <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM (Selected Services)</p>
                        <p className="text-muted-foreground">
                          Some offices may have extended hours for citizen services
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Offices;

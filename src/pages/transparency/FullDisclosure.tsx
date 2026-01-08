import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FullDisclosure = () => {
  const disclosureDocuments = [
    {
      title: "Annual Budget 2024",
      type: "Budget Document",
      date: "January 2024",
      size: "2.4 MB",
      description: "Complete annual budget allocation and expenditure plan"
    },
    {
      title: "Financial Statements Q4 2023",
      type: "Financial Report",
      date: "December 2023", 
      size: "1.8 MB",
      description: "Quarterly financial statements and balance sheet"
    },
    {
      title: "Procurement Plan 2024",
      type: "Procurement",
      date: "January 2024",
      size: "1.2 MB",
      description: "Annual procurement plan and bidding schedule"
    },
    {
      title: "Audit Report 2023",
      type: "Audit",
      date: "March 2024",
      size: "3.1 MB",
      description: "Commission on Audit findings and recommendations"
    },
    {
      title: "Revenue Collection Report",
      type: "Revenue",
      date: "Monthly Updates",
      size: "Various",
      description: "Monthly revenue collection performance and analysis"
    },
    {
      title: "Development Projects Status",
      type: "Projects",
      date: "Quarterly",
      size: "Various",
      description: "Progress reports on infrastructure and development projects"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Full Disclosure - Transparency | Municipality of Quezon, Bukidnon</title>
        <meta name="description" content="Access full disclosure documents, financial reports, budget information, and transparency documents from the Municipality of Quezon, Bukidnon." />
        <meta name="keywords" content="full disclosure, transparency, financial reports, budget, audit, Quezon Bukidnon" />
        <link rel="canonical" href="/transparency/full-disclosure" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Government Transparency
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Full Disclosure
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Promoting transparency and accountability through open access to public information and financial documents
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Commitment to Transparency</h2>
              <p className="text-lg text-muted-foreground">
                In accordance with the Full Disclosure Policy and other transparency initiatives, 
                the Municipality of Quezon provides public access to key financial documents, 
                budget information, and government transactions.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disclosureDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {doc.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {doc.description}
                      </p>
                      
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{doc.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-3 w-3 mr-2" />
                          View
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Information Box */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <FileText className="h-6 w-6" />
                    Document Request Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">How to Request Documents</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Visit the Municipal Hall during office hours</li>
                        <li>• Submit a written request with valid ID</li>
                        <li>• Specify the exact documents needed</li>
                        <li>• Allow 3-5 working days for processing</li>
                        <li>• Some documents may require minimal fees</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Office:</strong> Municipal Administrator's Office</p>
                        <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
                        <p><strong>Phone:</strong> (088) 123-4567</p>
                        <p><strong>Email:</strong> transparency@quezonbukidnon.gov.ph</p>
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

export default FullDisclosure;
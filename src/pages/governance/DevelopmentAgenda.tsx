import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Heart, GraduationCap, Play, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DevelopmentAgenda = () => {
  const pillars = [
    {
      title: "Kalinaw",
      subtitle: "Peace and Order",
      icon: Shield,
      color: "bg-blue-600",
      description: "Comprehensive peace and order programs ensuring the safety and security of all residents",
      programs: [
        "Anti-insurgency and anti-crime efforts",
        "Support and coordination with army and police",
        "Coordination with firefighters and emergency services",
        "Creation of Municipal Peace and Security Office (MPSO)",
        "Formation of Barangay Justice System",
        "Community-based security programs"
      ],
      videoTitle: "Kalinaw: Peace and Order Initiatives",
      videoDescription: "Watch how we're building a safer Quezon through comprehensive peace and security programs"
    },
    {
      title: "Kahigayunan",
      subtitle: "Economic Growth & Investment",
      icon: TrendingUp,
      color: "bg-green-600",
      description: "Creating opportunities for prosperity through infrastructure development, education, and livelihood programs",
      programs: [
        "Infrastructure development and road improvements (Dalan)",
        "Educational facility upgrades (Skwelahan)",
        "Livelihood skills training programs",
        "Market development and trade promotion",
        "Agricultural modernization initiatives",
        "Tourism development projects"
      ],
      videos: [
        { id: "kLFkDRX5CHE", title: "Dalan - Road Infrastructure" },
        { id: "JMbQtgbdICI", title: "Skwelahan - Education Programs" },
        { id: "2-Iw54cLz3s", title: "Livelihood Skills Training" }
      ],
      channelUrl: "https://www.youtube.com/@municipalityofquezonbukidn9015"
    },
    {
      title: "Kahimsog",
      subtitle: "Health and Wellness",
      icon: Heart,
      color: "bg-red-600",
      description: "Promoting community health through comprehensive healthcare services and nutrition programs",
      programs: [
        "Quezon Health Care Initiative (QHCI)",
        "Comprehensive nutrition programs",
        "Pito-Puto nutrition intervention",
        "Maternal and child health services",
        "Disease prevention and control",
        "Mental health and wellness programs"
      ],
      videoTitle: "Kahimsog: Health for All",
      videoDescription: "Comprehensive health and nutrition programs ensuring the wellbeing of every resident"
    },
    {
      title: "Kalipay",
      subtitle: "Youth, Sports & Culture",
      icon: GraduationCap,
      color: "bg-yellow-600",
      description: "Nurturing the next generation through civic unity, pride, cultural events, and sports development",
      programs: [
        "Sunggod Teh Kamanga Festival",
        "October cultural events and celebrations",
        "Araw ng Quezon anniversary celebration",
        "Summer Sports Festival (SSF)",
        "Christmas Lights Display",
        "Youth leadership development programs"
      ],
      locations: [
        "Civic Arena - Major events and sports",
        "Hawkers' Hub - Community gatherings",
        "Freedom Park Complex - Cultural activities"
      ],
      videoTitle: "Kalipay: Celebrating Our Culture",
      videoDescription: "Cultural festivals, sports events, and youth programs building community pride and unity"
    }
  ];

  return (
    <>
      <Helmet>
        <title>4K Development Agenda - Quezon, Bukidnon</title>
        <meta name="description" content="Learn about Quezon's 4K Development Agenda: Kalinaw (Peace), Kahigayunan (Opportunities), Kahimsog (Health), and Kalipay (Culture & Youth)." />
        <meta name="keywords" content="4K Development Agenda, Kalinaw, Kahigayunan, Kahimsog, Kalipay, Quezon Bukidnon development" />
        <link rel="canonical" href="/governance/development-agenda" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Municipal Development Framework
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                4K Development Agenda
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Kalinaw • Kahigayunan • Kahimsog • Kalipay
              </p>
              <p className="text-lg opacity-75 max-w-3xl mx-auto">
                Our comprehensive development framework focusing on Peace & Order, Economic Growth, 
                Health & Wellness, and Youth Development for a progressive Quezon
              </p>
            </div>
          </div>
        </section>

        {/* Development Pillars */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="max-w-6xl mx-auto">
                    <Card className="overflow-hidden">
                      <div className={`${pillar.color} text-white p-8`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-white/20 rounded-lg">
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{pillar.title}</h2>
                            <p className="text-xl opacity-90">{pillar.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-lg opacity-90 max-w-3xl">
                          {pillar.description}
                        </p>
                      </div>
                      
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-semibold mb-6">Key Programs & Initiatives</h3>
                            <div className="space-y-3">
                              {pillar.programs.map((program, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{program}</span>
                                </div>
                              ))}
                            </div>
                            
                            {pillar.locations && (
                              <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-3">Key Venues</h4>
                                <div className="space-y-2">
                                  {pillar.locations.map((location, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-sm text-muted-foreground">{location}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <h3 className="text-2xl font-semibold mb-6">Program Showcase</h3>
                            {pillar.videos ? (
                              <div className="space-y-4">
                                {pillar.videos.map((video, vIdx) => (
                                  <div key={vIdx} className="aspect-video rounded-lg overflow-hidden">
                                    <iframe
                                      src={`https://www.youtube.com/embed/${video.id}`}
                                      title={video.title}
                                      className="w-full h-full"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                ))}
                                {pillar.channelUrl && (
                                  <a href={pillar.channelUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="sm" className="w-full">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      Watch More on YouTube
                                    </Button>
                                  </a>
                                )}
                              </div>
                            ) : (
                              <Card className="bg-gradient-to-br from-muted/50 to-muted/30">
                                <CardContent className="p-6">
                                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                                    <div className="text-center text-muted-foreground">
                                      <Play className="h-16 w-16 mx-auto mb-4 text-primary/60" />
                                      <p className="font-medium">Coming Soon</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building a Better Future Together
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                The 4K Development Agenda represents our commitment to holistic development. 
                Join us in building a prosperous, peaceful, healthy, and culturally vibrant Quezon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Learn More About Our Programs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DevelopmentAgenda;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building, Landmark, Award, ArrowRight, Download } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("town-profile");

  useEffect(() => {
    // Handle hash navigation for tabs
    if (location.hash) {
      const hash = location.hash.substring(1);
      if (["town-profile", "history", "municipal-seal"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>About Quezon, Bukidnon - History, Profile & Municipal Information</title>
        <meta name="description" content="Learn about Quezon, Bukidnon - Gateway to Adventure & Agricultural Excellence. Discover our rich history, Kiokong White Rock Wall, diverse agriculture, and development agenda." />
        <meta name="keywords" content="Quezon Bukidnon, municipality history, Kiokong White Rock Wall, tourism attractions, agricultural excellence, development agenda" />
        <link rel="canonical" href="/about" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-municipal-blue to-municipal-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-municipal-gold text-municipal-navy">
                Gateway to Adventure & Agricultural Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Quezon, Bukidnon
              </h1>
              <p className="text-xl text-municipal-white/90 max-w-2xl mx-auto">
                Discover the rich heritage, vibrant culture, and promising future of our beloved municipality
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="town-profile" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Town Profile
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <Landmark className="h-4 w-4" />
                  History
                </TabsTrigger>
                <TabsTrigger value="municipal-seal" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Municipal Seal
                </TabsTrigger>
              </TabsList>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Landmark className="h-6 w-6" />
                      A Rich Historical Heritage
                    </CardTitle>
                    <CardDescription>
                      The story of Quezon, Bukidnon spans decades of resilience, growth, and community spirit
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Foundation & Early Years</h3>
                        <p className="text-muted-foreground mb-4">
                          Prior to the arrival of settlers, Quezon was a vast landscape of forests and grasslands inhabited by the nomadic Manobo tribes. 
                          They lived along riverbanks and forest edges, sustaining themselves through hunting, gathering, and bartering forest products. 
                          By the early 1900s, settlers began to arrive, taking advantage of the wide grasslands to raise cattle.
                        </p>
                        <p className="text-muted-foreground">
                          The area was officially organized into a municipality through Executive Order No. 199, signed by President Diosdado Macapagal on November 18, 1965, 
                          establishing the Municipality of Pulangi. On June 18, 1966, the municipality was officially renamed Quezon through Republic Act No. 4802.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Agricultural Development</h3>
                        <p className="text-muted-foreground mb-4">
                          The introduction of diverse agricultural cultivation transformed Quezon into an economic powerhouse. 
                          The municipality's fertile soil, favorable climate, and stunning natural attractions like the 
                          Kiokong White Rock Wall have made it a destination for both agricultural excellence and tourism.
                        </p>
                        <p className="text-muted-foreground">
                          Today, Quezon continues to be a major contributor to the Philippines' sugar industry 
                          while diversifying into other agricultural products and economic sectors.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3">Historical Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">1965</span>
                          <span>Municipality of Pulangi established (Executive Order No. 199)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">1966</span>
                          <span>Renamed Quezon (Republic Act No. 4802)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">1974</span>
                          <span>Bukidnon Sugar Milling Company (BUSCO) established</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">2000s</span>
                          <span>Pineapple industry flourishes (DAVCO, Del Monte Philippines)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">2016-Present</span>
                          <span>Peace and development initiatives under ELCAC Program</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Town Profile Tab */}
              <TabsContent value="town-profile" className="space-y-8">
                {/* Map Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="h-6 w-6" />
                      Geographic Location
                    </CardTitle>
                    <CardDescription>
                      Strategic location with key entry points and coordinates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Entry Points</h3>
                        <h4 className="font-semibold mb-3">Main Entry Points</h4>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <Badge variant="default" className="mt-1">West</Badge>
                            <span className="text-sm">San Jose via Brgy. Camp 1, Maramag (Bukidnon-Davao Road)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge variant="default" className="mt-1">North</Badge>
                            <span className="text-sm">Butong via Dologon, Maramag (Dologon-Busco-Quezon Road)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge variant="default" className="mt-1">South</Badge>
                            <span className="text-sm">Palacapao via Kipolot (Bukidnon-Davao Road)</span>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3">Other Entry Points</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">Northeast</Badge>
                            <span className="text-sm">Paitan via Dagat-Kidavao, Valencia City</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">East</Badge>
                            <span className="text-sm">Brgy. Sta. Felomina via Kalagangan, San Fernando</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">Southwest</Badge>
                            <span className="text-sm">Kiburiao via San Lorenzo, Kitaotao</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Interactive Map</h3>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                            <p className="font-medium">Map with embedded coordinates</p>
                            <p className="text-sm">Geographic coordinates and boundaries</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Users className="h-6 w-6" />
                        Demographics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Total Population</span>
                        <span className="text-lg font-bold text-primary">114,152</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Number of Barangays</span>
                        <span className="text-lg font-bold text-primary">31</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Land Area</span>
                        <span className="text-lg font-bold text-primary">711.28 km²</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Income Class</span>
                        <span className="text-lg font-bold text-primary">1st Class</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Annual Revenue</span>
                        <span className="text-lg font-bold text-primary">₱625.2M</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Building className="h-6 w-6" />
                        Economic Indicators
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Primary Industry</span>
                        <span className="text-lg font-bold text-primary">Agriculture</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Sugar Production</span>
                        <span className="text-lg font-bold text-primary">45% of Bukidnon</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Major Crops</span>
                        <span className="text-lg font-bold text-primary">Sugar, Rice, Corn</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="font-medium">Literacy Rate</span>
                        <span className="text-lg font-bold text-primary">96.2%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Overview</CardTitle>
                    <CardDescription>
                      Strategic location and natural resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Southern Bukidnon. 7°35′-7°50′N, 125°00′-125°20′E. 145km from Davao City, 75km from Malaybalay City
                        </p>
                      </div>
                      <div className="text-center">
                        <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">Climate</h4>
                        <p className="text-sm text-muted-foreground">
                          Type IV climate - no distinct dry and wet seasons, ideal for agriculture
                        </p>
                      </div>
                      <div className="text-center">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">Boundaries</h4>
                        <p className="text-sm text-muted-foreground">
                          North: Valencia City | East: San Fernando | South: Kitaotao | West: Maramag
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Municipal Seal & Values Tab */}
              <TabsContent value="municipal-seal" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Award className="h-6 w-6" />
                        Municipal Seal
                      </CardTitle>
                      <CardDescription>
                        Symbol of our identity and aspirations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <img 
                          src="/lovable-uploads/47f5d21c-299d-4311-9f15-583dfc7476ee.png" 
                          alt="Official Municipal Seal of Quezon, Bukidnon"
                          className="h-40 w-40 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">Official Municipal Seal</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Based on Sangguniang Bayan Resolution No. 62, Series of 1989
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold">Official Description</h4>
                        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                          <p>
                            <strong>The green mountains, valleys and plateaus</strong> represent the terrain of the municipality. 
                            The spattering of red, such as the truck and the frame of the head of a deer, is a symbol of the 
                            courage of the people in meeting the challenges of everyday life common in a frontier municipality such as Quezon.
                          </p>
                          <p>
                            <strong>The major products</strong> such as rice, corn, sugarcane, cattle and logging industry could also be seen. 
                            The flock of birds at the peak of the mountain represents the people constantly migrating to Quezon to share 
                            the abundant wealth that are hidden in its womb.
                          </p>
                          <p>
                            <strong>The framed deer's head</strong> symbolizes the presence of the Bukidnon's cultural community – and the 
                            round frame symbolizes the desire of the people to integrate with the tribe.
                          </p>
                          <p>
                            <strong>The narrow winding road</strong> is unending as the wealth and challenges of this Municipality is unending. 
                            It winds around the mountains and finally, vision fails – but the road continues through eternity. This symbolizes 
                            the unending potentials of Quezon waiting to be transformed into economic reality.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Municipal Values</CardTitle>
                      <CardDescription>
                        Core principles that guide our community
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Vision</h4>
                        <p className="text-muted-foreground">
                          "A progressive, self-reliant, and peaceful municipality with God-fearing, 
                          disciplined citizens enjoying a sustainable quality of life through good governance."
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Mission</h4>
                        <p className="text-muted-foreground">
                          "To provide quality services through innovative programs that promote economic growth, 
                          environmental sustainability, and social development for all Quezonians."
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Core Values</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <Badge variant="outline" className="justify-center">Integrity</Badge>
                          <Badge variant="outline" className="justify-center">Excellence</Badge>
                          <Badge variant="outline" className="justify-center">Transparency</Badge>
                          <Badge variant="outline" className="justify-center">Accountability</Badge>
                          <Badge variant="outline" className="justify-center">Unity</Badge>
                          <Badge variant="outline" className="justify-center">Progress</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Development Agenda Tab */}
              <TabsContent value="agenda" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="h-6 w-6" />
                      Municipal Development Agenda 2022-2025
                    </CardTitle>
                    <CardDescription>
                      Strategic roadmap for sustainable growth and development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Development Theme</h3>
                        <p className="text-muted-foreground mb-4">
                          "Quezon, Bukidnon: Echoes of Resilience | Transcending Boundaries"
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Our development agenda focuses on building a resilient, sustainable, 
                          and progressive municipality that serves as a model for rural development in Mindanao.
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <Button className="bg-municipal-blue hover:bg-municipal-navy">
                          <Download className="h-4 w-4 mr-2" />
                          Download Full Agenda
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card className="border-l-4 border-l-municipal-blue">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Kalinaw</CardTitle>
                          <CardDescription>Peace & Order</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Enhanced security systems</li>
                            <li>• Community policing</li>
                            <li>• Drug prevention programs</li>
                            <li>• Disaster preparedness</li>
                          </ul>
                          <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto">
                            Learn more <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-municipal-gold">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Kahigayunan</CardTitle>
                          <CardDescription>Economic Growth</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Agricultural modernization</li>
                            <li>• Investment promotion</li>
                            <li>• MSME development</li>
                            <li>• Infrastructure projects</li>
                          </ul>
                          <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto">
                            Learn more <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-municipal-red">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Kahimsog</CardTitle>
                          <CardDescription>Health & Wellness</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Healthcare facility upgrades</li>
                            <li>• Public health programs</li>
                            <li>• Nutrition initiatives</li>
                            <li>• Mental health support</li>
                          </ul>
                          <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto">
                            Learn more <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Kalipay</CardTitle>
                          <CardDescription>Youth & Culture</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Youth development programs</li>
                            <li>• Cultural preservation</li>
                            <li>• Sports facilities</li>
                            <li>• Arts & education</li>
                          </ul>
                          <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto">
                            Learn more <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
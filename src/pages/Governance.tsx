import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Eye, 
  Target, 
  Award, 
  Building2, 
  Calendar,
  Shield,
  Heart,
  TrendingUp,
  GraduationCap,
  Play,
  ExternalLink,
  User,
  MapPin
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import mayorPabloLorenzo from "@/assets/mayor-pablo-lorenzo.png";
import vmJosephDurotan from "@/assets/vm-joseph-durotan.png";
import sbClydeBaguio from "@/assets/sb-clyde-baguio.png";
import sbArnoldPastor from "@/assets/sb-arnold-pastor.png";
import sbTeresitaLeonardo from "@/assets/sb-teresita-leonardo.png";
import sbNiloBardon from "@/assets/sb-nilo-bardon.png";
import sbFloridoPerpetua from "@/assets/sb-florido-perpetua.png";
import sbReynanteYoro from "@/assets/sb-reynante-yoro.png";
import sbLezeDensing from "@/assets/sb-leze-densing.png";
import sbMyrnaRepalda from "@/assets/sb-myrna-repalda.png";

const Governance = () => {
  return (
    <>
      <Helmet>
        <title>Governance - Municipality of Quezon, Bukidnon</title>
        <meta name="description" content="Learn about the governance structure, mission & vision, mayor, sangguniang bayan, department heads, and development agenda of Quezon, Bukidnon." />
        <meta name="keywords" content="governance, mayor, sangguniang bayan, development agenda, Kalinaw, Kahigayunan, Kahimsog, Kalipay, Quezon Bukidnon" />
        <link rel="canonical" href="/governance" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Good Governance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Governance
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Committed to transparent, accountable, and participatory governance for all Quezonians
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="mission" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Mission & Vision
                </TabsTrigger>
                <TabsTrigger value="agenda" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Development Agenda
                </TabsTrigger>
                <TabsTrigger value="mayor" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  The Mayor
                </TabsTrigger>
                <TabsTrigger value="council" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Sangguniang Bayan
                </TabsTrigger>
                <TabsTrigger value="departments" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Offices
                </TabsTrigger>
              </TabsList>

              {/* Mission & Vision Tab */}
              <TabsContent value="mission" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Target className="h-6 w-6" />
                      Mission and Vision
                    </CardTitle>
                    <CardDescription>
                      Our guiding principles and aspirations for the municipality
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center p-6 bg-secondary/50 rounded-lg">
                        <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We envision Quezon, Bukidnon as a peaceful and prosperous community where residents are healthy, happy, 
                          and have boundless opportunities for social and economic development within a well-nurtured ecological 
                          environment; giving its youth the competitive advantage to be better prepared for life; a modern, lively, 
                          and also beautiful, pleasant place we can all be proud to call our home.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-secondary/50 rounded-lg">
                        <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                        <div className="text-left text-muted-foreground leading-relaxed text-sm">
                          <p className="mb-2 font-semibold">We are committed to:</p>
                          <ul className="space-y-1">
                            <li>• Have competent and dedicated civil servants rendering exceptional, effective, timely, and streamlined public services</li>
                            <li>• Take the necessary measures to ensure peace and order</li>
                            <li>• Provide the vital, modern and resilient infrastructure and access to public facilities</li>
                            <li>• Foster a pro-enterprise atmosphere that attracts investments, encourages businesses, and generates jobs</li>
                            <li>• Bolster agriculture for food security and sustainable economic development</li>
                            <li>• Assure holistic development of children through high-quality and accessible education, essential nutrition programs, sports and physical development, and skills training</li>
                            <li>• Deliver a comprehensive and reliable healthcare system for all</li>
                            <li>• Conserve our environment and sustainably utilize natural resources</li>
                            <li>• Offer avenues for leisure, recreation and tourism for the enjoyment of everyone</li>
                            <li>• Nurture our people's diverse cultures and heritage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-4">Learn More About Our Governance</h4>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/governance/mayor">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            The Mayor
                          </Button>
                        </Link>
                        <Link to="/governance/sangguniang-bayan">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Sangguniang Bayan
                          </Button>
                        </Link>
                        <Link to="/governance/offices">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Municipal Offices
                          </Button>
                        </Link>
                        <Link to="/governance/development-agenda">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Development Agenda
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* The Mayor Tab */}
              <TabsContent value="mayor" className="space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Users className="h-6 w-6" />
                      The Mayor
                    </CardTitle>
                    <CardDescription>
                      Leadership and vision for Quezon, Bukidnon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="text-center">
                        <img 
                          src={mayorPabloLorenzo} 
                          alt="Mayor Pablo M. Lorenzo III - Municipal Mayor of Quezon Bukidnon"
                          className="w-64 h-80 object-cover rounded-lg mx-auto mb-4 ring-4 ring-primary/20"
                          loading="lazy"
                        />
                        <p className="text-sm text-muted-foreground">Hon. Pablo M. Lorenzo III</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Hon. Pablo M. Lorenzo III</h3>
                        <p className="text-lg text-muted-foreground mb-2">"Mayor Poling"</p>
                        <Badge variant="outline" className="mb-4">Current Term: 2025-2028 (Final Term)</Badge>
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            Mayor Pablo M. Lorenzo III, known to everyone as "Mayor Poling," has spent years working to make Quezon 
                            a better place for its people. He believes in building peace, creating opportunities, and helping families thrive.
                          </p>
                          <p>
                            Before entering politics, he founded the Associated Bukidnon Sugarcane Farmers, Inc. (ABSFI), where he 
                            continues to serve as Chairman Emeritus. Through ABSFI, he's helped countless sugarcane farmers across 
                            Southern Bukidnon improve their livelihoods and strengthen their communities.
                          </p>
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">4K Development Agenda</h4>
                            <p className="text-sm">Kalinaw • Kahigayunan • Kahimsog • Kalipay</p>
                          </div>
                        </div>
                        <Link to="/governance/mayor">
                          <Button className="mt-6">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Full Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Sangguniang Bayan Tab */}
              <TabsContent value="council" className="space-y-8">
                <div className="space-y-8">
                  {/* Vice Mayor Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Building2 className="h-6 w-6" />
                        Vice Mayor & Presiding Officer
                      </CardTitle>
                      <CardDescription>
                        Presiding officer of the 16th Sangguniang Bayan
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="text-center">
                          <img 
                            src={vmJosephDurotan} 
                            alt="Vice Mayor Joseph T. Durotan Sr. - Vice Mayor of Quezon Bukidnon"
                            className="w-48 h-60 object-cover rounded-lg mx-auto mb-4 ring-4 ring-primary/20"
                            loading="lazy"
                          />
                          <p className="text-sm text-muted-foreground">Hon. Joseph T. Durotan Sr.</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Hon. Joseph T. Durotan Sr.</h3>
                          <Badge variant="outline" className="mb-4">Current Term: 2025-2028</Badge>
                          <div className="space-y-3 text-muted-foreground text-sm">
                            <p>
                              Vice Mayor Joseph Durotan Sr. began his political career in 1994 as the Treasurer of Barangay Minsalirac. 
                              He later served as Barangay Captain from 1992 to 2002 and was elected as President of the Association of 
                              Barangay Councils (ABC).
                            </p>
                            <p>
                              He holds a degree in Aircraft Mechanical Engineering from the Cebu Aeronautical Technical 
                              School and a degree in Public Administration from Bukidnon State University.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sanggunian Members Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Elected Councilors</CardTitle>
                      <CardDescription>
                        Council members of the 16th Sangguniang Bayan
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          { name: "Clyde Joseph A. Baguio, CPA", image: sbClydeBaguio },
                          { name: "Arnold L. Pastor, MD", image: sbArnoldPastor },
                          { name: "Teresita B. Leonardo, DMD", image: sbTeresitaLeonardo },
                          { name: "Nilo P. Bardon", image: sbNiloBardon },
                          { name: "Florido E. Perpetua", image: sbFloridoPerpetua },
                          { name: "Reynante Nelson Y. Yoro, GE", image: sbReynanteYoro },
                          { name: "Leze John Adam A. Densing, EE", image: sbLezeDensing },
                          { name: "Myrna D. Repalda", image: sbMyrnaRepalda }
                        ].map((member, index) => (
                          <div key={index} className="text-center">
                            <img 
                              src={member.image} 
                              alt={`Councilor ${member.name}`}
                              className="w-24 h-28 object-cover rounded-lg mx-auto mb-3 ring-2 ring-primary/20"
                              loading="lazy"
                            />
                            <h4 className="font-semibold text-sm leading-tight">{member.name}</h4>
                            <p className="text-xs text-muted-foreground">Councilor</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-6">
                        <Link to="/governance/sangguniang-bayan">
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View All Members & Committees
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Department Heads Tab */}
              <TabsContent value="departments" className="space-y-8">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Users className="h-6 w-6" />
                      Municipal Trial Court
                    </CardTitle>
                    <CardDescription>
                      Presiding Judge of the Municipal Trial Court
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Hon. Krystine B. Geronimo-Peloton</h3>
                      <p className="text-sm text-muted-foreground mb-4">MTC Presiding Judge</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Appointed in March 2020, Judge Krystine B. Geronimo-Peloton is a licensed attorney with a Bachelor of Science 
                        in Accountancy and a Law Degree from Ateneo de Davao University. She passed the Bar Examination in 2009 and 
                        began her legal career at the Public Attorney's Office (PAO), serving in Panabo City and the municipalities of 
                        Carmen, Sto. Tomas, and Braulio E. Dujali in Davao del Norte.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Award className="h-6 w-6" />
                      Municipal Office Directory
                    </CardTitle>
                    <CardDescription>
                      Department heads and officers serving the municipality
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: "Atty. Michael L. Cutor, CPA", position: "Municipal Administrator I", office: "Office of the Municipal Mayor" },
                        { name: "Queeny Pearl C. Vargas", position: "Executive Assistant II", office: "MEMO" },
                        { name: "Maria Aherma L. Baylomo, CPA", position: "Municipal Treasurer", office: "Treasurer's Office" },
                        { name: "Ronald T. Ramao, MPA, REB, REA", position: "MASSO-OIC", office: "Assessor's Office" },
                        { name: "Jaireh James U. Pahalla, ME", position: "MPDO-OIC", office: "Planning Office" },
                        { name: "Lea Paula P. Catalan-Densing, MD", position: "Municipal Health Officer", office: "Health Office" },
                        { name: "Wena B. Pagayon, RSW", position: "MSWDO I", office: "Social Welfare Office" },
                        { name: "Roy N. Niones, CE", position: "Municipal Engineer", office: "Engineer's Office" },
                        { name: "Roque S. Pepito, ABE", position: "Municipal Agriculturist", office: "Agriculture Office" }
                      ].map((official, index) => (
                        <div key={index} className="p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{official.name}</h4>
                              <p className="text-xs text-muted-foreground">{official.position}</p>
                              <p className="text-xs text-primary/80">{official.office}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-6">
                      <Link to="/governance/offices">
                        <Button variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View All Offices & Contact Info
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Development Agenda Tab */}
              <TabsContent value="agenda" className="space-y-8">
                <div className="space-y-8">
                  {/* Kalinaw Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Shield className="h-6 w-6" />
                        Kalinaw (Peace and Order)
                      </CardTitle>
                      <CardDescription>
                        Anti-insurgency and anti-crime efforts, coordination with security forces
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Peace and Order initiatives including anti-insurgency and anti-crime efforts, 
                          support and coordination with army, police, and firemen, creation of Municipal 
                          Public Safety Office (MPSO), and formation of Barangay Justice System.
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                          <Play className="h-8 w-8 text-primary" />
                          <div>
                            <h4 className="font-semibold">Embed YouTube Video (Kalinaw)</h4>
                            <p className="text-sm text-muted-foreground">Video content about peace and order programs</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kahigayunan Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <TrendingUp className="h-6 w-6" />
                        Kahigayunan (Opportunities)
                      </CardTitle>
                      <CardDescription>
                        Infrastructure, education, livelihood skills training, and market development
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Opportunities through infrastructure development, education enhancement, 
                          livelihood skills training programs, and market development initiatives.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src="https://www.youtube.com/embed/kLFkDRX5CHE"
                              title="Dalan - Road Infrastructure"
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src="https://www.youtube.com/embed/JMbQtgbdICI"
                              title="Skwelahan - Education Programs"
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src="https://www.youtube.com/embed/2-Iw54cLz3s"
                              title="Livelihood Skills Training"
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        <a href="https://www.youtube.com/@municipalityofquezonbukidn9015" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Watch More on YouTube
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kahimsog Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Heart className="h-6 w-6" />
                        Kahimsog (Health)
                      </CardTitle>
                      <CardDescription>
                        Health care initiatives including QHCI, nutrition, and pito-puto programs
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Health initiatives including Quezon Health Care Initiative (QHCI), 
                          nutrition programs, and pito-puto (feeding) programs for community wellness.
                          Our Annual Nutrition Caravan (ANQ 2025) covers all barangays from January to February, 
                          providing health screenings, nutritional education, and supplement distribution.
                        </p>
                        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                          <h5 className="font-semibold text-accent mb-2">ANQ 2025 Nutrition Caravan</h5>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>• January 15-31: Barangay Coverage</p>
                            <p>• February 1-15: Urban Areas</p>
                            <p>• Health Screenings & Nutritional Education</p>
                            <p>• Nutritional Supplements Distribution</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                          <Play className="h-8 w-8 text-primary" />
                          <div>
                            <h4 className="font-semibold">Embed YouTube Video (Kahimsog)</h4>
                            <p className="text-sm text-muted-foreground">Video content about health programs</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kalipay Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <GraduationCap className="h-6 w-6" />
                        Kalipay (Joy and Unity)
                      </CardTitle>
                      <CardDescription>
                        Civic unity, pride, and cultural events at key municipal venues
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Themes of civic unity and pride through various events including Sunggod Teh Kamanga, 
                          October events, Araw ng Quezon, Summer Sports Festival (SSF), and Christmas Lights Display. 
                          Key locations include Civic Arena, Hawkers' Hub, and Freedom Park Complex.
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                          <Play className="h-8 w-8 text-primary" />
                          <div>
                            <h4 className="font-semibold">Embed YouTube Video (Kalipay)</h4>
                            <p className="text-sm text-muted-foreground">Video content about cultural events and unity</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Governance;
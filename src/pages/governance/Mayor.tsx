import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Calendar, Award, Heart, Shield, TrendingUp, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import mayorPabloLorenzo from "@/assets/mayor-pablo-lorenzo.png";

const Mayor = () => {
  return (
    <>
      <Helmet>
        <title>Mayor Pablo M. Lorenzo III - Municipal Government of Quezon, Bukidnon</title>
        <meta name="description" content="Meet Mayor Pablo M. Lorenzo III of Quezon, Bukidnon. Learn about his leadership, 4K Development Agenda, and commitment to transforming Quezon into a progressive municipality." />
        <meta name="keywords" content="Mayor Pablo Lorenzo III, Quezon Bukidnon, municipal leadership, 4K agenda, Kalinaw, Kahigayunan, Kahimsog, Kalipay" />
        <link rel="canonical" href="/governance/mayor" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Municipal Leadership
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Mayor
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Leading Quezon towards progress through the 4K Development Agenda
              </p>
            </div>
          </div>
        </section>

        {/* Mayor Profile */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Mayor Photo */}
                  <div className="aspect-square lg:aspect-auto bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                    <img 
                      src={mayorPabloLorenzo} 
                      alt="Mayor Pablo M. Lorenzo III - Municipal Mayor of Quezon Bukidnon"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Mayor Bio */}
                  <CardContent className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Hon. Pablo M. Lorenzo III</h2>
                        <p className="text-lg text-muted-foreground">"Mayor Poling"</p>
                        <p className="text-lg text-muted-foreground mb-2">Municipal Mayor</p>
                        <Badge variant="outline" className="mt-2">
                          Current Term: 2025-2028 (Final Term)
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <Heart className="h-5 w-5 text-primary" />
                            Biography
                          </h3>
                          <div className="text-muted-foreground leading-relaxed space-y-3">
                            <p>
                              Mayor Pablo M. Lorenzo III, known to everyone as "Mayor Poling," has spent years working to make Quezon 
                              a better place for its people. He believes in building peace, creating opportunities, and helping families thrive.
                            </p>
                            <p>
                              Before entering politics, he founded the Associated Bukidnon Sugarcane Farmers, Inc. (ABSFI), where he 
                              continues to serve as Chairman Emeritus. Through ABSFI, he's helped countless sugarcane farmers across 
                              Southern Bukidnon improve their livelihoods and strengthen their communities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Mayor Achievements */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Mayor of Quezon (2019-Present)</CardTitle>
                  <p className="text-muted-foreground">Leading with the 4K Core Agenda: Kalinaw • Kahigayunan • Kahimsog • Kalipay</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-600 text-white rounded-lg">
                          <Shield className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Kalinaw (Peace)</h3>
                          <p className="text-sm text-muted-foreground">Foundation of development</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Established Municipal Public Safety Office (MPSO)</li>
                        <li>• Strengthened partnerships with PNP and BFP</li>
                        <li>• Aligned with EO 70 and NTF-ELCAC initiatives</li>
                        <li>• <strong>Focus Crimes decreased from 48 (2018) to 22 (2024)</strong></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-600 text-white rounded-lg">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Kahigayunan (Opportunity)</h3>
                          <p className="text-sm text-muted-foreground">Creating pathways to prosperity</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>163 kilometers of roads cemented</strong> (5-year period)</li>
                        <li>• <strong>Expanded from 6 to 20 high schools</strong></li>
                        <li>• <strong>Businesses grew from 837 (2018) to 1,886 (2025)</strong> - 125% increase</li>
                        <li>• 3,700 residents trained through TESDA-accredited programs</li>
                        <li>• Created Negosyo Center and Business One-Stop Shop</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-600 text-white rounded-lg">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Kahimsog (Health)</h3>
                          <p className="text-sm text-muted-foreground">Free, quality healthcare for all</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Established Quezon Health Center Infirmary (QHCI) in 2022</li>
                        <li>• <strong>Served 100,797 patients</strong> (2022-Q1 2025)</li>
                        <li>• 9 doctors, 19 nurses providing free services</li>
                        <li>• <strong>Malnutrition significantly reduced:</strong> Underweight 6.45% → 2.02%, Stunting 18.61% → 4.69%, Wasting 5.57% → 0.87%</li>
                        <li>• Distributed 88,586 protein-rich vegetable seed packs</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-yellow-600 text-white rounded-lg">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Kalipay (Happiness)</h3>
                          <p className="text-sm text-muted-foreground">Culture, youth, and community joy</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Araw ng Quezon with Pasundayag concerts (Aegis, Janine Berdin, 6 Cyclemind)</li>
                        <li>• Oktoberfest featuring national artists (K Brosas, Parokya ni Edgar, OH! CARAGA)</li>
                        <li>• Built Quezon Civic Arena (7,000-seating capacity, largest in province)</li>
                        <li>• Renovated Freedom Park Complex, Hawker's Hub</li>
                        <li>• Upgraded Lowan-Lowan Spring Resort</li>
                        <li>• Famous Christmas Lights Display</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Leadership Philosophy</h4>
                    <p className="text-muted-foreground italic">
                      "Mayor Pablo Lorenzo III employs a practical, astute, and strategic method of governance that delivers results. 
                      His administration has focused on building a community where residents are healthy, happy, and have boundless 
                      opportunities for social and economic development within a well-nurtured ecological environment."
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Contact Office
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Vice Mayor */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Award className="h-5 w-5" />
                    Vice Mayor (2016-2019)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    As Presiding Officer of the 13th Sangguniang Bayan, he demonstrated exemplary leadership:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Conducted 162 sessions with one of the lowest absenteeism rates on record</li>
                    <li>• Oversaw enactment of 288 resolutions, 10 ordinances, and 21 appropriation ordinances</li>
                    <li>• Passed ₱303.8M annual budget and multiple supplemental appropriations</li>
                    <li>• Supported major infrastructure: Puntian-Arakan Road, Hall of Justice, Engineering Warehouse</li>
                    <li>• Backed Quezon Paglaum Village Housing Project and maternity waiting home for IPs</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Water District */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    Quezon Bukidnon Water District (2011-2015)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    As Chairman of the Board of Directors from January 2011 to October 2015, Mayor Lorenzo led transformative initiatives:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Spearheaded ₱7 million water system rehabilitation project</li>
                    <li>• Secured participation in KFW Provincial Towns Water Supply Program III</li>
                    <li>• Laid groundwork for Comprehensive Water Supply Project Phase I</li>
                    <li>• Introduced sound financial management and resolved ₱1.482M loan arrears</li>
                    <li>• Championed policy reforms including revised water rate structure</li>
                  </ul>
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

export default Mayor;
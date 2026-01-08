import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  MapPin, 
  TrendingUp, 
  Download,
  Shield,
  Briefcase,
  Heart,
  GraduationCap,
  Phone,
  Building2,
  Calendar,
  Star,
  Award
} from "lucide-react";
import banner4K from "@/assets/banner-4k.png";
import emergencyHotlines from "@/assets/emergency-hotlines.png";
import anq25Schedule from "@/assets/anq25-schedule.png";
import whiteRockFormation from "@/assets/quezon-white-rock-formation-bukidnon.jpg";
import pineapplePlantationAerial from "@/assets/quezon-pineapple-plantation-aerial-view.jpg";
import agriculturalFields from "@/assets/quezon-agricultural-pineapple-fields.jpg";
import whiteRockClimbing from "@/assets/quezon-white-rock-climbing-wall.jpg";
import manoboFestivalDance from "@/assets/quezon-manobo-cultural-festival-dance.jpg";
import manoboElder from "@/assets/quezon-indigenous-manobo-elder-traditional-costume.jpg";
import manoboRitual from "@/assets/quezon-manobo-rice-pounding-ritual.jpg";

const heroSlides = [
  {
    image: whiteRockFormation,
    title: "NATURAL WONDERS",
    subtitle: "Discover Quezon's Majestic Landscapes",
    description: "Experience the breathtaking White Rock Formation, one of Quezon's most iconic natural attractions featuring dramatic limestone cliffs surrounded by lush forests.",
    cta: "Explore Tourism",
    alt: "White Rock Formation in Quezon Bukidnon showing dramatic limestone cliffs covered with tropical vegetation"
  },
  {
    image: pineapplePlantationAerial,
    title: "AGRICULTURAL EXCELLENCE",
    subtitle: "Pride of Bukidnon's Pineapple Industry",
    description: "Aerial view of Quezon's vast pineapple plantations. As a 1st Class Municipality, agriculture drives our economy with sugarcane and pineapple as leading cash crops.",
    cta: "Learn About Industries",
    alt: "Aerial view of organized pineapple plantation fields in Quezon Bukidnon showcasing systematic agricultural practices"
  },
  {
    image: whiteRockClimbing,
    title: "ADVENTURE AWAITS",
    subtitle: "White Rock Climbing Wall",
    description: "Test your courage at the famous White Rock climbing wall, a favorite destination for adventure seekers and rock climbing enthusiasts in Quezon, Bukidnon.",
    cta: "Discover Activities",
    alt: "Rock climber scaling the White Rock climbing wall in Quezon Bukidnon adventure tourism destination"
  },
  {
    image: manoboFestivalDance,
    title: "SUNGGOD TEH KAMANGA",
    subtitle: "Celebrating Manobo Culture & Heritage",
    description: "Experience the vibrant Sunggod Teh Kamanga Festival every February - a grand thanksgiving celebration of the Manobo tribe featuring traditional dances and cultural rituals.",
    cta: "Explore Culture",
    alt: "Manobo tribe performers in traditional costume dancing at Sunggod Teh Kamanga cultural festival in Quezon Bukidnon"
  },
  {
    image: manoboElder,
    title: "INDIGENOUS HERITAGE",
    subtitle: "Honoring Our Indigenous Peoples",
    description: "Quezon honors its Indigenous Peoples as original stewards of the land, preserving Manobo traditions through the Heritage Hall and annual cultural celebrations.",
    cta: "Learn Our History",
    alt: "Indigenous Manobo elder in traditional red ceremonial costume performing cultural ritual in Quezon Bukidnon"
  },
  {
    image: manoboRitual,
    title: "LIVING TRADITIONS",
    subtitle: "Manobo Rice Pounding Ritual",
    description: "Witness authentic Manobo cultural practices like traditional rice pounding ceremonies, preserving centuries-old customs and agricultural heritage.",
    cta: "Experience Culture",
    alt: "Manobo women performing traditional rice pounding ritual in indigenous costume at cultural festival in Quezon Bukidnon"
  },
  {
    image: agriculturalFields,
    title: "SUSTAINABLE AGRICULTURE",
    subtitle: "Modern Farming Meets Tradition",
    description: "Close-up of our systematic pineapple cultivation. Major agro-industrial firms like Del Monte Philippines contribute to Quezon's thriving agricultural economy.",
    cta: "Invest in Quezon",
    alt: "Detailed aerial view of pineapple field rows in Quezon Bukidnon showing modern agricultural land management"
  },
  {
    image: emergencyHotlines,
    title: "EMERGENCY HOTLINES",
    subtitle: "Always Ready to Serve",
    description: "Quick access to emergency services. Your safety is our priority - reach out to us anytime, anywhere.",
    cta: "View All Contacts",
    showHotlines: true,
    alt: "Emergency hotline numbers and contact information for Quezon Bukidnon municipal services"
  },
  {
    image: anq25Schedule,
    title: "ANQ 2025",
    subtitle: "Annual Nutrition Caravan",
    description: "Join us for our comprehensive nutrition program reaching all 31 barangays. Building healthier communities through education and support.",
    cta: "View Schedule",
    showSchedule: true,
    alt: "Annual Nutrition Caravan 2025 schedule for Quezon Bukidnon barangay coverage and health programs"
  },
  {
    image: banner4K,
    title: "4K DEVELOPMENT AGENDA",
    subtitle: "Kalinaw • Kahigayunan • Kahimsog • Kalipay",
    description: "Our comprehensive development framework focusing on Peace & Order, Economic Growth, Health & Wellness, and Youth Development for a progressive Quezon.",
    cta: "Learn About 4K Agenda",
    alt: "Quezon Bukidnon 4K Development Agenda banner highlighting peace, opportunity, health, and happiness pillars"
  }
];

const municipalData = [
  {
    icon: Users,
    value: "114,521",
    label: "Population",
    description: "Proud residents"
  },
  {
    icon: MapPin,
    value: "31",
    label: "Barangays",
    description: "United communities"
  },
  {
    icon: TrendingUp,
    value: "₱606.3M",
    label: "Annual Revenue",
    description: "Growing economy"
  },
  {
    icon: Building2,
    value: "1st Class",
    label: "Income Class",
    description: "Municipal status"
  },
  {
    icon: Award,
    value: "711.28",
    label: "Land Area (km²)",
    description: "Total coverage"
  },
  {
    icon: Star,
    value: "33.35%",
    label: "Agricultural Land",
    description: "Farm utilization"
  }
];

const developmentPillars = [
  {
    title: "Kalinaw",
    subtitle: "Peace and Order",
    description: "Ensuring safety and security for all residents through comprehensive peace and order programs",
    icon: Shield,
    color: "bg-primary"
  },
  {
    title: "Kahigayunan", 
    subtitle: "Economic Growth & Investment",
    description: "Creating opportunities for prosperity through infrastructure, education, and livelihood programs",
    icon: TrendingUp,
    color: "bg-accent"
  },
  {
    title: "Kahimsog",
    subtitle: "Health and Wellness", 
    description: "Promoting community health through nutrition programs and healthcare facilities",
    icon: Heart,
    color: "bg-success"
  },
  {
    title: "Kalipay",
    subtitle: "Youth, Sports & Culture",
    description: "Nurturing the next generation through civic unity, pride, and cultural events",
    icon: GraduationCap,
    color: "bg-warning"
  }
];

const downloadableForms = [
  {
    title: "Business Permit Application",
    description: "Complete requirements and checklist for business registration",
    icon: Briefcase,
    fileType: "PDF"
  },
  {
    title: "Building Permit Application", 
    description: "Construction permit requirements and application forms",
    icon: Building2,
    fileType: "PDF"
  },
  {
    title: "Social Assistance Requirements",
    description: "Checklist for social assistance program applications",
    icon: Heart,
    fileType: "PDF"
  },
  {
    title: "Civil Registry Forms",
    description: "Birth, death, and marriage certificate request forms",
    icon: FileText,
    fileType: "PDF"
  }
];

export function HeroSection() {
  return (
    <main>
      {/* Section 1: Carousel / Gallery */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] overflow-hidden">
                  <img 
                    src={slide.image}
                    alt={slide.alt || slide.title}
                    className="w-full h-full object-cover object-center scale-105 blur-sm"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                      <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl text-white">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center lg:text-left">
                            {slide.title}
                          </h1>
                          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 text-accent text-center lg:text-left">
                            {slide.subtitle}
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-muted-foreground text-center lg:text-left">
                            {slide.description}
                          </p>
                        
                        {slide.showHotlines && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-semibold mb-4 text-white">Emergency Hotlines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Emergency: 911</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Police: 117</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Fire: 116</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Municipal Hall: (088) 123-4567</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Health Center: (088) 765-4321</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>MDRRMO: (088) 555-0123</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {slide.showSchedule && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-semibold mb-4 text-white">ANQ 2025 Schedule Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>January 15-31: Barangay Coverage</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>February 1-15: Urban Areas</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>Health Screenings & Education</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>Nutritional Supplements Distribution</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            {slide.cta}
                          </Button>
                          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                            View Images
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Section 2: Quezon At A Glance */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
              Municipal Profile
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Quezon at a Glance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key data points with icons showcasing our municipal excellence and growth
            </p>
          </div>

          {/* Key Data Points Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {municipalData.map((data, index) => {
              const IconComponent = data.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-elegant mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{data.value}</div>
                    <div className="font-semibold text-foreground mb-1">{data.label}</div>
                    <div className="text-xs text-muted-foreground">{data.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-center text-primary mb-6">Interactive Map</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="font-medium">Interactive map component will be displayed here</p>
                <p className="text-sm">Showing barangays, landmarks, and municipal boundaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Development Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
              Quick Access
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Development Pillars
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our four-pillar approach to sustainable development and community prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary mb-2">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-accent mb-3">
                      {pillar.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Downloadable Forms */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
              Citizen Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Downloadable Forms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access important municipal forms and requirements for various services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableForms.map((form, index) => {
              const IconComponent = form.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {form.fileType}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {form.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {form.description}
                    </CardDescription>
                    <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Download className="mr-2 h-4 w-4" />
                      Download Form
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
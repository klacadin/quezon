import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHelmet } from "@/components/seo/SEOHelmet";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { socioeconomicProfile } from "@/content/socioeconomic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Factory, 
  Truck, 
  Sprout,
  Users,
  MapPin,
  DollarSign,
  Building2,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

const investmentOpportunities = [
  {
    title: "Agricultural Processing",
    description: "Value-adding facilities for rice, corn, and other agricultural products",
    icon: Factory,
    potential: "High",
    investment: "₱50M - ₱200M",
    advantages: [
      "Abundant raw materials",
      "Strategic location",
      "Government support",
      "Skilled workforce"
    ]
  },
  {
    title: "Agri-Tourism",
    description: "Farm tourism and eco-tourism development projects",
    icon: Globe,
    potential: "High", 
    investment: "₱20M - ₱100M",
    advantages: [
      "Natural attractions",
      "Rich cultural heritage",
      "Growing tourism market",
      "Infrastructure support"
    ]
  },
  {
    title: "Logistics & Transportation",
    description: "Warehousing and distribution facilities",
    icon: Truck,
    potential: "Medium",
    investment: "₱30M - ₱150M",
    advantages: [
      "Strategic highway access",
      "Growing trade volume",
      "Regional hub potential",
      "Government incentives"
    ]
  },
  {
    title: "Renewable Energy",
    description: "Solar and hydroelectric power projects",
    icon: Zap,
    potential: "High",
    investment: "₱100M - ₱500M",
    advantages: [
      "Abundant natural resources",
      "Energy demand growth",
      "Government incentives",
      "Environmental benefits"
    ]
  }
];

const businessIncentives = [
  {
    title: "Tax Incentives",
    description: "Reduced local taxes for qualifying investments",
    icon: DollarSign
  },
  {
    title: "Streamlined Permits",
    description: "One-stop-shop for business registration",
    icon: Building2
  },
  {
    title: "Infrastructure Support",
    description: "Access to roads, utilities, and facilities",
    icon: MapPin
  },
  {
    title: "Skilled Workforce",
    description: "Access to educated and trained personnel",
    icon: Users
  }
];

const keyData = [
  {
    label: "Strategic Location",
    value: "Highway Access",
    description: "Direct connection to major highways",
    icon: MapPin
  },
  {
    label: "Population",
    value: "114,521",
    description: "Potential workforce and market",
    icon: Users
  },
  {
    label: "Agricultural Output",
    value: "₱5.2B+",
    description: "Annual agricultural production",
    icon: Sprout
  },
  {
    label: "Economic Growth",
    value: "8.5%",
    description: "Average annual GDP growth",
    icon: TrendingUp
  }
];

export default function Investment() {
  return (
    <>
      <SEOHelmet
        title="Invest in Quezon, Bukidnon - Business Opportunities & Incentives"
        description="Discover investment opportunities in Quezon, Bukidnon - a 1st Class Municipality with ₱625M annual revenue. Agriculture, tourism, renewable energy, and logistics."
        keywords="Quezon Bukidnon investment, business opportunities Bukidnon, invest in Quezon, agribusiness Bukidnon"
        ogImage="/assets/quezon-agricultural-pineapple-fields.jpg"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: window.location.origin },
          { name: "Investment", url: window.location.href }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
                  Business Opportunities
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                  Invest in Quezon
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Gateway to Adventure & Agricultural Excellence. Discover why Quezon, Bukidnon is the perfect location for your next business venture.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Download Investment Guide
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a Meeting
                  </Button>
                </div>
              </div>

              {/* Business Confidence Video */}
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center gap-4 p-6 bg-secondary/30 rounded-lg">
                      <Play className="h-12 w-12 text-primary" />
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Business Confidence in Quezon</h3>
                        <p className="text-muted-foreground">Embed YouTube video showcasing business confidence and investment success stories</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Key Investment Data */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Quezon?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Strategic advantages that make Quezon an ideal investment destination
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {keyData.map((data, index) => {
                  const IconComponent = data.icon;
                  return (
                    <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                      <CardContent className="pt-6">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                        <div className="text-2xl font-bold text-primary mb-2">{data.value}</div>
                        <div className="font-semibold text-foreground mb-1">{data.label}</div>
                        <div className="text-sm text-muted-foreground">{data.description}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Business Incentives */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessIncentives.map((incentive, index) => {
                  const IconComponent = incentive.icon;
                  return (
                    <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                      <CardHeader>
                        <div className="p-3 rounded-lg bg-gradient-primary w-fit mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg">{incentive.title}</CardTitle>
                        <CardDescription>{incentive.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Investment Opportunities */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Investment Opportunities</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore high-potential sectors with strong government support and market demand
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {investmentOpportunities.map((opportunity, index) => {
                  const IconComponent = opportunity.icon;
                  return (
                    <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-gradient-primary">
                            <IconComponent className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                            <CardDescription>{opportunity.description}</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <Badge variant="outline" className="text-success border-success">
                            {opportunity.potential} Potential
                          </Badge>
                          <Badge variant="secondary">
                            {opportunity.investment}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <h4 className="font-semibold text-foreground mb-3">Key Advantages:</h4>
                        <ul className="space-y-2 mb-6">
                          {opportunity.advantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              {advantage}
                            </li>
                          ))}
                        </ul>
                        
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="text-center p-12">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-primary mb-4">Ready to Invest?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join the growing community of successful businesses in Quezon. Our team is ready to support your investment journey.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Contact Investment Office
                    </Button>
                    <Button size="lg" variant="outline">
                      Download Investor's Kit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Camera, 
  Mountain, 
  Calendar, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  Navigation, 
  TreePine, 
  Waves, 
  Coffee,
  Car,
  Utensils,
  Building
} from "lucide-react";
import { Helmet } from "react-helmet-async";

// Import destination images
import whiteRockImg from "@/assets/quezon-white-rock-formation-bukidnon.jpg";
import mtTangulangImg from "@/assets/mt-tangulang-1.jpg";
import pineappleFieldsImg from "@/assets/quezon-agricultural-pineapple-fields.jpg";
import sugarFieldsImg from "@/assets/sugar-fields.jpg";

const Tourism = () => {
  const destinations = [
    {
      name: "Kiokong White Rock Wall",
      type: "Natural Wonder",
      description: "Stunning white limestone formations and crystal-clear waters",
      rating: 4.9,
      image: whiteRockImg,
      activities: ["Photography", "Swimming", "Rock Climbing", "Caving"],
      difficulty: "Moderate"
    },
    {
      name: "Mount Kalatungan Range",
      type: "Adventure",
      description: "Majestic mountain range perfect for hiking and nature photography",
      rating: 4.8,
      image: mtTangulangImg,
      activities: ["Hiking", "Camping", "Photography", "Bird Watching"],
      difficulty: "Challenging"
    },
    {
      name: "Agricultural Heritage Sites",
      type: "Cultural",
      description: "Learn about Quezon's agricultural excellence and farming traditions",
      rating: 4.6,
      image: pineappleFieldsImg,
      activities: ["Educational Tours", "Farm Visits", "Cultural Learning"],
      difficulty: "Easy"
    }
  ];

  const civicActivities = [
    {
      name: "Sunggod Teh Kamanga Festival",
      date: "October",
      description: "Major cultural celebration showcasing local traditions and unity",
      venue: "Civic Arena",
      highlights: ["Cultural Performances", "Traditional Food", "Community Parade", "Arts & Crafts"]
    },
    {
      name: "October Events",
      date: "October",
      description: "Month-long celebration of community achievements and culture",
      venue: "Various Venues",
      highlights: ["Sports Competitions", "Cultural Shows", "Food Festivals", "Trade Fairs"]
    },
    {
      name: "Christmas Lights Display",
      date: "December",
      description: "Spectacular holiday light display bringing joy to the community",
      venue: "Freedom Park Complex",
      highlights: ["Light Shows", "Holiday Markets", "Family Activities", "Christmas Concerts"]
    },
    {
      name: "Araw ng Quezon",
      date: "August 19",
      description: "Anniversary celebration of the municipality with various activities",
      venue: "Civic Arena",
      highlights: ["Parade", "Cultural Shows", "Sports Events", "Community Recognition"]
    },
    {
      name: "Summer Sports Festival (SSF)",
      date: "April-May",
      description: "Annual sports competition promoting health and community spirit",
      venue: "Various Sports Facilities",
      highlights: ["Basketball", "Volleyball", "Athletics", "Swimming"]
    }
  ];

  const travelInfo = [
    {
      type: "Hotels",
      items: [
        { name: "Quezon Highland Resort", rating: 4.5, price: "₱3,500 - ₱8,000" },
        { name: "Agricultural Heritage Inn", rating: 4.3, price: "₱2,500 - ₱5,500" },
        { name: "Mountain View Lodge", rating: 4.7, price: "₱2,000 - ₱4,500" }
      ]
    },
    {
      type: "Restaurants",
      items: [
        { name: "Farm to Table Restaurant", rating: 4.6, cuisine: "Filipino & International" },
        { name: "Bukidnon Flavors", rating: 4.4, cuisine: "Local Specialties" },
        { name: "Mountain Café", rating: 4.5, cuisine: "Coffee & Light Meals" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tourism - Discover Quezon, Bukidnon</title>
        <meta name="description" content="Explore tourism attractions, civic activities, destinations, hotels, and restaurants in Quezon, Bukidnon. Discover the Kiokong White Rock Wall and more." />
        <meta name="keywords" content="Quezon tourism, Kiokong White Rock Wall, Bukidnon attractions, civic activities, destinations, hotels, restaurants" />
        <link rel="canonical" href="/tourism" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-r from-primary to-primary/80">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${sugarFieldsImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4 relative h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <Badge variant="secondary" className="mb-4">
                Gateway to Adventure
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tourism in Quezon
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Discover natural wonders, rich culture, and unforgettable experiences in the heart of Bukidnon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Explore Destinations
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Camera className="h-5 w-5 mr-2" />
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="activities" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="activities" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Civic Activities
                </TabsTrigger>
                <TabsTrigger value="destinations" className="flex items-center gap-2">
                  <Mountain className="h-4 w-4" />
                  What to Do
                </TabsTrigger>
                <TabsTrigger value="travel" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Travel Info
                </TabsTrigger>
              </TabsList>

              {/* Civic Activities Tab */}
              <TabsContent value="activities" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Civic Activities</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Major events and celebrations that showcase the spirit and culture of Quezon
                  </p>
                </div>

                <div className="grid gap-6">
                  {civicActivities.map((activity, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Calendar className="h-5 w-5 text-primary" />
                              <Badge variant="outline">{activity.date}</Badge>
                              <Badge variant="secondary">{activity.venue}</Badge>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{activity.name}</h3>
                            <p className="text-muted-foreground mb-4">{activity.description}</p>
                            <div>
                              <span className="font-medium text-sm">Event Highlights:</span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {activity.highlights.map((highlight, idx) => (
                                  <Badge key={idx} variant="outline">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline">
                              View Photos
                            </Button>
                            <Button>
                              More Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* What to Do Tab */}
              <TabsContent value="destinations" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Do in Quezon</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Discover destinations, attractions, and activities that make Quezon a must-visit destination
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {destinations.map((destination, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative bg-secondary">
                        <img 
                          src={destination.image} 
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                          {destination.type}
                        </Badge>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded px-2 py-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold">{destination.name}</h3>
                          <Badge variant="outline" className={
                            destination.difficulty === 'Easy' ? 'border-green-500 text-green-600' :
                            destination.difficulty === 'Moderate' ? 'border-yellow-500 text-yellow-600' :
                            'border-red-500 text-red-600'
                          }>
                            {destination.difficulty}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{destination.description}</p>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium">Activities:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {destination.activities.map((activity, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Travelling to Quezon Section */}
                <Card className="mt-12">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Car className="h-6 w-6" />
                      Travelling to Quezon
                    </CardTitle>
                    <CardDescription>
                      Essential information for your journey to Quezon, Bukidnon
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">How to Get Here</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <strong>By Air:</strong> Fly to Laguindingan Airport (CGY) or Butuan Airport, then take land transportation
                          </div>
                          <div>
                            <strong>By Land:</strong> Regular bus services from Cagayan de Oro, Butuan, and other major cities
                          </div>
                          <div>
                            <strong>By Private Vehicle:</strong> Accessible via major highways with well-maintained roads
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Travel Tips</h3>
                        <div className="space-y-3 text-sm">
                          <div>• Best time to visit: December to May (dry season)</div>
                          <div>• Bring light, comfortable clothing and rain protection</div>
                          <div>• Local currency (Philippine Peso) is widely accepted</div>
                          <div>• English and Filipino are commonly spoken</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Travel Info Tab */}
              <TabsContent value="travel" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Hotels, Restaurants & Travel Info</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Find the best accommodations, dining options, and travel information for your stay
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {travelInfo.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          {category.type === 'Hotels' ? <Building className="h-6 w-6" /> : <Utensils className="h-6 w-6" />}
                          {category.type}
                        </CardTitle>
                        <CardDescription>
                          {category.type === 'Hotels' ? 'Comfortable accommodations for every budget' : 'Delicious local and international cuisine'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div>
                                <h4 className="font-semibold">{item.name}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                  {item.price && <span>• {item.price}</span>}
                                  {item.cuisine && <span>• {item.cuisine}</span>}
                                </div>
                              </div>
                              <Button size="sm" variant="outline">
                                {category.type === 'Hotels' ? 'Book Now' : 'View Menu'}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Travel Resources */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Tourist Information</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get maps, brochures, and local guidance
                      </p>
                      <Button size="sm" variant="outline">
                        Visit Center
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">24/7 Assistance</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Emergency hotlines and tourist assistance
                      </p>
                      <Button size="sm" variant="outline">
                        Get Help
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Photo Gallery</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Browse stunning photos of destinations
                      </p>
                      <Button size="sm" variant="outline">
                        View Gallery
                      </Button>
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

export default Tourism;
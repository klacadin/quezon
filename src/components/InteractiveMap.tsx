import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wheat, 
  Utensils, 
  ShoppingBag, 
  Camera, 
  GraduationCap 
} from "lucide-react";

// Define categories
const categories = [
  { id: 'government', name: 'Government', icon: Building2 },
  { id: 'agriculture', name: 'Agriculture', icon: Wheat },
  { id: 'dining', name: 'Dining', icon: Utensils },
  { id: 'business', name: 'Business', icon: ShoppingBag },
  { id: 'tourism', name: 'Tourism', icon: Camera },
  { id: 'education', name: 'Education', icon: GraduationCap },
];

export const InteractiveMap = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Google Maps embed URL centered on Quezon, Bukidnon (7.7306, 125.0980)
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63266.5!2d125.0980!3d7.7306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff1e7c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sQuezon%2C%20Bukidnon%2C%20Philippines!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph`;

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
            Interactive Exploration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-balance">
            Discover <span className="text-primary">Quezon's Landscape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Navigate through our rich agricultural zones, tourism destinations, and local businesses.
            Experience the diverse beauty and economic strength of our municipality.
          </p>
        </div>

        <div className="w-full">
          <Card className="relative overflow-hidden">
            {/* Info Card */}
            <CardHeader className="absolute top-4 left-4 z-10 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg max-w-xs">
              <CardTitle className="text-lg">Quezon, Bukidnon</CardTitle>
              <CardDescription>Interactive map with local points of interest</CardDescription>
            </CardHeader>

            {/* Category Filters */}
            <div className="absolute top-4 right-4 z-10 space-y-2">
              <div className="bg-background/95 backdrop-blur-sm rounded-lg p-2 shadow-lg flex flex-wrap gap-2 max-w-md">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Badge 
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      className="cursor-pointer transition-colors"
                      onClick={() => setActiveCategory(
                        activeCategory === category.id ? null : category.id
                      )}
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {category.name}
                    </Badge>
                  );
                })}
                <Badge 
                  variant={activeCategory === null ? "default" : "outline"}
                  className="cursor-pointer transition-colors"
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </Badge>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[700px] w-full">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quezon, Bukidnon Interactive Map"
                className="rounded-lg"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;

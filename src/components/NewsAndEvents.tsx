import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ExternalLink,
  Megaphone,
  Award,
  Users,
  Briefcase,
  Camera,
  Play,
  Eye,
  Heart,
  Share2
} from "lucide-react";

const featuredStories = [
  {
    id: 1,
    title: "WAKIS",
    subtitle: "Pagmamahal sa mga bata at mga batang nagdudurusa sa kahirapan at labis na mga pagkakasakit",
    category: "Community Outreach",
    type: "video",
    thumbnail: "/lovable-uploads/8dd7427d-1393-4131-9442-3d8a2e974f88.png",
    duration: "0:22",
    views: "2.5K",
    likes: "145",
    shares: "34",
    date: "2024-12-20"
  },
  {
    id: 2,
    title: "PANAMPULOT",
    subtitle: "Pagtulong sa mga kapatid na nangangailangan ng assistance",
    category: "Social Services",
    type: "video", 
    thumbnail: "/assets/sugar-fields.jpg",
    duration: "1:15",
    views: "1.8K",
    likes: "98",
    shares: "22",
    date: "2024-12-18"
  },
  {
    id: 3,
    title: "KASABEKAAN NE SAYAW",
    subtitle: "Cultural preservation through traditional dance",
    category: "Cultural Heritage",
    type: "video",
    thumbnail: "/assets/bukidnon-hero.jpg", 
    duration: "2:30",
    views: "3.2K",
    likes: "256",
    shares: "67",
    date: "2024-12-15"
  }
];

const newsItems = [
  {
    id: 1,
    category: "Municipal Update",
    title: "New Agricultural Processing Center Opens in Quezon",
    excerpt: "State-of-the-art facility to boost sugar production and create 200 new jobs for local farmers and workers.",
    date: "2024-12-20",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    category: "Health & Wellness",
    title: "Free Medical Mission Serves 500 Residents",
    excerpt: "Monthly healthcare initiative provides essential medical services to underserved communities across 24 barangays.",
    date: "2024-12-18",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    category: "Infrastructure",
    title: "Road Improvement Project Phase 2 Completed",
    excerpt: "Enhanced connectivity between agricultural areas and commercial centers improves transport efficiency.",
    date: "2024-12-15",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    category: "Education",
    title: "Scholar Recognition Ceremony Honors Outstanding Students",
    excerpt: "50 students receive educational assistance through the municipal scholarship program.",
    date: "2024-12-12",
    image: "/api/placeholder/400/250"
  }
];

const events = [
  {
    id: 1,
    title: "Municipal Council Session",
    date: "2024-12-30",
    time: "9:00 AM",
    location: "Municipal Hall",
    type: "Government"
  },
  {
    id: 2,
    title: "Farmers' Training Workshop",
    date: "2025-01-05",
    time: "8:00 AM",
    location: "Agricultural Center",
    type: "Agriculture"
  },
  {
    id: 3,
    title: "Youth Leadership Summit",
    date: "2025-01-10",
    time: "2:00 PM",
    location: "Civic Center",
    type: "Youth"
  },
  {
    id: 4,
    title: "Health & Wellness Fair",
    date: "2025-01-15",
    time: "7:00 AM",
    location: "Plaza Central",
    type: "Health"
  }
];

const announcements = [
  {
    id: 1,
    title: "Business Permit Renewal Deadline Extended",
    content: "All business owners have until January 31, 2025 to renew their permits without penalty.",
    date: "2024-12-20",
    urgent: true
  },
  {
    id: 2,
    title: "New Online Services Portal",
    content: "Citizens can now access select municipal services through our new digital platform.",
    date: "2024-12-18",
    urgent: false
  },
  {
    id: 3,
    title: "Water Interruption Schedule",
    content: "Planned maintenance on January 3-4, 2025. Affected areas will be notified in advance.",
    date: "2024-12-15",
    urgent: false
  }
];

export function NewsAndEvents() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news-events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest updates, announcements, and upcoming events in Quezon
          </p>
        </div>

        {/* Featured Community Stories Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-primary">Featured Community Stories</h3>
            <Button variant="outline" size="sm">
              View All Stories
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredStories.map((story) => (
                <CarouselItem key={story.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                        <img 
                          src={story.thumbnail} 
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                            <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                          {story.duration}
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-white/90 text-primary">
                            {story.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                          {story.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {story.subtitle}
                        </p>
                        
                        {/* Engagement Stats */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {story.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {story.likes}
                            </div>
                            <div className="flex items-center">
                              <Share2 className="h-3 w-3 mr-1" />
                              {story.shares}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(story.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-white shadow-lg border-primary/20" />
            <CarouselNext className="-right-12 bg-white shadow-lg border-primary/20" />
          </Carousel>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Latest News</h3>
              <Button variant="outline" size="sm">
                View All News
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {newsItems.map((news) => (
                <Card key={news.id} className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${news.featured ? 'border-primary' : ''}`}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-muted flex items-center justify-center">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant={news.featured ? "default" : "secondary"}>
                          {news.category}
                        </Badge>
                        {news.featured && (
                          <Badge variant="outline" className="text-warning border-warning">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">
                        {news.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(news.date)}
                        </div>
                        <Button variant="link" size="sm" className="text-xs">
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold text-primary">Upcoming Events</h3>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      {event.title}
                    </h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Events
              </Button>
            </Card>

            {/* Announcements */}
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Megaphone className="h-5 w-5 text-warning mr-2" />
                <h3 className="text-xl font-bold text-primary">Announcements</h3>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className={`p-3 rounded-lg ${announcement.urgent ? 'bg-warning/10 border border-warning/20' : 'bg-secondary/50'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary text-sm">
                        {announcement.title}
                      </h4>
                      {announcement.urgent && (
                        <Badge variant="outline" className="text-warning border-warning text-xs">
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {announcement.content}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(announcement.date)}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Announcements
              </Button>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  Awards & Recognition
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  Community Programs
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Business Opportunities
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  External Resources
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
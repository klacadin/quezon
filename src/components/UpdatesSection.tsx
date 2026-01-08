import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { useNews } from "@/hooks/useNews";
import { useEvents } from "@/hooks/useEvents";
import { format } from "date-fns";

const latestNews = [
  {
    title: "ANQ 2025: Annual Nutrition Caravan Launched",
    description: "Comprehensive nutrition program covering all barangays from January to February 2025, providing health screenings, education, and nutritional supplements.",
    date: "January 15, 2025",
    category: "Health Program",
    thumbnail: "/src/assets/anq25-schedule.png",
    readTime: "4 min read"
  },
  {
    title: "4K Development Agenda Progress Report",
    description: "Significant achievements in Kalinaw, Kahigayunan, Kahimsog, and Kalipay initiatives throughout 2024, setting foundation for continued growth.",
    date: "December 20, 2024",
    category: "Development",
    thumbnail: "/src/assets/banner-4k.png",
    readTime: "6 min read"
  },
  {
    title: "Emergency Response System Enhancement", 
    description: "Upgraded emergency hotlines and response protocols now active. New MDRRMO contact line (088) 555-0123 for disaster preparedness and response.",
    date: "December 15, 2024",
    category: "Public Safety",
    thumbnail: "/src/assets/emergency-hotlines.png",
    readTime: "3 min read"
  },
  {
    title: "2024 Seal of Good Local Governance Award",
    description: "Municipality of Quezon receives prestigious SGLG award for excellence in local governance and public service delivery.",
    date: "September 4, 2024",
    category: "Awards",
    thumbnail: "/lovable-uploads/47f5d21c-299d-4311-9f15-583dfc7476ee.png",
    readTime: "3 min read"
  },
  {
    title: "Agricultural Development Program Launch",
    description: "New initiatives to support local farmers with modern farming techniques and equipment assistance programs.",
    date: "August 28, 2024", 
    category: "Agriculture",
    thumbnail: "/lovable-uploads/8dd7427d-1393-4131-9442-3d8a2e974f88.png",
    readTime: "5 min read"
  }
];

export function UpdatesSection() {
  const { news, loading: newsLoading } = useNews(3);
  const { events, loading: eventsLoading } = useEvents(3);

  // Use database news if available, fallback to static data
  const displayNews = news.length > 0 ? news : latestNews.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
            Latest Updates
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest news, announcements, and developments in our municipality
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Headlines */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Latest Headlines</h3>
            <div className="space-y-6">
              {newsLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="shadow-card">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <Skeleton className="w-full h-48 md:h-full" />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                          <Skeleton className="h-6 w-full" />
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-16 w-full mb-4" />
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-8 w-20" />
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                displayNews.map((newsItem, index) => (
                  <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={newsItem.featured_image_url || newsItem.thumbnail}
                          alt={newsItem.title}
                          className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {newsItem.category}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {newsItem.readTime || "3 min read"}
                            </div>
                          </div>
                          <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {newsItem.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground mb-4">
                            {newsItem.excerpt || newsItem.description || newsItem.content?.substring(0, 150) + '...'}
                          </CardDescription>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {newsItem.publish_date ? format(new Date(newsItem.publish_date), 'MMM dd, yyyy') : newsItem.date}
                            </div>
                            <Button variant="ghost" size="sm" className="group-hover:text-primary">
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All News
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {eventsLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-5 w-full" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-12 w-full" />
                    </CardContent>
                  </Card>
                ))
              ) : events.length > 0 ? (
                events.map((event) => (
                  <Card key={event.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                          {event.category || 'Event'}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {format(new Date(event.event_date), 'h:mm a')}
                        </div>
                      </div>
                      <CardTitle className="text-lg">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {format(new Date(event.event_date), 'MMM dd, yyyy')}
                        </div>
                        {event.location && (
                          <div className="text-muted-foreground">
                            📍 {event.location}
                          </div>
                        )}
                        <p className="text-muted-foreground text-xs mt-2">
                          {event.description.substring(0, 100)}...
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="shadow-card">
                  <CardContent className="p-8 text-center">
                    <div className="text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                      <p className="font-medium mb-2">No upcoming events</p>
                      <p className="text-sm">Check back later for new events and announcements.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
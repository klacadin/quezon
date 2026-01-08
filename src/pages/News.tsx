import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Newspaper } from "lucide-react";

const News = () => {
  return (
    <>
      <Helmet>
        <title>Latest News - Municipality of Quezon, Bukidnon</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and events from the Municipality of Quezon, Bukidnon. Get informed about local government initiatives and community happenings." />
        <meta name="keywords" content="Quezon Bukidnon news, local government announcements, municipal updates, community events, Quezon news" />
        <link rel="canonical" href="/news" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Stay Informed
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
                <Newspaper className="h-12 w-12 md:h-16 md:w-16" />
                Latest News
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Official news, announcements, and updates from the Municipality of Quezon, Bukidnon
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <NewsAndEvents />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default News;

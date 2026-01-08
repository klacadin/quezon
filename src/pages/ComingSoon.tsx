import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Mail, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import rockWall from "@/assets/quezon-rock-wall.png";
import quezonSeal from "@/assets/quezon-official-seal.png";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you! We'll notify you when we launch.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${rockWall})`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* White Opaque Overlay */}
      <div className="absolute inset-0 bg-white/70" />
      <Helmet>
        <title>Coming Soon - Municipality of Quezon</title>
        <meta name="description" content="Something exciting is coming soon from the Municipality of Quezon. Stay tuned for updates." />
      </Helmet>

      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-1000 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={quezonSeal} alt="Municipality of Quezon Official Seal" className="w-32 h-32 object-contain" />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            We're working on something exciting. Stay tuned for updates from the Municipality of Quezon.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="p-4 bg-card rounded-lg shadow-card border border-border">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-card-foreground">New Features</h3>
            <p className="text-sm text-muted-foreground">Enhanced services</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow-card border border-border">
            <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-card-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get notified</p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow-card border border-border">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-card-foreground">Launching Soon</h3>
            <p className="text-sm text-muted-foreground">Worth the wait</p>
          </div>
        </div>

        {/* Email Notification Form */}
        <form onSubmit={handleNotifyMe} className="max-w-md mx-auto pt-8">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="shadow-elegant">
              Notify Me
            </Button>
          </div>
        </form>

        {/* Back Button */}
        <div className="pt-8">
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

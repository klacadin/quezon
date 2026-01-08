import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Shield,
  FileText,
  Users,
  Building
} from "lucide-react";

const footerSections = [
  {
    title: "Municipal Services",
    links: [
      { name: "Business Permits", href: "/services#business" },
      { name: "Civil Registration", href: "/services#civil" },
      { name: "Building Permits", href: "/services#building" },
      { name: "Social Assistance", href: "/services#social" },
      { name: "Forms & Downloads", href: "/services#forms" },
      { name: "Project Tracking", href: "/project-tracking" }
    ]
  },
  {
    title: "Transparency",
    links: [
      { name: "Full Disclosure", href: "/transparency/full-disclosure" },
      { name: "LGSF", href: "/transparency/lgsf" },
      { name: "Bayanihan Grant", href: "/transparency/bayanihan-grant" },
      { name: "Invitation to Bid", href: "/transparency/invitation-to-bid" },
      { name: "Notice of Award", href: "/transparency/notice-of-award" },
      { name: "Notice to Proceed", href: "/transparency/notice-to-proceed" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Quezon", href: "/about" },
      { name: "Tourist Spots", href: "/tourism" },
      { name: "Investment Guide", href: "/investment" },
      { name: "News & Updates", href: "/news" },
      { name: "Governance", href: "/governance" },
      { name: "Sitemap", href: "/sitemap" }
    ]
  }
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/QuezonBukidnonLGU",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/QuezonBukidnon",
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/quezonbukidnon",
    color: "hover:text-pink-600"
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@QuezonBukidnonLGU",
    color: "hover:text-red-600"
  }
];

const offices = [
  {
    icon: Building,
    title: "Municipal Hall",
    address: "Municipal Government Center, Quezon, Bukidnon",
    phone: "(088) 123-4567",
    email: "mayor@quezonbukidnon.gov.ph"
  },
  {
    icon: Shield,
    title: "Municipal Police Station",
    address: "Police Station Compound, Quezon, Bukidnon",
    phone: "(088) 123-4568",
    email: "police@quezonbukidnon.gov.ph"
  },
  {
    icon: FileText,
    title: "Health Center",
    address: "Municipal Health Office, Quezon, Bukidnon",
    phone: "(088) 765-4321",
    email: "health@quezonbukidnon.gov.ph"
  },
  {
    icon: Shield,
    title: "MDRRMO",
    address: "Disaster Risk Reduction Office, Quezon, Bukidnon",
    phone: "(088) 555-0123",
    email: "mdrrmo@quezonbukidnon.gov.ph"
  }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Municipal Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Municipality of Quezon</h3>
            <p className="text-primary-foreground/80 mb-6">
              Gateway to Adventure & Agricultural Excellence • Province of Bukidnon
            </p>
            <p className="text-sm text-primary-foreground/70 mb-6">
              Committed to transparent governance, sustainable development, and 
              improving the quality of life for all Quezonians.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-primary-foreground/10 rounded-lg transition-all duration-300 ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-semibold mb-8 text-center">Contact Our Offices</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => {
              const IconComponent = office.icon;
              return (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gold-accent/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-gold-accent" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-primary-foreground mb-2">
                        {office.title}
                      </h5>
                      <div className="space-y-2 text-sm text-primary-foreground/80">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="hover:text-gold-accent transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-gold-accent transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mt-12 p-6 bg-philippines-red/20 border border-philippines-red/30 rounded-lg">
          <h4 className="text-lg font-semibold text-center mb-4 text-gold-accent">
            Emergency Hotlines
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">Emergency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">Police</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">Fire</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">Red Cross</div>
            </div>
            <div>
              <div className="text-lg font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">Complaint</div>
            </div>
            <div>
              <div className="text-lg font-bold text-philippines-red">###</div>
              <div className="text-xs text-primary-foreground/80">MMDA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20 bg-primary/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Municipality of Quezon, Bukidnon. All rights reserved. | Powered by Haturiko Networks
            </div>
            <div className="flex space-x-6 text-primary-foreground/80">
              <a href="/comingsoon" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/comingsoon" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </a>
              <a href="/accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </a>
              <a href="/sitemap" className="hover:text-primary-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60">
              This website is compliant with RA 11032 (Ease of Doing Business), RA 10844 (ICT Development), 
              and supports Ambisyon Natin 2040's vision of a digitally empowered nation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
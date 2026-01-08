import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import quezonSeal from "@/assets/quezon-official-seal.png";

const navigation = [
  {
    name: "Home",
    href: "/",
    current: true
  },
  {
    name: "About Quezon",
    href: "/about",
    submenu: [
      { name: "Town Profile", href: "/about#town-profile" },
      { name: "History", href: "/about#history" },
      { name: "Municipal Seal", href: "/about#municipal-seal" }
    ]
  },
  {
    name: "Governance",
    href: "/governance",
    submenu: [
      { name: "Mission & Vision", href: "/governance#mission" },
      { name: "Development Agenda", href: "/governance/development-agenda" },
      { name: "The Mayor", href: "/governance/mayor" },
      { name: "Sangguniang Bayan", href: "/governance/sangguniang-bayan" },
      { name: "Offices", href: "/governance/offices" },
      { name: "Transparency", href: "/transparency" }
    ]
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Business Permits", href: "/services#business" },
      { name: "Civil Registry", href: "/services#civil" },
      { name: "Building Permits", href: "/services#building" },
      { name: "Social Assistance", href: "/services#social" },
      { name: "Forms & Downloads", href: "/services#forms" },
      { name: "Project Tracking", href: "/project-tracking" }
    ]
  },
  {
    name: "Investment",
    href: "/investment"
  },
  {
    name: "Tourism",
    href: "/tourism",
    submenu: [
      { name: "What to Do", href: "/tourism/what-to-do" },
      { name: "Civic Activities", href: "/tourism/civic-activities" },
      { name: "Festivals", href: "/tourism/festivals" },
      { name: "Travel Guide", href: "/travel-guide" },
      { name: "Destinations", href: "/tourism#destinations" }
    ]
  },
  {
    name: "News",
    href: "/news"
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Hotline: (088) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@quezonbukidnon.gov.ph</span>
              </div>
            </div>
            <div className="hidden md:block text-xs">
              Emergency: 911 | Police: 117 | Fire: 116
            </div>
          </div>
        </div>
      </div>

      {/* Skip to content link - DICT compliance */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50"
        accessKey="1"
      >
        Skip to main content
      </a>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and title */}
          <div className="flex items-center space-x-4">
            <a href="/" accessKey="4" aria-label="Go to homepage">
              <img 
                src="/lovable-uploads/47f5d21c-299d-4311-9f15-583dfc7476ee.png" 
                alt="Municipality of Quezon, Bukidnon Official Seal" 
                className="h-16 w-16"
              />
            </a>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                <a href="/" className="hover:text-primary-foreground transition-colors">
                  Municipality of Quezon
                </a>
              </h1>
              <p className="text-sm text-muted-foreground">
                Province of Bukidnon • Gateway to Adventure & Agricultural Excellence
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:block" accessKey="2">
            <ul className="flex space-x-8">
              {navigation.map((item, index) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      item.current ? 'text-primary' : 'text-foreground'
                    }`}
                    accessKey={index < 9 ? (index + 1).toString() : undefined}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {subitem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                        item.current ? 'text-primary' : 'text-foreground'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <a
                              href={subitem.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
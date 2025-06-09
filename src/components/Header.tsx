
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = [
    {
      title: "Broadcasting & Media",
      items: [
        { name: "TETRACODE TV", href: "/products/broadcasting/tetracode-tv", description: "Live & On-demand streaming" },
        { name: "TETRACODE Radio", href: "/products/broadcasting/tetracode-radio", description: "Digital radio platform" },
        { name: "Media Player", href: "/products/broadcasting/media-player", description: "Cross-platform player" },
        { name: "Content Distribution", href: "/products/broadcasting/content-distribution", description: "Global CDN" },
        { name: "Creator Tools", href: "/products/broadcasting/creator-tools", description: "Monetization platform" },
      ]
    },
    {
      title: "Aviation & Aerospace",
      items: [
        { name: "Drone Services", href: "/products/aviation/drone-services", description: "UAV solutions" },
        { name: "Flight Management", href: "/products/aviation/flight-management", description: "Aviation software" },
        { name: "Smart Airport Tech", href: "/products/aviation/smart-airport", description: "Airport automation" },
        { name: "Air Charter", href: "/products/aviation/air-charter", description: "Logistics services" },
      ]
    },
    {
      title: "SaaS & Communication",
      items: [
        { name: "TETRACODE Meet", href: "/products/saas/tetracode-meet", description: "Video conferencing" },
        { name: "TETRACODE Office", href: "/products/saas/tetracode-office", description: "Office suite" },
        { name: "TETRACODE Mail", href: "/products/saas/tetracode-mail", description: "Secure email" },
        { name: "Task Manager", href: "/products/saas/task-manager", description: "Project management" },
      ]
    },
    {
      title: "Fintech & Banking",
      items: [
        { name: "Mobix", href: "/products/fintech/mobix", description: "Super app platform" },
        { name: "Core Banking", href: "/products/fintech/core-banking", description: "Open banking APIs" },
      ]
    },
    {
      title: "Cloud & Hosting",
      items: [
        { name: "TETRACODE Cloud", href: "/products/cloud/tetracode-cloud", description: "IaaS/PaaS platform" },
        { name: "Web Hosting", href: "/products/cloud/web-hosting", description: "Managed hosting" },
        { name: "Cloud Storage EB5", href: "/products/cloud/cloud-storage", description: "Scalable storage" },
        { name: "CDN Services", href: "/products/cloud/cdn-services", description: "Global delivery" },
      ]
    },
    {
      title: "Gaming & Entertainment",
      items: [
        { name: "Cloud Gaming", href: "/products/gaming/cloud-gaming", description: "Stream games" },
        { name: "Mobile Gaming Hub", href: "/products/gaming/mobile-gaming", description: "Gaming platform" },
        { name: "Developer Tools", href: "/products/gaming/developer-tools", description: "Game development" },
      ]
    },
    {
      title: "AI & Innovation",
      items: [
        { name: "TETRACODE AI", href: "/products/ai/tetracode-ai", description: "AI services" },
        { name: "ML APIs", href: "/products/ai/ml-apis", description: "Machine learning" },
        { name: "Recognition", href: "/products/ai/recognition", description: "Text & image AI" },
        { name: "Chatbot Platform", href: "/products/ai/chatbot", description: "Conversational AI" },
        { name: "Voice Translation", href: "/products/ai/voice-translation", description: "Real-time translation" },
      ]
    },
    {
      title: "Mobile & Super Apps",
      items: [
        { name: "App Store", href: "/products/mobile/app-store", description: "Mobile marketplace" },
        { name: "Developer SDKs", href: "/products/mobile/developer-sdks", description: "Mobile development" },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="tech-gradient w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">2mp</span>
            </div>
            <span className="font-bold text-xl">2mp services</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/overview" className="flex h-full w-full select-none flex-col justify-end rounded-md tech-gradient p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Company Overview
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover our mission, vision, and leadership team driving innovation across Africa.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <Link to="/mission" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Mission & Vision</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Our commitment to technological advancement
                      </p>
                    </Link>
                    <Link to="/leadership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Leadership Team</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Meet the visionaries behind 2mp services
                      </p>
                    </Link>
                    <Link to="/news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">News & Press</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Latest updates and announcements
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-2">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <h4 className="text-sm font-medium leading-none">{category.title}</h4>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <Link to="/solutions/individuals" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Individuals</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Personal productivity and entertainment
                      </p>
                    </Link>
                    <Link to="/solutions/businesses" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Businesses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Enterprise solutions and tools
                      </p>
                    </Link>
                    <Link to="/solutions/governments" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Governments</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Public sector digital transformation
                      </p>
                    </Link>
                    <Link to="/solutions/developers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Developers</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        APIs, SDKs, and development tools
                      </p>
                    </Link>
                    <Link to="/solutions/startups" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Startups</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Scalable startup solutions
                      </p>
                    </Link>
                    <Link to="/solutions/education" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">For Education</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Educational technology solutions
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <Link to="/about/our-story" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Our Story</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        The journey of 2mp services
                      </p>
                    </Link>
                    <Link to="/about/why-africa" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Why Africa</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Our commitment to African innovation
                      </p>
                    </Link>
                    <Link to="/about/team-careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Team & Careers</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Join our growing team
                      </p>
                    </Link>
                    <Link to="/about/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Blog</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Insights and thought leadership
                      </p>
                    </Link>
                    <Link to="/about/media-kit" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Media Kit</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Brand assets and resources
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact/get-in-touch" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex">
              <Link to="/contact/request-demo">Request Demo</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <Link to="/" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/overview" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Overview
              </Link>
              <Link to="/about/our-story" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact/get-in-touch" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    { title: "Broadcasting & Media", href: "/products/broadcasting/tetracode-tv" },
    { title: "Aviation & Aerospace", href: "/products/aviation/drone-services" },
    { title: "SaaS & Communication", href: "/products/saas/tetracode-meet" },
    { title: "Fintech & Banking", href: "/products/fintech/mobix" },
    { title: "Cloud & Hosting", href: "/products/cloud/tetracode-cloud" },
    { title: "Gaming & Entertainment", href: "/products/gaming/cloud-gaming" },
    { title: "AI & Innovation", href: "/products/ai/tetracode-ai" },
    { title: "Mobile & Super Apps", href: "/products/mobile/app-store" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7436b0e1-9ebc-417d-841e-5a9ee17103a4.png" 
              alt="2MP Services Logo" 
              className="h-10 w-auto"
            />
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
                    {/* <Link to="/leadership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Leadership Team</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Meet the visionaries behind 2mp services
                      </p>
                    </Link>*/}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    {productCategories.map((category) => (
                      <Link
                        key={category.title}
                        to={category.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{category.title}</div>
                      </Link>
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
                <Link to="/about" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  About Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden lg:inline-flex">
              <Link to="/contact">Request Demo</Link>
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
              <Link to="/about" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
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

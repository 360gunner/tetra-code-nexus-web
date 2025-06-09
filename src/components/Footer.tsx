
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="tech-gradient w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2mp</span>
              </div>
              <span className="font-bold text-xl">2mp services</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading technology and innovation company providing comprehensive solutions across Broadcasting, Aviation, SaaS, Fintech, Cloud, Gaming, AI and Mobile platforms across Africa.
            </p>
            <div className="flex space-x-4">
              <Input placeholder="Enter your email" className="max-w-xs" />
              <Button>Subscribe</Button>
            </div>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/developers/api-docs" className="text-muted-foreground hover:text-foreground">API Documentation</Link></li>
              <li><Link to="/developers/sdks-plugins" className="text-muted-foreground hover:text-foreground">SDKs & Plugins</Link></li>
              <li><Link to="/developers/portal" className="text-muted-foreground hover:text-foreground">Developer Portal</Link></li>
              <li><Link to="/developers/open-source" className="text-muted-foreground hover:text-foreground">Open Source</Link></li>
              <li><Link to="/developers/sandbox" className="text-muted-foreground hover:text-foreground">Sandbox</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partners/reseller-program" className="text-muted-foreground hover:text-foreground">Reseller Program</Link></li>
              <li><Link to="/partners/integration-partners" className="text-muted-foreground hover:text-foreground">Integration Partners</Link></li>
              <li><Link to="/partners/government-collaboration" className="text-muted-foreground hover:text-foreground">Government Collaboration</Link></li>
              <li><Link to="/partners/investor-relations" className="text-muted-foreground hover:text-foreground">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support/help-center" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/support/contact-support" className="text-muted-foreground hover:text-foreground">Contact Support</Link></li>
              <li><Link to="/support/system-status" className="text-muted-foreground hover:text-foreground">System Status</Link></li>
              <li><Link to="/support/live-chat" className="text-muted-foreground hover:text-foreground">Live Chat</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 2mp services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about/our-story" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
            <Link to="/contact/get-in-touch" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

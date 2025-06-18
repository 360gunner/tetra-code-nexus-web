
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7436b0e1-9ebc-417d-841e-5a9ee17103a4.png" 
                alt="2MP Services Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading technology and innovation company providing comprehensive solutions across Broadcasting, Aviation, SaaS, Fintech, Cloud, Gaming, AI and Mobile platforms across Africa.
            </p>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">API Documentation</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">SDKs & Plugins</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Developer Portal</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Open Source</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Sandbox</span></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Reseller Program</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Integration Partners</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Government Collaboration</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Investor Relations</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Help Center</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Contact Support</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">System Status</span></li>
              <li><span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Live Chat</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 2mp services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">About Us</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Contact</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

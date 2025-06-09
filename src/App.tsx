
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout";

// Import all pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Home pages
import Overview from "./pages/home/Overview";
import Mission from "./pages/home/Mission";
import Leadership from "./pages/home/Leadership";
import News from "./pages/home/News";

// Broadcasting & Media pages
import TetracodeTv from "./pages/products/broadcasting/TetracodeTv";
import TetracodeRadio from "./pages/products/broadcasting/TetracodeRadio";
import MediaPlayer from "./pages/products/broadcasting/MediaPlayer";
import ContentDistribution from "./pages/products/broadcasting/ContentDistribution";
import CreatorTools from "./pages/products/broadcasting/CreatorTools";

// Aviation pages
import DroneServices from "./pages/products/aviation/DroneServices";
import FlightManagement from "./pages/products/aviation/FlightManagement";
import SmartAirport from "./pages/products/aviation/SmartAirport";
import AirCharter from "./pages/products/aviation/AirCharter";

// SaaS pages
import TetracodeMeet from "./pages/products/saas/TetracodeMeet";
import TetracodeOffice from "./pages/products/saas/TetracodeOffice";
import TetracodeMail from "./pages/products/saas/TetracodeMail";
import TaskManager from "./pages/products/saas/TaskManager";

// Fintech pages
import Mobix from "./pages/products/fintech/Mobix";
import CoreBanking from "./pages/products/fintech/CoreBanking";

// Cloud pages
import TetracodeCloud from "./pages/products/cloud/TetracodeCloud";
import WebHosting from "./pages/products/cloud/WebHosting";
import CloudStorage from "./pages/products/cloud/CloudStorage";
import CdnServices from "./pages/products/cloud/CdnServices";

// Gaming pages
import CloudGaming from "./pages/products/gaming/CloudGaming";
import MobileGaming from "./pages/products/gaming/MobileGaming";
import DeveloperTools from "./pages/products/gaming/DeveloperTools";

// AI pages
import TetracodeAi from "./pages/products/ai/TetracodeAi";
import MlApis from "./pages/products/ai/MlApis";
import Recognition from "./pages/products/ai/Recognition";
import Chatbot from "./pages/products/ai/Chatbot";
import VoiceTranslation from "./pages/products/ai/VoiceTranslation";

// Mobile pages
import AppStore from "./pages/products/mobile/AppStore";
import DeveloperSdks from "./pages/products/mobile/DeveloperSdks";

// Solutions pages
import ForIndividuals from "./pages/solutions/ForIndividuals";
import ForBusinesses from "./pages/solutions/ForBusinesses";
import ForGovernments from "./pages/solutions/ForGovernments";
import ForDevelopers from "./pages/solutions/ForDevelopers";
import ForStartups from "./pages/solutions/ForStartups";
import ForEducation from "./pages/solutions/ForEducation";

// About pages
import OurStory from "./pages/about/OurStory";
import WhyAfrica from "./pages/about/WhyAfrica";
import TeamCareers from "./pages/about/TeamCareers";
import Blog from "./pages/about/Blog";
import MediaKit from "./pages/about/MediaKit";

// Contact pages
import GetInTouch from "./pages/contact/GetInTouch";
import LocalOffice from "./pages/contact/LocalOffice";
import RequestDemo from "./pages/contact/RequestDemo";
import Feedback from "./pages/contact/Feedback";

// Footer pages
import ApiDocs from "./pages/developers/ApiDocs";
import SdksPlugins from "./pages/developers/SdksPlugins";
import DeveloperPortal from "./pages/developers/DeveloperPortal";
import OpenSource from "./pages/developers/OpenSource";
import Sandbox from "./pages/developers/Sandbox";

import ResellerProgram from "./pages/partners/ResellerProgram";
import IntegrationPartners from "./pages/partners/IntegrationPartners";
import GovernmentCollaboration from "./pages/partners/GovernmentCollaboration";
import InvestorRelations from "./pages/partners/InvestorRelations";

import HelpCenter from "./pages/support/HelpCenter";
import ContactSupport from "./pages/support/ContactSupport";
import SystemStatus from "./pages/support/SystemStatus";
import LiveChat from "./pages/support/LiveChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="2mp-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Home routes */}
              <Route path="/overview" element={<Overview />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/news" element={<News />} />
              
              {/* Broadcasting & Media routes */}
              <Route path="/products/broadcasting/tetracode-tv" element={<TetracodeTv />} />
              <Route path="/products/broadcasting/tetracode-radio" element={<TetracodeRadio />} />
              <Route path="/products/broadcasting/media-player" element={<MediaPlayer />} />
              <Route path="/products/broadcasting/content-distribution" element={<ContentDistribution />} />
              <Route path="/products/broadcasting/creator-tools" element={<CreatorTools />} />
              
              {/* Aviation routes */}
              <Route path="/products/aviation/drone-services" element={<DroneServices />} />
              <Route path="/products/aviation/flight-management" element={<FlightManagement />} />
              <Route path="/products/aviation/smart-airport" element={<SmartAirport />} />
              <Route path="/products/aviation/air-charter" element={<AirCharter />} />
              
              {/* SaaS routes */}
              <Route path="/products/saas/tetracode-meet" element={<TetracodeMeet />} />
              <Route path="/products/saas/tetracode-office" element={<TetracodeOffice />} />
              <Route path="/products/saas/tetracode-mail" element={<TetracodeMail />} />
              <Route path="/products/saas/task-manager" element={<TaskManager />} />
              
              {/* Fintech routes */}
              <Route path="/products/fintech/mobix" element={<Mobix />} />
              <Route path="/products/fintech/core-banking" element={<CoreBanking />} />
              
              {/* Cloud routes */}
              <Route path="/products/cloud/tetracode-cloud" element={<TetracodeCloud />} />
              <Route path="/products/cloud/web-hosting" element={<WebHosting />} />
              <Route path="/products/cloud/cloud-storage" element={<CloudStorage />} />
              <Route path="/products/cloud/cdn-services" element={<CdnServices />} />
              
              {/* Gaming routes */}
              <Route path="/products/gaming/cloud-gaming" element={<CloudGaming />} />
              <Route path="/products/gaming/mobile-gaming" element={<MobileGaming />} />
              <Route path="/products/gaming/developer-tools" element={<DeveloperTools />} />
              
              {/* AI routes */}
              <Route path="/products/ai/tetracode-ai" element={<TetracodeAi />} />
              <Route path="/products/ai/ml-apis" element={<MlApis />} />
              <Route path="/products/ai/recognition" element={<Recognition />} />
              <Route path="/products/ai/chatbot" element={<Chatbot />} />
              <Route path="/products/ai/voice-translation" element={<VoiceTranslation />} />
              
              {/* Mobile routes */}
              <Route path="/products/mobile/app-store" element={<AppStore />} />
              <Route path="/products/mobile/developer-sdks" element={<DeveloperSdks />} />
              
              {/* Solutions routes */}
              <Route path="/solutions/individuals" element={<ForIndividuals />} />
              <Route path="/solutions/businesses" element={<ForBusinesses />} />
              <Route path="/solutions/governments" element={<ForGovernments />} />
              <Route path="/solutions/developers" element={<ForDevelopers />} />
              <Route path="/solutions/startups" element={<ForStartups />} />
              <Route path="/solutions/education" element={<ForEducation />} />
              
              {/* About routes */}
              <Route path="/about/our-story" element={<OurStory />} />
              <Route path="/about/why-africa" element={<WhyAfrica />} />
              <Route path="/about/team-careers" element={<TeamCareers />} />
              <Route path="/about/blog" element={<Blog />} />
              <Route path="/about/media-kit" element={<MediaKit />} />
              
              {/* Contact routes */}
              <Route path="/contact/get-in-touch" element={<GetInTouch />} />
              <Route path="/contact/local-office" element={<LocalOffice />} />
              <Route path="/contact/request-demo" element={<RequestDemo />} />
              <Route path="/contact/feedback" element={<Feedback />} />
              
              {/* Developer routes */}
              <Route path="/developers/api-docs" element={<ApiDocs />} />
              <Route path="/developers/sdks-plugins" element={<SdksPlugins />} />
              <Route path="/developers/portal" element={<DeveloperPortal />} />
              <Route path="/developers/open-source" element={<OpenSource />} />
              <Route path="/developers/sandbox" element={<Sandbox />} />
              
              {/* Partner routes */}
              <Route path="/partners/reseller-program" element={<ResellerProgram />} />
              <Route path="/partners/integration-partners" element={<IntegrationPartners />} />
              <Route path="/partners/government-collaboration" element={<GovernmentCollaboration />} />
              <Route path="/partners/investor-relations" element={<InvestorRelations />} />
              
              {/* Support routes */}
              <Route path="/support/help-center" element={<HelpCenter />} />
              <Route path="/support/contact-support" element={<ContactSupport />} />
              <Route path="/support/system-status" element={<SystemStatus />} />
              <Route path="/support/live-chat" element={<LiveChat />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

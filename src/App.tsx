import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Governance from "./pages/Governance";
import Mayor from "./pages/governance/Mayor";
import SangguniangBayan from "./pages/governance/SangguniangBayan";
import Offices from "./pages/governance/Offices";
import News from "./pages/News";
import DevelopmentAgenda from "./pages/governance/DevelopmentAgenda";
import Services from "./pages/Services";
import Investment from "./pages/Investment";
import Tourism from "./pages/Tourism";
import CivicActivities from "./pages/tourism/CivicActivities";
import WhatToDo from "./pages/tourism/WhatToDo";
import DestinationDetail from "./pages/tourism/DestinationDetail";
import Transparency from "./pages/Transparency";
import FullDisclosure from "./pages/transparency/FullDisclosure";
import NotFound from "./pages/NotFound";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import ProjectTracking from "./pages/ProjectTracking";
import LGSF from "./pages/transparency/LGSF";
import BayanihanGrant from "./pages/transparency/BayanihanGrant";
import InvitationToBid from "./pages/transparency/InvitationToBid";
import NoticeOfAward from "./pages/transparency/NoticeOfAward";
import NoticeToProceed from "./pages/transparency/NoticeToProceed";
import ContractAgreement from "./pages/transparency/ContractAgreement";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import ComingSoon from "./pages/ComingSoon";
import TravelGuide from "./pages/TravelGuide";
import FestivalCalendar from "./pages/FestivalCalendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/governance/mayor" element={<Mayor />} />
            <Route path="/governance/sangguniang-bayan" element={<SangguniangBayan />} />
            <Route path="/governance/offices" element={<Offices />} />
            <Route path="/governance/department-heads" element={<Offices />} />
            <Route path="/news" element={<News />} />
            <Route path="/governance/development-agenda" element={<DevelopmentAgenda />} />
            <Route path="/services" element={<Services />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/tourism/civic-activities" element={<CivicActivities />} />
            <Route path="/tourism/festivals" element={<FestivalCalendar />} />
            <Route path="/tourism/what-to-do" element={<WhatToDo />} />
            <Route path="/tourism/destination/:id" element={<DestinationDetail />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/transparency/full-disclosure" element={<FullDisclosure />} />
            <Route path="/transparency/lgsf" element={<LGSF />} />
            <Route path="/transparency/bayanihan-grant" element={<BayanihanGrant />} />
            <Route path="/transparency/invitation-to-bid" element={<InvitationToBid />} />
            <Route path="/transparency/notice-of-award" element={<NoticeOfAward />} />
            <Route path="/transparency/notice-to-proceed" element={<NoticeToProceed />} />
            <Route path="/transparency/contract-agreement" element={<ContractAgreement />} />
            <Route path="/project-tracking" element={<ProjectTracking />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

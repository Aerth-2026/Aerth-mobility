/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import SkillDevelopment from "./pages/SkillDevelopment";
import ComponentRepair from "./pages/ComponentRepair";
import BatteryServicing from "./pages/BatteryServicing";
import OEMCollaboration from "./pages/OEMCollaboration";
import Partners from "./pages/Partners";
import SkillCenters from "./pages/SkillCenters";
import MaaS from "./pages/MaaS";
import IndustrySolutions from "./pages/IndustrySolutions";
import ServiceCenters from "./pages/ServiceCenters";
import JointVentures from "./pages/JointVentures";
import About from "./pages/About";
import Core from "./pages/Core";
import Council from "./pages/Council";
import Legal from "./pages/Legal";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Testimonials from "./pages/Testimonials";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="core" element={<Core />} />
          <Route path="council" element={<Council />} />
          <Route path="legal" element={<Legal />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="skill-development" element={<SkillDevelopment />} />
          <Route path="component-repair" element={<ComponentRepair />} />
          <Route path="battery-servicing" element={<BatteryServicing />} />
          <Route path="oem-collaboration" element={<OEMCollaboration />} />
          <Route path="partners" element={<Partners />} />
          <Route path="skill-centers" element={<SkillCenters />} />
          <Route path="maas" element={<MaaS />} />
          <Route path="industry-solutions" element={<IndustrySolutions />} />
          <Route path="service-centers" element={<ServiceCenters />} />
          <Route path="joint-ventures" element={<JointVentures />} />
        </Route>
      </Routes>
    </Router>
  );
}

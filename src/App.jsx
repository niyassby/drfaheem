import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './app/Home'
import About from './app/About'
import Navbar from './components/Navbar/Navbar'
import ExploreMore from './app/ExploreMore'
import Team from './app/Team'
import HeartHealthSolutions from './app/HeartHealthSolutions'
import ReverseDiabetes from './app/ReverseDiabetes'
import IntegrativeCancer from './app/IntegrativeCancer'
import MetabolicSyndrome from './app/MetabolicSyndrome'
import StrokeRecovery from './app/StrokeRecovery'
import PcodReversal from './app/PcodReversal'
import ReverseFattyLiver from './app/ReverseFattyLiver'
import AutoImmuneCare from './app/AutoImmuneCare'
import FertilityCare from './app/FertilityCare'
import JointPainManagement from './app/JointPainManagement'







import { EDTA_Chelation_Therapy, coffee_enema_page, eecp_therapy_page, fir_sauna_page, iv_glutathione_page, iv_nutrition_drips_page, iv_vitamin_c_page, medicinal_cannabis_page, ozone_therapy_page } from './components/Util/programs'
import ScrollToTop from './components/Util/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-1" element={<ExploreMore data={EDTA_Chelation_Therapy} />} />
        <Route path="/explore-2" element={<ExploreMore data={ozone_therapy_page} />} />
        <Route path="/explore-3" element={<ExploreMore data={iv_vitamin_c_page} />} />
        <Route path="/explore-4" element={<ExploreMore data={iv_nutrition_drips_page} />} />
        <Route path="/explore-5" element={<ExploreMore data={eecp_therapy_page} />} />
        <Route path="/explore-6" element={<ExploreMore data={fir_sauna_page} />} />
        <Route path="/explore-7" element={<ExploreMore data={iv_glutathione_page} />} />
        <Route path="/explore-8" element={<ExploreMore data={coffee_enema_page} />} />
        <Route path="/explore-9" element={<ExploreMore data={medicinal_cannabis_page} />} />

        <Route path="/heart-health" element={<HeartHealthSolutions />} />
        <Route path="/reverse-diabetes" element={<ReverseDiabetes />} />
        <Route path="/integrative-cancer" element={<IntegrativeCancer />} />
        <Route path="/metabolic-syndrome" element={<MetabolicSyndrome />} />
        <Route path="/stroke-recovery" element={<StrokeRecovery />} />
        <Route path="/pcod" element={<PcodReversal />} />
        <Route path="/reverse-fatty-liver" element={<ReverseFattyLiver />} />
        <Route path="/auto-immune-care" element={<AutoImmuneCare />} />
        <Route path="/fertility-care" element={<FertilityCare />} />
        <Route path="/joint-pain-management" element={<JointPainManagement />} />







        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </HashRouter>
  )
}

export default App
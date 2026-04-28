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
import AntiAging from './app/AntiAging'
import HairRestoration from './app/HairRestoration'
import ImmunoOptimization from './app/ImmunoOptimization'
import HangoverRecovery from './app/HangoverRecovery'
import SkinRevitalization from './app/SkinRevitalization'
import GutRestoration from './app/GutRestoration'
import MindBodyBalance from './app/MindBodyBalance'
import ChelationTherapyPage from './components/treatments/EdtaChelonTherapy'
import ElderCarePage from './app/AdvancedGeriatric'
import OzoneTherapy from './app/OzoneTherapy'
import EecpTherapy from './app/EecpTherapy'
import FirSaunaTherapy from './app/FirSaunaTherapy'
import MedicinalCannabis from './app/MedicinalCannabis'
import CoffeeEnema from './app/CoffeeEnema'
import IVNutritionDrips from './app/IVNutritionDrips'
import LongCovidRecovery from './app/LongCovidRecovery'
import PeptideTherapy from './app/PeptideTherapy'
import Academics from './components/academics/Academics'
import WeddingWellnessIV from './app/WeddingWellnessIV'
import CorporateWellnessDetox from './app/CorporateWellnessDetox'
import HydrogenTherapy from './app/HydrogenTherapy'
import EbooTherapy from './app/EbooTherapy'

import AdminBlogList from './app/admin/AdminBlogList'
import PostEditor from './app/admin/PostEditor'
import AdminAuthorList from './app/admin/AdminAuthorList'
import AuthorEditor from './app/admin/AuthorEditor'
import AdminLogin from './app/admin/AdminLogin'
import ProtectedRoute from './components/admin/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import BlogList from './app/blog/BlogList'
import BlogPost from './app/blog/BlogPost'
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <AuthProvider>
      <HashRouter>
      <Toaster position="bottom-right" />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-1" element={<ChelationTherapyPage />} />
        <Route path="/explore-2" element={<OzoneTherapy />} />
        <Route path="/eboo-therapy" element={<EbooTherapy />} />
        <Route
          path="/explore-3"
          element={<ExploreMore data={iv_vitamin_c_page} />}
        />
        <Route path="/explore-4" element={<IVNutritionDrips />} />
        <Route path="/explore-5" element={<EecpTherapy />} />
        <Route path="/explore-6" element={<FirSaunaTherapy />} />
        <Route
          path="/explore-7"
          element={<ExploreMore data={iv_glutathione_page} />}
        />
        <Route path="/explore-8" element={<CoffeeEnema />} />
        <Route path="/explore-9" element={<MedicinalCannabis />} />
        <Route path="/explore-10" element={<PeptideTherapy />} />

        <Route path="/heart-health" element={<HeartHealthSolutions />} />
        <Route path="/reverse-diabetes" element={<ReverseDiabetes />} />
        <Route path="/integrative-cancer" element={<IntegrativeCancer />} />
        <Route path="/metabolic-syndrome" element={<MetabolicSyndrome />} />
        <Route path="/stroke-recovery" element={<StrokeRecovery />} />
        <Route path="/pcod" element={<PcodReversal />} />
        <Route path="/reverse-fatty-liver" element={<ReverseFattyLiver />} />
        <Route path="/auto-immune-care" element={<AutoImmuneCare />} />
        <Route path="/fertility-care" element={<FertilityCare />} />
        <Route
          path="/joint-pain-management"
          element={<JointPainManagement />}
        />

        <Route path="/anti-aging" element={<AntiAging />} />
        <Route path="/hair-restoration" element={<HairRestoration />} />
        <Route path="/immune-optimization" element={<ImmunoOptimization />} />
        <Route path="/hangover-recovery" element={<HangoverRecovery />} />
        <Route path="/skin-revitalization" element={<SkinRevitalization />} />
        <Route path="/gutRestoration" element={<GutRestoration />} />
        <Route path="/MindBodyBalance" element={<MindBodyBalance />} />
        <Route path="/ElderCarePage" element={<ElderCarePage />} />
        <Route path="/long-covid-recovery" element={<LongCovidRecovery />} />
        <Route path="/wedding-wellness-iv" element={<WeddingWellnessIV />} />
        <Route path="/corporate-wellness-detox" element={<CorporateWellnessDetox />} />
        <Route path="/hydrogen-therapy" element={<HydrogenTherapy />} />


        <Route path="/about" element={<About />} />
        <Route path="/panel" element={<Team />} />
        <Route path='/academics' element={<Academics />} />
        
        {/* Blog CMS Setup */}
        <Route path="/explore-blogs" element={<BlogList />} />
        <Route path="/explore-blog/:slug" element={<BlogPost />} />
        
        {/* Admin Setup */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/blog" element={<AdminBlogList />} />
          <Route path="/admin/blog/edit/:id" element={<PostEditor />} />
          <Route path="/admin/authors" element={<AdminAuthorList />} />
          <Route path="/admin/authors/edit/:id" element={<AuthorEditor />} />
        </Route>
      </Routes>
    </HashRouter>
    </AuthProvider>
  );
}


export default App
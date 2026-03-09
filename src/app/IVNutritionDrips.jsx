import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Droplet, Sparkles, Zap, ShieldCheck, Flame,
  Star, Clock, Leaf, Bone, Heart, Wind, ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';

/* ─────────────────────── DATA ─────────────────────── */
const categories = [
  {
    id: "beauty-detox",
    label: "Beauty & Detox",
    icon: <Sparkles />,
    palette: {
      light: "bg-rose-50",
      border: "border-rose-200",
      badge: "bg-rose-100 text-rose-700 border-rose-200",
      pill: "bg-rose-500",
      dot: "bg-rose-400",
      btn: "bg-rose-600 hover:bg-rose-700",
      tag: "text-rose-600",
    },
    drips: [
      {
        title: "Liver Detox",
        tagline: "Detox for Balance & Vitality",
        description: "Feel lighter, fresher, and more energized as this powerful detox flushes out toxins, revives your liver, and resets your body from the inside out",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Helps cleanse the body of accumulated toxins", "Supports liver regeneration and repair", "Boosts metabolism and digestion", "Improves overall energy and vitality"],
        icon: <Droplet />,
      },
      {
        title: "Collagen Booster",
        tagline: "Look Younger, Feel Radiant",
        description: "Stimulates collagen production to smooth fine lines, improve skin firmness, and support stronger hair and nails for a youthful glow",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Reduces fine lines and wrinkles", "Improves skin elasticity", "Supports hair and nail strength", "Promotes youthful, supple appearance"],
        icon: <Sparkles />,
      },
      {
        title: "Skin Glow & Hydration",
        tagline: "Radiate From Within",
        description: "Nourishes your skin from within, boosting hydration and brightness for a naturally radiant, youthful-looking complexion",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Improves hydration and elasticity", "Reduces dullness and uneven tone", "Promotes natural skin repair", "Gives a healthy, luminous glow"],
        icon: <Star />,
      },
    ],
  },
  {
    id: "immune-power",
    label: "Immune & Power Boost",
    icon: <ShieldCheck />,
    palette: {
      light: "bg-indigo-50",
      border: "border-indigo-200",
      badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
      pill: "bg-indigo-500",
      dot: "bg-indigo-400",
      btn: "bg-indigo-600 hover:bg-indigo-700",
      tag: "text-indigo-600",
    },
    drips: [
      {
        title: "Immune Booster",
        tagline: "Defend. Protect. Thrive.",
        description: "Strengthens your immune system to help fight off infections, recover faster, and stay resilient against everyday illnesses",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Enhances white blood cell activity", "Reduces frequency of colds and infections", "Supports faster recovery from illness", "Increases overall immune resilience"],
        icon: <ShieldCheck />,
      },
      {
        title: "Energy Booster",
        tagline: "Recharge Your Vitality",
        description: "Recharges your body by boosting cellular energy, sharpening focus, and giving you lasting vitality throughout the day",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Combats chronic fatigue", "Improves mental focus and alertness", "Boosts cellular energy production", "Supports overall performance and stamina"],
        icon: <Zap />,
      },
      {
        title: "Metabolism Booster",
        tagline: "Ignite Your Inner Engine",
        description: "Revs up your metabolism by supporting energy production, fat breakdown, and overall vitality to help you feel lighter and more active",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Enhances fat and carbohydrate breakdown", "Supports thyroid and energy production", "Reduces fatigue and sluggishness", "Aids in weight management efforts"],
        icon: <Flame />,
      },
    ],
  },
  {
    id: "anti-aging",
    label: "Anti Aging Series",
    icon: <Star />,
    palette: {
      light: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
      pill: "bg-amber-500",
      dot: "bg-amber-400",
      btn: "bg-amber-600 hover:bg-amber-700",
      tag: "text-amber-600",
    },
    drips: [
      {
        title: "Myers Cocktail",
        tagline: "All-in-One Nutrient Infusion",
        description: "A powerful all-in-one nutrient infusion designed to restore energy, enhance immunity, and improve overall physical and mental performance",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Revitalizes energy at the cellular level", "Delivers rapid wellness benefits in a single session", "Enhances cellular repair and regeneration", "Promotes youthful energy and skin vitality"],
        icon: <Heart />,
      },
      {
        title: "Ultimate All In One",
        tagline: "Total Body Rejuvenation",
        description: "Recharges your body by boosting cellular energy, sharpening focus, and giving you lasting vitality throughout the day",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Restores hydration and balance for total body rejuvenation", "Reduces inflammation, stress, and oxidative damage", "Activates deep cellular repair and anti-aging pathways", "Promotes long-term wellness and vitality"],
        icon: <Sparkles />,
      },
      {
        title: "NAD+",
        tagline: "Turn Back Time on a Cellular Level",
        description: "Turn back time on a cellular level with NAD+ — a powerful coenzyme infusion that restores youthful energy, repairs DNA, and revitalizes your mind and body for peak longevity",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Activates deep cellular repair to slow aging", "Boosts natural energy by optimizing mitochondrial function", "Enhances cognitive performance and emotional balance", "Supports detoxification, resilience, and longevity"],
        icon: <Clock />,
      },
    ],
  },
  {
    id: "relief-restore",
    label: "Relief & Restore",
    icon: <Leaf />,
    palette: {
      light: "bg-emerald-50",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      pill: "bg-emerald-500",
      dot: "bg-emerald-400",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      tag: "text-emerald-600",
    },
    drips: [
      {
        title: "Pain Management",
        tagline: "Heal from Within",
        description: "Combats inflammation and supports natural healing, helping reduce chronic aches, muscle soreness, and joint discomfort",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Helps relieve muscle and joint pain", "Reduces oxidative stress and inflammation", "Speeds up recovery from injuries", "Supports nerve and tissue health"],
        icon: <Zap />,
      },
      {
        title: "Bone Health",
        tagline: "Strengthen Your Foundation",
        description: "Delivers essential nutrients that strengthen bones, protect against osteoporosis, and keep your joints and muscles functioning at their best",
        image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Provides essential nutrients to strengthen bones and joints", "Aids bone density and strength", "Reduces risk of osteoporosis", "Supports joint and muscle function"],
        icon: <Bone />,
      },
      {
        title: "Stress Relief",
        tagline: "Calm Your Mind, Restore Your Body",
        description: "Helps calm the mind and body by reducing tension, balancing stress hormones, and promoting relaxation for better mood and sleep",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800&h=500",
        points: ["Calms the nervous system naturally", "Balances cortisol and stress hormones", "Promotes deeper, more restful sleep", "Gives a sense of calm and clarity"],
        icon: <Wind />,
      },
    ],
  },
];


/* ─────────────── DRIP CARD ─────────────── */
const DripCard = ({ drip, palette, idx, onBook }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: idx * 0.07 }}
    viewport={{ once: true, margin: "-40px" }}
    className={`bg-white rounded-[1.75rem] border ${palette.border} overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-md`}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden shrink-0">
      <img
        src={drip.image}
        alt={drip.title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wide ${palette.badge}`}>
        {React.cloneElement(drip.icon, { className: "w-3 h-3" })}
        {drip.title}
      </span>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${palette.tag}`}>{drip.tagline}</p>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">{drip.description}</p>

      <ul className="space-y-2 mb-6">
        {drip.points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${palette.dot}`}></div>
            <span className="text-slate-500 text-sm leading-relaxed">{pt}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onBook(drip.title)}
        className={`inline-flex items-center justify-center gap-2 text-sm font-bold text-white py-3 px-6 rounded-xl ${palette.btn} transition-all duration-200 group/btn w-full`}
      >
        Schedule a Consultation
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

/* ─────────────── SMOOTH SCROLL ─────────────── */
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ─────────────── PAGE ─────────────── */
const IVNutritionDrips = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Existing Appointment Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
          <DialogHeader className="p-0">
            <ContactInput />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-50/80 to-white pointer-events-none rounded-bl-[8rem]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-50/60 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/90 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                <Droplet className="w-4 h-4" /> IV Nutrition Therapy
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                IV Nutrition
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500">
                  Drips
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg font-medium">
                IV Nutrition Drips are one of the fastest ways to restore nutritional balance — delivering 100% absorption directly into the bloodstream, bypassing the digestive tract entirely.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openModal()}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:bg-indigo-700 hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-1"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={() => scrollTo('categories')}
                  className="bg-slate-100 border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all duration-300"
                >
                  Explore Drips
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12">
                {[
                  { val: "12+", label: "Drip Protocols" },
                  { val: "100%", label: "Absorption" },
                  { val: "30–60", label: "Min per Session" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-extrabold text-slate-900">{s.val}</p>
                    <p className="text-sm font-medium text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: image mosaic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 grid grid-cols-12 grid-rows-2 gap-4 h-[420px]"
            >
              <div className="col-span-7 row-span-2 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" alt="IV therapy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-1 rounded-[1.5rem] overflow-hidden border-4 border-white shadow-md">
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=500" alt="Immune boost" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-1 rounded-[1.5rem] overflow-hidden border-4 border-white shadow-md">
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500" alt="Beauty drip" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Introduction & Treatment ── */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
                <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Introduction</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 leading-tight">
                Restoring Nutritional Balance from Within
              </h2>
              <p className="text-slate-600 leading-relaxed">
                IV Nutrition Drips are one of the fastest ways to restore nutritional balance in the body. In today's lifestyle, poor diet, stress, and impaired gut absorption often lead to micronutrient deficiencies that cannot be corrected through oral supplementation alone. Tigris Valley, acknowledged as a <strong className="text-slate-800">best functional medicine centre in Thrissur and Kochi</strong>, provides customized IV nutrition drips designed to restore energy, enhance immunity, and support long-term health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-violet-500 rounded-full"></div>
                <span className="text-violet-600 text-sm font-bold uppercase tracking-widest">Treatment Information</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 leading-tight">
                Tailored Protocols for Every Need
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Tigris Valley's IV drips are formulated based on individual needs after a complete health assessment. The most common protocol is the <strong className="text-slate-800">Myers Cocktail</strong>, which combines Vitamin C, Magnesium, Calcium, and B Complex vitamins. Other drips may include trace minerals, amino acids, or glutathione depending on patient goals. Infusions last 30–60 minutes, delivering <strong className="text-slate-800">100% absorption</strong> and rapid results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sticky Tab Nav ── */}
      <div id="categories" className="py-5 bg-white border-y border-slate-100 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setTimeout(() => scrollTo(cat.id), 50);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border ${activeTab === cat.id
                    ? `${cat.palette.pill} text-white border-transparent shadow-md`
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  }`}
              >
                {React.cloneElement(cat.icon, { className: "w-4 h-4" })}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Sections ── */}
      <div>
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-24 border-t border-slate-100 ${cat.palette.light}`}
          >
            <div className="container mx-auto px-6 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cat.palette.badge} flex items-center justify-center border`}>
                      {React.cloneElement(cat.icon, { className: "w-5 h-5" })}
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-widest ${cat.palette.tag}`}>{cat.label}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">{cat.label}</h2>
                </div>
                <p className="text-slate-500 font-medium max-w-xs md:text-right text-[15px]">
                  {cat.drips.length} specialized IV protocols — each tailored for targeted results.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.drips.map((drip, i) => (
                  <DripCard key={drip.title} drip={drip} palette={cat.palette} idx={i} onBook={openModal} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold uppercase tracking-widest text-white/80 mb-8">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Medical Supervision
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Restore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                Your Vitality?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Speak to our medical team at Tigris Valley. Every IV drip protocol is customized to your health profile for maximum safety and results.
            </p>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVNutritionDrips;

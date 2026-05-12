import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const PROTOCOLS = [
  {
    id: '01',
    label: 'PROTOCOL_01',
    title: 'Performance Trajectory Modeling',
    body: 'Latent growth curve models and multilevel regression capture individual and group-level change over time — revealing patterns obscured by aggregate averages.',
  },
  {
    id: '02',
    label: 'PROTOCOL_02',
    title: 'Psychometric Validation',
    body: 'Factor analysis, IRT, and internal consistency testing verify that behavioral measurement instruments capture the constructs they claim to measure.',
  },
  {
    id: '03',
    label: 'PROTOCOL_03',
    title: 'Physiological-Behavioral Correlation',
    body: 'Multivariate regression and structural equation modeling establish the quantitative relationships between physiological markers and behavioral outputs.',
  },
  {
    id: '04',
    label: 'PROTOCOL_04',
    title: 'Predictive Risk Modeling',
    body: 'Logistic regression, classification trees, and survival analysis identify early indicators of performance decline, burnout, or health risk across cohorts.',
  },
];

export function HumanBehaviorPage() {
  return (
    <div className="antialiased min-h-screen bg-[#F7F7F5]">

      {/* Status bar */}
      <div className="w-full bg-[#1B1B1B] text-[#E2E2E2] py-1.5 px-4 md:px-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-[#4682B4] animate-pulse shadow-[0_0_8px_#4682B4]" />
          <span className="text-[9px] mono tracking-[0.3em] opacity-70 uppercase">Practice_Node // Human Behavior</span>
        </div>
        <span className="text-[9px] mono tracking-[0.3em] opacity-50 uppercase font-light hidden sm:block">
          Domain: <span className="text-[#4682B4] opacity-100">BEHAVIORAL_ANALYTICS</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1 md:py-2 flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <ImageWithFallback
              src="https://i.ibb.co/bMLxFNT8/logo-new-version.png"
              alt="Chau Analytics Logo"
              className="h-16 md:h-24 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="group relative flex-shrink-0 flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-[#E2E2E2] bg-[#1B1B1B] px-5 py-3 overflow-hidden transition-all whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1B1B1B] transition-colors duration-300">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </span>
            <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[45vh] flex items-end overflow-hidden bg-[#1B1B1B]">
        <ImageWithFallback
          src="https://i.ibb.co/SDHky7cq/Pic-box3-athlete.jpg"
          alt="Human Behavior"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#4682B4]" />
            <span className="mono text-[10px] text-[#4682B4] uppercase tracking-[0.4em]">Specialized Practice // 03</span>
          </div>
          <h1 className="anta text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-4">
            Human <span className="text-[#4682B4]">Behavior</span>
          </h1>
          <p className="text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-white/20 pl-5">
            Quantitative modeling of performance, behavior, and systemic health — translating human variability into actionable statistical insight.
          </p>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-2">
            <p className="mono text-[10px] text-[#4682B4] uppercase tracking-[0.4em] mb-4">Overview</p>
            <h2 className="anta text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#1B1B1B] leading-none mb-6">
              Modeling the <span className="text-[#4682B4]">Human Variable.</span>
            </h2>
            <div className="space-y-4 text-slate-600 font-light leading-relaxed">
              <p>
                Human behavior is the most complex signal in research science. It is simultaneously the most studied and the most misrepresented variable in applied analytics. Chau Analytics brings experimental psychology training and biostatistical precision to performance science, behavioral health, and human optimization research.
              </p>
              <p>
                From elite military and athletic cohorts to clinical populations, we apply multilevel modeling, psychometric validation, and predictive analytics to extract meaningful signal from the inherent noise of human variability. Our methods are rooted in theory-driven design — not exploratory fishing.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Populations', val: 'Athletes, Military, Clinical' },
              { label: 'Methods', val: 'HLM, SEM, IRT, GLM' },
              { label: 'Instruments', val: 'Validated Psychometric Scales' },
              { label: 'Output', val: 'Performance Reports, Manuscripts' },
            ].map(item => (
              <div key={item.label} className="border border-black/8 p-4 bg-white">
                <p className="mono text-[9px] text-slate-400 uppercase tracking-[0.3em] mb-1">{item.label}</p>
                <p className="mono text-[11px] text-[#1B1B1B] font-bold uppercase tracking-wide">{item.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol cards */}
        <p className="mono text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-6">Analytical_Protocols</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-16">
          {PROTOCOLS.map(card => (
            <div
              key={card.id}
              className="p-6 md:p-8 border border-[#E2E2E2] hover:border-[#4682B4]/40 hover:shadow-[0_0_24px_rgba(70,130,180,0.10)] transition-all duration-300 group bg-white relative overflow-hidden"
            >
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#4682B4]/0 group-hover:border-[#4682B4]/50 transition-all duration-300" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#4682B4]/0 group-hover:border-[#4682B4]/50 transition-all duration-300" />
              <span className="mono text-[10px] text-[#4682B4] font-bold block mb-3">{card.label}</span>
              <h4 className="font-bold uppercase tracking-tight text-[#1B1B1B] mb-2">{card.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Footer sig */}
        <div className="pt-8 border-t border-black/8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#4682B4]" />
            <span className="mono text-[9px] text-slate-400 uppercase tracking-widest">Human Behavior // Chau Analytics</span>
          </div>
          <Link to="/" className="mono text-[10px] text-[#4682B4] uppercase tracking-widest hover:underline underline-offset-4 whitespace-nowrap">
            ← Return to Main Site
          </Link>
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1B1B1B] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="mono text-[10px] text-slate-500 uppercase tracking-[0.4em] mb-4">Ready to begin?</p>
          <h2 className="anta text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase text-white mb-4">
            DEPLOY YOUR <span className="text-[#4682B4]">SCIENCE</span> WITH US.
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto mb-10">
            Every engagement starts with a rigorous methodology proposal. Let's build yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group relative w-full sm:w-auto bg-[#4682B4] text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all shadow-xl text-center whitespace-nowrap"
            >
              <span className="relative z-10 group-hover:text-[#1B1B1B] transition-colors duration-300">INITIATE_INQUIRY</span>
              <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            <Link
              to="/"
              className="group relative w-full sm:w-auto border border-white/20 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all text-center whitespace-nowrap"
            >
              <span className="relative z-10 group-hover:text-[#1B1B1B] transition-colors duration-300">← Back to Site</span>
              <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

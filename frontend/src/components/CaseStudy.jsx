import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Sparkles,
  Wrench,
  Target,
  Search,
  Lightbulb,
  TrendingUp,
  Compass,
  CheckCircle2,
  AlertTriangle,
  CheckCircle,
  Activity,
  Workflow,
  Map,
  PenTool,
  Layout,
  Play,
} from 'lucide-react';
import { projects, profile, RESUME_URL } from '../mock';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Case study not found</h1>
          <Link to="/" className="btn-primary">
            Back home
          </Link>
        </div>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.id === id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 bg-[#0F0F1A]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[14px] text-white/75 hover:text-[#00F5D4] transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4]">
              <Sparkles size={15} className="text-[#0F0F1A]" strokeWidth={2.5} />
            </div>
            <span className="font-display font-semibold text-[15px]">
              {profile.name.split(' ')[0]}.
            </span>
          </Link>
          <a
            href={RESUME_URL}
            download
            className="text-[13px] text-white/75 hover:text-white link-underline"
          >
            Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-12 overflow-hidden">
        <div className="hero-orb orb-purple" style={{ opacity: 0.4 }} />
        <div className="hero-orb orb-aqua" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11.5px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/85">
              {project.tag}
            </span>
            <span className="text-[11.5px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/85">
              {project.year}
            </span>
            {project.chips?.map((c) => (
              <span
                key={c}
                className="text-[11.5px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/85"
              >
                {c}
              </span>
            ))}
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] text-white/65 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            <Meta icon={User} label="Role" value={project.role} />
            <Meta icon={Calendar} label="Duration" value={project.timeline} />
            <Meta icon={Wrench} label="Tools" value={project.tools || '—'} />
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[28px] overflow-hidden glass-strong p-2.5">
            <div
              className="relative aspect-[16/10] rounded-[22px] overflow-hidden"
              style={{
                background:
                  project.coverBg ||
                  `linear-gradient(135deg, ${project.accent}22 0%, #14142B 100%)`,
              }}
            >
              <img
                src={project.rich?.heroImage || project.cover}
                alt={project.title}
                className={`w-full h-full ${
                  project.coverFit === 'contain'
                    ? 'object-contain p-6 sm:p-10'
                    : 'object-cover'
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      {project.rich ? (
        <RichCaseStudy project={project} />
      ) : (
        <BasicCaseStudy project={project} />
      )}

      {/* NEXT PROJECT */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/45 mb-4">
            Next case study
          </div>
          <Link
            to={`/case-study/${next.id}`}
            className="group block glass rounded-[24px] p-6 md:p-8 hover:border-[#00F5D4]/30 transition-all"
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-[12px] uppercase tracking-wider text-white/55">
                  {next.tag}
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-semibold mt-2 tracking-tight">
                  {next.title}
                </h3>
              </div>
              <div className="w-14 h-14 shrink-0 rounded-full grid place-items-center bg-white/5 border border-white/10 group-hover:bg-[#00F5D4] group-hover:text-[#0F0F1A] group-hover:border-[#00F5D4] transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-white/45">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[13px] text-white/65">
            <a href={`mailto:${profile.email}`} className="link-underline">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              LinkedIn
            </a>
            <a href={RESUME_URL} download className="link-underline">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =================== RICH CASE STUDY (LAYOUT-DRIVEN) =================== */
const SECTION_META = {
  overview: { icon: Compass, title: 'Overview' },
  goal: { icon: Target, title: 'Goal' },
  research: { icon: Search, title: 'Research Insights' },
  problem: { icon: AlertTriangle, title: 'The Problem' },
  solution: { icon: CheckCircle, title: 'The Solution' },
  challenges: { icon: Activity, title: 'Challenges' },
  marketResearch: { icon: TrendingUp, title: 'Market Research' },
  userFlow: { icon: Workflow, title: 'User Flow' },
  sitemap: { icon: Map, title: 'Sitemap' },
  wireframes: { icon: PenTool, title: 'Wireframes' },
  walkthrough: { icon: Layout, title: 'Final UI Walkthrough' },
  prototype: { icon: Play, title: 'Prototype' },
  designGoals: { icon: Lightbulb, title: 'Design Goals' },
  features: { icon: Sparkles, title: 'Key Features' },
  impact: { icon: TrendingUp, title: 'Impact' },
  future: { icon: Compass, title: 'Future Opportunities' },
  conclusion: { icon: Sparkles, title: 'Conclusion' },
};

function RichCaseStudy({ project }) {
  const r = project.rich;
  const layout =
    r.layout || [
      'overview',
      'goal',
      'research',
      'features',
      'designGoals',
      'impact',
      'future',
      'conclusion',
    ];

  return (
    <div className="relative py-20 md:py-28">
      <div className="space-y-20 md:space-y-24">
        {layout.map((key, i) => {
          const num = String(i + 1).padStart(2, '0');
          const meta = SECTION_META[key] || { icon: Sparkles, title: key };
          return (
            <SectionRouter
              key={key}
              type={key}
              data={r[key]}
              num={num}
              meta={meta}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
}

function SectionRouter({ type, data, num, meta, project }) {
  if (data === undefined || data === null) return null;
  const accent = project.accent;

  switch (type) {
    case 'overview':
      return <OverviewSection text={data} num={num} meta={meta} />;
    case 'goal':
      return <GoalSection data={data} num={num} meta={meta} accent={accent} />;
    case 'research':
      return <ResearchSection data={data} num={num} meta={meta} accent={accent} />;
    case 'problem':
      return <ProblemSection data={data} num={num} meta={meta} accent={accent} />;
    case 'solution':
      return <SolutionSection data={data} num={num} meta={meta} accent={accent} />;
    case 'challenges':
      return <ChallengesSection items={data} num={num} meta={meta} accent={accent} />;
    case 'marketResearch':
      return <MarketResearchSection data={data} num={num} meta={meta} accent={accent} />;
    case 'userFlow':
    case 'sitemap':
      return <SingleImageSection data={data} num={num} meta={meta} />;
    case 'wireframes':
      return <WireframesSection data={data} num={num} meta={meta} />;
    case 'walkthrough':
      return <WalkthroughSection data={data} num={num} meta={meta} accent={accent} />;
    case 'prototype':
      return <PrototypeSection data={data} num={num} meta={meta} accent={accent} />;
    case 'designGoals':
      return <DesignGoalsSection items={data} num={num} meta={meta} accent={accent} />;
    case 'features':
      return <FeaturesSection items={data} num={num} meta={meta} accent={accent} />;
    case 'impact':
      return <ImpactSection items={data} num={num} meta={meta} accent={accent} />;
    case 'future':
      return <FutureSection items={data} num={num} meta={meta} />;
    case 'conclusion':
      return <ConclusionSection data={data} num={num} meta={meta} accent={accent} />;
    default:
      return null;
  }
}

/* ============== Section components ============== */
function OverviewSection({ text, num, meta }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <div className="text-[15.5px] md:text-[16px] text-white/70 leading-[1.85] mt-5">
        <p>{text}</p>
      </div>
    </Container>
  );
}

function GoalSection({ data, num, meta, accent }) {
  const text = typeof data === 'string' ? data : data.text;
  const image = typeof data === 'object' ? data.image : null;
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} accent={accent} />
      <div className="relative rounded-2xl overflow-hidden mt-5">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${accent}18 0%, transparent 100%)`,
          }}
        />
        <div
          className="relative glass rounded-2xl px-6 md:px-8 py-6 border-l-2"
          style={{ borderLeftColor: accent }}
        >
          <p className="font-display text-lg md:text-[22px] leading-snug text-white/95">
            {text}
          </p>
        </div>
      </div>
      {image && (
        <div className="mt-6 relative rounded-[20px] overflow-hidden glass-strong p-2">
          <div className="rounded-[14px] overflow-hidden bg-white flex items-center justify-center max-h-[460px]">
            <img
              src={image}
              alt="Goal"
              loading="lazy"
              className="w-full h-auto max-h-[460px] object-contain"
            />
          </div>
        </div>
      )}
    </Container>
  );
}

function ResearchSection({ data, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      {data.summary && (
        <p className="text-[15.5px] text-white/70 leading-[1.8] mt-5">
          {data.summary}
        </p>
      )}
      {data.stats && (
        <div className="grid sm:grid-cols-3 gap-4 mt-7">
          {data.stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <div
                className="font-display text-4xl md:text-5xl font-semibold"
                style={{ color: accent }}
              >
                {s.value}
              </div>
              <div className="text-[12.5px] text-white/65 mt-2 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
      {data.image && (
        <div className="mt-7 relative rounded-[20px] overflow-hidden glass-strong p-2">
          <div className="rounded-[14px] overflow-hidden bg-white flex items-center justify-center max-h-[460px]">
            <img
              src={data.image}
              alt="Research"
              loading="lazy"
              className="w-full h-auto max-h-[460px] object-contain"
            />
          </div>
        </div>
      )}
    </Container>
  );
}

function ProblemSection({ data, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} accent={accent} />
      {data.summary && (
        <p className="text-[15.5px] text-white/70 leading-[1.8] mt-5">
          {data.summary}
        </p>
      )}
      {data.stats && (
        <div className="grid sm:grid-cols-3 gap-4 mt-7">
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl"
                style={{ background: `${accent}25` }}
              />
              <div className="relative">
                <div
                  className="font-display text-4xl md:text-5xl font-semibold"
                  style={{ color: accent }}
                >
                  {s.value}
                </div>
                <div className="text-[13px] text-white/70 mt-2 leading-relaxed">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

function SolutionSection({ data, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} accent={accent} />
      {data.summary && (
        <p className="text-[15.5px] text-white/70 leading-[1.8] mt-5">
          {data.summary}
        </p>
      )}
      {data.items && (
        <ul className="grid sm:grid-cols-2 gap-3 mt-6">
          {data.items.map((it) => (
            <li
              key={it}
              className="glass rounded-2xl px-5 py-4 flex items-start gap-3"
            >
              <div
                className="w-8 h-8 shrink-0 rounded-lg grid place-items-center mt-0.5"
                style={{
                  background: `${accent}18`,
                  border: `1px solid ${accent}40`,
                  color: accent,
                }}
              >
                <CheckCircle size={15} />
              </div>
              <span className="text-[14.5px] text-white/85 leading-relaxed">
                {it}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

function ChallengesSection({ items, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {items.map((c, i) => (
          <div
            key={c.title}
            className="service-tile h-full"
          >
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-xl grid place-items-center"
                style={{
                  background: `${accent}22`,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: accent,
                }}
              >
                <AlertTriangle size={18} />
              </div>
              {c.tag && (
                <span className="text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/55">
                  {c.tag}
                </span>
              )}
            </div>
            <h4 className="font-display text-[18px] font-semibold mt-5 tracking-tight">
              {c.title}
            </h4>
            <p className="mt-2 text-[14px] text-white/60 leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

function MarketResearchSection({ data, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      {data.summary && (
        <p className="text-[15.5px] text-white/70 leading-[1.8] mt-5">
          {data.summary}
        </p>
      )}
      {data.stats && (
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 flex items-center gap-5"
            >
              <div
                className="font-display text-3xl md:text-4xl font-semibold shrink-0"
                style={{ color: accent }}
              >
                {s.value}
              </div>
              <div className="text-[13.5px] text-white/70 leading-relaxed">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
      {data.image && (
        <div className="mt-7 relative rounded-[20px] overflow-hidden glass-strong p-2">
          <div className="rounded-[14px] overflow-hidden bg-white flex items-center justify-center max-h-[520px]">
            <img
              src={data.image}
              alt="Market research"
              loading="lazy"
              className="w-full h-auto max-h-[520px] object-contain"
            />
          </div>
        </div>
      )}
    </Container>
  );
}

function SingleImageSection({ data, num, meta }) {
  return (
    <Container wide>
      <SectionHeader icon={meta.icon} kicker={num} title={data.label || meta.title} />
      {data.caption && (
        <p className="text-[15px] text-white/65 leading-relaxed mt-4 max-w-2xl">
          {data.caption}
        </p>
      )}
      <div className="mt-7 relative rounded-[24px] overflow-hidden glass-strong p-2.5">
        <div className="rounded-[18px] overflow-hidden bg-white flex items-center justify-center max-h-[640px]">
          <img
            src={data.image}
            alt={data.label || meta.title}
            loading="lazy"
            className="w-full h-auto max-h-[640px] object-contain"
          />
        </div>
      </div>
    </Container>
  );
}

function WireframesSection({ data, num, meta }) {
  return (
    <Container wide>
      <SectionHeader icon={meta.icon} kicker={num} title={data.label || meta.title} />
      {data.caption && (
        <p className="text-[15px] text-white/65 leading-relaxed mt-4 max-w-2xl">
          {data.caption}
        </p>
      )}
      <div className="mt-7 grid md:grid-cols-2 gap-5">
        {data.images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-[20px] overflow-hidden glass-strong p-2"
          >
            <div className="rounded-[14px] overflow-hidden bg-white flex items-center justify-center max-h-[520px]">
              <img
                src={src}
                alt={`Wireframe ${i + 1}`}
                loading="lazy"
                className="w-full h-auto max-h-[520px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function WalkthroughSection({ data, num, meta, accent }) {
  return (
    <Container wide>
      <SectionHeader icon={meta.icon} kicker={num} title={data.label || meta.title} />
      {data.sub && (
        <p className="text-[15px] text-white/65 leading-relaxed mt-4 max-w-2xl">
          {data.sub}
        </p>
      )}
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {data.items.map((item) => (
          <div
            key={item.n}
            className="glass rounded-[22px] overflow-hidden hover:border-white/20 transition-colors flex flex-col"
          >
            {item.image && (
              <div className="relative bg-white flex items-center justify-center h-[320px] md:h-[360px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div
                  className="font-display text-sm font-semibold w-9 h-9 grid place-items-center rounded-lg shrink-0"
                  style={{
                    background: `${accent}18`,
                    border: `1px solid ${accent}40`,
                    color: accent,
                  }}
                >
                  {item.n}
                </div>
                {item.metric && (
                  <div className="text-right shrink-0">
                    <div
                      className="font-display text-lg font-semibold"
                      style={{ color: accent }}
                    >
                      {item.metric.v}
                    </div>
                    <div className="text-[10.5px] uppercase tracking-wider text-white/45">
                      {item.metric.k}
                    </div>
                  </div>
                )}
              </div>
              <h4 className="font-display text-[19px] font-semibold mt-4 tracking-tight">
                {item.title}
              </h4>
              <p className="mt-2 text-[14px] text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function PrototypeSection({ data, num, meta, accent }) {
  return (
    <Container wide>
      <SectionHeader icon={meta.icon} kicker={num} title={data.label || meta.title} />
      {data.caption && (
        <p className="text-[15px] text-white/65 leading-relaxed mt-4 max-w-2xl">
          {data.caption}
        </p>
      )}
      <div className="mt-7 relative rounded-[24px] overflow-hidden glass-strong p-2.5">
        <div
          className="rounded-[18px] overflow-hidden flex items-center justify-center relative"
          style={{
            background: `linear-gradient(135deg, ${accent}15 0%, #0a1628 100%)`,
            minHeight: 360,
          }}
        >
          {data.video ? (
            <video
              src={data.video}
              controls
              playsInline
              loop
              muted
              autoPlay
              poster={data.poster}
              className="w-full h-auto max-h-[640px] object-contain"
            >
              Sorry, your browser doesn’t support embedded videos.
            </video>
          ) : data.image ? (
            <img
              src={data.image}
              alt="Prototype"
              loading="lazy"
              className="w-full h-auto max-h-[640px] object-contain"
            />
          ) : null}
        </div>
      </div>
    </Container>
  );
}

function DesignGoalsSection({ items, num, meta, accent }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {items.map((g, i) => (
          <div key={g.title} className="service-tile h-full">
            <div
              className="w-11 h-11 rounded-xl grid place-items-center font-display text-sm font-semibold"
              style={{
                background: `linear-gradient(135deg, ${accent}30, #00F5D420)`,
                color: accent,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              0{i + 1}
            </div>
            <h4 className="font-display text-[18px] font-semibold mt-5 tracking-tight">
              {g.title}
            </h4>
            <p className="mt-2 text-[14px] text-white/60 leading-relaxed">
              {g.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

function FeaturesSection({ items, num, meta, accent }) {
  return (
    <Container wide>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <p className="text-[15.5px] text-white/65 leading-relaxed mt-4 max-w-2xl">
        Big ideas that shaped the new experience — each tied to a real insight from research.
      </p>
      <div className="mt-12 space-y-14">
        {items.map((f, i) => (
          <FeatureRow key={f.n} feature={f} flip={i % 2 === 1} accent={accent} />
        ))}
      </div>
    </Container>
  );
}

function FeatureRow({ feature, flip, accent }) {
  return (
    <div
      className={`grid lg:grid-cols-12 gap-7 items-center ${
        flip ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div className="lg:col-span-7">
        <div className="relative rounded-[24px] overflow-hidden glass-strong p-2">
          <div
            className="relative rounded-[18px] overflow-hidden aspect-[16/10] flex items-center justify-center"
            style={{
              background:
                feature.imageBg ||
                `linear-gradient(135deg, ${accent}22 0%, #14142B 100%)`,
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div
          className="font-display text-sm font-semibold mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full"
          style={{
            color: accent,
            background: `${accent}15`,
            border: `1px solid ${accent}30`,
          }}
        >
          Feature {feature.n}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
          {feature.title}
        </h3>
        <p className="mt-4 text-[15px] text-white/65 leading-[1.75]">{feature.desc}</p>
      </div>
    </div>
  );
}

function ImpactSection({ items, num, meta, accent }) {
  const cols = items.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <div className={`grid ${cols} gap-5 mt-8`}>
        {items.map((m) => (
          <div
            key={m.label}
            className="relative glass-strong rounded-[24px] p-7 overflow-hidden"
          >
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl"
              style={{ background: `${accent}20` }}
            />
            <div className="relative">
              <div
                className="font-display text-4xl md:text-5xl font-bold"
                style={{ color: accent }}
              >
                {m.value}
              </div>
              <div className="text-[12.5px] text-white/70 mt-3 leading-relaxed">
                {m.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function FutureSection({ items, num, meta }) {
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <ul className="mt-8 grid sm:grid-cols-2 gap-3.5">
        {items.map((f) => (
          <li
            key={f}
            className="glass rounded-2xl px-5 py-4 flex items-start gap-3"
          >
            <div className="w-8 h-8 shrink-0 rounded-lg grid place-items-center bg-white/[0.04] border border-white/10 text-[#00F5D4] mt-0.5">
              <CheckCircle2 size={15} />
            </div>
            <span className="text-[14.5px] text-white/80 leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

function ConclusionSection({ data, num, meta, accent }) {
  const text = typeof data === 'string' ? data : data.text;
  const metrics = typeof data === 'object' ? data.metrics : null;
  return (
    <Container>
      <SectionHeader icon={meta.icon} kicker={num} title={meta.title} />
      <div className="relative mt-6 rounded-[24px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${accent}14 0%, #00F5D408 100%)`,
          }}
        />
        <div className="relative glass-strong rounded-[24px] p-7 md:p-9">
          <p className="text-[15.5px] md:text-[16.5px] text-white/85 leading-[1.85]">
            {text}
          </p>
        </div>
      </div>
      {metrics && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl p-5 text-center"
            >
              <div
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: accent }}
              >
                {m.value}
              </div>
              <div className="text-[12px] uppercase tracking-wider text-white/55 mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

/* ============== BASIC CASE STUDY ============== */
function BasicCaseStudy({ project }) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        <Block icon={Compass} title="Overview" kicker="01">
          <p>{project.overview}</p>
        </Block>
        <Block
          icon={Target}
          title="The Problem"
          kicker="02"
          accent={project.accent}
        >
          <p>{project.problem}</p>
        </Block>
        <Block icon={Search} title="Process" kicker="03">
          <ul className="space-y-3">
            {project.process?.map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 mt-0.5 font-display text-[12px] w-6 h-6 grid place-items-center rounded-full bg-white/5 border border-white/10 text-[#00F5D4]">
                  {i + 1}
                </span>
                <span className="text-white/75">{step}</span>
              </li>
            ))}
          </ul>
        </Block>
        <Block
          icon={Lightbulb}
          title="The Solution"
          kicker="04"
          accent={project.accent}
        >
          <p>{project.solution}</p>
        </Block>
        <Block icon={TrendingUp} title="Outcome" kicker="05">
          <div className="grid sm:grid-cols-3 gap-4 mt-2">
            {project.outcome?.map((m) => (
              <div key={m.k} className="glass rounded-2xl p-5">
                <div
                  className="font-display text-3xl font-semibold"
                  style={{ color: project.accent }}
                >
                  {m.v}
                </div>
                <div className="text-[12px] uppercase tracking-wider text-white/55 mt-1">
                  {m.k}
                </div>
              </div>
            ))}
          </div>
        </Block>
        <div className="glass rounded-2xl p-6 border-l-2 border-l-[#00F5D4]">
          <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#00F5D4]/85 mb-2">
            Coming Soon
          </div>
          <p className="text-white/70 text-[14.5px] leading-relaxed">
            Detailed wireframes, mockups, and a full visual walkthrough of this case study
            will be added shortly. Want to see the original Figma file or chat about the
            process?{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-[#00F5D4] link-underline"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============== Helpers ============== */
function Container({ children, wide = false }) {
  return (
    <div className={`${wide ? 'max-w-6xl' : 'max-w-5xl'} mx-auto px-6`}>
      {children}
    </div>
  );
}

function Meta({ icon: Icon, label, value }) {
  return (
    <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg grid place-items-center bg-white/5 border border-white/10 text-[#00F5D4]">
        <Icon size={15} />
      </div>
      <div>
        <div className="text-[10.5px] uppercase tracking-wider text-white/45">
          {label}
        </div>
        <div className="text-[13.5px] font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, kicker, title, accent }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="font-display text-[12px] w-8 h-8 grid place-items-center rounded-full border"
        style={{
          color: accent || '#00F5D4',
          borderColor: 'rgba(255,255,255,0.12)',
        }}
      >
        {kicker}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-2.5">
        {Icon && <Icon size={20} className="text-white/55" strokeWidth={1.7} />}
        {title}
      </h2>
    </div>
  );
}

function Block({ title, kicker, children, accent, icon }) {
  return (
    <div>
      <SectionHeader icon={icon} kicker={kicker} title={title} accent={accent} />
      <div className="text-[15.5px] text-white/70 leading-[1.8] mt-5">{children}</div>
    </div>
  );
}

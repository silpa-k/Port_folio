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
          <Link to="/" className="btn-primary">Back home</Link>
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
            <Meta
              icon={Wrench}
              label="Tools"
              value={project.tools || project.year}
            />
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-[28px] overflow-hidden glass-strong p-2.5"
          >
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

/* =================== RICH CASE STUDY =================== */
function RichCaseStudy({ project }) {
  const r = project.rich;
  return (
    <div className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* OVERVIEW */}
        <Block icon={Compass} kicker="01" title="Overview">
          <p>{r.overview}</p>
        </Block>

        {/* GOAL */}
        <div>
          <SectionHeader icon={Target} kicker="02" title="Goal" accent={project.accent} />
          <div className="relative rounded-2xl overflow-hidden mt-5">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.accent}18 0%, transparent 100%)`,
              }}
            />
            <div
              className="relative glass rounded-2xl px-6 md:px-8 py-6 border-l-2"
              style={{ borderLeftColor: project.accent }}
            >
              <p className="font-display text-lg md:text-[22px] leading-snug text-white/95">
                {r.goal}
              </p>
            </div>
          </div>
        </div>

        {/* RESEARCH INSIGHTS */}
        <div>
          <SectionHeader icon={Search} kicker="03" title="Research Insights" />
          <p className="text-[15.5px] text-white/70 leading-[1.8] mt-5">
            {r.researchSummary}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-7">
            {r.researchStats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center">
                <div
                  className="font-display text-4xl md:text-5xl font-semibold"
                  style={{ color: project.accent }}
                >
                  {s.value}
                </div>
                <div className="text-[12.5px] text-white/65 mt-2 leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KEY FEATURES — wider canvas */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <SectionHeader icon={Sparkles} kicker="04" title="Key Features" />
        <p className="text-[15.5px] text-white/70 leading-relaxed mt-4 max-w-2xl">
          Four big ideas that shaped the new Nykaa experience — each tied to a real
          insight from research.
        </p>

        <div className="mt-12 space-y-14">
          {r.features.map((f, i) => (
            <FeatureRow
              key={f.n}
              feature={f}
              flip={i % 2 === 1}
              accent={project.accent}
            />
          ))}
        </div>
      </div>

      {/* DESIGN GOALS */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <SectionHeader icon={Lightbulb} kicker="05" title="Design Goals" />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {r.designGoals.map((g, i) => (
            <div
              key={g.title}
              className="service-tile h-full"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl grid place-items-center font-display text-sm font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}30, #00F5D420)`,
                  color: project.accent,
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
      </div>

      {/* IMPACT */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <SectionHeader icon={TrendingUp} kicker="06" title="Impact" />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {r.impact.map((m) => (
            <div
              key={m.label}
              className="relative glass-strong rounded-[24px] p-7 overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl"
                style={{ background: `${project.accent}20` }}
              />
              <div className="relative">
                <div
                  className="font-display text-5xl md:text-6xl font-bold"
                  style={{ color: project.accent }}
                >
                  {m.value}
                </div>
                <div className="text-[13.5px] text-white/70 mt-3 leading-relaxed">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <SectionHeader icon={Compass} kicker="07" title="Future Opportunities" />
        <ul className="mt-8 grid sm:grid-cols-2 gap-3.5">
          {r.future.map((f) => (
            <li
              key={f}
              className="glass rounded-2xl px-5 py-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg grid place-items-center bg-white/[0.04] border border-white/10 text-[#00F5D4] mt-0.5">
                <CheckCircle2 size={15} />
              </div>
              <span className="text-[14.5px] text-white/80 leading-relaxed">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <SectionHeader icon={Sparkles} kicker="08" title="Conclusion" />
        <div className="relative mt-6 rounded-[24px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.accent}14 0%, #00F5D408 100%)`,
            }}
          />
          <div className="relative glass-strong rounded-[24px] p-7 md:p-9">
            <p className="text-[15.5px] md:text-[16.5px] text-white/80 leading-[1.8]">
              {r.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =================== BASIC CASE STUDY (for other projects) =================== */
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

/* =================== Helpers =================== */
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

function FeatureRow({ feature, flip, accent }) {
  return (
    <div
      className={`grid lg:grid-cols-12 gap-7 items-center ${
        flip ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      {/* Image */}
      <div className="lg:col-span-7">
        <div
          className="relative rounded-[24px] overflow-hidden glass-strong p-2"
        >
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
      {/* Copy */}
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
        <p className="mt-4 text-[15px] text-white/65 leading-[1.75]">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

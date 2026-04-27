import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, User, Sparkles, ArrowRight } from 'lucide-react';
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
            <span className="font-display font-semibold text-[15px]">{profile.name.split(' ')[0]}.</span>
          </Link>
          <a href={RESUME_URL} download className="text-[13px] text-white/75 hover:text-white link-underline">
            Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-16 overflow-hidden">
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
            <Meta icon={Calendar} label="Timeline" value={project.timeline} />
            <Meta icon={Sparkles} label="Year" value={project.year} />
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[28px] overflow-hidden glass-strong p-2.5">
            <div className="relative aspect-[16/9] rounded-[22px] overflow-hidden bg-[#1a1a2e]">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(15,15,26,0.6) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <Block title="Overview" kicker="01">
            <p>{project.overview}</p>
          </Block>

          <Block title="The Problem" kicker="02" accent={project.accent}>
            <p>{project.problem}</p>
          </Block>

          <Block title="Process" kicker="03">
            <ul className="space-y-3">
              {project.process?.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="shrink-0 mt-0.5 font-display text-[12px] w-6 h-6 grid place-items-center rounded-full bg-white/5 border border-white/10 text-[#00F5D4]"
                  >
                    {i + 1}
                  </span>
                  <span className="text-white/75">{step}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="The Solution" kicker="04" accent={project.accent}>
            <p>{project.solution}</p>
          </Block>

          <Block title="Outcome" kicker="05">
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {project.outcome?.map((m) => (
                <div
                  key={m.k}
                  className="glass rounded-2xl p-5"
                >
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

          {/* Placeholder note */}
          <div className="glass rounded-2xl p-6 border-l-2 border-l-[#00F5D4]">
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#00F5D4]/85 mb-2">
              Coming Soon
            </div>
            <p className="text-white/70 text-[14.5px] leading-relaxed">
              Detailed wireframes, mockups, and a full visual walkthrough of this case study
              will be added shortly. Want to see the original Figma file or chat about the
              process? <a href={`mailto:${profile.email}`} className="text-[#00F5D4] link-underline">Get in touch</a>.
            </p>
          </div>
        </div>
      </section>

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
            <a href={`mailto:${profile.email}`} className="link-underline">{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
            <a href={RESUME_URL} download className="link-underline">Resume</a>
          </div>
        </div>
      </footer>
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
        <div className="text-[10.5px] uppercase tracking-wider text-white/45">{label}</div>
        <div className="text-[13.5px] font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function Block({ title, kicker, children, accent }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-display text-[12px] w-7 h-7 grid place-items-center rounded-full border"
          style={{
            color: accent || '#00F5D4',
            borderColor: 'rgba(255,255,255,0.12)',
          }}
        >
          {kicker}
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-[15.5px] text-white/70 leading-[1.8]">{children}</div>
    </div>
  );
}

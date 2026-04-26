import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import useReveal from '../../hooks/useReveal';
import { profile, socials } from '../../mock';

export default function Contact() {
  const [r1, v1] = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('That email looks off — mind double-checking?');
      return;
    }
    setLoading(true);
    // Mock submit — stash in localStorage so it persists across reloads.
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('silpa_messages') || '[]');
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem('silpa_messages', JSON.stringify(existing));
      toast.success(`Thanks ${form.name.split(' ')[0]}! I'll be in touch soon ✨`);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }, 700);
  };

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-[#6C5CE7]/20 to-[#00F5D4]/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={r1} className={`reveal ${v1 ? 'in-view' : ''} grid lg:grid-cols-2 gap-10 items-stretch`}>
          {/* Left CTA */}
          <div className="flex flex-col justify-between glass rounded-[28px] p-8 md:p-10">
            <div>
              <span className="kicker"><span className="dot" /> Let&apos;s Talk</span>
              <h2 className="font-display text-4xl md:text-[56px] font-semibold mt-4 leading-[1.05] tracking-tight">
                Let&apos;s build something <span className="text-gradient-aqua">impactful</span>.
              </h2>
              <p className="mt-5 text-white/60 text-[15.5px] leading-relaxed max-w-md">
                Got a product that needs design love, a redesign that needs sharp eyes, or just
                want to nerd out about typography? My inbox is open.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F5D4]/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass-strong grid place-items-center text-[#00F5D4]">
                    <Mail size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/45">Email</div>
                    <div className="text-[14.5px] font-medium">{profile.email}</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#00F5D4] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#6C5CE7]/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass-strong grid place-items-center text-[#A78BFA]">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/45">Based in</div>
                    <div className="text-[14.5px] font-medium">{profile.location}</div>
                  </div>
                </div>
                <span className="text-[12px] text-white/45">Working globally</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target={s.id === 'em' ? undefined : '_blank'}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full glass grid place-items-center text-white/75 hover:text-[#00F5D4] hover:border-[#00F5D4]/40 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={onSubmit}
            className="glass-strong rounded-[28px] p-8 md:p-10 flex flex-col"
          >
            <div className="text-[12.5px] uppercase tracking-[0.18em] text-white/55">
              Send a message
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2">
              Tell me about your project
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Field label="Your name">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Riya Patel"
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/30 text-[15px]"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="riya@company.com"
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/30 text-[15px]"
                />
              </Field>
              <Field label="What's the brief?">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="We're building a B2B SaaS for..."
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/30 text-[15px] resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-7 self-start disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : (<>Send message <Send size={16} /></>)}
            </button>
            <p className="text-[11.5px] text-white/40 mt-4">
              Replies usually within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block rounded-2xl border border-white/8 bg-white/[0.025] px-4 pt-3 pb-3 transition-colors focus-within:border-[#00F5D4]/50">
      <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

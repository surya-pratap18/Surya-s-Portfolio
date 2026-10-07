import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Panel from "./components/Panel";
import Tag from "./components/Tag";
import SectionHead from "./components/SectionHead";
import { portfolio as local } from "./data";
import { getPortfolio } from "./services/api";

function Tilt({ children, className = "" }) {
  const [style, setStyle] = useState({});

  return (
    <div
      className={`panel tilt ${className}`}
      style={style}
      onMouseMove={(e) => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;

        setStyle({
          transform: `translateY(-4px) rotateX(${(0.5 - y) * 16}deg) rotateY(${(x - 0.5) * 16}deg)`,
        });
      }}
      onMouseLeave={() => setStyle({})}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState(local);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    getPortfolio()
      .then((d) => d && setData(d))
      .catch(() => {});

    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );

    els.forEach((e) => io.observe(e));

    return () => io.disconnect();
  }, []);

  const p = data.profile;

  return (
    <>
      <Particles theme={theme} />

      <Navbar theme={theme} setTheme={setTheme} />

      <main id="top">
        {/* ==================== HERO ==================== */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">
                  Available for internships &amp; entry-level ML roles
                </p>

                <h1>
                  Surya Pratap
                  <br />
                  <span className="accent-text">Mallick</span>
                </h1>

                <p className="role-line">// {p.role}</p>

                <p className="lede">
                  I build end-to-end machine learning systems — from data
                  preprocessing and feature engineering to model deployment and
                  MLOps. Currently a B.Tech CSE (Data Science) student turning
                  messy data into predictive, production-ready tools.
                </p>

                <div className="hero-cta">
                  <a href="#projects" className="btn">
                    View Projects →
                  </a>

                  <a
                    href="/assets/Surya_Pratap_Mallick_Software_Developer_Resume (1).pdf"
                    className="btn ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Résumé
                  </a>
                </div>
              </div>

              <div className="hero-signal">
                <div className="readout">
                  STATUS <span className="val">TRAINING</span>
                </div>

                <svg viewBox="0 0 320 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3FB8AF" />
                      <stop offset="100%" stopColor="#E8A33D" />
                    </linearGradient>
                  </defs>

                  <g stroke="#1C2530" strokeWidth="1">
                    <line x1="0" y1="40" x2="320" y2="40" />
                    <line x1="0" y1="90" x2="320" y2="90" />
                    <line x1="0" y1="140" x2="320" y2="140" />
                    <line x1="0" y1="190" x2="320" y2="190" />
                  </g>

                  <path
                    d="M0,150 C30,140 40,100 70,110 C100,120 110,60 140,70 C170,80 180,150 210,130 C240,110 250,40 280,55 C300,64 310,90 320,80"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <circle cx="320" cy="80" r="4" fill="#E8A33D">
                    <animate
                      attributeName="opacity"
                      values="1;0.2;1"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            <div className="stat-strip reveal">
              {data.stats.map(([n, l]) => (
                <div className="stat" key={l}>
                  <span className="num">{n}</span>
                  <span className="label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section id="about">
          <div className="wrap">
            <SectionHead
              index="01 / About"
              title="Grounded in fundamentals, built for production"
            />

            <div className="about-grid">
              <div className="reveal">
                <p>
                  I'm a Computer Science &amp; Engineering (Data Science)
                  undergraduate at Bhubaneswar Engineering College, with a{" "}
                  <strong>CGPA of 8.5/10</strong>. I’m passionate about building
                  real-world software and intelligent applications, with a
                  strong interest in growing my career across both
                  <strong> software development</strong> and{" "}
                  <strong>AI/ML</strong>.
                </p>

                <p>
                  My development journey includes building full-stack
                  applications using
                  <strong>
                    {" "}
                    React, Node.js, Express.js, MongoDB, REST APIs
                  </strong>
                  , and modern deployment platforms. I enjoy turning ideas into
                  practical, user-focused applications while continuously
                  improving my problem-solving and development skills.
                </p>

                <p>
                  Alongside software development, I’m developing my expertise in
                  <strong> machine learning, data science, and MLOps</strong> —
                  from data preprocessing and feature engineering to model
                  development, evaluation, deployment, and monitoring. My goal
                  is to continuously learn, work on meaningful projects, and
                  grow into a versatile software engineer with strong AI/ML
                  capabilities.
                </p>
              </div>

              <Tilt className="status-card reveal">
                {[
                  ["NAME", p.name],
                  ["ROLE", "AI/ML Engineer"],
                  ["LOCATION", p.location],
                  ["EDUCATION", p.education],
                  ["FOCUS", p.focus],
                  ["AVAILABILITY", p.availability],
                ].map(([a, b]) => (
                  <div className="status-row" key={a}>
                    <span>{a}</span>
                    <span className={a === "AVAILABILITY" ? "live" : ""}>
                      {b}
                    </span>
                  </div>
                ))}
              </Tilt>
            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section id="skills">
          <div className="wrap">
            <SectionHead
              index="02 / Stack"
              title="Tools of the trade"
              description="Languages, libraries, and infrastructure I use to move from raw data to deployed models."
            />

            <div className="skills-grid reveal">
              {Object.entries(data.skills).map(([cat, tags]) => (
                <div className="skill-cat" key={cat}>
                  <h4>{cat}</h4>

                  <div className="skill-tags">
                    {tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="competencies reveal">
              <h4>Core Competencies</h4>

              <div className="skill-tags">
                {data.competencies.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EXPERIENCE ==================== */}
        <section id="experience">
          <div className="wrap">
            <SectionHead index="03 / Experience" title="Where I've worked" />

            <div className="reveal">
              {data.experience.map((e) => (
                <div className="timeline-item" key={e.org}>
                  <div className="timeline-date">
                    {e.date}
                    <span className="sub">{e.sub}</span>
                  </div>

                  <div className="timeline-body">
                    <h3>{e.title}</h3>

                    <span className="org">{e.org}</span>

                    <p>{e.description}</p>

                    <div className="stack-row">
                      {e.stack.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>

                    {e.demo && (
                      <a
                        className="demo-link"
                        href={e.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ▶ View live demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section id="projects">
          <div className="wrap">
            <SectionHead
              index="04 / Projects"
              title="Selected work"
              description="A few systems I've built end-to-end — from exploratory analysis to evaluated, deployable models."
            />

            <div className="project-grid reveal">
              {data.projects.map((pr, i) => (
                <Tilt className="project-card" key={pr.title}>
                  {/* {pr.featured && (
                    <span className="featured-badge">● Live demo</span>
                  )} */}

                  <div className="p-index">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3>{pr.title}</h3>

                  <ul>
                    {pr.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>

                  <div className="stack-row">
                    {pr.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* Project Live Demo */}
                  {pr.demo && (
                    <a
                      className="demo-link"
                      href={pr.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ View live demo
                    </a>
                  )}
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== EDUCATION ==================== */}
        <section id="education">
          <div className="wrap">
            <SectionHead
              index="05 / Credentials"
              title="Education & certifications"
            />

            <div className="edu-cert-grid">
              <Panel className="edu-card reveal">
                <h3>{data.education.degree}</h3>

                <span className="org">{data.education.org}</span>

                <span className="period">{data.education.period}</span>

                <p>{data.education.coursework}</p>

                <p>{data.education.details}</p>

                <span className="cgpa-badge">CGPA {p.cgpa}</span>
              </Panel>

              <Panel className="reveal">
                <ul className="cert-list">
                  {data.certifications.map(([n, i]) => (
                    <li key={n}>
                      <span className="cname">{n}</span>
                      <span className="cissuer">{i}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="contact-section">
          <div className="wrap">
            <Panel className="contact-panel reveal">
              <div>
                <p className="eyebrow">06 / Get in touch</p>

                <h2>Let's build something with data.</h2>

                <p>
                  Open to AI/ML internships and entry-level roles. Reach out — I
                  usually reply within a day.
                </p>
              </div>

              <div className="contact-links">
                <a href={`mailto:${data.contact.email}`}>
                  <span className="k">Email</span>
                  {data.contact.email}
                </a>

                <a href={`tel:${data.contact.phone.replaceAll(" ", "")}`}>
                  <span className="k">Phone</span>
                  {data.contact.phone}
                </a>

                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="k">LinkedIn</span>
                  Connect ↗
                </a>

                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="k">GitHub</span>
                  View code ↗
                </a>
              </div>
            </Panel>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer>
        <div className="wrap">
          © 2026 Surya Pratap Mallick · Built with intent, not a template ·{" "}
          <a
            href="/assets/Surya_Pratap_Mallick_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </div>
      </footer>
    </>
  );
}

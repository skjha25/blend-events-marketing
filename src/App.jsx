import React, { useEffect, useState } from 'react';

const B = import.meta.env.BASE_URL;

const NAV = [
  ['home', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['work', 'Work'],
  ['contact', 'Contact'],
];

const SERVICES = [
  { icon: '✦', title: 'Corporate Events', text: 'Conferences, summits, product launches and annual meets designed around your business goals.' },
  { icon: '◐', title: 'Brand Activations', text: 'Immersive on-ground experiences that put your brand in front of the right audience.' },
  { icon: '❖', title: 'Weddings & Celebrations', text: 'Elegant, personal celebrations with flawless styling, hospitality and logistics.' },
  { icon: '▲', title: 'Stage, Sound & Lighting', text: 'Trusses, LED walls, concert-grade audio and lighting built to wow from every seat.' },
  { icon: '◎', title: 'Exhibitions & Roadshows', text: 'Stalls, pavilions and multi-city roadshows delivered on time and on budget.' },
  { icon: '✚', title: 'Digital & Hybrid Events', text: 'Live-streamed and hybrid formats that extend your reach beyond the venue.' },
];

const WORK = [
  { img: `${B}img/hero2.jpg`, tag: 'Brand Launch', title: 'Twilight Product Reveal', pos: 'center' },
  { img: `${B}img/stage.jpg`, tag: 'Corporate', title: 'Annual Partners Summit', pos: 'center' },
  { img: `${B}img/tables.jpg`, tag: 'Gala', title: 'Candlelit Awards Night', pos: 'center' },
  { img: `${B}img/lights.jpg`, tag: 'Activation', title: 'Immersive Light Arena', pos: 'center' },
];

const STEPS = [
  ['01', 'Discover', 'We learn your brand, audience and objectives before a single idea hits the table.'],
  ['02', 'Design', 'Concept, creative direction, budgets and timelines — mapped in detail.'],
  ['03', 'Deliver', 'A dedicated on-site team executes every moment with precision.'],
  ['04', 'Measure', 'Post-event reporting on engagement, reach and ROI.'],
];

const QUOTES = [
  ['Blend turned our launch into the most talked-about event of the year. Zero hiccups, all wow.', 'Marketing Head', 'Consumer Electronics Brand'],
  ['From concept to teardown, the team was calm, creative and incredibly organised.', 'Director, Corporate Affairs', 'Financial Services Company'],
  ['They understood our brand instantly and delivered an activation our customers loved.', 'Brand Manager', 'Lifestyle Retail Brand'],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ light }) {
  return (
    <a href="#home" className="logo" aria-label="Blend Events Marketing Private Limited">
      <img src={light ? `${B}img/logo-white.png` : `${B}img/logo.png`} alt="Blend Events Marketing Private Limited" />
    </a>
  );
}

const Arrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let cur = 'home';
      NAV.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-dark nav-cta-mobile" onClick={() => setOpen(false)}>
            Plan Your Event <Arrow />
          </a>
        </nav>
        <a href="#contact" className="btn btn-dark nav-cta">
          Plan Your Event <Arrow />
        </a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Experiences <b>•</b> Activations <b>•</b> Brand Engagement</p>
          <h1>
            Events that<br />
            <span className="grad">connect.</span>
          </h1>
          <p className="lead">
            Blend Events Marketing Private Limited creates impactful events and brand experiences — from strategic planning to flawless execution.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-dark btn-lg">Plan Your Event <Arrow /></a>
            <a href="#work" className="btn-link">View our work</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={`${B}img/hero.jpg`} alt="Twilight outdoor event with stage, truss lighting and LED screen" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [['500+', 'Events delivered'], ['120+', 'Brands served'], ['15', 'Cities covered'], ['98%', 'Client retention']];
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([n, l]) => (
          <div key={l} className="reveal">
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="reveal">
          <p className="kicker">About us</p>
          <h2>One team. Strategy, creative and production — <span className="grad">blended.</span></h2>
        </div>
        <div className="reveal about-text">
          <p>
            Blend Events Marketing Private Limited is a full-service events and brand experience company. We bring
            planning, design, production and on-ground management under one roof, so your vision never gets lost
            between vendors.
          </p>
          <ul className="ticks">
            <li>End-to-end planning &amp; execution</li>
            <li>In-house creative and production crew</li>
            <li>Transparent budgets, zero surprises</li>
            <li>Dedicated single point of contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">What we do</p>
          <h2>Everything your event needs, <span className="grad">beautifully done.</span></h2>
        </div>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="card reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">Selected work</p>
          <h2>Moments people <span className="grad">remember.</span></h2>
        </div>
        <div className="work-grid">
          {WORK.map((w, i) => (
            <figure key={w.title} className={`work reveal ${w.big ? 'big' : ''}`} style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={w.img} alt={w.title} style={{ objectPosition: w.pos }} loading="lazy" />
              <figcaption>
                <span>{w.tag}</span>
                <h3>{w.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section dark">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker light">How we work</p>
          <h2>A simple process for <span className="grad-light">flawless events.</span></h2>
        </div>
        <div className="steps">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="step reveal">
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="kicker">Client love</p>
          <h2>Trusted by brands that <span className="grad">raise the bar.</span></h2>
        </div>
        <div className="cards">
          {QUOTES.map(([q, who, co]) => (
            <blockquote key={who} className="card quote reveal">
              <p>“{q}”</p>
              <footer><b>{who}</b><span>{co}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const er = {};
    if (!f.name.trim()) er.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email';
    if (!f.message.trim()) er.message = 'Tell us a little about your event';
    setErr(er);
    if (Object.keys(er).length) return;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nEvent type: ${f.type}\n\n${f.message}`;
    window.location.href = `mailto:hello@blendevents.in?subject=${encodeURIComponent('Event enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="section alt">
      <div className="container contact">
        <div className="reveal">
          <p className="kicker">Contact</p>
          <h2>Let’s plan something <span className="grad">unforgettable.</span></h2>
          <p className="lead sm">Share a few details and our team will get back to you within one working day.</p>
          <ul className="contact-list">
            <li><b>Email</b><a href="mailto:hello@blendevents.in">hello@blendevents.in</a></li>
            <li><b>Phone</b><a href="tel:+910000000000">+91 00000 00000</a></li>
            <li><b>Office</b><span>Blend Events Marketing Pvt. Ltd., India</span></li>
          </ul>
        </div>
        <form className="form reveal" onSubmit={submit} noValidate>
          <label>Name<input name="name" placeholder="Your full name" />{err.name && <em>{err.name}</em>}</label>
          <div className="row">
            <label>Email<input name="email" type="email" placeholder="you@company.com" />{err.email && <em>{err.email}</em>}</label>
            <label>Phone<input name="phone" placeholder="+91" /></label>
          </div>
          <label>Event type
            <select name="type" defaultValue="Corporate Event">
              <option>Corporate Event</option><option>Brand Activation</option><option>Wedding / Celebration</option>
              <option>Exhibition / Roadshow</option><option>Other</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="4" placeholder="Date, city, guest count, ideas…" />{err.message && <em>{err.message}</em>}</label>
          <button className="btn btn-dark btn-lg" type="submit">Send enquiry <Arrow /></button>
          {sent && <p className="ok">Thank you! Your email app should open with your enquiry ready to send.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <Logo light />
        <nav>{NAV.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <p>© {new Date().getFullYear()} Blend Events Marketing Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

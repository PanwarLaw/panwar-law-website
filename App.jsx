import React from "react";
import {
  Building2,
  Home,
  Landmark,
  Scale,
  FileText,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  BriefcaseBusiness,
  PenLine,
  ChevronRight,
} from "lucide-react";

const firm = {
  name: "Panwar Professional Corporation",
  subtitle: "Lawyer Licensed by the Law Society of Ontario",
  phone: "+1 437-772-9992",
  phoneDisplay: "437-772-9992",
  email: "Frontdesk@panwarlaw.ca",
  address: "45-145 Traders Boulevard East, Mississauga, ON",
  consultationFee: "$250 + HST",
  whatsapp:
    "https://wa.me/14377729992?text=Hello%20Panwar%20Professional%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20a%20legal%20matter.",
};

const services = [
  {
    icon: Home,
    title: "Real Estate Law",
    text: "Purchase, sale, refinance, title review, closing documents, requisitions and closing coordination.",
  },
  {
    icon: Landmark,
    title: "Mortgage & Refinance Closings",
    text: "Lender instructions, mortgage registrations, private lending transactions and closing support.",
  },
  {
    icon: Building2,
    title: "Builder & Pre-Construction Closings",
    text: "Review of builder adjustments, HST rebate issues, development charges and closing disputes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Commercial Matters",
    text: "Commercial purchase/sale transactions, leases, corporate authority documents and transaction support.",
  },
  {
    icon: Scale,
    title: "Civil Litigation Support",
    text: "Demand letters, default notices, settlement correspondence and litigation referral support where required.",
  },
  {
    icon: FileText,
    title: "Wills & Powers of Attorney",
    text: "Estate planning documents and related legal guidance for Ontario clients.",
  },
];

const blogs = [
  "HST Rebates on Builder Purchases in Ontario",
  "Land Transfer Tax and First-Time Buyer Rebates",
  "What Buyers Should Know Before a Pre-Construction Closing",
  "Mortgage Closing Delays: Practical Legal Considerations",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Panwar Professional Corporation home">
        <img src="/logo.png" alt="Panwar Professional Corporation logo" />
        <div>
          <strong>{firm.name}</strong>
          <span>Ontario Law Firm</span>
        </div>
      </a>

      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-call" href={`tel:${firm.phone}`}>
        <Phone size={16} />
        {firm.phoneDisplay}
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="eyebrow">
          <ShieldCheck size={17} />
          Professional legal services in Ontario
        </div>

        <h1>{firm.name}</h1>

        <p className="lead">
          Real estate, mortgage, builder closing, commercial and civil matter support
          with practical, timely and client-focused legal service.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#contact">
            Request a Consultation <ChevronRight size={18} />
          </a>
          <a className="btn secondary" href={`mailto:${firm.email}`}>
            Email the Firm
          </a>
          <a className="btn whatsapp" href={firm.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <div className="hero-note">
          <strong>{firm.subtitle}</strong>
          <span>Consultations are by appointment only. No free consultations are provided.</span>
        </div>
      </div>

      <aside className="hero-card">
        <img src="/logo.png" alt="" className="hero-logo" />
        <h2>Book a Consultation</h2>
        <p>
          30-minute consultation fee: <strong>{firm.consultationFee}</strong>, payable in advance.
          Please request appointments at least 2 business days in advance.
        </p>
        <a className="btn primary full" href={`mailto:${firm.email}?subject=Consultation%20Request`}>
          Contact Front Desk
        </a>
      </aside>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <span>Practice Areas</span>
        <h2>Legal support for real estate and business-critical matters.</h2>
      </div>

      <div className="grid cards">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="card" key={service.title}>
              <Icon className="card-icon" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split">
      <div>
        <span className="section-kicker">About the Firm</span>
        <h2>Clear communication, careful review and practical closing guidance.</h2>
      </div>
      <div className="copy">
        <p>
          Panwar Professional Corporation assists clients with Ontario real estate,
          mortgage, builder, business and related legal matters. The firm focuses on
          practical advice, clear communication and organized transaction handling.
        </p>
        <p>
          The website is for general information only and does not create a lawyer-client
          relationship. Legal advice is provided only after conflict checks, engagement
          confirmation and formal retainer arrangements.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Initial inquiry", "Contact the office by email, phone or WhatsApp."],
    ["02", "Conflict check", "The firm confirms whether it can assist with the matter."],
    ["03", "Consultation / Retainer", "Consultation fee and retainer requirements are confirmed."],
    ["04", "Legal work begins", "Documents, instructions and next steps are reviewed."],
  ];

  return (
    <section id="process" className="section muted">
      <div className="section-heading">
        <span>How It Works</span>
        <h2>A simple process for new client inquiries.</h2>
      </div>

      <div className="steps">
        {steps.map(([number, title, text]) => (
          <div className="step" key={number}>
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="section">
      <div className="section-heading">
        <span>Legal Resources</span>
        <h2>Helpful topics for Ontario buyers, sellers and borrowers.</h2>
      </div>

      <div className="blog-grid">
        {blogs.map((title) => (
          <article className="blog-card" key={title}>
            <PenLine size={20} />
            <h3>{title}</h3>
            <p>
              Educational article placeholder. Replace this with your full blog post
              inside the website or connect to a blog/CMS.
            </p>
            <a href="#contact">Ask the firm</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <span className="section-kicker">Contact</span>
        <h2>Request a consultation</h2>
        <p>
          For consultation requests, please contact the front desk. Fees are payable in
          advance and appointments should be requested at least 2 business days in advance.
        </p>

        <div className="contact-list">
          <a href={`tel:${firm.phone}`}>
            <Phone size={18} /> {firm.phoneDisplay}
          </a>
          <a href={`mailto:${firm.email}`}>
            <Mail size={18} /> {firm.email}
          </a>
          <a href={firm.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp Chat
          </a>
          <span>
            <MapPin size={18} /> {firm.address}
          </span>
        </div>
      </div>

      <form className="form" name="contact" onSubmit={(event) => event.preventDefault()}>
        <label>
          Full Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email Address
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Phone Number
          <input type="tel" placeholder="Your phone number" />
        </label>
        <label>
          Matter Type
          <select defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Real Estate Purchase</option>
            <option>Real Estate Sale</option>
            <option>Refinance / Mortgage</option>
            <option>Builder Closing</option>
            <option>Commercial / Business</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Briefly describe your matter." />
        </label>
        <button className="btn primary full" type="submit">
          Submit Inquiry
        </button>
        <small>
          This demo form is visual only. To receive submissions, connect it to Formspree,
          Netlify Forms, Google Forms, or your preferred backend.
        </small>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{firm.name}</strong>
        <p>{firm.subtitle}</p>
        <p>{firm.address}</p>
      </div>
      <div className="footer-disclaimer">
        <strong>Disclaimer</strong>
        <p>
          This website provides general information only and does not constitute legal
          advice. Viewing this website or submitting an inquiry does not create a
          lawyer-client relationship.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { ArrowUpRight, Check } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

// The specific image for the Hero Card
const heroCardImg = "https://media.ffycdn.net/eu/deriv/HJYL9dhpA2TvNQQfFVS8.webp";

const principles = [
  ["Start with your life", "Your goals, time horizon, and comfort with risk come before any product or prediction."], 
  ["Keep the signal", "We filter out market noise and focus on the handful of decisions that matter."], 
  ["Make room for change", "A strong plan can adapt as your life evolves without losing its long-term shape."], 
  ["Show the whole picture", "You deserve to know what you own, how it works, and what it costs — always."]
];

export default function Approach() { 
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="inner-page">
        
        {/* Hero Section with Floating Card */}
        <section className="page-hero container animate__animated animate__fadeInLeft" style={{ 
          padding: "6rem 0", 
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '3rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }} className="hero-grid-desktop">
            
            {/* Text Content */}
            <div style={{ order: 2 }}>
              <p className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: '#64748b' }}>
                <span className="eyebrow-dot" style={{ width: "8px", height: "8px", backgroundColor: "#22c55e", borderRadius: "50%" }} /> 
                02 / Our approach
              </p>
              <h1 style={{ fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "700", marginBottom: "1.5rem", color: '#0f172a' }}>
                Clarity is a<br />
                <em style={{ fontStyle: "italic", color: "#475569" }}>strategy.</em>
              </h1>
              <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: '#475569', maxWidth: '500px' }}>
                We make sophisticated investing feel remarkably human. Because the best financial decisions are the ones you can understand — and stick with.
              </p>
            </div>

            {/* Image Card */}
            <div style={{ order: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '4/3',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
                border: '8px solid white',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.3s ease'
              }} className="hero-card-hover">
                <img 
                  src={heroCardImg} 
                  alt="Investment clarity" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* Principles Section */}
        <section className="principles-section section-pad" style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <div className="section-kicker" style={{ marginBottom: "2rem" }}>
              <span style={{ fontWeight: "600", color: '#333' }}>Our principles</span>
              <span className="line" style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#22c55e", marginTop: "0.5rem" }} />
            </div>
            <p className="section-lede" style={{ marginBottom: "3rem", maxWidth: "700px", lineHeight: "1.6", color: "#444" }}>
              We do not believe in one perfect portfolio. We believe in a thoughtful process that makes room for your ambition, your uncertainty, and the life happening around both.
            </p>
            <div className="principles-list animate__animated animate__fadeInUp" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {principles.map(([title, body], i) => (
                <div className="principle" key={title} style={{ padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: "700", color: "#22c55e" }}>0{i + 1}</span>
                    <Check size={18} color="#22c55e" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: '#0f172a' }}>{title}</h3>
                    <p style={{ color: "#64748b", lineHeight: "1.5" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Detail */}
        <section className="approach-detail section-pad" style={{ padding: "5rem 0", backgroundColor: "#f1f5f9" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            <div>
              <p className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", color: '#64748b' }}>The process</p>
              <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: "700", color: '#0f172a' }}>
                Simple enough to use.<br />
                <em style={{ fontStyle: "italic", color: "#475569" }}>Rigorous enough to trust.</em>
              </h2>
            </div>
            <p style={{ lineHeight: "1.6", color: "#475569", fontSize: "1.1rem" }}>
              We start with a conversation, translate your goals into a durable plan, and keep the system visible as your life changes. Every recommendation should have a reason you can explain in your own words. Regular reviews help us rebalance deliberately, recognize new priorities, and keep short-term market movement from rewriting a long-term plan.
            </p>
          </div>
        </section>

        {/* Image Strip Section - UPDATED TO DARK BG WITH WHITE TEXT */}
        <section className="page-image-strip container" style={{ 
          padding: "6rem 2rem", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "3rem", 
          alignItems: "center",
          backgroundColor: "#0f172a", // Dark Slate Background
          borderRadius: "20px",
          marginTop: "2rem",
          marginBottom: "2rem"
        }}>
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/ENxWuzBbMvBpYzOW.png" 
            alt="Couple planning for retirement" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} 
          />
          <div>
            <small style={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8", display: "block", marginBottom: "0.5rem" }}>Build for the life ahead</small>
            <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "1rem", color: '#f8fafc' }}>
              Long-term plans<br />
              <em style={{ fontStyle: "italic", color: "#cbd5e1" }}>need room to breathe.</em>
            </h2>
            <p style={{ lineHeight: "1.6", color: "#e2e8f0" }}>
              Our process keeps the important things in view: the people you care about, the goals you are working toward, and the flexibility to change course.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="approach-cta section-pad" style={{ padding: "6rem 2rem", textAlign: "center", backgroundColor: "#0f172a", color: "white" }}>
          <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", lineHeight: "1.2" }}>
              A better relationship<br />
              <em style={{ fontStyle: "italic", color: "#94a3b8" }}>with your money.</em>
            </h2>
            <a className="button button-dark" href="https://app.quantivesthq.org" style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              padding: "1rem 2rem", 
              background: "#22c55e", 
              color: "white", 
              textDecoration: "none", 
              borderRadius: "8px", 
              fontWeight: "600" 
            }}>
              Start your journey <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
      
      {/* CSS for Desktop Override */}
      <style>{`
        @media (min-width: 768px) {
          .hero-grid-desktop {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-grid-desktop > div:first-child {
            order: 1 !important; /* Text Left */
          }
          .hero-grid-desktop > div:last-child {
            order: 2 !important; /* Image Right */
          }
          .hero-card-hover:hover {
            transform: rotate(0deg) scale(1.02);
          }
        }
      `}</style>
    </div>
  ); 
}
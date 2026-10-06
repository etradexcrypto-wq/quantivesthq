import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

// Images
const founder = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/ReyCzuySHCTiguZw.png";
const heroBg = "https://media.ffycdn.net/eu/deriv/PKsyYNY2vaTFCCiD5iXa.webp?width=3048&format=webp";
const img1 = "https://media.ffycdn.net/eu/deriv/vZ9agLH2TQ3A1UyUBF6A.webp";
const img2 = "https://media.ffycdn.net/eu/deriv/T2hYaQqCn6EoPqCq5aTt.webp?width=800&format=webp";

export default function About() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="inner-page">
        
        {/* 1. HERO SECTION */}
        <section 
          className="page-hero animate__animated animate__fadeInLeft" 
          style={{ 
            position: 'relative',
            padding: "10rem 2rem", 
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.8)', 
            zIndex: 1
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
            <p className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: '#86efac' }}>
              <span className="eyebrow-dot" style={{ width: "8px", height: "8px", backgroundColor: "#86efac", borderRadius: "50%" }} /> 
              03 / About quantivesthq
            </p>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", fontWeight: "700", marginBottom: "1.5rem" }}>
              Investing,<br />
              <em style={{ fontStyle: "italic", color: "#e2e8f0" }}>reconsidered.</em>
            </h1>
            <p style={{ maxWidth: "600px", lineHeight: "1.6", color: "#f1f5f9", fontSize: "1.25rem" }}>
              We started quantivesthq with a simple conviction: building wealth should feel empowering, not intimidating.
            </p>
          </div>
        </section>

        {/* 2. WHO WE ARE - Updated to quantivesthq */}
        <section style={{ padding: "6rem 2rem", backgroundColor: "#0f172a", color: "white" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <small style={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", display: "block", marginBottom: "1rem", fontWeight: "600" }}>Who we are</small>
              <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "1.5rem" }}>
                Global reach.<br />
                <em style={{ fontStyle: "italic", color: "#94a3b8" }}>Local impact.</em>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#cbd5e1", fontSize: "1.1rem", marginBottom: "2rem" }}>
                <strong>quantivesthq</strong> is one of the world’s leading modern investment partners. We offer diversified portfolios, rigorous research, and transparent tools on forex, stocks & indices, cryptocurrencies, commodities, and derived assets to millions of registered users across the globe.
              </p>
              <a href="/market" style={{ color: "#86efac", textDecoration: "none", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explore our markets <ArrowUpRight size={16} />
              </a>
            </div>
            <div style={{ display: "grid", gap: "1rem" }}>
              <img src={img1} alt="Trading platform interface" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} />
            </div>
          </div>
        </section>

        {/* 3. FOUNDER STORY - NOW DARK BG WITH BRIGHT WHITE TEXT */}
        <section className="about-grid section-pad container" style={{ 
          padding: "6rem 2rem", 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "4rem", 
          alignItems: "center",
          backgroundColor: "#1e293b", // Dark Slate Background
          borderRadius: "20px",
          marginTop: "2rem",
          marginBottom: "2rem"
        }}>
          <div>
            <img className="founder-image" src={founder} alt="quantivesthq investment strategist" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", border: "4px solid #334155" }} />
          </div>
          <div className="about-copy animate__animated animate__fadeInUp">
            <p className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", color: '#86efac', fontWeight: "600" }}>A long view</p>
            <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "1.5rem", color: '#f8fafc' }}>
              Good advice<br />
              <em style={{ fontStyle: "italic", color: "#cbd5e1" }}>gets personal.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "#e2e8f0", lineHeight: "1.7", fontSize: "1.05rem" }}>
              <p>quantivesthq is a modern investment partner for people who want to do more with their money — and understand it better along the way.</p>
              <p>We combine rigorous research, thoughtful technology, and genuine human support to help you make decisions with confidence.</p>
              <p>Our work is grounded in patience, transparency, and a belief that every financial plan should leave more room for a meaningful life.</p>
            </div>
            <a className="text-link" href="mailto:support@quantivesthq.org" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: "600", color: "#ffffff", textDecoration: "none" }}>
              Talk to our team <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* 4. VISUAL GALLERY */}
        <section style={{ padding: "4rem 2rem", backgroundColor: "#f8fafc" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <img src={img2} alt="Team collaboration" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
            <div style={{ background: "#0f172a", borderRadius: "12px", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", color: "white" }}>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#f8fafc" }}>Built for the long term</h3>
              <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>We don't chase trends. We build resilient systems that help you stay invested through every market cycle.</p>
            </div>
          </div>
        </section>

        {/* 5. VALUES */}
        <section className="about-values section-pad" style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            <div>
              <small style={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748b", display: "block", marginBottom: "1rem", fontWeight: "600" }}>What we value</small>
              <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", color: '#0f172a' }}>
                Quiet confidence<br />
                <em style={{ fontStyle: "italic", color: "#475569" }}>over loud promises.</em>
              </h2>
            </div>
            <p style={{ lineHeight: "1.7", color: "#334155", fontSize: "1.1rem" }}>
              We build for people who want a partner, not a prediction machine. That means honest conversations, clear fees, and a steady hand when the market changes. It also means making room for questions, explaining trade-offs clearly, and measuring progress by the freedom your plan creates.
            </p>
          </div>
        </section>

        {/* 6. PRINCIPLES */}
        <section className="about-principles section-pad container" style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-kicker" style={{ marginBottom: "3rem" }}>
            <span style={{ fontWeight: "600", color: '#333' }}>How we show up</span>
            <span className="line" style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#22c55e", marginTop: "0.5rem" }} />
          </div>
          <div className="about-principle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
            <article style={{ padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "1.25rem", marginBottom: "0.75rem", color: '#0f172a' }}>Listen first</strong>
              <p style={{ color: "#64748b", lineHeight: "1.6" }}>Your goals set the frame before any portfolio is built.</p>
            </article>
            <article style={{ padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "1.25rem", marginBottom: "0.75rem", color: '#0f172a' }}>Explain clearly</strong>
              <p style={{ color: "#64748b", lineHeight: "1.6" }}>Every recommendation should make sense in plain language.</p>
            </article>
            <article style={{ padding: "2rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <strong style={{ display: "block", fontSize: "1.25rem", marginBottom: "0.75rem", color: '#0f172a' }}>Stay close</strong>
              <p style={{ color: "#64748b", lineHeight: "1.6" }}>Good investing is a relationship that evolves with your life.</p>
            </article>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
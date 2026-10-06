import { ArrowUpRight, BarChart3, Globe2, Sprout } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useEffect, useRef } from "react";

// The specific image you requested
const marketBg = "https://media.ffycdn.net/eu/deriv/PzZJd8SEHe6gxzrvR1GN.webp";

export default function Market() {
  const tradingViewContainer = useRef(null);

  useEffect(() => {
    // Inject TradingView Widget Script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    
    // Configuration for Transparent Widget
    script.innerHTML = JSON.stringify({
      "colorTheme": "light", 
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": true, 
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "100%",
      "height": "400",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(240, 243, 250, 0)", 
      "scaleFontColor": "rgba(106, 109, 120, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Equities",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
            { "s": "FOREXCOM:NSXUSD", "d": "US 100" },
            { "s": "FX_IDC:EURUSD", "d": "EUR/USD" }
          ]
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BINANCE:BTCUSDT", "d": "Bitcoin" },
            { "s": "BINANCE:ETHUSDT", "d": "Ethereum" }
          ]
        }
      ]
    });

    if (tradingViewContainer.current) {
      tradingViewContainer.current.appendChild(script);
    }

    return () => {
      if (tradingViewContainer.current) {
        tradingViewContainer.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="inner-page">
        
        {/* Hero Section with Specific Background Image */}
        <section 
          className="page-hero animate__animated animate__fadeInLeft" 
          style={{ 
            position: 'relative',
            padding: "8rem 2rem", 
            backgroundImage: `url(${marketBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Green Overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(20, 40, 30, 0.88)', 
            zIndex: 1
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
            <p className="eyebrow" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: '#86efac' }}>
              <span className="eyebrow-dot" style={{ width: "8px", height: "8px", backgroundColor: "#86efac", borderRadius: "50%" }} /> 
              01 / The market
            </p>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", fontWeight: "700", marginBottom: "1.5rem", color: '#f3f4f6' }}>
              Invest in<br />
              <em style={{ fontStyle: "italic", color: "#d1d5db" }}>possibility.</em>
            </h1>
            <p style={{ maxWidth: "600px", lineHeight: "1.6", color: "#e5e7eb", fontSize: "1.25rem" }}>
              We believe a portfolio should be a map of the world you want to participate in — diversified, resilient, and legible. Our market view is broad enough to see opportunity and disciplined enough to respect uncertainty.
            </p>
          </div>
        </section>

        {/* Market Panel & Widget - Kept Light for Chart Readability */}
        <section className="market-panel section-pad" style={{ padding: "5rem 0", backgroundColor: "#f9fafb" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <div className="section-kicker" style={{ marginBottom: "2rem" }}>
              <span style={{ fontWeight: "600", color: '#333' }}>What we watch</span>
              <span className="line" style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#22c55e", marginTop: "0.5rem" }} />
            </div>
            
            <p className="section-lede" style={{ marginBottom: "3rem", maxWidth: "700px", lineHeight: "1.6", color: "#444" }}>
              Markets are not a scoreboard. They are a living system of people, businesses, technologies, and resources. We look for durable engines of progress, then build the balance to hold them through the noise.
            </p>

            {/* TradingView Widget Container */}
            <div 
              ref={tradingViewContainer} 
              style={{ 
                width: "100%", 
                height: "450px", 
                marginBottom: "4rem", 
                borderRadius: "12px", 
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.05)",
                backgroundColor: "white" 
              }} 
            />

            <div className="theme-grid animate__animated animate__fadeInUp" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
              <article style={{ padding: "2rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <Globe2 size={32} color="#22c55e" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: '#111' }}>Global opportunity</h3>
                <p style={{ color: "#666", lineHeight: "1.5" }}>Access the ideas, businesses, and economies shaping the next chapter across regions and sectors.</p>
              </article>
              <article style={{ padding: "2rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <Sprout size={32} color="#22c55e" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: '#111' }}>Durable growth</h3>
                <p style={{ color: "#666", lineHeight: "1.5" }}>Own quality assets that can compound through changing conditions and create options for your future.</p>
              </article>
              <article style={{ padding: "2rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <BarChart3 size={32} color="#22c55e" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: '#111' }}>Measured risk</h3>
                <p style={{ color: "#666", lineHeight: "1.5" }}>Use balance, not bravado, to keep your plan moving forward when markets become unpredictable.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Image Strip Section - NOW DARK MODE WITH LIGHT TEXT */}
        <section className="page-image-strip container" style={{ padding: "6rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", backgroundColor: "#111827", borderRadius: "20px", marginTop: "2rem" }}>
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/zAXPBQaldyhgyzSq.png" 
            alt="Stock research workstation" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} 
          />
          <div>
            <small style={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", display: "block", marginBottom: "0.5rem" }}>Research in context</small>
            <h2 style={{ fontSize: "2.5rem", lineHeight: "1.2", marginBottom: "1rem", color: '#f3f4f6' }}>
              See the system<br />
              <em style={{ fontStyle: "italic", color: "#d1d5db" }}>behind the signal.</em>
            </h2>
            <p style={{ lineHeight: "1.6", color: "#e5e7eb" }}>
              We turn market complexity into useful context, so your decisions can stay connected to the life they are meant to support.
            </p>
          </div>
        </section>

        {/* Quote Section - NOW DARK MODE WITH LIGHT TEXT */}
        <section className="quote-section container section-pad" style={{ padding: "6rem 2rem", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <blockquote style={{ fontSize: "2rem", fontStyle: "italic", color: "#f3f4f6", marginBottom: "2rem", lineHeight: "1.4", fontWeight: "500" }}>
            “The best investment plan is the one that gives you the confidence to stay invested.”
          </blockquote>
          <p className="section-lede" style={{ marginBottom: "2rem", lineHeight: "1.6", color: "#d1d5db", fontSize: "1.1rem" }}>
            A good market experience gives you context, not just quotes. We help you understand what is moving, what matters, and when patience is doing the work. Our process considers valuation, resilience, diversification, and the role each holding plays before it earns a place in the portfolio.
          </p>
          <Link className="text-link" href="/approach" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: "600", textDecoration: "none", color: "#ffffff" }}>
            How we build portfolios <ArrowUpRight size={16} />
          </Link>
        </section>

        {/* Footer Area / CTA - DARK MODE WITH LIGHT TEXT */}
        <section style={{ backgroundColor: "#0f172a", padding: "5rem 2rem", color: "white", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#f3f4f6" }}>Make your next move<br /><em style={{ color: "#9ca3af" }}>deliberate.</em></h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
               <a href="https://app.quantivesthq.com" style={{ padding: "1rem 2rem", background: "#22c55e", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "600" }}>Open your account</a>
               <Link href="/market" style={{ padding: "1rem 2rem", background: "transparent", border: "1px solid #4b5563", color: "#e5e7eb", textDecoration: "none", borderRadius: "8px", fontWeight: "600" }}>Explore Markets</Link>
            </div>
            <div style={{ marginTop: "3rem", display: "flex", gap: "2rem", justifyContent: "center", fontSize: "0.9rem", color: "#9ca3af" }}>
              <Link href="/approach" style={{ color: "#9ca3af", textDecoration: "none" }}>Our approach</Link>
              <Link href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>About quantivesthq</Link>
              <Link href="/resources" style={{ color: "#9ca3af", textDecoration: "none" }}>Resources</Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
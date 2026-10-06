import { ArrowDownRight, ArrowUpRight, ChevronRight, Leaf, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import MarketOverview from "@/components/MarketOverview";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ResearchSection from "@/components/ResearchSection";
import { MobileInvesting } from "@/components/MobileInvesting";
import TrustSection from "@/components/TrustSection";
import AssetVisuals from "@/components/AssetVisuals";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroNetwork from "@/components/HeroNetwork";
import HomeCollage from "@/components/HomeCollage";
import PointOfViewShowcase from "@/components/PointOfViewShowcase";
import CryptoFutureSection from "@/components/CryptoFutureSection";
import MarketTicker from "@/components/MarketTicker";
import RotatingHeadline from "@/components/RotatingHeadline";
import GrowthFilm from "@/components/GrowthFilm";
import { useEffect, useState } from "react";

const hero = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/qkTCrLhqjqKZIZkN.jpg";
const growth = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/hiTxoOJcKCQWNaDA.jpg";
const advisor = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663940838304/hSubYPbzXkbrUsxU.png";

// Expanded IDs for CoinGecko (Crypto)
const COIN_IDS = "bitcoin,ethereum,solana,binancecoin,ripple,cardano,avalanche-2,polkadot,dogecoin,chainlink";

// Manual Data for Stocks (Since CoinGecko Free API doesn't always support US Stocks reliably)
const STOCK_DATA = [
  {
    id: 'apple',
    symbol: 'AAPL',
    name: 'Apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', // Official SVG
    current_price: 178.35, // Example price
    price_change_percentage_24h: 1.24
  },
  {
    id: 'google',
    symbol: 'GOOGL',
    name: 'Google',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Official SVG
    current_price: 142.65, // Example price
    price_change_percentage_24h: -0.45
  }
];

export default function Home() {
  const [cryptoData, setCryptoData] = useState([]);
  const [allAssets, setAllAssets] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );
        const data = await response.json();
        
        // Combine Crypto and Stock data
        const combined = [...STOCK_DATA, ...data];
        setAllAssets(combined);
      } catch (error) {
        console.error("Failed to fetch market data", error);
        // Fallback to just stocks if API fails
        setAllAssets(STOCK_DATA);
      }
    };

    fetchPrices();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${hero})` }} />
          <HeroNetwork />
          <div className="hero-overlay" />
          <div className="hero-content container" style={{ marginBottom: "11px", marginLeft: "-8px", marginRight: "12px", marginTop: "-4px", opacity: 1, paddingBottom: "177px", paddingLeft: "36px", paddingRight: "45px" }}>
            <p className="eyebrow light"><span className="eyebrow-dot" /> Clarity in every move.</p>
            <h1>Invest with<br /><RotatingHeadline /></h1>
            <p className="hero-copy">Navigate markets with precision. Build a resilient portfolio using tools that turn complex data into clear, long-term confidence.</p>
            <div className="hero-actions">
              <a className="button button-sand" href="https://app.quantivesthq.org">Start building <ArrowUpRight size={16} /></a>
              <Link className="button button-ghost" href="/market">View markets <ArrowDownRight size={16} /></Link>
            </div>
            <img className="hero-bana" src="https://fxpro-cdn.cloud/repo/website/assets/img/components/ui-platforms/platforms-image-block@1376.webp" alt="quantivesthq digital investing preview" />
          </div>
          <img className="hero-bana-desktop" src="https://fxpro-cdn.cloud/repo/website/assets/img/components/ui-platforms/platforms-image-block@1376.webp" alt="quantivesthq portfolio interface" />
          <div className="hero-note"><span>01</span><span>Patient capital<br />for real growth.</span></div>
        </section>
        
        {/* LIVE MARQUEE SECTION - EXPANDED */}
        <div className="announcement" style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', backgroundColor: '#fff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '1rem 0' }}>
          <div className="announcement-track" style={{ display: 'inline-flex', animation: 'scroll 45s linear infinite' }}>
            {/* We map twice to ensure seamless infinite loop */}
            {[...allAssets, ...allAssets].map((asset, index) => (
              <div key={`${asset.id}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0 2.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <img 
                  src={asset.image} 
                  alt={asset.name} 
                  style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'contain' }} 
                />
                <span style={{ color: '#1e293b' }}>{asset.symbol.toUpperCase()}</span>
                <span style={{ color: '#64748b', fontWeight: '400' }}>${asset.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span style={{ 
                  color: asset.price_change_percentage_24h >= 0 ? '#16a34a' : '#dc2626',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  background: asset.price_change_percentage_24h >= 0 ? '#dcfce7' : '#fee2e2',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  {asset.price_change_percentage_24h >= 0 ? '+' : ''}{asset.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <GrowthFilm />
        <MarketTicker />

        <section className="intro-section container section-pad animate__animated animate__fadeInLeft">
          <div className="section-kicker"><span>01 / The new standard</span><span className="line" /></div>
          <div className="intro-grid"><div><h2>More than numbers.<br /><em>A clear perspective.</em></h2></div><div className="intro-body"><p>Volatility is noise. Your goals are signal. quantivesthq combines rigorous research with transparent tools, bringing a human touch to the art of stock investing.</p><Link className="text-link" href="/approach">See our philosophy <ChevronRight size={16} /></Link></div></div>
          <div className="metric-row"><div><strong><AnimatedCounter value={98.4} suffix="%" decimals={1} /></strong><span>Total transparency</span></div><div><strong><AnimatedCounter value={24} suffix="/7" /></strong><span>Real-time access</span></div><div><strong><AnimatedCounter value={1} suffix=":1" /></strong><span>Dedicated support</span></div></div><div className="point-of-view-row"><p>Discover how a disciplined, calm approach transforms into a portfolio you can trust.</p><Link className="button button-dark" href="/approach">Our approach <ChevronRight size={16} /></Link></div>
        </section>

        <PointOfViewShowcase />
        <MarketOverview />

        <section className="feature-section section-pad"><div className="container feature-grid"><div className="feature-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Why quantivesthq</p><h2>Grow with conviction<br /><em>and clarity.</em></h2><p>We combine global diversification with a steady, human perspective. No hype. No hidden fees. Just a robust system designed for your future.</p><div className="feature-list"><div><ShieldCheck size={20} /><span><strong>Built for resilience</strong> Strategies engineered for decades, not days.</span></div><div><LineChart size={20} /><span><strong>Radical transparency</strong> Know what you own, why you own it, and the true cost.</span></div><div><Leaf size={20} /><span><strong>Purposeful impact</strong> Let your wealth compound with intention.</span></div></div><Link className="text-link" href="/market">Explore assets <ChevronRight size={16} /></Link></div><div className="feature-visual"><img src={growth} alt="New growth emerging from a forest floor" /><div className="visual-card"><span>Growth mindset</span><strong>Patient capital<br />opens doors.</strong><small>01 — quantivesthq Research</small></div></div></div></section>

        <CryptoFutureSection />
        <PortfolioShowcase />
        <ResearchSection />
        <AssetVisuals />
        <HomeCollage />
        <MobileInvesting />
        
        <section className="people-section section-pad container"><div className="people-copy"><div className="section-kicker"><span>05 / The human element</span><span className="line" /></div><h2>Smart tech.<br /><em>Human wisdom.</em></h2><p>Your life isn't a algorithm. Our team bridges the gap between market data and your personal goals, making every next step feel certain.</p><Link className="text-link" href="/about">Meet our strategists <ChevronRight size={16} /></Link></div><div className="people-portrait"><img src={advisor} alt="quantivesthq investment advisor" /><div className="portrait-label"><span>Lilian Mensah</span><small>Lead Wealth Strategist</small></div></div></section>
        
        <TrustSection />

        <section className="dark-cta section-pad"><div className="container cta-inner"><Sparkles size={24} /><h2>Secure your<br /><em>future today.</em></h2><p>Analyze markets, start investing, and put a smarter plan into action.</p><div className="hero-actions"><a className="button button-sand" href="https://app.quantivesthq.org">Start investing <ArrowUpRight size={16} /></a><a className="button button-ghost" href="https://app.quantivesthq.org">Create account <ArrowUpRight size={16} /></a></div><div className="cta-ornament">R<br />S</div></div></section>
      </main>
      <SiteFooter />
      
      {/* CSS for Infinite Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .announcement-track {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
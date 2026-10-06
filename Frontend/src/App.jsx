import { useNavigate } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import "./App.css";

export default function App() {
  const navigate = useNavigate();
  return (
    <PageTransition>
    <div id="landing">

      {/* Navbar */}
      <nav id="navbar">
        <div id="nav-brand">
          <span id="brand-dot" />
          <span id="brand-name">RoadWatch</span>
        </div>
        <div id="nav-links">
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById("how-it-works").scrollIntoView({ behavior: "smooth" }); }}>How it works</a>
          <a href="#stats" onClick={(e) => { e.preventDefault(); document.getElementById("stats").scrollIntoView({ behavior: "smooth" }); }}>Impact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div id="hero-badge">AI-Powered Road Safety</div>
        <h1>Detect & Report<br />Potholes Instantly</h1>
        <p id="hero-sub">
          Upload a photo or video of a damaged road. Our system detects potholes
          automatically, logs the location, and sends it to the right authorities
          for faster repair.
        </p>
        <div id="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate("/report")}>
            <img src="dual-camera.png" alt="" />
            Report a Pothole
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
            <img src="performance.png" alt="" />
            View Dashboard
          </button>
        </div>
        <p id="hero-note">No account needed to submit a report.</p>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div id="steps">
          <div className="step">
            <span className="step-num">1</span>
            <h3>Capture</h3>
            <p>Take a photo or record a short video of the pothole on your road.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-num">2</span>
            <h3>Detect</h3>
            <p>Our AI model scans the image and marks potholes with confidence scores.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-num">3</span>
            <h3>Report</h3>
            <p>The detection is logged with GPS location and submitted as a report.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-num">4</span>
            <h3>Track</h3>
            <p>Monitor report status and road condition trends on the dashboard.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats">
        <div className="stat">
          <span className="stat-num">2,400+</span>
          <span className="stat-label">Potholes Detected</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">18</span>
          <span className="stat-label">Roads Monitored</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">94%</span>
          <span className="stat-label">Detection Accuracy</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">310</span>
          <span className="stat-label">Reports Submitted</span>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner">
        <h2>Spotted a pothole? Report it now.</h2>
        <p>Every report helps authorities prioritize road repairs in your area.</p>
        <div id="cta-banner-btns">
          <button className="btn btn-primary" onClick={() => navigate("/report")}>Report a Pothole</button>
          <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>Open Dashboard</button>
        </div>
      </section>

      <footer id="footer">
        <span>© 2026 RoadWatch — Pothole Detection & Reporting Platform</span>
      </footer>

    </div>
    </PageTransition>
  );
}

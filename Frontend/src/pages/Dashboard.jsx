import { useNavigate } from "react-router-dom";
import { MapPin, Clock3, ShieldCheck, TriangleAlert, Leaf } from "lucide-react";
import PageTransition from "../components/PageTransition";
import "./Dashboard.css";

const stats = [
  { icon: <MapPin size={34} strokeWidth={1.8} />, title: "Total Reports", number: 12, desc: "↗ +3 this week", green: true },
  { icon: <Clock3 size={34} strokeWidth={1.8} />, title: "Under Review", number: 5, desc: "Pending verification", green: false },
  { icon: <ShieldCheck size={34} strokeWidth={1.8} />, title: "Resolved", number: 6, desc: "Fixed by authorities", green: false },
  { icon: <TriangleAlert size={34} strokeWidth={1.8} />, title: "High Priority", number: 1, desc: "Needs immediate action", green: false },
];

const reports = [
  { location: "MG Road, Kolkata",    type: "Pothole",     status: "Under Review", date: "May 27, 2025 • 2:14 PM" },
  { location: "Park Street, Kolkata", type: "Road damage", status: "Resolved",     date: "May 26, 2025 • 11:32 AM" },
  { location: "EM Bypass, Kolkata",  type: "Pothole",     status: "High Priority", date: "May 25, 2025 • 5:47 PM" },
  { location: "Salt Lake, Kolkata",  type: "Other",       status: "Under Review", date: "May 24, 2025 • 9:12 AM" },
  { location: "Rajarhat, Kolkata",   type: "Road damage", status: "Resolved",     date: "May 22, 2025 • 4:33 PM" },
];

const typeBadge = { Pothole: "badge-pothole", "Road damage": "badge-road", Other: "badge-other" };
const statusBadge = { "Under Review": "badge-review", Resolved: "badge-resolved", "High Priority": "badge-high" };

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div id="dash-page">

        {/* Header */}
        <header id="dash-header">
          <div id="dash-logo" onClick={() => navigate("/", { state: { back: true } })}>
            <span id="dash-logo-dot" />
            <span id="dash-logo-text">RoadWatch</span>
          </div>
          <nav id="dash-nav">
            <a href="#">How it works</a>
            <a href="#">Impact</a>
          </nav>
        </header>

        {/* Main */}
        <main id="dash-main">
          <div id="dash-wrapper">

            {/* Page heading row */}
            <div id="dash-title-row">
              <div>
                <h1 id="dash-heading">Dashboard</h1>
                <p id="dash-subtitle">Track your reports and help make roads safer.</p>
              </div>
              <button id="dash-report-btn" onClick={() => navigate("/report")}>
                + &nbsp; Report a Pothole
              </button>
            </div>

            {/* Stat cards */}
            <div id="stat-cards">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-icon">{s.icon}</div>
                  <div className="stat-content">
                    <p className="stat-title">{s.title}</p>
                    <p className="stat-number">{s.number}</p>
                    <p className={`stat-desc${s.green ? " stat-green" : ""}`}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main content grid */}
            <div id="dash-grid">

              {/* Recent Reports */}
              <div className="dash-card" id="reports-card">
                <div id="reports-header">
                  <h2 className="card-title">Recent Reports</h2>
                  <span id="view-all">View all →</span>
                </div>
                <table id="reports-table">
                  <thead>
                    <tr>
                      <th style={{ width: "34%" }}>Location</th>
                      <th style={{ width: "20%" }}>Type</th>
                      <th style={{ width: "20%" }}>Status</th>
                      <th style={{ width: "22%" }}>Date</th>
                      <th style={{ width: "4%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((r, i) => (
                      <tr key={i} className={i === reports.length - 1 ? "last-row" : ""}>
                        <td>
                          <span className="loc-cell">
                            <MapPin size={16} strokeWidth={1.8} className="loc-icon" />
                            {r.location}
                          </span>
                        </td>
                        <td><span className={`badge ${typeBadge[r.type]}`}>{r.type}</span></td>
                        <td><span className={`badge ${statusBadge[r.status]}`}>{r.status}</span></td>
                        <td className="date-cell">{r.date}</td>
                        <td className="arrow-cell">→</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quick Stats */}
              <div className="dash-card" id="quick-stats-card">
                <h2 className="card-title" style={{ marginBottom: "20px" }}>Quick Stats</h2>

                {/* Donut + legend */}
                <div id="donut-row">
                  <div id="donut-wrap">
                    <div id="donut" />
                    <div id="donut-center">
                      <span id="donut-num">12</span>
                      <span id="donut-label">Total Reports</span>
                    </div>
                  </div>
                  <div id="legend">
                    {[
                      { color: "#B765FF", label: "Pothole",     count: 6,  pct: "50%" },
                      { color: "#4C8DFF", label: "Road damage", count: 4,  pct: "33%" },
                      { color: "#8190A5", label: "Other",       count: 2,  pct: "17%" },
                    ].map((l) => (
                      <div className="legend-item" key={l.label}>
                        <div className="legend-left">
                          <span className="legend-dot" style={{ background: l.color }} />
                          <span className="legend-label">{l.label}</span>
                        </div>
                        <div className="legend-right">
                          <span className="legend-count">{l.count}</span>
                          <span className="legend-pct">{l.pct}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div id="impact-divider" />
                <div id="impact-section">
                  <div id="impact-icon">
                    <Leaf size={30} strokeWidth={1.8} color="#B765FF" />
                  </div>
                  <div id="impact-text">
                    <p id="impact-title">Your Impact</p>
                    <p id="impact-desc">Your reports help create safer roads for everyone.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <PageTransition>
    <div style={{ padding: "40px", fontFamily: "var(--sans)" }}>
      <button
        onClick={() => navigate("/", { state: { back: true } })}
        style={{ marginBottom: "24px", cursor: "pointer", background: "none", border: "1px solid var(--border)", borderRadius: "6px", padding: "6px 14px", color: "var(--text-h)", fontSize: "14px" }}
      >
        ← Back
      </button>
      <h1 style={{ fontSize: "28px", color: "var(--text-h)", margin: "0 0 8px" }}>Dashboard</h1>
      <p style={{ color: "var(--text)" }}>This page will contain the road condition dashboard.</p>
    </div>
    </PageTransition>
  );
}

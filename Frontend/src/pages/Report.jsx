import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import "./Report.css";

export default function Report() {
  const navigate = useNavigate();
  const [reportType, setReportType] = useState("pothole");
  const [dragOver, setDragOver] = useState(false);
  const [image, setImage] = useState(null);

  function handleFile(file) {
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <PageTransition>
      <div id="report-page">
        {/* Navbar */}
        <nav id="report-nav">
          <div
            id="report-nav-brand"
            onClick={() => navigate("/", { state: { back: true } })}
            style={{ cursor: "pointer" }}
          >
            <span id="report-brand-dot" />
            <span id="report-brand-name">RoadWatch</span>
          </div>
          <div id="report-nav-links">
            <a href="#">How it works</a>
            <a href="#">Impact</a>
          </div>
        </nav>

        
        {/* <div style={{ fontFamily: "var(--sans)" }} className="items-start ">
          <button
            onClick={() => navigate("/", { state: { back: true } })}
            style={{

              cursor: "pointer",
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "6px 14px",
              color: "var(--text-h)",
              fontSize: "14px",
            }}
          >
            ← Back
          </button>
        </div> */}


        {/* Page heading */}
        <div id="report-heading" className="pt-3 ">
          <h1 className="pb-2">Report a Pothole</h1>
          <p>Help us identify road damage and improve road safety.</p>
        </div>

        {/* Two-column form */}
        <div id="report-cards">
          {/* LEFT — Upload */}
          <div className="report-card  " id="upload-card">
            <div
              id="upload-zone"
              className={dragOver ? "drag-active" : ""}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => document.getElementById("file-input").click()}
            >
              {image ? (
                <img src={image} alt="preview" id="upload-preview" />
              ) : (
                <>
                  <div id="upload-icon-wrap">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect
                        x="4"
                        y="10"
                        width="40"
                        height="30"
                        rx="4"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                      <circle
                        cx="24"
                        cy="25"
                        r="7"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                      <circle cx="24" cy="25" r="3" fill="#6b7280" />
                      <rect
                        x="14"
                        y="10"
                        width="6"
                        height="4"
                        rx="1"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                      <circle cx="36" cy="18" r="5" fill="#101116" />
                      <line
                        x1="36"
                        y1="14"
                        x2="36"
                        y2="22"
                        stroke="#a855f7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="32"
                        y1="18"
                        x2="40"
                        y2="18"
                        stroke="#a855f7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p id="upload-title">Upload pothole image</p>
                  <p id="upload-sub">
                    Drag &amp; drop an image here or click to browse
                  </p>
                  <p id="upload-hint">JPG, PNG up to 10MB</p>
                </>
              )}
            </div>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <button id="camera-btn" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="15"
                  rx="2"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="14"
                  r="4"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                  stroke="#a855f7"
                  strokeWidth="1.8"
                />
              </svg>
              Use Camera
            </button>
          </div>

          {/* RIGHT — Form */}
          <div className="report-card" id="form-card">
            {/* Location */}
            <div className="field-group">
              <label className="field-label mx-0.5">Location</label>
              <div id="location-row">
                <div id="location-input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="#6b7280"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="#6b7280"
                      strokeWidth="1.8"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter address or tap to set location"
                    className="field-input"
                  />
                </div>
                <button id="location-btn" type="button">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#a855f7"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 2v3M12 19v3M2 12h3M19 12h3"
                      stroke="#a855f7"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Use my location
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="field-group">
              <label className="field-label mx-0.5">Description</label>
              <textarea
                className="field-input field-textarea"
                placeholder="Describe the pothole or road damage..."
              />
            </div>

            {/* Report type */}
            <div className="field-group">
              <label className="field-label mx-0.5">Report type</label>
              <div id="report-types">
                {["pothole", "road damage", "other"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`type-option ${reportType === type ? "type-selected" : ""}`}
                    onClick={() => setReportType(type)}
                  >
                    <span
                      className={`type-radio ${reportType === type ? "type-radio-selected" : ""}`}
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button id="submit-btn" type="button">
              Submit Report
            </button>
            <p id="no-account">No account needed to submit a report.</p>
          </div>
        </div>

        {/* Feature strip */}
        <div id="feature-strip">
          <div className="feature-item ">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                stroke="#a855f7"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="#a855f7"
                strokeWidth="1.8"
              />
            </svg>
            <div>
              <p className="fi-title">
                GPS Location{" "}
                <p className="fi-sub">
                  Captures exact location &amp; timestamp
                </p>
              </p>
            </div>
          </div>
          <div className="feature-divider" />
          <div className="feature-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z"
                stroke="#a855f7"
                strokeWidth="1.8"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="#a855f7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="fi-title">AI Verification</p>
              <p className="fi-sub">
                Checks image authenticity &amp; duplicates
              </p>
            </div>
          </div>
          <div className="feature-divider" />
          <div className="feature-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="#a855f7"
                strokeWidth="1.8"
              />
              <path d="M22 6l-10 7L2 6" stroke="#a855f7" strokeWidth="1.8" />
            </svg>
            <div>
              <p className="fi-title">Authority Notification</p>
              <p className="fi-sub">
                Alerts relevant authorities for quick action
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

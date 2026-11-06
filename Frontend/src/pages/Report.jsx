
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import "./Report.css";

export default function Report() {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [reportType, setReportType] = useState("pothole");
  const [cameraActive, setCameraActive] = useState(false);
  const [image, setImage] = useState(null);
  const [cameraError, setCameraError] = useState("");

  async function startCamera() {
    try {
      setCameraError("");

      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Camera requires HTTPS or localhost.");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraActive(true);
      }
    } catch (error) {
      setCameraError(
        error.name === "NotAllowedError"
          ? "Camera permission denied. Please allow camera access."
          : error.message || "Unable to access camera."
      );
    }
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraActive(false);

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  function capturePhoto() {
    const video = videoRef.current;

    if (!video || !video.videoWidth) return;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    setImage(canvas.toDataURL("image/jpeg", 0.9));

    stopCamera();
  }

  function retakePhoto() {
    setImage(null);
    startCamera();
  }

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <PageTransition>
      <div id="report-page">

        {/* Navbar */}
        <nav id="report-nav">
          <div
            id="report-nav-brand"
            onClick={() => navigate("/", { state: { back: true } })}
          >
            <span id="report-brand-dot" />
            <span id="report-brand-name">RoadWatch</span>
          </div>

          <div id="report-nav-links">
            <a href="#">How it works</a>
            <a href="#">Impact</a>
          </div>
        </nav>

        {/* Heading */}
        <div id="report-heading">
          <h1>Report a Pothole</h1>
          <p>Help us identify road damage and improve road safety.</p>
        </div>

        {/* Report Cards */}
        <div id="report-cards">

          {/* LEFT - Camera */}
          <div className="report-card" id="upload-card">

            <div id="camera-preview">

              {image ? (
                <img
                  src={image}
                  alt="Captured pothole"
                  id="upload-preview"
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    id="camera-video"
                    autoPlay
                    playsInline
                    muted
                  />

                  {!cameraActive && (
                    <div id="camera-placeholder">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
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

                      <p>Capture pothole image</p>
                      <span>
                        Use your camera to capture road damage
                      </span>
                    </div>
                  )}
                </>
              )}

            </div>

            {cameraError && (
              <p className="camera-error">{cameraError}</p>
            )}

            <div className="camera-controls">

              {!cameraActive && !image && (
                <button id="camera-btn" onClick={startCamera}>
                  <span>◎</span> Start Camera
                </button>
              )}

              {cameraActive && (
                <>
                  <button id="camera-btn" onClick={capturePhoto}>
                    <span>◎</span> Capture Photo
                  </button>

                  <button
                    className="retake-btn"
                    onClick={stopCamera}
                  >
                    Stop Camera
                  </button>
                </>
              )}

              {image && (
                <>
                  <button id="camera-btn" onClick={retakePhoto}>
                    Retake Photo
                  </button>

                  <button
                    className="retake-btn"
                    onClick={() => setImage(null)}
                  >
                    Remove Photo
                  </button>
                </>
              )}

            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="report-card" id="form-card">

            {/* Location */}
            <div className="field-group">
              <label className="field-label">Location</label>

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
                  Use my location
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="field-group">
              <label className="field-label">Description</label>

              <textarea
                className="field-input field-textarea"
                placeholder="Describe the pothole or road damage..."
              />
            </div>

            {/* Report Type */}
            <div className="field-group">
              <label className="field-label">Report type</label>

              <div id="report-types">
                {["pothole", "road damage", "other"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`type-option ${
                      reportType === type ? "type-selected" : ""
                    }`}
                    onClick={() => setReportType(type)}
                  >
                    <span
                      className={`type-radio ${
                        reportType === type ? "type-radio-selected" : ""
                      }`}
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

            <p id="no-account">
              No account needed to submit a report.
            </p>

          </div>
        </div>

        {/* Feature Strip */}
        <div id="feature-strip">

          <div className="feature-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                stroke="#a855f7"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="9" r="2.5" stroke="#a855f7" strokeWidth="1.8" />
            </svg>

            <div>
              <p className="fi-title">GPS Location</p>
              <p className="fi-sub">
                Captures exact location & timestamp
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
              />
            </svg>

            <div>
              <p className="fi-title">AI Verification</p>
              <p className="fi-sub">
                Checks image authenticity & duplicates
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

# Pothole Detection System

A final-year project for detecting potholes from images or video and helping identify road conditions that may require maintenance.

This repository has just been initialized. The user interface is currently a React and Vite starter application, while the backend is reserved for the detection service and API that will be added during development.

## Project Status

The project is in the initial setup stage.

- Frontend: React with Vite
- Backend: Planned; the `backend` directory is currently empty
- Detection model: To be selected and integrated
- Database and API: To be designed

## Planned Features

- Upload an image or video for pothole detection
- Detect and mark potholes using a machine-learning model
- Display detection results and confidence scores
- Store detection history and location details
- Provide a dashboard for reviewing road conditions

## Repository Structure

```text
.
├── backend/       # Planned backend API and model integration
├── Frontend/      # React and Vite frontend application
│   ├── public/
│   └── src/
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- A future Python environment may be required for the detection model and backend

### Run the Frontend

```bash
cd Frontend
npm install
npm run dev
```

The development server will print a local URL, usually `http://localhost:5173`.

### Available Frontend Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run lint      # Run lint checks
npm run preview   # Preview the production build locally
```

## Development Roadmap

1. Design the frontend workflow for image and video uploads.
2. Select and prepare a pothole image dataset.
3. Train or integrate a pothole-detection model.
4. Create the backend API for processing uploads and returning predictions.
5. Connect the frontend to the backend.
6. Test detection accuracy and improve the user experience.

## Technology Stack

- React
- Vite
- JavaScript
- Oxlint
- Machine-learning backend and storage to be decided

## Contribution

This project is under active development. New features, model experiments, documentation, and testing improvements can be added as the project progresses.

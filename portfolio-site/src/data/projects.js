export default [
  {
    id: 1,
    title: "Live Device Health Monitoring",
    description: "Full-stack real-time IoT dashboard alerting on device failures before they happen. Built to solve unreliable field device uptime in remote manufacturing.",
    why: "Client needed 99.9% device uptime; traditional polling missed anomalies.",
    architecture: "React frontend + Node/Express backend with WebSocket bi-directional comms + PostgreSQL for time-series data + ML model for predictive failure (threshold alerts).",
    challenge: "Handled 1K+ concurrent device streams with sub-100ms latency.",
    impact: "Reduced downtime alerts by 45%; deployed for 50+ devices in production.",
    tags: ["React", "Node", "PostgreSQL", "WebSockets"],
    demo: "https://device-monitor.example.com",
    github: "https://github.com/yourusername/device-health-monitor",
    link: "#"
  },
  {
    id: 2,
    title: "Revolutionize Indian Elections",
    description: "Secure e-voting prototype with biometric auth, blockchain-inspired audit trails, and AI anomaly detection for fraud prevention.",
    why: "Paper ballots cause delays/errors; needed tamper-proof digital alternative for large-scale simulations.",
    architecture: "Python Flask backend + React dashboard + TensorFlow for fraud ML + biometric API integration + PostgreSQL with audit logs.",
    challenge: "Ensured zero-knowledge proofs for voter privacy while enabling real-time vote tallies.",
    impact: "Simulated 10K voters; detected 98% mock fraud attempts; used in university election research.",
    tags: ["Python", "React", "AI"],
    demo: "https://elections.example.com",
    github: "https://github.com/yourusername/election-revolution",
    link: "#"
  },
  {
    id: 3,
    title: "Inventory Management Automation",
    description: "Hybrid CLI/GUI system automating stock tracking, low-stock predictions, and supplier reorder emails for small warehouses.",
    why: "Manual Excel tracking led to 20% stockouts; automated to save hours weekly.",
    architecture: "Python core + Tkinter GUI + MySQL + Pandas for analytics + SMTP for alerts + cron jobs for daily scans.",
    challenge: "Integrated barcode scanner API; handled fuzzy search for 5K+ SKUs.",
    impact: "Cut stock errors by 40%; processed 500+ orders/day for client warehouse.",
    tags: ["Python", "Tkinter", "MySQL"],
    demo: "https://inventory.example.com",
    github: "https://github.com/yourusername/inventory-automation",
    link: "#"
  },
];

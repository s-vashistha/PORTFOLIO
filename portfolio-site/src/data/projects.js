export default [
  {
    id: 1,
    title: "Production HRMS Platform",
    description: "A modular HRMS platform built for secure internal workforce management, role-based access, and structured day-to-day operations.",
    architecture: "React.js frontend, Node.js and Express services, PostgreSQL data layer, and JWT-based authentication with RBAC controls.",
    challenge: "Designing a maintainable multi-user platform that could support internal workflows while keeping access control and operations secure.",
    impact: "Serves 30+ users in production and reduces manual effort across core operational workflows.",
    responsibilities: [
      "Architected modular application flows for workforce and operations management.",
      "Built secure REST endpoints for role-specific access and internal services.",
      "Delivered the platform as a production-grade system for secure internal usage."
    ],
    tags: ["React.js", "Node.js", "PostgreSQL", "JWT", "RBAC"],
  },
  {
    id: 2,
    title: "Real-Time Device Monitoring System",
    description: "A live IoT monitoring platform that streams telemetry to responsive dashboards for visibility, tracking, and system awareness.",
    architecture: "React-based dashboards, Node.js backend services, WebSocket communication, JWT-protected access, and CI/CD deployment through GitHub Actions on Render.",
    challenge: "Keeping live telemetry streams reliable while also making dashboards fast, readable, and deployable through a streamlined pipeline.",
    impact: "Enabled secure live telemetry monitoring, responsive analytics, and production-ready deployment workflows.",
    responsibilities: [
      "Implemented live device telemetry handling with WebSockets.",
      "Established secure backend services with JWT authentication.",
      "Built responsive dashboards for analytics and performance visualization."
    ],
    tags: ["React.js", "Node.js", "WebSockets", "JWT", "GitHub Actions", "Render"],
  },
  {
    id: 3,
    title: "Inventory Management Automation",
    description: "A Python-based inventory automation system for stock tracking, automated reordering, supplier validation, and internal reporting workflows.",
    architecture: "Python application logic, normalized data design for inventory and supplier records, CSV-based reporting, and scraping-assisted validation for products and suppliers.",
    challenge: "Combining reorder automation, reporting, and validation workflows in a lightweight system that remained practical for operational use.",
    impact: "Improved inventory visibility, automated reorder decisions, and strengthened consistency across supplier and product data.",
    responsibilities: [
      "Built stock tracking and automated reordering flows.",
      "Added role-based access control and CSV reporting support.",
      "Integrated web scraping for supplier and product validation."
    ],
    tags: ["Python", "CSV", "RBAC", "Web Scraping", "Database Design"],
  },
  {
    id: 4,
    title: "3D Portfolio Website",
    description: "Interactive portfolio showcasing GLTF/GLB assets, scroll-driven scenes, and custom GLSL effects.",
    architecture: "React.js, Three.js, GSAP ScrollTrigger, GLSL shaders, Vite",
    challenge: "Deliver cinematic scroll-driven 3D interactions while keeping performance at 60 FPS across devices.",
    impact: "Improved visitor engagement with immersive 3D storytelling and reduced asset load times.",
    responsibilities: [
      "Integrated Three.js scenes into React with React Three Fiber.",
      "Implemented GSAP ScrollTrigger-driven camera and scene transitions.",
      "Wrote custom GLSL shaders and optimized GLB assets for web delivery."
    ],
    tags: ["Three.js", "R3F", "GSAP", "GLSL"],
    demo: "https://s-vashistha.github.io/PORTFOLIO",
  },
  {
    id: 5,
    title: "Real-Time Disaster Response Platform",
    description: "A live incident tracking system with WebSocket updates and geospatial visualization.",
    architecture: "React, Node.js, Socket.io, PostgreSQL, Leaflet.js",
    challenge: "Maintaining low-latency updates for multiple concurrent users while presenting geospatial data clearly.",
    impact: "Enabled responsive incident tracking and improved planning efficiency for response teams.",
    responsibilities: [
      "Implemented real-time telemetry and event-driven alerts with Socket.io.",
      "Integrated Leaflet for geospatial visualisation and interactive maps." 
    ],
    tags: ["React.js", "Socket.io", "Leaflet.js"],
    demo: "https://s-vashistha.github.io/disaster-response-platform",
    github: "https://github.com/s-vashistha/disaster-response-platform"
  },
  {
    id: 6,
    title: "Multi-Tenant SaaS Platform",
    description: "Tenant-aware dashboards and REST APIs with schema-level isolation and RBAC.",
    architecture: "Node.js, Express, React, PostgreSQL",
    challenge: "Designing tenant isolation and role-based access at scale across multiple organizations.",
    impact: "Deployed a production multi-tenant solution serving multiple organizations.",
    responsibilities: [
      "Architected tenant-aware database isolation and RBAC.",
      "Built deployment CI/CD pipelines and production monitoring."
    ],
    tags: ["Node.js", "PostgreSQL", "RBAC"],
    demo: "https://multi-tenant-saa-s-platform-seven.vercel.app",
    github: "https://github.com/s-vashistha/MultiTenant-SaaS-Platform"
  },
  {
    id: 7,
    title: "IT Helpdesk Virtual Assistant",
    description: "Conversational virtual agent using PyTorch BiLSTM for intent classification and Flask APIs.",
    architecture: "Python, PyTorch, Flask, REST API",
    challenge: "Accurate intent classification and robust multi-turn session handling.",
    impact: "Achieved 86% intent accuracy and automated ticket creation workflows.",
    responsibilities: [
      "Trained a BiLSTM intent classifier and implemented a multi-turn dialogue manager.",
      "Exposed models via Flask REST APIs backed by a SQL ticket store."
    ],
    tags: ["Python", "PyTorch", "NLP"],
    github: "https://github.com/s-vashistha/it-helpdesk-agent"
  },
  {
    id: 8,
    title: "Sales Forecasting & Inventory Optimization",
    description: "Time-series forecasting and inventory optimization using ARIMA/Prophet models with Flask APIs.",
    architecture: "Python, Flask, React, Scikit-learn",
    challenge: "Deliver accurate forecasts and actionable inventory decisions.",
    impact: "Reduced excess inventory and stockouts using ML-driven rules.",
    responsibilities: [
      "Built forecasting pipelines and REST APIs for model inference.",
      "Integrated predictions into a React dashboard for visualization."
    ],
    tags: ["Python", "Time Series", "Flask"],
    demo: "https://sales-forecasting-seven.vercel.app",
    github: "https://github.com/s-vashistha/sales-forecasting"
  }
];

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
];

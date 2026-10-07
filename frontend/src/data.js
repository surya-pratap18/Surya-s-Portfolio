export const portfolio = {
  profile: {
    name: "Surya Pratap Mallick",
    role: "AI/ML Engineer — Data Science",
    location: "Odisha, India",
    education: "B.Tech CSE (Data Sci.)",
    focus: "AI/ML · Full-Stack Development",
    availability: "Open to work",
    cgpa: "8.5/10",
  },

  stats: [
    ["8.5/10", "CGPA · B.Tech CSE"],
    ["5+", "Projects Built"],
    ["01", "MLOps Internship"],
    ["03", "Certifications"],
  ],

  skills: {
    Languages: ["Python", "Java", "JavaScript"],

    "ML & Data Libraries": [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "PyTorch",
    ],

    "Visualization & Apps": ["Streamlit", "Plotly", "Matplotlib", "Seaborn"],

    Databases: ["MySQL", "PostgreSQL", "MongoDB"],

    "Web & Full Stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MERN Stack",
      "REST API",
    ],

    "Web & Deployment": [
      "Git & GitHub",
      "Docker",
      "Kubernetes",
      "Vercel",
      "Render",
    ],

    MLOps: ["MLflow", "Evidently AI", "GitHub Actions", "Prophet"],
  },

  competencies: [
    "Predictive Modeling",
    "Anomaly Detection",
    "Time-Series Forecasting",
    "EDA",
    "Feature Engineering",
    "Regression",
    "Classification",
    "Ensemble Methods",
    "Optimization (Linear Programming)",
    "REST API Development",
    "Full-Stack Development",
    "Database Management",
  ],

  experience: [
    {
      date: "2026",
      sub: "Remote",
      title: "Data Science & Machine Learning Intern",
      org: "LogicVeda",
      description:
        "Developed an end-to-end AI-based predictive maintenance system using NASA's CMAPSS dataset to detect equipment anomalies and forecast Remaining Useful Life. Built ML and deep learning models behind an interactive Streamlit dashboard for real-time monitoring, maintenance scheduling, and automated deployment through a full MLOps pipeline.",
      stack: [
        "Python 3.13",
        "PyTorch",
        "Prophet",
        "Streamlit",
        "Plotly",
        "MLflow",
        "PuLP",
        "PostgreSQL",
        "Evidently AI",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
      ],
      demo: "https://logicveda-predictive-maintenance-project.streamlit.app",
    },
  ],

  projects: [
    {
      title: "TicketHub — Online Ticket Booking Platform",
      featured: true,
      items: [
        "Developed a unified online ticket booking platform for Bus, Train, and Flight reservations.",
        "Implemented secure authentication, booking management, digital tickets, cancellation and refund functionality.",
        "Integrated secure online payment workflows and smart ticket search for a seamless booking experience.",
        "Built a ticket price prediction system that analyzes pricing trends and indicates potential price increases or decreases.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
      ],
      demo: "https://ticket-hub-ticket-booking-project.vercel.app/",
    },

    {
      title: "Student Management System",
      items: [
        "Developed a full-stack student management platform for managing student records and academic information.",
        "Implemented secure authentication and user management for accessing student-related operations.",
        "Built RESTful APIs for communication between the React frontend and backend services.",
        "Designed database-driven functionality for storing, updating, retrieving, and managing student information.",
      ],
      stack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
      demo: "https://student-management-system-gold-ten-27.vercel.app/login",
    },

    {
      title: "Predictive Maintenance System",
      items: [
        "End-to-end anomaly detection & Remaining Useful Life forecasting on NASA CMAPSS turbofan data.",
        "Real-time Streamlit dashboard for monitoring and maintenance scheduling.",
        "Automated deployment via a full MLOps pipeline with drift monitoring.",
      ],
      stack: ["PyTorch", "Prophet", "MLflow", "Docker"],
      demo: "https://logicveda-predictive-maintenance-project.streamlit.app",
    },

    {
      title: "House Price Prediction System",
      items: [
        "Regression pipeline predicting residential prices from structural, locational, and quality features.",
        "Applied Lasso (L1) & Ridge (L2) regularization to reduce overfitting and handle multicollinearity, tuning strength via cross-validation.",
        "Compared R², RMSE, and MAE — regularized models generalized better than the unregularized baseline.",
      ],
      stack: ["Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    },

    {
      title: "Customer Churn Prediction",
      items: [
        "Classification model predicting churn from usage, billing, and demographic history for a subscription business.",
        "EDA and categorical encoding to surface key churn drivers; trained a Logistic Regression classifier.",
        "Evaluated via accuracy, precision, recall, F1 and ROC-AUC — optimized for recall to catch at-risk customers.",
      ],
      stack: ["Scikit-learn", "Pandas", "Matplotlib"],
    },
  ],

  education: {
    degree: "B.Tech, Computer Science & Engineering (Data Science)",
    org: "Bhubaneswar Engineering College (BEC), BPUT, Odisha",
    period: "Aug 2023 — Aug 2027",
    coursework:
      "Relevant coursework: Machine Learning, Data Analytics, Algorithms, Database Systems.",
    details:
      "Academic projects focused on ML model development, data preprocessing, full-stack application development, and real-world problem solving.",
  },

  certifications: [
    ["Python", "CAC"],
    ["Data Analytics", "Deloitte Australia"],
    ["AI & Machine Learning", "Coursera"],
  ],

  contact: {
    email: "pratapsurya3024@gmail.com",
    phone: "+91 90781 86417",
    linkedin: "https://www.linkedin.com/in/surya-pratap-mallick-439411331/",
    github: "https://github.com/surya-pratap18",
  },
};

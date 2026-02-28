export const siteConfig = {
  name: "Bhagyashree Patil",
  title: "Machine Learning Engineer | SWE | Data Scientist",
  description: "Portfolio website of Bhagyashree Patil",
  accentColor: "#1d4ed8",
  social: {
    email: "bap9622@nyu.edu",
    linkedin: "https://www.linkedin.com/in/bhagyashree-patil/",
    googlescholar: "https://scholar.google.com/citations?user=yCi6fsEAAAAJ&hl=en",
    github: "https://github.com/bhagyashree-ap",
  },
  aboutMe:
    "I build intelligent Machine Learning and backend systems that don’t just work, but they scale reliably for millions of users.",
  skills: ["Python", "Java", "MySQL", "AWS", "Google Cloud", "Hadoop", "HDFS", "Docker", "Django", "Node.js", "React", "REST APIs", "JavaScript", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy", "Git", "GitHub"],
  projects: [
    {
      name: "Bidding Based Course Registration System",
      description:
        "Built an end-to-end auction based Course Registration System in Java with a MySQL backend to streamline course allocation for 4000+ students across 500+ courses. Designed and implemented automated allocation, multi-round auctions, timestamp based tie resolution, and waitlist management, while securing APIs with JWT and optimizing concurrent bidding workflows for real time enrollment updates. This system improved fairness, efficiency and scalability.",
      link: "https://course-bidding-system.vercel.app/",
      skills: ["Java", "MySQL", "JWT", "Backend Systems"],
    },
    {
      name: "Finance Tracker - ProAudit",
      description:
        "Developed a Java desktop finance analytics system to help users manage and understand large scale personal expense data, addressing the challenge of slow, manual tracking of thousands of records. Designed an embedded SQLite database supporting 10k+ expense entries with low latency CRUD operations, CSV import/export and interactive visualizations using JFreeChart. Implemented TF-IDF for expense classification and monthly spend forecasting, enabling data driven insights and an intuitive dashboard that combined backend efficiency with actionable financial analytics for better decision making.",
      link: "https://github.com/bhagyashree-ap/ProAudit",
      skills: ["Java", "SQLite", "JFreeChart", "Machine Learning"],
    },
    {
      name: "NYC Transit Hub",
      description:
        "Built NYC Transit Hub, a real time transit monitoring platform using Python and Flask to address fragmented access to subway service updates and accessibility information. Integrated official MTA APIs to stream service alerts and elevator/escalator status, engineered data pipelines handling 1000+ daily updates and implemented route filters, live subway maps with clearly visualized stations and routes and personalized favorites management (add/delete). The platform reduced user lookup time by 65% while delivering a clean, responsive interface that combined backend data engineering with intuitive frontend design for the urban mobility needs.",
      link: "https://github.com/bhagyashree-ap/nyc-transit-hub",
      skills: ["Python", "Flask", "API Integration", "Data Pipelines"],
    },
    {
      name: "The Hidden Cost of Fast Fashion - Data Analysis",
      description:
        "Led an end-to-end information visualization project analyzing the hidden environmental and supply chain costs of fast fashion, addressing the lack of transparent, data driven insights into sustainability metrics. Cleaned and transformed the 'True Cost of Fast Fashion' dataset from Kaggle, engineered comparative features like emissions per garment, production lead times, waste ratios and conducted statistical analysis to uncover cross brand and regional patterns. Designed and developed interactive visual narratives using D3.js, JavaScript, HTML, and CSS, enabling dynamic filtering and drill down exploration to translate complex sustainability data into clear and actionable insights.",
      link: "https://bhagyashree-ap.github.io/information-visualization/",
      skills: ["D3.js", "JavaScript", "Python", "Data Visualization", "Statistical Analysis"],
    },
    {
      name: "Graphical Password Authentication using Custom Images",
      description:
        "For my undergraduate capstone, I developed a Graphical Password Authentication System that uses personalized user images to strengthen login security on digital platforms. I designed and implemented the full-stack solution, including frontend interfaces for image upload and selection, secure backend storage, authentication logic, and session management. The system verifies users by matching selected points on images as passwords, making it more resistant to conventional attacks like shoulder surfing and keylogging, while providing a smooth, user friendly login experience.",
      link: "https://github.com/bhagyashree-ap",
      skills: ["Python", "Django", "HTML", "JavaScript", "CSS", "MySQL"],
    },
    {
      name: "Human Face Recognition",
      description:
        "Built a human face recognition system using TensorFlow and OpenCV, extracting facial features to train a Convolutional Neural Network (CNN) for accurate identification. Designed end-to-end pipelines for data preprocessing, feature extraction, and model training to reliably recognize faces in real time.",
      link: "https://github.com/bhagyashree-ap",
      skills: ["TensorFlow", "OpenCV", "CNN", "Machine Learning"],
    },
    {
      name: "Blockchain-Based Decentralized Health Records Application",
      description:
        "Engineered a blockchain based decentralized health records application using Ganache, Truffle, and Solidity to address critical concerns around patient data security and fragmented access. Designed and deployed secure smart contracts for tamper proof record management, improving data integrity and accessibility by 19% while ensuring transparent, patient controlled information sharing.",
      link: "https://github.com/bhagyashree-ap",
      skills: ["Blockchain", "Solidity", "Ganache", "Truffle"],
    },
    {
      name: "MedDonate Website",
      description:
        "Built MedDonate, a full-stack Medicine Donation platform to address the gap between unused medicines and underserved patients, enabling users to list, request, and track donations seamlessly. Designed transaction tracking, live inventory updates, and cart functionality, creating a transparent, scalable system that streamlined redistribution and reduced medicine waste while improving access for those in need.",
      link: "https://github.com/bhagyashree-ap",
      skills: ["HTML", "PHP", "CSS", "JavaScript", "MySQL"],
    },
    {
      name: "Cloud Computing Project - Gaming Website Deployment on Google Cloud",
      description:
        "Deployed a gaming website on Google Cloud Platform to improve scalability and accessibility, reducing load times by 5%.",
      link: "https://github.com/bhagyashree-ap",
      skills: ["Cloud Computing", "GCP", "Deployment", "Performance Optimization"],
    },
  ],
  experience: [
    {
      company: "Amdocs",
      title: "Software Engineer",
      dateRange: "Apr 2024 - Aug 2025",
      link: "https://www.amdocs.com/about",
      linkLabel: "[Overview]",
      bullets: [
        "Designed and tested 150+ REST/SOAP APIs, ensuring seamless integration across the cloud CRM platform.",
        "Automated repetitive workflows using Python script, reducing billing process execution time from 25 mins to 5 mins.",
        "Executed SQL queries in OracleDB for backend data validation and performance tuning.",
        "Improved system performance by 15% by identifying and resolving critical issues in large scale enterprise applications.",
        "Performed end-to-end (E2E) and production testing for critical CRM project, executing 300+ test scenarios to ensure functionality, reliability and zero defect deployment."
      ],
    },
    {
      company: "Knorr Bremse Technology Center India",
      title: "Embedded Engineer Intern ",
      dateRange: "Sep 2023 - Feb 2024",
      link: "https://careers.knorr-bremse.com/content/content-locations-tci-pune/?locale=en_US",
      linkLabel: "[Overview]",
      bullets: [
        "Optimized embedded software projects by employing lint for error detection, CMT for code complexity assessment, and TortoiseSVN for version control.",
        "Conducted hardware board assessments by deploying software to evaluate functionalities, optimizing the process through debugging and analysis."
      ],
    },
    {
      company: "The Sparks Foundation",
      title: "Data Science and Business Analytics Intern",
      dateRange: "Apr 2022 - May 2022",
      link: "https://github.com/bhagyashree-ap/GRIP-April-2022",
      linkLabel: "[Source]",
      bullets: [
        "Developed and deployed a predictive model using supervised ML with advanced preprocessing and feature engineering in Python, improving performance by 13%.",
        "Optimized model efficiency through hyperparameter tuning and Bayesian optimization, reducing prediction latency.",
        "Integrated NLP techniques to enhance data preprocessing pipelines."
      ],
    },
  ],
  publication: [
    {
      name: "A Comparative Study of Generative AI Models for Interior Design",
      description:
        "Bhagyashree Patil, Revati Patil, and Prof. Vrushali Wankhede. International Journal for Research in Applied Science and Engineering Technology, vol. 12, no. X, Oct. 2024. ISSN: 2321-9653.",
      link: "https://www.ijraset.com/research-paper/a-comparative-study-of-generative-ai-models-for-interior-design",
    },
  ],
  education: [
    {
      school: "New York University",
      degree: "Master of Science in Computer Science",
      dateRange: "Aug 2025 - May 2027",
      achievements: [
        "Winner of Fan Favorite Award - Hack Dibner 2025 Competition",
        "Member of Rewriting the Code",
        "Logistics & Planning @ NYU GISA",
        "Merit based scholarship recipient"

      ],
    },
    {
      school: "University of Pune (SPPU)",
      degree: "B.E. in Computer Engineering (Data Science honors)",
      dateRange: "2019 - 2023",
      achievements: [
        "Graduated with First Class with Distinction (Top 1% of the class)",
        "Executive Committee Member - ACM ACES Student Chapter"

      ],
    },
  ],
  honors: [
    {
      category: "Awards",
      items: ["Winner of Fan Favorite Award - Hack Dibner 2025 Competition"],
      image: "/TeamDibnerds_FanFavorite.jpg",
      imageAlt: "Hack Dibner winner photo",
      imageCaption: "Bhagyashree to the right and Sejal to the left.",
      link: "https://guides.nyu.edu/HackDibner/winners#s-lg-box-35380748",
      linkLabel: "NYU HackDibner 2025 - Read More",
    },
    {
      category: "Scholarships",
      items: ["Merit based scholarship recipient at NYU"],
    },
    {
      category: "Extracurriculars & Leadership",
      items: [
        "Logistics & Planning @ NYU GISA",
        "Member of Rewriting the Code",
        "Executive Committee Member - ACM ACES Student Chapter",
      ],
      itemLinks: [
        {
          item: "Logistics & Planning @ NYU GISA",
          link: "https://www.instagram.com/nyu.gisa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          label: "(NYU GISA on Instagram)",
        },
        {
          item: "Member of Rewriting the Code",
          link: "https://rewritingthecode.org/",
          label: "(Rewriting the Code - Read More)",
        },
        {
          item: "Executive Committee Member - ACM ACES Student Chapter",
          link: "https://www.instagram.com/keystone_aces/?hl=en",
          label: "(ACM ACES on Instagram)",
        },
      ],
    },
    {
      category: "Beyond Coding",
      intro: "I spend my time:",
      items: ["Playing Badminton", "Practicing yoga", "Volunteering"],
    },
  ],
};

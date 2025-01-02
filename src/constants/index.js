// import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I'm a Software Engineer with a passion for building robust, data-driven applications. From designing seamless user interfaces to optimizing backend systems, I specialize in turning complex challenges into innovative, scalable solutions that make an impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "2021 - 2022",
        role: "Software Engineer",
        company: "GAVS Technologies Private Limited",
        description: `Developed and optimized data processing pipelines using PySpark. Implemented keyword-based suppression to enhance algorithm performance and automated false positive recognition with multiple algorithms. Transitioned the codebase from PySpark to FastAPI, achieving a 76% reduction in runtime and near-instantaneous processing speeds. Collaborated with cross-functional teams in Agile cycles, fine-tuned shuffle partitions, and utilized Docker for consistent development environments. Maintained legacy applications, upgrading them to newer technologies.`,
        technologies: ["PySpark", "Python", "MongoDB", "FastAPI", "Docker", "PyTest", "R"],
    },
    {
        year: "2020",
        role: "Data Science Intern",
        company: "Widhya",
        description: `Developed an NLP model to parse resumes and extract key information such as skills, experience, and qualifications. Used tokenization and named entity recognition (NER) techniques to generate detailed professional profiles.`,
        technologies: ["Python", "Scikit-learn", "NLP", "Pandas"],
    },
    {
        year: "2019",
        role: "Intern",
        company: "Robocoupler Pvt Ltd",
        description: `Gained experience in data collection, preprocessing, and feature extraction. Built machine learning models, created visualizations, and worked with databases. Applied tools like Git for version control and collaborated effectively in a team.`,
        technologies: ["Python", "Pandas", "PyTorch", "Scikit-learn", "Git"],
    },
];

export const PROJECTS = [
    {
        title: "Campgrounds",
        // image: project1, // Replace with the actual image file or URL
        description:
            "An interactive application for managing and exploring campsites. The platform allows users to browse campsite details, including descriptions, pricing, and interactive maps using geohashing. Features include secure user authentication and authorization, as well as a robust backend for CRUD operations.",
        technologies: ["HTML", "CSS", "Bootstrap", "Node.js", "Express", "EJS", "MongoDB", "MapBox"],
    },
    {
        title: "Smart Agriculture",
        // image: project1, // Replace with the actual image file or URL
        description:
            "An IoT-based solution for analyzing soil conditions and recommending suitable fertilizers. Data collected from sensors is hosted on the cloud and processed using machine learning algorithms to generate actionable insights for farmers.",
        technologies: ["Python", "Scikit-learn", "IoT Sensors", "Cloud Hosting"],
    },
    {
        title: "Facial Emotion Recognition",
        // image: project1, // Replace with the actual image file or URL
        description:
            "A real-time system to detect and visualize facial emotions using a trained deep learning model. The project involved preprocessing data, training the model, and developing an interface for displaying detected emotions.",
        technologies: ["Python", "TensorFlow", "OpenCV"],
    },
    {
        title: "Paris Olympics Dashboard",
        // image: project1, // Replace with the actual image file or URL
        description:
            "An interactive Power BI dashboard analyzing Olympic data. Features include medal tallies, athlete profiles, country-wise performance, and predictive analytics. Custom DAX measures and interactive maps enhance user engagement.",
        technologies: ["Power BI", "Git", "DAX"],
    },
];

export const CONTACT = {
    email: "prasanna5399@protonmail.com",
};

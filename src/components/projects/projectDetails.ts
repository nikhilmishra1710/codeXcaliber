interface Project {
    title: string;
    author: string;
    tags: string[];
    gitLink?: string;
    description: string;
}

export const projectDetails : Project[] = [
    {
        title: "CitySync",
        author: "Eternal Legacy (Prem Borate, Kshitija Deshmukh, Pranav Sonawane)",
        tags: ["Web Application", "Android", "Project Management", "GIS Mapping"],
        gitLink: "",
        description: "CitySync is a digital solution (web & mobile) designed to enhance collaboration and resource sharing among municipal departments. It focuses on reducing delays, optimizing resource utilization, document management, issue tracking, and promoting transparency across urban projects. Key features include project management, geo-location management, enhanced discussion forums, and public engagement. The platform integrates modern technologies such as open-source mapping (Mapbox) and cloud-based architecture to improve urban governance and development."
    },
    {
        title: "AI-Powered Instagram Cyberbullying, Harassment, and Trolling Detection & Reporting App",
        author: "Strivers (Shubham Singh, Sarbani Deb, Manveer Singh)",
        tags: ["AI", "Cybersecurity", "Android", "NLP", "Image Recognition"],
        gitLink: "",
        description: "This AI-powered mobile application is designed to detect and report cyberbullying, harassment, and trolling on Instagram. Using advanced Natural Language Processing (NLP) and image recognition (OpenCV, TensorFlow), the app identifies harmful content across posts, stories, reels, and messages. It provides real-time alerts, automated filtering, and integrated legal reporting, allowing users to store evidence and report cases directly to cybercrime authorities. Additionally, the app educates users on Instagram’s safety features to empower them with better protection tools. Built using React Native and MongoDB, the solution addresses critical gaps in social media safety by offering proactive detection and streamlined reporting mechanisms."
    },
    {
        title: "JourNULL",
        author: "Hackfinity",
        tags: ["AI", "Next.js", "Hono", "SQL lite", "Journaling", "Self-care"],
        gitLink: "",
        description: "JourNULL is an AI-powered journaling application designed to help users manage overthinking, stress, and emotional well-being. It integrates multimodal journaling (text, voice, and video) with advanced AI-driven mood analytics to track emotional patterns and provide meaningful insights. The platform offers features like AI-powered dream interpretation, mood tracking alerts, a guilt dumper for emotional release, and gratitude journaling for mental resilience. With a secure and private cloud-based storage system, JourNULL ensures end-to-end encryption while allowing users to reflect and grow. Built using Next.js, Hono, SQLite, and Cloudflare technologies, the platform provides an intuitive and safe space for self-expression, making mental health support more accessible."
    },
    {
        title: "Bank Agent Bridge",
        author: "Shrikant Dad, Vrushabh Virkar, Amit Walekar, Shreeram Dad",
        tags: ["Banking", "Agent Management", "Web Application", "Financial Services", "Java", "MySQL"],
        gitLink: "",
        description: "Bank Agent Bridge is a web-based platform designed to connect banks with qualified agents through an intuitive and secure interface. It streamlines the recruitment and management of agents by offering centralized access for banks, agencies, and administrators. The platform enables banks to search for agents efficiently, while agencies can manage their agent listings, ensuring a seamless hiring process. Built with HTML, CSS, JavaScript, Java, and MySQL, the system incorporates secure authentication, role-based access control, and optimized data retrieval for performance and scalability. By enhancing transparency and accessibility, Bank Agent Bridge modernizes the agent hiring process in the banking sector."
    }
]
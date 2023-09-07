import {
    mobile,
    ai,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../public/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "AI and Cybersecurity Enthusiast",
        icon: ai,
    },
    {
        title: "Electrical and Computer Engineer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: javascript,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Java",
        icon: typescript,
    },
    {
        name: "React JS/Next.js",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "SQL",
        icon: mongodb,
    },
    {
        name: "PHP",
        icon: css,
    },
    {
        name: "git/GitHub",
        icon: git,
    },
    {
        name: "Rest APIs",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Support Engineer",
        company_name: "Sentry.io",
        icon: starbucks,
        iconBg: "#383E56",
        date: "August 2021 - Present",
        points: [
            "Provide unique solutions to customer’s inbound technical requests regarding Sentry’s products and SDK’s",
            "Develop tools and technical documentation to streamline the support experience",
            "Collaborate with cross-functional teams to escalate and resolve complex technical problems",
            "Assist in the installation, configuration, and maintenance of the Sentry software",
        ],
    },
    {
        title: "Industiral Hydro power Intern",
        company_name: "Volta River Authority(VRA)",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2018 - Jul 2018",
        points: [
            "Conducted re‑calibrations of the meters located in power supply transformers which resulted in the conservation of the machinery’s life span.",
            "Collaborated with cross-functional teams and managers to troubleshoot transformer units to generate electricity for communities.",
            " Installed a new system by rewiring hydroelectric units, changing them from analog to digital hence reducing the ambiguity in readings.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "SoftMasters Company",
        icon: shopify,
        iconBg: "#383E56",
        date: "May 2017 - Jul 2017",
        points: [
            "Developed websites for private companies with the aim to increase their visibility using different programming codes such as HTML and CSS.",
            "Worked on proposals for government projects resulting in a comprehensive timeline and prompt approvals.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "SoftMasters Company",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jun 2016 - Aug 2016",
        points: [
            "Collaborated with software developers to create an application called Anansi that improved Ghana’s addressing system",
            "Examined ways to make old code more readable, compliant, and functional by reducing the time and space complexities when appropriate.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "",
        name: "Ben ADU",
        designation: "CEO",
        company: "SoftMasters",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a young man more passionate about learning and improving his craft",
        name: "Akim Tijani",
        designation: "Plant Manager",
        company: "Volta River Authority(VRA)",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful for my service, but Kobby proved me wrong.",
        name: "Kemi Koku",
        designation: "CEO",
        company: "K's Lashes Bar",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Dynamic Custom AI ChatBot ",
        description:
            "Web-based platform that allows users to to simply visit a website, upload their documents, and start interacting with a chatbot trained on their data. Users get to power it either by the OpenAI language model which is optimized for performance but not private or a private language model such as GPT4 optimized for security and privacy but not performance.",
        tags: [
            {
                name: "Next.js",
                color: "black-text-gradient",
            },
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "Artificial Inteligence/Machine Learning",
                color: "yellow-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/KobbyBawuah/Fullstack-Custom-AI-Chatbot",
    },
    {
        name: "Trash panda",
        description:
            "This app is a waste categorization and management tool built using React. It provides a user interface for categorizing several types of waste (garbage, recycling, compost) and managing the selections made.",
        tags: [
            {
                name: "JavaScript",
                color: "yellow-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/KobbyBawuah/waste-flowchart",
    },
    {
        name: "Cloud Based Circuit Simulator",
        description:
            "A comprehensive Computer-Aided Design (CAD) Web Application that seamlessly combines various programming languages and technologies to provide users with a powerful tool for designing and visualizing complex systems, circuits, and graphs.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "yellow-text-gradient",
            },
            {
                name: "HTML 5",
                color: "red-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/KobbyBawuah/4thyearapp",
    },
];

export { services, technologies, experiences, testimonials, projects };
import {
    carleton,
    umass,
    chat,
    trash,
    circuit,
    api,
    java,
    next,
    php,
    python,
    python1,
    SQL,
    mobile,
    ai,
    backend,
    softmasters,
    VRA,
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
    sentry,
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
        icon: python1,
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
        icon: java,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: next,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
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
        icon: SQL,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Git/GitHub",
        icon: git,
    },
    {
        name: "Rest APIs",
        icon: api,
    },
];

const experiences = [
    {
        title: "Support Engineer",
        company_name: "Sentry.io",
        icon: sentry,
        // iconBg: "#383E56",
        iconBg: "#E6DEDD",
        date: "August 2021 - Present",
        points: [
            "Provide unique solutions to customer’s inbound Engineering requests regarding Sentry’s products and SDK’s in 20 different programming languages",
            "Develop tools and technical documentation to streamline the support experience for 3.5 million developers and 85,000 organizations",
            "Collaborate with cross-functional teams to escalate and resolve complex technical problems",
            "Assist in the installation, configuration, and maintenance of the Sentry software",
        ],
    },
    {
        title: "Industiral Hydro power Intern",
        company_name: "Volta River Authority(VRA)",
        icon: VRA,
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
        company_name: "SoftMasters Company Limited",
        icon: softmasters,
        // iconBg: "#383E56",
        iconBg: "#E6DEDD",
        date: "May 2017 - Jul 2017",
        points: [
            "Developed websites for private companies with the aim to increase their visibility using different programming codes such as HTML and CSS.",
            "Worked on proposals for government projects resulting in a comprehensive timeline and prompt approvals.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "SoftMasters Company Limited",
        icon: softmasters,
        iconBg: "#E6DEDD",
        date: "Jun 2016 - Aug 2016",
        points: [
            "Collaborated with software developers to create an application called Anansi that improved Ghana’s addressing system",
            "Examined ways to make old code more readable, compliant, and functional by reducing the time and space complexities when appropriate.",
        ],
    },
];

const education = [
    {
        degree: "Master of Science - MS",
        school_name: "University of Massachusetts Amherst",
        field_of_study: "Electrical and Computer Engineering",
        icon: umass,
        // iconBg: "#383E56",
        iconBg: "#E6DEDD",
        date: "September 2022 - Present",
        points: [
            "The Master of Science (MS) in Electrical & Computer Engineering (ECE) program is designed to prepare students for technically demanding careers in industry as well as for post-master’s graduate studies in electrical and/or computer engineering or related fields.",
        ],
    },
    {
        degree: "Bachelor of Engineering - BE",
        school_name: "Carleton University",
        field_of_study: "Electrical and Electronics Engineering",
        icon: carleton,
        iconBg: "#E6DEDD",
        date: "Sep 2016 - May 2021",
        points: [
            "My bachelor's focus was on Electrical Engineering. My electives, however, involved Web Development, Wireless Communication, and Modelling of Integrated devices. Projects done involved software testing and development (Front-End and Back-End), Robotics, Verilog, and Data Analytics, to name a few.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Certainly was great having him on our team",
        name: "Ben ADU",
        designation: "CEO",
        company: "SoftMasters",
        image: softmasters,
    },
    {
        testimonial:
            "I've never met a young man more passionate about learning and improving his craft",
        name: "Akim Tijani",
        designation: "Plant Manager",
        company: "Volta River Authority(VRA)",
        image: softmasters,
    },
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful for my service, but Kobby proved me wrong.",
        name: "Kemi Koku",
        designation: "CEO",
        company: "K's Lashes Bar",
        image: softmasters,
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
        image: chat,
        source_code_link: "https://github.com/KobbyBawuah/Fullstack-Custom-AI-Chatbot",
    },
    {
        name: "Trash panda",
        description:
            "This simple app is a waste categorization and management tool built using React for my Office. It provides a user interface for categorizing several types of waste (garbage, recycling, compost) and managing the selections made.",
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
        image: trash,
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
                color: "green-text-gradient",
            },
        ],
        image: circuit,
        source_code_link: "https://github.com/KobbyBawuah/4thyearapp",
    },
];

export { services, technologies, experiences, testimonials, education, projects };
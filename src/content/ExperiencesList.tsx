// Each text entry is one bullet. Wrap a phrase in **double asterisks** to bold it.
const experiencesList : {id:number, position:string, text:string[], date:string, place:string}[] = [
    // {
    //     id:0,
    //     position:"Undergraduate Course Assistant",
    //     text:[
    //         "Held weekly office hours supporting **60+ students** on scalability, FastAPI, middleware, Docker, Git, and documentation best practices.",
    //         "Collaborated with staff to develop materials on CI/CD, SQL-based Prisma backends, and AWS S3 media storage for production-grade student projects.",
    //     ],
    //     date:"Fall 2025 - Spring 2025",
    //     place:"Manning College of Information and Computer Sciences",
    // },
    {
        id:8,
        position:"Founding Product Engineer",
        text:[
            "Joined a photographer-booking marketplace as a product engineering intern; **promoted to founding product engineer**.",
            "Leading the modernization of a legacy MVP from a previous team: reworking user flows and inconsistent UI, fixing inherited production bugs, and planning an incremental migration from ThinkPHP to Laravel and React/Next.js",
            "Redesigned and rebuilt the homepage from Figma to production: Lighthouse performance **66 → 95**, SEO **92 → 100**.",
            "Partner with the founder and designers in weekly design and product reviews, turning decisions into specced and shipped work",
            "Created the company's **first design system** after a full design audit.",
        ],
        date:"Summer 2026 - Present",
        place:"SnapMatePhoto",
    },
    {
        id:7,
        position:"B.S. in Computer Science",
        text:[
            "Graduated from the Manning College of Information and Computer Sciences."        ],
        date:"May 2026",
        place:"University of Massachusetts Amherst",
    },
    {
        id:11,
        position:"Undergraduate Course Assistant - Scalable Web Systems",
        text:[
            "Held weekly office hours supporting 60+ students on scalability, FastAPI, middleware, Docker",
            "Collaborated and guided students on CI/CD practices, SQL-based backends, and cloud infrastructure tools like Amazon AWS S3 media storage for production-grade student projects",
            "Guided students in leveraging AI development tools to enhance their final web projects, and in writing tests to validate functionality and ensure reliable, successful project outcomes."
        ],
        date:"Fall 2025 - Spring 2026",
        place:"Manning College of Information and Computer Sciences",
    },
    {
        id:1,
        position:"Undergraduate Researcher",
        text:[
            "Evaluated **LLM-generated fitness infographics** for smartwatch apps through computational analysis and cross-generational perception studies.",
            "Built an automated pipeline generating **300+ AI visualizations** from real fitness data.",
            "Built an integrated survey platform with **serverless APIs** to capture demographic perception data, informing LLM deployment in digital health.",
        ],
        date:"Summer 2025 - Fall 2025",
        place:"Human Computer Interaction and Visualization Lab (HCI-VIS Lab)",
    },
     {
        id:2,
        position:"Undergraduate Course Assistant - Intro to Computer Systems",
        text:[
            "Mentored **160+ students** through weekly office hours and lab sessions on systems programming and Linux fundamentals.",
            "Debugged C projects with **GDB**, reinforcing memory management, multithreading, and coding best practices.",
            "Graded **50+ weekly assignments** and **150+ exams**.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Manning College of Information and Computer Sciences",
    },
    {
        id:3,
        position:"Undergraduate Research Assistant",
        text:[
            "Collaborated with a graduate researcher on a thesis exploring movement translation systems as **gear alternatives** for robotics.",
            "Helped engineer a cost-efficient **3-DOF robotic arm** using pulley-based rotation, cutting manufacturing costs versus gear-driven designs.",
            "Developed a **real-time control system in C** with Arduino libraries for precise angle adjustment and dynamic input response.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Dynamic and Autonomous Robotic Systems (DAROS) Lab at UMass",
    },
    {
        id:4,
        position:"President",
        text:[
            "Led a **15-member team** running **5 cultural events per semester**, greeting 50+ attendees while managing registration, tickets, and cash.",
            "Coordinated logistics across vendors, sponsors, and campus departments through weekly meetings.",
            "Secured **$1,500 in sponsorships** through proposal writing and presentations.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Indonesian Student Association at UMass Amherst",
    },
    {
        id:5,
        position:"Publicist / Public Relations",
        text:[
            "Ran **social media campaigns** and community outreach, creating promotional materials and engaging campus organizations.",
            "Tracked **engagement metrics** to assess campaigns and optimize strategy across platforms.",
        ],
        date:"Spring 2023 - Spring 2024",
        place:"Indonesian Student Association at UMass Amherst",
    },
    {
        id:6,
        position:"Treasurer",
        text:[
            "Managed a **$1,200 annual budget** for a cappella events, coordinating with vendors for AV equipment and promotional materials.",
            "Secured the **following year's budget** through financial planning and budget proposal presentations.",
        ],
        date:"Fall 2023 - Spring 2024",
        place:"Vocal Suspects Acapella at UMass Amherst",
    },
]

export {experiencesList};

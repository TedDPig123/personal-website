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
        id:9,
        position:"Founding Product Engineer",
        text:[
            "**Promoted to own features end to end**: iterating on designs with our designers in product meetings, then building them.",
            "**Designed and shipped the landing page redesign**, raising Lighthouse performance **66 → 95**.",
            "**Measured it with GA4**: landing-to-search conversion rose **17.8% → 20.4%** in week one.",
            "**Led SEO optimization**: clean URLs for **347** profiles and a **1,800+ URL sitemap**.",
            "**Fixed recurring AWS EC2 outages** at the root, then launched with backups and rollbacks.",
            "**Raised the engineering bar**: automated tests, CI/CD, specced tasks and weekly code reviews.",
            "**Now leading the legacy MVP's migration** from ThinkPHP to Laravel and React.",
        ],
        date:"Sept. 2026 - Present",
        place:"SnapMatePhoto · marketplace connecting clients with local photographers",
    },
    {
        id:8,
        position:"Full Stack Engineer Intern",
        text:[
            "**Started by auditing the full booking flow** as client and photographer: access, payments, race conditions.",
            "**Built a headless Sanity CMS** so staff can publish promotional content, like the landing page and upcoming blog, without a deploy.",
            "**Created the first design system** and designed the redesign's mobile and desktop layouts.",
        ],
        date:"July 2026 - Sept. 2026",
        place:"SnapMatePhoto",
    },
    {
        id:7,
        position:"B.S. in Computer Science",
        text:[
            "**3.98 GPA**, Manning College of Information and Computer Sciences.",
            "Coursework: Scalable Web Systems, Web Programming, Data Management (**MySQL, GraphQL**).",
        ],
        date:"May 2026",
        place:"University of Massachusetts Amherst",
    },
    {
        id:11,
        position:"Undergraduate Course Assistant - Scalable Web Systems",
        text:[
            "Supported **60+ students** in office hours and **reviewed their pull requests**.",
            "Guided projects on FastAPI, Docker, CI/CD, SQL and **AWS S3**.",
            "Coached students on **AI dev tools** and **writing tests**.",
        ],
        date:"Fall 2025 - Spring 2026",
        place:"Manning College of Information and Computer Sciences",
    },
    {
        id:1,
        position:"Undergraduate Researcher",
        text:[
            "Studied **LLM-generated fitness infographics** for smartwatch apps.",
            "Built a pipeline generating **300+ AI visualizations** from real fitness data.",
            "Built a survey platform on **serverless APIs** to measure cross-generational perception.",
        ],
        date:"Summer 2025 - Fall 2025",
        place:"Human Computer Interaction and Visualization Lab (HCI-VIS Lab)",
    },
     {
        id:2,
        position:"Undergraduate Course Assistant - Intro to Computer Systems",
        text:[
            "Mentored **160+ students** in systems programming and Linux.",
            "Debugged student C projects with **GDB**: memory, multithreading, best practices.",
            "Graded **50+ weekly assignments** and **150+ exams**.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Manning College of Information and Computer Sciences",
    },
    {
        id:3,
        position:"Undergraduate Research Assistant",
        text:[
            "Researched pulley systems as **gear alternatives** for robotics.",
            "Helped build a low-cost **3-DOF robotic arm** with pulley-based rotation.",
            "Wrote its **real-time control system in C** on Arduino.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Dynamic and Autonomous Robotic Systems (DAROS) Lab at UMass",
    },
    {
        id:4,
        position:"Co-Founder & President",
        text:[
            "Led a **15-member team** running **5 events per semester**.",
            "Coordinated vendors, sponsors and campus departments.",
            "Secured **$1,500 in sponsorships** through proposals and pitches.",
        ],
        date:"Fall 2024 - Spring 2025",
        place:"Indonesian Student Association at UMass Amherst",
    },
    {
        id:5,
        position:"Publicist / Public Relations",
        text:[
            "Ran **social media campaigns** and community outreach.",
            "Tracked **engagement metrics** to refine strategy.",
        ],
        date:"Spring 2023 - Spring 2024",
        place:"Indonesian Student Association at UMass Amherst",
    },
    {
        id:6,
        position:"Treasurer",
        text:[
            "Managed a **$1,200 annual budget** for events and equipment.",
            "Secured the **next year's budget** through budget proposals.",
        ],
        date:"Fall 2023 - Spring 2024",
        place:"Vocal Suspects Acapella at UMass Amherst",
    },
]

export {experiencesList};

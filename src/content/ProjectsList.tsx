import timeline from '../assets/Timeline.webp';
import portfolio from '../assets/Portfolio.webp';
import carbon from '../assets/YourCarbon.webp';
// import tactile from '../assets/tactile.webp';
// import chord from '../assets/chord.webp';
// import songbird from '../assets/songbird.webp'
import noImage from '../assets/no-image.webp';
import snapmate from '../assets/smp.webp';

// Each description entry is one bullet. Wrap a phrase in **double asterisks** to bold it.
const projectsList : {id:number, name: string, imageURL: string, description: string[], stack : string[], gitlink: string, link: string, date: string}[] = [
    {
        id:7,
        name:"SnapMatePhoto",
        imageURL:snapmate,
        description:[
            "Leading the site-wide brand redesign for a **two-sided marketplace** connecting clients with local photographers, from spec and Figma to production, starting from the landing page",
            "**Set up site-wide Google Analytics (GA4) tracking**: landing-to-search conversion rose from **17.8% to 20.4%** in the first week post-redesign, and seasonal demand data now drives photographer reranking.",
            "Lighthouse performance rose **66 → 95** (accessibility **97**, SEO **100**) post-redesign, by preloading the hero, lazy-loading the rest, and serving right-sized images from a CDN.",
            "Redesigned promotional pages with **credited work from our own photographers**, proving the network is real and giving photographers visibility.",
            "Developed **admin dashboard tool** to **hand-pick photographers** over \"near me\" personalization until the marketplace is dense enough to return good local results.",
            "Designed the **MySQL** data layer behind the photographer cards: batched lookups and grouped review aggregates load every card in **4 queries** instead of one per photographer.",
        ],
        stack:["PHP", "MySQL", "JavaScript", "Sanity CMS", "GA4", "AWS", "Nginx", "Figma"],
        gitlink: "",
        link: "https://www.snapmatephoto.com/",
        date: "2026"
    },
    {
        id:0,
        name:"Timeline",
        imageURL:timeline,
        description:[
            "A **full-stack life-journaling app**: a four-person class project I took over as **sole developer** and now run in production.",
            "**REST API** on Node.js, Express and Prisma with **PostgreSQL**, using Google OAuth 2.0 and stateless JWT sessions.",
            "**Client-side end-to-end encryption**, with media uploaded straight to **AWS S3** through presigned URLs.",
            "Scrollable timeline UI with fluid **GSAP animations** and reusable, responsive React components, deployed on **Vercel** with Neon serverless Postgres.",
        ],
        stack:["TypeScript", "React.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Amazon S3"],
        gitlink: "https://github.com/TedDPig123/Timeline",
        link: "",
        date: "2025"
    },
    {
        id:1,
        name:"Portfolio Website",
        imageURL:portfolio,
        description:[
            "This website :). Designed in **Figma**, built with **React**, styled with **TailwindCSS**, and animated with **GSAP**.",
            "I wanted it sleek and stylish but still imbued with personality! I hope you find the animations and fun stuff I put in, well, fun.",
            "Really taught me how to make a site **responsive** across as many screens as possible. If you see a bug, please tell me!",
        ],
        stack:["TypeScript", "React.js", "Vite.js", "TailwindCSS", "GSAP", "Vercel"],
        gitlink: "https://github.com/TedDPig123/personal-website",
        link: "https://www.geribydesign.com/",
        date: "2025",
    },
    
    //     {
    //     id:6,
    //     name:"Songbird",
    //     imageURL:songbird,
    //     description:[
    //         "An **AI-powered music recommender**: your own personal music snob.",
    //         "Recommends a song based on your **mood**, a **genre** (or genres) of your choosing, and optionally any **artist** whose vibe you want.",
    //         "Designed with Figma, made with React, and styled with TailwindCSS, with a subtle hint of **80s vaporwave**.",
    //     ],
    //     stack:["Anthropic API", "React.js","JavaScript", "TailwindCSS"],
    //     gitlink: "https://github.com/TedDPig123/Your-Music-Tailor",
    //     link: "https://your-music-tailor.vercel.app/",
    //      date: "2025",
    // },
    {
        id:2,
        name:"Your Carbon",
        imageURL:carbon,
        description:[
            "A **daily carbon footprint tracker** I designed in Figma and built in React for my scalable web systems class.",
            "Log activities that add to or offset your footprint, and set **daily footprint goals**.",
            "All data stays in **local storage**, so there's no account needed.",
        ],
        stack:["TypeScript", "React.js", "Vite.js", "TailwindCSS", "Local Storage"],
        gitlink: "https://github.com/TedDPig123/carbon-footprint-tracker",
        link: "https://carbon-footprint-tracker-taupe.vercel.app/",
         date: "2025",
    },
    {
        id:5,
        name:"Infographic Generator (For Research)",
        imageURL:noImage,
        description:[
            "An **LLM pipeline** that turns **real fitness tracker data** into smartwatch health infographics, built for the HCI-VIS lab.",
            "Generated **300+ visualizations** with the **GPT-4** and **Claude** APIs for our study on how people across generations perceive them.",
            "Paired with a survey platform on **serverless APIs** that collected the perception data, informing how LLMs could be deployed in digital health.",
        ],
        stack:["OpenAI API", "Anthropic API", "ExpressJS", "CSV-Parser","JavaScript"],
        gitlink: "",
        link: "",
         date: "2025",
    },
    // {
    //     id:4,
    //     name:"Chord Practicer",
    //     imageURL:chord,
    //     description:[
    //         "A little web app to practice **chord transitions** that doubles as an audible **metronome**.",
    //         "Pick a (major) key, choose or tap a tempo, set a duration, and it gives you a random chord from the key every four beats.",
    //         "Helps me get used to every chord change in any key... as long as it's major, and they're simple major or minor chords...",
    //     ],
    //     stack:["JavaScript", "HTML", "CSS"],
    //     gitlink: "https://github.com/TedDPig123/Chord-Practice-Game",
    //     link: "https://chord-practice-game.vercel.app/",
    //      date: "2024",
    // },
    // {
    //     id:3,
    //     name:"TacTile",
    //     imageURL:tactile,
    //     description:[
    //         "A **digital battle map for Dungeons and Dragons**, made with friends for a web programming class.",
    //         "Custom grids and tiles, **character tokens** you can move across the map, and a **drawing mode** for battle strategy.",
    //         "Upload textures for any tile, character, or map, with basic **user authentication** to save each user's battlemaps.",
    //     ],
    //     stack:["JavaScript", "HTML", "CSS", "IndexedDB", "SQL", "CRUD Operations"],
    //     gitlink: "https://github.com/TedDPig123/TacTile",
    //     link: "",
    //     date: "2024",
    // },
    
]

export {projectsList};
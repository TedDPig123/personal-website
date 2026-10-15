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
            "Led the homepage redesign for SnapMatePhoto, a marketplace for booking local photographers.",
            "Wrote the **redesign spec**, designed responsive mobile and desktop layouts (and cute animations) in **Figma** with our designers, then built and shipped it.",
            "Swapped stock/uncredited imagery for **credited work from the platform's own photographers**.",
            "Moved the hero, reviews and social feed into a headless **Sanity CMS** with server-side caching and fallbacks, so marketing updates ship without a deploy",
            "Optimized Lighthouse vitals: performance **66 → 95**, accessibility **85 → 97**, SEO **92 → 100**.",
        ],
        stack:["PHP", "AWS", "Sanity CMS", "JavaScript", "Nginx", "Figma"],
        gitlink: "",
        link: "https://www.snapmatephoto.com/",
        date: "2026"
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
    {
        id:0,
        name:"Timeline",
        imageURL:timeline,
        description:[
            "A **full-stack multimedia scrapbooking platform** built with React and TypeScript, running as a live production system.",
            "Interactive, scrollable timeline interface with fluid **GSAP animations** and reusable, responsive components.",
            "**REST API** built with Express and Prisma ORM, with **Google OAuth 2.0** and stateless **JWT** sessions.",
            "Deployed on **Vercel**, with Neon serverless Postgres and **AWS S3** presigned URLs for secure media storage.",
            "Started as a four-person coursework project; I've since taken it over as the **sole developer**, from local development to a deployed, maintained product.",
        ],
        stack:["TypeScript", "React.js", "Amazon S3", "Docker", "Prisma ORM", "RESTful API"],
        gitlink: "https://github.com/TedDPig123/Timeline",
        link: "",
        date: "2025"
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
            "A **daily carbon footprint tracker** I made for my scalable web systems class.",
            "Log activities that add to or offset your footprint, and set **daily footprint goals**.",
            "Designed with Figma, made with React, with all data kept in **local storage**: no account needed.",
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
            "An **Express.js** app that procedurally generates smartwatch health infographics from **real-world health tracker data**.",
            "Uses the **GPT-4** and **Claude 4 Opus** APIs.",
            "Built for the **HCI-VIS lab**'s investigation into deploying LLMs in digital health technology.",
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
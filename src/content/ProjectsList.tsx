import timeline from '../assets/Timeline.png';
import portfolio from '../assets/Portfolio.png';
import carbon from '../assets/YourCarbon.png';
import tactile from '../assets/tactile.png';
import chord from '../assets/chord.png';
import songbird from '../assets/songbird.png'
import noImage from '../assets/no-image.png';

const projectsList : {id:number, name: string, imageURL: string, description: string, stack : string[], gitlink: string, link: string, date: string}[] = [
    {
        id:0,
        name:"Timeline (WiP)",
        imageURL:timeline,
        description:"Working with some friends to make a digital multimedia diary where you can chronicle each day with a canvas of doodles, images, videos, and text. A digital scrapbook if you will. I designed the UI and wireframe using Figma, and programmed the animations, functionality, and design of the main timeline interface. Still needs some time in the oven.",
        stack:["TypeScript", "React.js", "MongoDB", "Docker","Go", "RESTful API"],
        gitlink: "https://github.com/liyu-hz168/Timeline",
        link: "",
        date: "2025"
    },
    {
        id:1,
        name:"Portfolio Website",
        imageURL:portfolio,
        description:"This website :). Designed using Figma, programmed with React.js, styled with TailwindCSS, and animated with the GSAP animation library. I wanted it to be sleek and stylish but still imbued with personality! I hope you find the animations and fun stuff I put in, well, fun. Helped me really learn how to make a website responsive to as many screens as possible. If you see a bug, please tell me!",
        stack:["TypeScript", "React.js", "Vite.js", "TailwindCSS", "GSAP", "Vercel"],
        gitlink: "https://github.com/TedDPig123/personal-website",
        link: "https://www.geribydesign.com/",
        date: "2025",
    },
        {
        id:6,
        name:"Songbird",
        imageURL:songbird,
        description:"An AI-powered music recommender. Your own personal music snob that recommends you a song to listen to based on your mood, a genre (or genres) of your choosing, and - optionally - any artist whose vibe you want to experience. Designed with Figma, made with React, and styled with TailwindCSS, I wanted this to have a subtle hint of 80s vaporwave.",
        stack:["Anthropic API", "React.js","JavaScript", "TailwindCSS"],
        gitlink: "https://github.com/TedDPig123/Your-Music-Tailor",
        link: "https://your-music-tailor.vercel.app/",
         date: "2025",
    },
    {
        id:2,
        name:"Your Carbon",
        imageURL:carbon,
        description:"A project I made for my scalable web systems class, it's a dashboard that allows you to track your carbon footprint every day. You can log activities that contribute to or negate your footprint and set daily carbon footprint goals for yourself. Designed with Figma, made with React, and all data stored locally through local storage - no account needed. ",
        stack:["TypeScript", "React.js", "Vite.js", "TailwindCSS", "Local Storage"],
        gitlink: "https://github.com/TedDPig123/carbon-footprint-tracker",
        link: "https://carbon-footprint-tracker-taupe.vercel.app/",
         date: "2025",
    },
    {
        id:5,
        name:"Infographic Generator (For Research)",
        imageURL:noImage,
        description:"Wrote an Express JS application to procedurally generate smartwatch health info-graphics using real-world health tracker data. Done so by leveraging the GPT-4 and Claude 4 Opus APIs from OpenAI and Anthropic, respectively. Doing so for the HCI-VIS lab for our investigation into the feasibility of deploying LLMs in the field of digital health technology",
        stack:["OpenAI API", "Anthropic API", "ExpressJS", "CSV-Parser","JavaScript"],
        gitlink: "",
        link: "",
         date: "2025",
    },
    {
        id:4,
        name:"Chord Practicer",
        imageURL:chord,
        description:"A fun little web application I made to help me practice useful chord transitions and also act as an audible metronome. Just pick a key (they're all major keys), choose a tempo (or tap it), determine your practice duration, and it'll give you a random chord from the key every four beats for that duration. It just helps me get used to all possible chord changes in any key... as long as it's a major key, and they're all simple major or minor chords...",
        stack:["JavaScript", "HTML", "CSS"],
        gitlink: "https://github.com/TedDPig123/Chord-Practice-Game",
        link: "https://chord-practice-game.vercel.app/",
         date: "2024",
    },
    {
        id:3,
        name:"TacTile",
        imageURL:tactile,
        description:"A cute application I made with my friends for a web programming class. It's a digital battle map made for Dungeons and Dragons sessions. Functionality includes: custom grid creation (you can choose how many tiles there are), custom tile creation, character token creation and manipulation across the map, a drawing mode for working out battle strategies, and the ability to upload textures for any tile, character, or map. It had rudimentary user authentication to help store and render battlemap data (layout, tiles, characters, textures) for each user.",
        stack:["JavaScript", "HTML", "CSS", "IndexedDB", "SQL", "CRUD Operations"],
        gitlink: "https://github.com/TedDPig123/TacTile",
        link: "",
         date: "2024",
    },
    
]

export {projectsList};
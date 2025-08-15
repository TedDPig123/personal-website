import purpleSky from '../assets/purple_sky.jpg';
import timeline from '../assets/Timeline.png';
import portfolio from '../assets/Portfolio.png';
import carbon from '../assets/YourCarbon.png';
import tactile from '../assets/tactile.png';
import chord from '../assets/chord.png';
import songbird from '../assets/songbird.png'

const projectsList : {id:number, name: string, imageURL: string, description: string, stack : string[], gitlink: string, link: string, date: string}[] = [
    {
        id:0,
        name:"Timeline (WiP)",
        imageURL:timeline,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/liyu-hz168/Timeline",
        link: "",
        date: "2025"
    },
    {
        id:1,
        name:"Portfolio Website",
        imageURL:portfolio,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/TedDPig123/personal-website",
        link: "https://www.geribydesign.com/",
        date: "2025",
    },
        {
        id:6,
        name:"Songbird",
        imageURL:songbird,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/TedDPig123/Your-Music-Tailor",
        link: "https://your-music-tailor.vercel.app/",
         date: "2025",
    },
    {
        id:2,
        name:"Your Carbon",
        imageURL:carbon,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/TedDPig123/carbon-footprint-tracker",
        link: "https://carbon-footprint-tracker-taupe.vercel.app/",
         date: "2025",
    },
    {
        id:5,
        name:"Infographic Generator (For Research)",
        imageURL:purpleSky,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "",
        link: "",
         date: "2025",
    },
    {
        id:4,
        name:"Chord Practicer",
        imageURL:chord,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/TedDPig123/Chord-Practice-Game",
        link: "https://chord-practice-game.vercel.app/",
         date: "2024",
    },
    {
        id:3,
        name:"TacTile",
        imageURL:tactile,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        gitlink: "https://github.com/TedDPig123/TacTile",
        link: "",
         date: "2024",
    },
    
]

export {projectsList};
import purpleSky from '../assets/purple_sky.jpg';
import timeline from '../assets/Timeline.png';
import portfolio from '../assets/Portfolio.png'
import carbon from '../assets/YourCarbon.png'
import tactile from '../assets/tactile.png'

const projectsList : {id:number, name: string, imageURL: string, description: string, stack : string[],link: string}[] = [
    {
        id:0,
        name:"Timeline (WiP)",
        imageURL:timeline,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: "https://github.com/liyu-hz168/Timeline"
    },
    {
        id:1,
        name:"Portfolio Website",
        imageURL:portfolio,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: "https://github.com/TedDPig123/personal-website"
    },
    {
        id:2,
        name:"Your Carbon",
        imageURL:carbon,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: "https://github.com/TedDPig123/carbon-footprint-tracker"
    },
    {
        id:3,
        name:"TacTile",
        imageURL:tactile,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: "https://github.com/TedDPig123/TacTile"
    },
    {
        id:4,
        name:"Chord Practicer",
        imageURL:purpleSky,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: "https://github.com/TedDPig123/Chord-Practice-Game"
    },
    {
        id:5,
        name:"Infographic Generator (For Research)",
        imageURL:purpleSky,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
        stack:["TypeScript", "React", "AWS"],
        link: ""
    },

]

export {projectsList};
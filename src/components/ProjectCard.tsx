import github from '../assets/github.png'

interface ProjectCardProps {
    name: string;
    imageURL: string;
    description: string;
    stack: string[];
}

export default function ProjectCard({ name, imageURL, description, stack }: ProjectCardProps) {
    return (
        <div className="project-card flex-col w-[100%] opacity-0 hidden">
            <div className="font-helveticaregular text-[24px] ml-3.5">{name}</div>
            <div className="relative w-full">
                <img src={imageURL} alt="" className="w-full rounded-2xl" />                
                <img
                    src={github}
                    alt="GitHub"
                    className="w-[35px] absolute top-2 right-2 z-10"
                />
            </div>
            <div className="font-helveticaregular text-[12px] bg-[#242424] rounded-2xl mt-2 text-[#C7C7C7] p-2">
                {description}
                <div className='bg-[#484848] rounded-2xl pl-2 pr-2 pt-1 pb-1 mt-1.5 w-fit'>
                    {stack.map((tool: string, index: number) => 
                        index > 0 ? 
                        <span key={tool}> | {tool}</span> : 
                        <span key={tool}>{tool}</span>
                    )}
                </div>
            </div>
        </div>
    )
}
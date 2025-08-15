import github from '../assets/github.png'
import linkImg from '../assets/external-link.png'

interface ProjectCardProps {
    name: string;
    imageURL: string;
    description: string;
    stack: string[];
    gitlink: string;
    link: string;
    date: string;
}

export default function ProjectCard({ name, imageURL, description, stack, gitlink, link, date }: ProjectCardProps) {
    return (
        <div className="project-card flex-col w-[100%] opacity-0 hidden">
            <div className="project-name font-helveticaregular text-[24px] ml-3.5 overflow-ellipsis">{name}</div>
            <div className="relative w-full">
                <img src={imageURL} alt="" className="w-[full] rounded-2xl object-cover aspect-3/2" />
                
                {gitlink.length > 0 && (
                    <a href={gitlink} target="_blank" className="absolute bottom-2 right-2 z-10">
                        <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-40 scale-100"></div>
                        <img
                            src={github}
                            alt="GitHub"
                            className="relative w-[35px] rounded-full hover:w-[37px] transition-all duration-300"
                        />
                    </a>
                )}
                
                {link.length > 0 && (
                    <a href={link} target="_blank" className="absolute bottom-2 right-12 z-10">
                        <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-40 scale-110"></div>
                        <img
                            src={linkImg}
                            alt="External Link"
                            className="relative w-[32px] hover:w-[34px] transition-all duration-300"
                        />
                    </a>
                )}
            </div>
            <div className="font-helveticaregular text-[12px] bg-[#242424] rounded-2xl mt-2 text-[#C7C7C7] p-2">
                {description}
                <div className='flex w-full justify-between items-center'>
                    <div className='bg-[#484848] rounded-2xl pl-2 pr-2 pt-1 pb-1 mt-1.5 w-fit shadow-2xl'>
                        {stack.map((tool: string, index: number) =>
                            index > 0 ?
                            <span key={tool}> <span className='text-gray-400'>|</span> {tool}</span> :
                            <span key={tool}>{tool}</span>
                        )}
                    </div>
                    <div className="project-date font-helveticaregular text-[14px] ml-3.5 overflow-ellipsis bg-[#484848] rounded-2xl pl-2 pr-2 pt-1 pb-1 mt-1.5 w-fit shadow-2xl">{date}</div>
                </div>
            </div>
        </div>
    )
}
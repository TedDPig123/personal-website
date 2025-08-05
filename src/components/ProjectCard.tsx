
export default function ProjectCard({name, imageURL, description, stack}){
    return (
        <div className="project-card flex-col w-[100%] opacity-0 hidden">
            <div className="font-helveticaregular text-[24px] ml-3.5">{name}</div>
            <img src={imageURL} alt="" className="w-[100%] rounded-2xl"/>
            <div className="font-helveticaregular text-[12px] bg-[#242424] rounded-2xl mt-2 text-[#C7C7C7] p-2">
                {description}
                <div className='bg-[#484848] rounded-2xl pl-2 pr-2 pt-1 pb-1 mt-1.5 w-fit'>
                    {stack.map((tool, index) => index > 0 ? <span> | {tool}</span> : <span>{tool}</span>)}
                </div>
            </div>
        </div>
    )
}
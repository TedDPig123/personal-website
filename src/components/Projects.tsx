import ProjectCard from "./ProjectCard"
import { projectsList } from "../content/ProjectsList"

export default function Projects(){
    return(
        <div className="projects h-fit bg-black ml-4 mr-4 text-[#ff0000] border-t-20 border-white flex-col  text-white pt-3.5 rounded-b-xl pb-5">
            <h1 className="font-helveticaregular text-[8vw] tracking-[-0.06em] leading-[9vw] select-none ml-4">PROJECTS</h1>
            <div className="projects-container grid grid-cols-3 gap-4 m-3.5">
                {projectsList.map((project) => 
                    <ProjectCard
                        name={project.name}
                        imageURL={project.imageURL}
                        description={project.description}
                        stack={project.stack}
                        key={project.id}
                    />
                )}
            </div>
            <div className="flex justify-center">
                <div className="inline-block see-more relative text-[16px] font-telegraf cursor-pointer pt-2">see more</div>
            </div>
        </div>
    )
}
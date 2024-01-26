import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {

    const projectData = [
        {
            id: 1,
            title: "SENG365 Auction Page",
            description: "Project recreating TradeMe",
            badge: "React"

        },
        {
            id: 2,
            title: "Computer Graphics Project",
            description: "Raytracing etc",
            badge: "C++"
        },
        {
            id: 3,
            title: "SENG302 Group Project",
            description: "Garmin Integrated Sports Application",
            badge: "Thymeleaf"
        },
        {
            id: 4,
            title: "Mobile Application",
            description: "UCanScan",
            badge: "Jetpack Compose"
        },
        {
            id: 5,
            title: "Computer Vision",
            description: "Cat detection",
            badge: "YOLO v8"
        },
        {
            id: 6,
            title: "Natural Language Processing",
            description: "Twitter classification",
            badge: "Python"
        }
    ]

    return (
        <div id="projects" className="scroll-mt-20">
            <h1 className="text-4xl md:text-8xl font-bold p-10">Projects</h1>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-30">{projectData.map(project=> (
            <ProjectCard key={project.id} project={project}/>
        ))}</div></div></div>
    )
}
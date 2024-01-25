// @ts-ignore
const ProjectCard = ({ project }) => {
    return (
        <div className="card md:w-88 bg-base-100 shadow-xl bg-white m-10">
            <figure className="px-10 pt-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJRaw_l55-gRhncBSfa5MuqCOR3UB0lY9UW166OZdzw&s" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{project.title}
                    </h2>
                <div className="badge badge-secondary py-2 font-semibold text-white">{project.badge}</div>
                <p>{project.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary text-white">Details</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
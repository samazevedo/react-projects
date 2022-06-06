import { useNavigate, Link } from 'react-router-dom'
import { ProjectsData } from './projectsData'
import { ProjectsStyled } from './Projects.styled'
function ProjectsPage() {
    const navigate = useNavigate()

    return (
        <ProjectsStyled>
            <h1>Projects List Page </h1>
            {ProjectsData.map((project) => {
                return (
                    <div
                        onClick={() => {
                            navigate(`/projects/${project.id}`)
                        }}
                    >
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <Link to={project.url}>Check it out</Link>
                    </div>
                )
            })}
        </ProjectsStyled>
    )
}

export default ProjectsPage

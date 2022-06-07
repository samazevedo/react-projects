import { useNavigate, Link } from 'react-router-dom'
import { PROJECTSDATA } from '../../data/data'
import { ProjectsStyled } from './Projects.styled'

function ProjectsPage() {
    const navigate = useNavigate()

    return (
        <ProjectsStyled>
            <h1>Projects List Page </h1>
            {PROJECTSDATA.map((project) => {
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

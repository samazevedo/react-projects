import { useNavigate } from 'react-router-dom'
import { PROJECTSDATA } from '../../data/data'
import { ProjectsStyled } from './Projects.styled'

function ProjectsPage() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Projects List Page </h1>

            <ProjectsStyled>
                {PROJECTSDATA.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className='project-item'
                            onClick={() => {
                                navigate(`/projects/${project.id}`)
                            }}
                        >
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </ProjectsStyled>
        </>
    )
}

export default ProjectsPage

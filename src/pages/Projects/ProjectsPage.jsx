import { useNavigate } from 'react-router-dom'
import { PROJECTSDATA } from '../../data/data'
import { ProjectsStyled, BgImage } from './Projects.styled'

function ProjectsPage() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Projects List Page </h1>

            <ProjectsStyled>
                {PROJECTSDATA.map((project) => {
                    const { id, name, description, url, image } = project

                    return (
                        <div key={id} className='project-item'>
                            <BgImage image={image} />
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <button
                                onClick={() => {
                                    navigate(`/projects/${url}`)
                                }}
                            >
                                View Project
                            </button>
                        </div>
                    )
                })}
            </ProjectsStyled>
        </>
    )
}

export default ProjectsPage

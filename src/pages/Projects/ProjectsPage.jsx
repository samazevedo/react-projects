import { useNavigate, useParams, Routes, Route } from 'react-router-dom'

function ProjectsPage() {
    let navigate = useNavigate()
    let { id } = useParams()
    return (
        <>
            <h1>Projects Page </h1>
            <Routes>
                <Route path='/projects/:id' element={<ProjectsPage />} />
            </Routes>
            <p>Project ID: {id}</p>
            <button
                onClick={() => {
                    navigate('/')
                }}
            >
                Return to Home Page
            </button>
        </>
    )
}

export default ProjectsPage

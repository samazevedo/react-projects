import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/theme'
import { GlobalStyle } from './shared/Global'
import HomePage from './pages/Home/HomePage'
import ErrorPage from './pages/404/404'
import ProjectsPage from './pages/Projects/ProjectsPage'
import { Container } from './components/styles/Container/Container.styled'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Gallery from './projects/Gallery/Gallery'
import Bookstore from './projects/Bookstore/Bookstore'
import Reminder from './projects/Reminder/Reminder'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <BrowserRouter>
                    <Header />
                    <GlobalStyle />
                    <Container>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/projects' element={<ProjectsPage />}>
                                <Route path=':id' element={<ProjectsPage />} />
                            </Route>
                            <Route
                                path='/projects/gallery'
                                element={<Gallery />}
                            />
                            <Route
                                path='/projects/bookstore'
                                element={<Bookstore />}
                            />
                            <Route
                                path='/projects/reminder'
                                element={<Reminder />}
                            />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>
                    </Container>
                    <Footer />
                </BrowserRouter>
            </>
        </ThemeProvider>
    )
}

export default App

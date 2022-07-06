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
import Reminder from './projects/Reminder/Reminder'
import Tour from './projects/Tour/Tour'
import Review from './projects/Review/Review'
import Accordion from './projects/Accordion/Accordion'
import Menu from './projects/Menu/Menu'
import Tab from './projects/Tab/Tab'
import Slider from './projects/Slider/Slider'
import Lorem from './projects/Lorem/Lorem'
import Color from './projects/Color/Color'
import Grocery from './projects/Grocery/Grocery'
import Navbar from './projects/Navbar/Navbar'
import Sidebar from './projects/Sidebar/Sidebar'
import Stripe from './projects/Stripe/Stripe'
import Cart from './projects/Cart/Cart'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <BrowserRouter>
                    <Header />
                    <GlobalStyle />
                    <Container>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path='home' element={<HomePage />} />
                            <Route path='projects' element={<ProjectsPage />}>
                                <Route path=':id' element={<ProjectsPage />} />
                            </Route>
                            <Route
                                path='projects/reminder'
                                element={<Reminder />}
                            />
                            <Route path='projects/tour' element={<Tour />} />
                            <Route
                                path='projects/review'
                                element={<Review />}
                            />
                            <Route
                                path='projects/accordion'
                                element={<Accordion />}
                            />
                            <Route path='projects/menu' element={<Menu />} />
                            <Route path='projects/tab' element={<Tab />} />
                            <Route
                                path='projects/slider'
                                element={<Slider />}
                            />
                            <Route path='projects/lorem' element={<Lorem />} />
                            <Route path='projects/color' element={<Color />} />
                            <Route
                                path='projects/grocery'
                                element={<Grocery />}
                            />
                            <Route
                                path='projects/navbar'
                                element={<Navbar />}
                            />
                            <Route
                                path='projects/sidebar'
                                element={<Sidebar />}
                            />
                            <Route
                                path='projects/stripe'
                                element={<Stripe />}
                            />
                            <Route path='projects/cart' element={<Cart />} />
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

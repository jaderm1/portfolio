import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home.jsx'
import { Erro404 } from '../pages/404.jsx'
import { AboutMe } from '../pages/aboutMe.jsx'
import { Portfolio } from '../pages/portfolio.jsx'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/' />

                <Route element={<Erro404/>} path='*' />

                <Route element={<AboutMe/>} path='/aboutme' />
                 
                <Route element={<Portfolio/>} path='/portfolio' />
            </Routes>

        </BrowserRouter>
    )
}
export { RoutesApp }
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProjectPage from '@/pages/ProjectPage'
import RecommendationPage from './pages/RecommendationPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route 
        path='/recommendations'
        element={<RecommendationPage />}
      />
      <Route
        path='/projects'
        element={<ProjectPage />}
      />
      <Route
        path='/about'
        element={<AboutPage />}
      />
      <Route
        path='/*'
        element={<NotFoundPage />}
      />
    </Routes>
  )
}

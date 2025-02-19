import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz from './components/Quiz.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FailPage from './components/FailPage.jsx'
import CongratsPage from './components/CongratsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path='/fail' element={<FailPage />}/>
        <Route path='/congrats' element={<CongratsPage />}/>
      </Routes>
      </Router>
  </StrictMode>,
)

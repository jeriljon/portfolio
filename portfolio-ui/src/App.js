import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/ProjectsPage/Projects';
import Articles from './components/ArticlesPage/Articles';
import Resume from './components/ResumePage/Resume';
import ContactMe from './components/ContactMePage/ContactMe';
import Landing from './components/LandingPage/Landing'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/home" element={<Landing />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
        
    );
}

export default App;

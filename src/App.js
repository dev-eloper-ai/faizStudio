import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/scss/custom.scss";
import HomePage from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';
import Project5 from './pages/project5';
import Project6 from './pages/project6';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailpage" element={<ProjectDetails />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6 />} />
      </Routes>
    </>
  );
}

export default App;

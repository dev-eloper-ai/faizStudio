import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/scss/custom.scss";
import HomePage from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailpage" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;

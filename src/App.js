import './App.css';
import Home from './Pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import NewReport from './Pages/NewReport'
import ListReports from './Pages/ListReports'
import DetailedReport from './Components/ListReports/DetailedReport';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new_report" element={<NewReport />} />
        <Route path="/list_reports" element={<ListReports />} />
        <Route path="/list_reports/:id" element={<DetailedReport />} />
      </Routes>
    </div>
  );
}

export default App;

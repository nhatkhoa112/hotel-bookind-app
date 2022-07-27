import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/hotels" element={<List/>}/>
          <Route exact path="/hotels/:id" element={<Hotel/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

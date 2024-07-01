
import './App.css'
import HelloPage from "./HelloPage.tsx";
import ByePage from "./ByePage.tsx";
import {Link, Route, Routes} from "react-router-dom";
import GreetPage from "./GreetPage.tsx";
import HomePage from "./HomePage.tsx";

function App() {


  return (
    <>
        <div>
            <Link to={"/"}> HomePage </Link>
            <Link to={"/hello"}>HelloPage</Link>
            <Link to={"/bye"}>ByePage</Link>
        </div>
       <Routes>
           <Route path={"/"} element={<HomePage/>}/>
           <Route path={"/hello"} element={<HelloPage/>}/>
           <Route path={"/bye"} element={<ByePage/>}/>
           <Route path={"/greet/:name"} element={<GreetPage/>}/>
       </Routes>
    </>
  )
}

export default App

import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Project from "./pages/project/Project";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SideBar/>
                <div className="container">
                    <NavBar/>
                    <Switch>
                        <Route exact path={'/'}>
                            <Dashboard/>
                        </Route>

                        <Route path={'/create'}>
                            <Create/>
                        </Route>

                        <Route path={'/login'}>
                            <Login/>
                        </Route>

                        <Route path={'/signup'}>
                            <SignUp/>
                        </Route>

                        <Route path={'/projects/:id'}>
                            <Project/>
                        </Route>
                    </Switch>


                </div>
            </BrowserRouter>
        </div>
    );
}

export default App

import React, { useContext } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Publications from "./pages/publications";
import CreateCar from "./pages/create-car";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import ErrorPage from "./pages/error";
import Logout from "./pages/logout";
import AboutPage from "./pages/about";
import ContactsPage from "./pages/contact";
import DetailsPage from "./pages/details-page";
import EditPage from "./pages/edit-page";
import UserContext from "./Context";

const Navigation = () => {

    const { loggedIn } = useContext(UserContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/create" >
                    {loggedIn ? (<CreateCar />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/register" >
                    {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
                </Route>
                <Route path="/login" >
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
                </Route>
                <Route path="/logout" component={Logout} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactsPage} />
                <Route path="/profile/:userId" >
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/details/:imgId" component={DetailsPage} />
                <Route path="/edit/:id" >
                    {loggedIn ? (<EditPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
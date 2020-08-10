import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
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

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/create" component={CreateCar} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={Logout} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactsPage} />
                <Route path="/profile/:userId" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
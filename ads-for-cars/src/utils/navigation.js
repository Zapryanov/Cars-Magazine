const getNavigation = (loggedIn, user) => {
    
    const authLinks = [
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Contact Us",
            link: "/contact"
        },
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Create",
            link: "/create"
        },
        {
            title: "Profile",
            link: `/profile/${user}`
        },
        {
            title: "Logout",
            link: "/logout"
        }
    ]

    const guestLinks = [
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Contact Us",
            link: "/contact"
        },
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Register",
            link: "/register"
        },
    ]

    return loggedIn ? authLinks : guestLinks;
     
}

export default getNavigation;

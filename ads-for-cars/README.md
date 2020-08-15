Car-Magazine is a SPA for advertizing car ads.

Project setup:
    In REST-API:
        npm install
    
    In ads-for-cars:
        npm install

To start the application, in the console I use the command "npm start" 
    in both REST-APP and React App.

Generated with create-react-app and use:
    -"react": "^16.13.1",
    -"react-dom": "^16.13.1",
    -"react-router-dom": "^5.2.0"

Usage of external API's:
    - Cloudinary ("Here store the pictures)
    - Google.Maps
    - Google-Fonts (included in this App from Google)

Usage of cloud storage:
    - Atlas (MongoDb) - (Here store all info about each car)

LoginPage and RegisterPage both has custom validation:
    - the Username must be at least 3 characters long
    - Password and Re-Password must be the same.

The application have PUBLIC part and PRIVATE part.

The Public part is:
    At the top right of the header section, username is "Guest".
    The user can see all the ads and view the details, but CANNOT CREATE ads because the button to create an ad is NOT DISPLAYED. The buttons for Deleting and Editing even his ads are NOT DISPLAYED. He can only look.

The Private part is:
    When the user is logged in, the username appears on the page at the top right of the header section and he can create ads. He can look at all the ads again, but here the buttons for deleting and editing these ads, which only he has created, are already displayed.
    A button for the Profile page already appears, which shows how many ads there are and the ads themselves are displayed.

Both - Public and Private parts has a this functionallity:
    If there are no existing ads at all, a page with a default photo is displayed with a caption inviting the user to log in or register if he is not registered and create an ad if he wants to sell a car.
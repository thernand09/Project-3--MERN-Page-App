# Recipe Review Application

Welcome to our **Recipe Review Application**, a modern web application that allows users to search for recipes, view detailed information, and post reviews. This application is built using React, GraphQL, Node.js, and Express.js, and features robust authentication and a polished, responsive UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshot](#screenshot)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure login and registration using JWT.
- **Recipe Search:** Search and view recipes using the Spoonacular API.
- **Review System:** Post and view reviews for recipes.
- **Interactive UI:** Dynamic and responsive design to enhance user experience.
- **Protected Data:** Sensitive API keys and user data are securely handled.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express.js, GraphQL
- **Database:** MongoDB, Mongoose ODM
- **Authentication:** JWT
- **Deployment:** Render
- **API:** Spoonacular

## Screenshot

![Recipe Review Application Screenshot](./public/screenshot.png) <!-- Ensure you have a screenshot in the public directory -->

## Live Demo

Check out the live application on [Render!](https://your-app-link.onrender.com) <!-- Replace with actual deployment link -->

## Installation

To set up the Recipe Review Application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dannylkramer/recipe-review-app.git
   cd recipe-review-app
   ```

2. **Install Dependencies:**
- Install frontend dependencies:

```bash
Copy code
cd client
npm install
```

- Install backend dependencies:

```bash
Copy code
cd ../server
npm install
```

3. **Setup Environment Variables:**
- Create a .env file in the server directory and add your environment variables:

``` bash 
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SPOONACULAR_API_KEY=your_spoonacular_api_key
```

4. **Start the Development Server:**
- Run the backend server:

```bash
Copy code
cd server
npm start
```

- Run the frontend:

```bash
Copy code
cd ../client
npm start
```

## Usage

### User Authentication

- **Sign Up:** Create a new account on the `SignUp` page.
- **Log In:** Access your account on the `Login` page.

### Recipe Search

- **Search Recipes:** Use the search bar on the `Home` page to find recipes.
- **View Recipe Details:** Click on a recipe to see detailed information on the `RecipePage`.

### Posting and Viewing Reviews

- **Post Reviews:** After viewing a recipe, post your review on the `RecipePage`.
- **View Reviews:** See reviews from other users on the same page.

### Managing Your Profile

- **View Profile:** Access your profile information on the `Home` page after logging in.
- **Log Out:** Use the logout button on the `Home` page to exit your account.

## Development

To contribute to the project:

1. **Create a Branch:**

   ```bash
   git checkout -b feature/your-feature
    ```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. 

Project Credits:
Danny Kramer | Tati Hernandez | Amber Gandar


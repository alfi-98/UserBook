# UserBook

This is a React application that displays a list of users and their associated posts. The app has two pages, one that displays a list of all users and one that displays a specific user's profile and their associated posts. The data is retrieved from a mocked API using custom hooks. The app is responsive and works well on both desktop and mobile devices.

# Architecture of the project
## Front-end:

- The front-end will be built using React.js.
- The UI will consist of two pages: a list of all users and a user profile page.
- React Router will be used for navigation between the pages.
- Axios will be used to make HTTP requests to the API.

## Back-end:

- The back-end will consist of a mock API built using JSON-Server.
- The API will be hosted locally and will serve mock data for the front-end.
- The API will be accessed via HTTP requests from the front-end.

## Data:

- The API will provide mock data for the front-end.
- The data will consist of a list of users and their associated posts.
- Each user will have a unique ID, first name, last name, email, and company information.
- Each post will have a unique ID, title, body, and user ID.

## Custom Hooks:

- Two custom hooks will be created to retrieve data from the API.
- useUsers() will return all users from the API.
- useUser() will return a specific user and their associated posts.


## To start the project:

- Clone the repository from Github
- Install the required dependencies by running npm install
- Start the development server by running npm start
- Open your web browser and navigate to http://localhost:3000/ to view the app

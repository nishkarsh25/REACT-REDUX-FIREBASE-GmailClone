# REACT-REDUX-FIREBASE-GmailClone Project

Welcome to the REACT-REDUX-FIREBASE stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a web application designed to mimic the core functionalities of Gmail using React.js and Firebase. It allows users to authenticate with their Google accounts, view their inbox, compose and send emails, view individual emails, and perform actions such as archiving and deleting emails.


## Features
- **Authentication**: Users can sign in using their Google accounts via Firebase authentication.
- **Inbox View**: Displays a list of emails fetched from Firebase Firestore, sorted by timestamp.
- **Compose Email**: Allows users to compose and send emails, which are then stored in Firestore.
- **View Email**: Clicking on an email in the inbox displays its details including subject, sender, and message body.
- **Actions**: Users can perform actions on emails such as archiving, marking as unread, deleting, and more.
- **Responsive Design**: The application is designed to be responsive, ensuring a consistent user experience across devices.


## Live Demo

You can try out the live demo of the app [here](https://effortless-malabi-edaf53.netlify.app/).

## Folder Structure

```
# Root directory of the project
gmail-clone/
├── public/                 # Public assets and index.html
│   ├── index.html          # Main HTML file
│   └── ...                 # Other assets (images, etc.)
├── src/                    # Source directory
│   ├── components/         # React components
│   │   ├── Login.js        # Component for Google login
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── Inbox.js        # Inbox component
│   │   ├── SendEmail.js    # Compose email component
│   │   ├── Mail.js         # Email detail component
│   │   ├── Body.js         # Main body layout component
│   │   ├── Sidebar.js      # Sidebar component
│   │   ├── Messages.js     # Component to display emails
│   │   └── Message.js      # Individual email message component
│   ├── firebase/           # Firebase configuration and setup
│   │   ├── firebase.js     # Firebase configuration
│   │   └── ...             # Firebase Firestore integration
│   ├── redux/              # Redux setup and state management
│   │   ├── appSlice.js     # Redux slice for app state
│   │   └── ...             # Other Redux-related files
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point of the React application
│   └── tailwind.config.js  # Tailwind CSS configuration
├── node_modules/           # Node.js packages (generated)
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lock file for Node.js dependencies
├── README.md               # Project README file
└── .gitignore              # Git ignore file


```


## GIF's

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/REACT-REDUX-FIREBASE-GmailClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used
- **React.js**: Frontend library for building user interfaces.
- **Firebase**: Backend-as-a-Service platform for authentication (Firebase Authentication) and database storage (Firestore).
- **React Router**: For routing within the application.
- **Redux**: State management library to manage application state.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **Framer Motion**: Used for animations and transitions within the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/REACT-REDUX-FIREBASE-GmailClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node server.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## Usage

1. **Sign In**
   - Sign in using your Google account by clicking on the "Login" button.
   
2. **View Inbox**
   - Once logged in, you will be directed to your inbox where you can view a list of emails.

3. **Compose and Send Emails**
   - Click on the "Compose" button in the sidebar to create a new email.
   - Enter recipients, subject, and message content, then click "Send".

4. **View Email Details**
   - Click on any email in the inbox list to view its details.
   - Details include sender, subject, message content, and timestamp.

5. **Perform Actions on Emails**
   - From the email detail view, you can perform various actions such as:
     - **Archive**: Click on the archive icon to archive the email.
     - **Delete**: Click on the delete icon to delete the email.
     - **Mark as Unread**: Toggle the read status of the email.
     - **Move to Different Folders**: Use the move option to move the email to different folders.

6. **Responsive Design**
   - The application is responsive and designed to work seamlessly across desktop and mobile devices.

7. **Navigation**
   - Use the sidebar to navigate between different email categories (Inbox, Starred, Snoozed, Sent, Drafts, etc.).
   - Use the navigation buttons at the top to move between pages or navigate back to the main inbox view.

8. **Logout**
   - To log out, click on your profile picture in the top-right corner, then click "Logout".

Enjoy managing your emails with the Gmail Clone application!


## API Endpoints

The backend server exposes the following API endpoints:

- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user.

1. **Product Routes (`/routes/productRouter.js`):**
   - `GET /products`: Retrieves all products.
   - `POST /products`: Creates a new product.
   - `DELETE /products/:id`: Deletes a product by ID.
   - `PUT /products/:id`: Updates a product by ID.

2. **Category Routes (`/routes/categoryRouter.js`):**
   - `GET /category`: Retrieves all categories.
   - `POST /category`: Creates a new category.
   - `DELETE /category/:id`: Deletes a category by ID.
   - `PUT /category/:id`: Updates a category by ID.

3. **User Routes (`/routes/userRouter.js`):**
   - `POST /register`: Registers a new user.
   - `POST /login`: Logs in an existing user.
   - `GET /logout`: Logs out the current user.
   - `GET /refresh_token`: Refreshes the authentication token.
   - `GET /infor`: Retrieves user information (requires authentication).

These routes define the endpoints for handling product CRUD operations, category CRUD operations, and user authentication operations in the backend server. Each route corresponds to a specific action or resource in the application.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **Firebase**: A platform developed by Google for creating mobile and web applications. Visit [Firebase](https://firebase.google.com/) for more information.

- **Redux**: A predictable state container for JavaScript apps. Visit [Redux](https://redux.js.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com


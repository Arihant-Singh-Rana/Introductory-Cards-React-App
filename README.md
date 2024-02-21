# Student Introductory Crad React App

This repository contains a simple React application that displays information about students using a component-based structure. Each student's details, including their image, name, age, and course, are presented in a visually appealing card format.

## Table of Contents

- [Files and Structure](#files-and-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Files and Structure

### `App.js`

The main entry point of the application. It imports the necessary components and renders them to display student information. The student data is hardcoded for demonstration purposes.
Certainly! Here are snippets for each code file:

### `App.js Code Snippet`

```jsx
import React from "react";
import "./App.css";
import Introduction from "./Introduction";
import Abhijeet from "./material/Abhijeet.jpeg";
import Adnan from "./material/Adnan.jpeg";
import Sharad from "./material/Sharad.jpg";
import Tiwari from "./material/Tiwari.jpg";
import keshav from "./material/Keshav.jpeg";
import DK from "./material/DK.jpeg";

function App() {
  return (
    <>
      <div className="Body">
        <Introduction
          imgaddress={Abhijeet}
          name="Abhijeet Khokar"
          age={18}
          course="B.Tech CSE"
        />
        {/* Additional Introduction components for other students */}
      </div>
      <div className="Body">
        {/* Additional Introduction components for other students */}
      </div>
    </>
  );
}

export default App;
```

### `Introduction.js`

The component responsible for rendering individual student details. It receives props such as image address, name, age, and course.

### `Introduction.js Code Snippet`

```jsx
import React from "react";
import "./Introduction.css";

export default function Introduction(intro) {
  return (
    <div className="Parent">
      <img src={intro.imgaddress} alt="Student Pic" />
      <h1>{intro.name}</h1>
      <h2>Age: {intro.age}</h2>
      <h3>Course: {intro.course}</h3>
    </div>
  );
}
```

### `Introduction.css`

The stylesheet for styling the `Introduction` component. It defines the appearance of the student details card, including margins, borders, shadows, and font styles.

## Usage

1. Clone the repository.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Run `npm install` to install the required dependencies.
4. Execute `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Customization

Feel free to customize the code to add more students or modify the styling. You can replace the student images in the `material` folder and update the corresponding references in `App.js`.

## Author

This project was created by Arihant Singh Rana.

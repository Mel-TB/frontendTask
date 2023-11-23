# Product Widgets

<div align='center'>

![GitHub forks](https://img.shields.io/github/forks/Mel-TB/frontendTask?label=Fork&style=for-the-badge&color=%2378909C)
![GitHub Repo stars](https://img.shields.io/github/stars/Mel-TB/frontendTask?label=Stars&style=for-the-badge&color=%2378909C)

</div>
<div align='center'>
  
<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajR3Z3R3eXhtMTh3a3Bydmp6NjRoOWsyamgybG96OHhpdDV6Mnd1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EBU2aL1eQEiMQdVgpb/giphy.gif'  />

<img src='https://i.postimg.cc/Kj8ZV7dW/mobile-view.png)](https://postimg.cc/S2HFY9QL'/>
</div>

<br/>

## Table of Contents

<details>

<summary>Table</summary>

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Implementation Details](#implementation-details)
  - [Choice of Technology](#choice-of-technology)
  - [Applications Features](#applications-features)
- [Running the Project](#running-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Starting the Application](#starting-the-application)
- [Contact](#contact)
   </details

## About the Project

This front-end service allows users to manage product widgets, including display and customization of settings. Each widget has immutable properties (id, type, amount, action) and mutable settings (color, active and linked states).

### Built With

This dashboard was created with

- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Implementation Details

### Choice of Technology

- **React**: Chosen for its component-based architecture, which allows for reusable and isolated UI elements, making the application scalable and maintainable.
- **Redux**: Used for state management to handle the complex state interactions and ensure consistency across the application, particularly important for features like maintaining a single active widget at a time.

### Applications Features

- **Widget Display and Interaction**: Users can view a list of widgets, each with its properties and settings.
- **Customization of Widgets**: Users can modify widget settings, including color, active state, and linked state.
- **Business Logic Compliance**: Ensures that only one widget can be active at a time, in line with the provided requirements.

### Responsive Design

- The application is designed to be responsive, ensuring a seamless user experience across various device sizes. This includes adapting the layout for mobile and desktop screens.
- Responsive design techniques, such as flexible grid layouts, responsive images, and media queries, were employed to achieve an optimal viewing experience on different devices.

## Running the Project

### Prerequisites

- Node.js and npm or yarn must be installed on your system.

### Installation

Clone the project and install its dependencies using yarn or npm

```sh
git clone https://github.com/Mel-TB/frontendTask
cd bnb-project-dashboard
yarn install
```

### Starting the Application

Run the application using:

```sh
yarn run dev
```

This will start the application on localhost:5137 (or the next available port if 5137 is busy).

## Testing

### Testing Strategy

- **Unit Tests**: Focused on testing individual components and utility functions in isolation to ensure they work as expected.
  - For example, unit tests were written for `fetchProductWidgets`, `widgetActions`, `widgetsReducer`, and `mapSelectedColorToHex`
- **Tools and Frameworks Used**: Jest was used as the primary testing framework due to its simplicity and integration with React

  ### Running Tests

  To execute the test suite, run the following command:

```sh
yarn test
```

## Why These Choices?

- **React's Ecosystem and Flexibility**: React's vast ecosystem and flexibility in integrating with various libraries like Redux made it an ideal choice.
- **Redux for Predictable State Management**: Redux provides a predictable state container, which simplifies the management of the application's state, especially for features like toggling widget states.
- **Future Scalability and Maintainability**: The combination of React and Redux ensures that the application is both scalable and maintainable, making future enhancements easier.

## Future Enhancement

- Transition to Vue.js and Vuex as per organization's tech stack.

## Contact

Trami Melinda <a href='https://twitter.com/mel_trbd'>
<a href='mailto:tramimelinda@gmail.com'>![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a> <a href='https://fr.linkedin.com/in/melindat'>![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>

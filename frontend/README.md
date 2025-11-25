# React Phone Catalog Frontend Documentation

[Reference: Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Overview

This project, `react_phone-catalog`, is a React-based web application designed to showcase a catalog of phones. The project is built using modern frontend technologies and tools to ensure a robust, maintainable, and scalable codebase.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Building and Previewing](#building-and-previewing)
- [TypeScript Support](#typescript-support)
- [Using Plop](#using-plop)
- [Adding Props to a Functional Component](#adding-props-to-a-functional-component)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. The recommended versions are:

- **Node.js**: 18.20.2
- **npm**: 10.5.0

### Installation

Clone the repository:

```bash
git clone https://github.com/br-fs-feb24-BinaryBosses/react_phone-catalog.git
cd react_phone-catalog
```

Install dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will launch the application using Vite, a fast build tool and development server.

## Scripts

The project includes several npm scripts to streamline development and build processes:

- `start`: Starts the Vite development server.
- `lint`: Runs ESLint on all JavaScript and TypeScript files in the `src` directory and automatically fixes issues.
- `format`: Formats all relevant files using Prettier.
- `build`: Compiles the TypeScript code and builds the application using Vite.
- `preview`: Previews the production build locally.
- `prepare`: Sets up Husky for managing Git hooks.

## Linting and Formatting

The project uses ESLint and Prettier to ensure code quality and consistency.

### Linting

To lint the code, run:

```bash
npm run lint
```

### Formatting

To format the code, run:

```bash
npm run format
```

## Building and Previewing

### Building

To build the project for production, run:

```bash
npm run build
```

This will compile the TypeScript code and bundle the application using Vite.

### Previewing

To preview the production build locally, run:

```bash
npm run preview
```

## TypeScript Support

The project is built with TypeScript to provide type safety and enhance developer experience. TypeScript configurations and dependencies are already set up in the project.

## Using Plop

Plop is a micro-generator framework that makes it easy to create boilerplate code for new components and pages in a consistent manner.

### Creating a New Component

To create a new component, run the following command:

```bash
npx plop component
```

You will be prompted to enter the name of the new component. Plop will then generate the component files in the appropriate directory with the necessary boilerplate code.

### Creating a New Page

To create a new page, run the following command:

```bash
npx plop page
```

You will be prompted to enter the name of the new page. Plop will generate the page files and include the necessary boilerplate code.

## Adding Props to a Functional Component

Props are used to pass data from one component to another. Here's how you can add props to a functional component in React with TypeScript.

### Step-by-Step Guide

1. **Define the Props Interface**: Create an interface that defines the types of props your component will receive.
2. **Use Props in the Component**: Use the props in your functional component by specifying the interface.

### Example

Let's say we want to create a `Phone` component that takes `name`, `brand`, and `price` as props.

#### 1. Define the Props Interface

Create an interface for the props:

```typescript
interface PhoneProps {
  name: string;
  brand: string;
  price: number;
}
```

#### 2. Use Props in the Component

Use the defined props in your functional component:

```typescript
import React from 'react';
interface Props {
  // Add your props here!
}
function Phone(prop: Prop) => {
  return (
    <>
      <h1>{prop.name}</h1>
      <p>{prop.brand}</p>
      <p>${prop.price}</p>
    </>
  );
};

export default Phone;
```

### Usage

Now, you can use the `Phone` component and pass the required props:

```typescript
import React from 'react';
import Phone from './components/Phone';

const App: React.FC = () => {
  return (
    <div>
      <Phone name="iPhone 13" brand="Apple" price={999} />
      <Phone name="Galaxy S21" brand="Samsung" price={799} />
    </div>
  );
};

export default App;
```

By following these steps, you can effectively add and use props in your functional components, making them more reusable and dynamic.

## Conclusion

This documentation provides an overview of the `react_phone-catalog` project structure, dependencies, development workflows, and how to use Plop to create new pages and components. It also includes guidelines on how to add props to functional components in React. By following the guidelines and using the provided scripts, you can effectively develop and maintain this React application.

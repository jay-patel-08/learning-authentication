# Angular Javascript

Angular is component-driven framework, that is used to create SPA [single page application].

As angular is written in node and works on node so that we've to use the package manager of the node - NPM.


Angular serves the project on the local servers and can bundle the packages into one.

`typescript` is the main feature which is used in the core of the angular javascript.

> #Note: While working on the real-world applications, `first the API` is designed and `then front-end` of the project is created with the help of that.

## Angular CLI

This awesome CLI provides some awesome features that saves the time. Like as creating the new components takes more time while registering it in app-module.

- We create new project using `ng new <project-name>`
- We serve the project on local server using `ng serve`

> ### What does angular solve?
>
> It organise the code very well. Angular solves the code-organising problem very well.

### How typescript is used?

`Typescript-compiler` compiles the typescript code into browser-understandable ES5 code. Because browser don't understand the typescript programs.

> `npm install typescript` to install the typescript

## Strcutre of the angular project

Angular project contains of the components and the supported files of it. The structure of the project is followed.

1. **Components** - They consist of the following files
    1. <component\>.html - Contains the markup of the component
    2. <component\>.css  - contains the styling of the component
    3. <component\>.ts   - Contains the driven typescript code within. That provides the liking the data and other logics of scripting language.

2. **Modules** - modules are the container of the components. The module is used to containerise the component.
    1. <module\>.ts - This file is used to describe the dependecies, imports and other injections we're using in the components of that modules.

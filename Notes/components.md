# Components

Components are one of the amazing features of the angular. Anything in the angular which can be displayed can be driven by the `components`

## Benefits of the components

**Easily decoupled** - components can be used anywhere after wrriting only once.


## How to create a component from the scratch?

Creating the component contains three step process.

> Process: Create, Register, Call

1. Creating the component
    - Creating a component means, creating a decoupled block of the markup and logic
    - To create a component we create - `name.component.ts`
    - This file contains the meta-data information about the component.
    - After creating the component - We have to `create a class` in the ts file, and export it. As everything is class in the angular.

    > Decorators: Decorators are the container for the information about the components. There are different decaorators according to the feature of the component.

    Example:
    ```typescript
    // hello.component.ts
    import { Component } from '@angular/core'
    
    @Component ({
        selector : 'hello', // <hello>
        template : '<h1>Hello</h1>'
        // template will be replaced by <hello>
    })

    export class HelloComponent {

    }
    ```

2. Declaration of the component 
    - We use the `Component` decorator to store the metadata information about the components.
    - Two prerequisite things are - `Selector` and `template`
        - `selector` - to produce a selector that can be used in markup languge
        - `template` - to provide the link of the template of the markup file. Which will be replaced by selector in the markdown.
    - **To register the component**: We've to register the component in the `app-module` file in the `@NgModule` decorator. 
    
    Registering the component in app-module.ts
    ```typescript
    @NgModule {
        declarations : [
            AppComponent,
            HelloComponent, // Registering the component
            //...
        ]
    }
    ```

3. Calling the Component
    - The single page which is served by the angular project is `app.component.html`. Calling the compontent can be done over here.
    - `selector` will be replaced by the `template` markup code in the `app.component.html` file.

    Example:
    ```html
    <!-- app.component.html -->
    <hello></hello>
    ```

## Component using CLI

Using angular cli we can generate the component quite effectively. To create the component we will use the following commang.

```cmd
$ ng generate component <name>
$ ng g c <name>
```

Creating the component this way will create following files into the folder of that component.

1. `name.component.html` - this html file is linked automatically to the component itself
2. `name.component.css` - this css file is styling sheet for that particular component
3. `name.component.ts` - containing the meta-data and decorators
4. `name.component.spec.ts` - for unit testing

Registering the component will be handled directly by the cli.

There is child-composed model. Means there is parent-child model, not an extend class model. All the component-based frameworks works on this model.
# Directives

Directives are used to change the feel/ui of the normal html tag. It can `change the behaviour` of html tag.

---

## Data binding

Passing the data from parent to child.

1. `{{ }}` - Interpolation -> component to template
2. `[ ]`   - Property binding -> component to template
3. `( )`   - Event binding  -> Template to class
4. `#`    - Template variables
5. `[( )]` - 2 way binding


> ### Difference between property binding and interpolation
> As both `{{}}` and `[]` transfer the data from component to template they differ in some manner.
> `{{}}` is String interpolation - So passing any data which is not a string will possibly give an error.
> `[]` is not converting data into string, but directly pass it.
> 
> See the example in the code of post-list-component

### Sending the data to component from template - [Event Binding]

To send the data from the template to the template, we use the `event-binding` concept. Now, what is the event binding? On any event occurrence, performing the data transport is called as the event-binding. See the example below,

```html
<input (event-name-here)="some-function-to-execute">
```

### Template variables

Variables that contain the values for that template scope only. 

```html
<input #some-variable>
<button (click)="someFunction(some-variable)"></button>
```
Clicking the button will pass the whole html element of given #some-variable. **That particular element must be rendered as we want to use**. Eg, element.value for taking the value of that particular element.

### Two way binding [()]

Sending data from template to component and vice versa in an easier way is done by the two way binding.

We have to use the **ngModel** to bind the data in two ways.

```html
<input [(ngModel)]="variable">
<!-- Changes done here will be changed automatically -->
```

---

## ngFor

> *(asterisk) represents the structural directives.Structure directives are the directives which can change the presentation of the HTML markup.

```typescript
// basic loop knowledge
var arr = [10,20,30,40,50];
for (let i of arr) { console.log(i) }; // 10,20,30,40,50

// for...of - can be used only on the iteratives

var object = { name: "dhruv", age: 18 };
for (let i in arr) { console.log(i) }; // name, age

// for...in - can be used on any object to iterate through its keys
```

`NgFor` iterates through the array and generate the content of the markup recursively.

To use any of the array in the NgFor, we have to add the array into the `<name>.component.ts` folder.

```html
<div *NgFor="for i of arr"> {{ i }} </div>
```

# Models

As in the mvc programs, we use the models to consume the data that we need to present in the view. Models contain the business-logic or data of the framework.

To generate the model - we create a class which contains the data/business-logic. To generate the class we use `ng generate class <model-name>`.

```typescript
// Example of the class
export class Post {
    // specify the types of all the variables
    id: number;
    caption: string;
    imageUrl: string;
    isActive: boolean;
    date: Date;

    constructor(id:number, caption:string, imageUrl:string) {
        this.id = id;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.isActive = true;
        this.date = new Date();
    }
}
```

### Sharing the data between two different components

We can easily share the data from parent to child. But it is very costly process to do.

Here as a solution, we are sharing the data using the **profile** as parent and **post-list** and **post-form** as the child components.

There is better way to do this - `services`

## ngIf

Like as normal if...else statement and can be used to create the conditional view levels in the application. 

```html
<div *ngIf="posts.length === 0" class="alert alert-info">No Post TO Display</div>
```

Using else in the ngIf directive - **ngIf="posts.length===0 else postList"**
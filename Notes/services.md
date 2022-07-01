# Services

The components are meant to be represent the view layer only for the application. To decouple te data from the components the services are created.

Services are part of the model layer, which contains the data and related functions bounded within.

![hierarchy diagram file](./Documentation-Assets/services.png "Diagram")

> **Singleton approach** - 
> In singleton approach the data is in the single instance and shared between many components.

`ng generate service service/post` - To generate new service

The service which is created must be **injectable** so that other classes can use them. This can be accomplished by the `@Injectable` decorator.

```typescript
@Injectable({
    providedIn: 'root'
})
```
Provided In root signifies that the service and the data can be passed anywhere in the project systemwide. This reference can be passed at anywhere in the angular application.

Any change occurence in the service data, the changes will be reflected in every occurence. But it's not prefered in the typescript. And the changes won't reflect when the api call is there in the program.
> Lecture Observables and HTTPclient module <br>
**Agenda** - 
- To implement API calls in web application 
- To communicate with the children and parents 

# HTTP client module

HTTP client module is used to communicate with the server api and recieve the data & show it to the webpage. - _This is an injectable module_

It supports some of the requests like as,
1. GET
2. POST
3. PUT
4. DELETE
5. PATCH

It's an **observable** based library. - For more details `RxJS` must be learnt.

### RxJS implementations

1. Subject
2. Observables

### Why observables?

The most basic ways to implement the asynchronous programming in js are
1. Callbacks - not good because of callback hell
2. Promoises - fair enough to chain the multiple `.then()` blocks
3. Observables - We can unsubscribe to the server request in between the call.
    - The way to implement the observable is 

    ```typescript
    get(apiurl)
    .subscribe((data) => {}, (err) => {})
    .unsubscribe()
    ```


---

Configuration for consumption of the API is required so that we can use the `environment` folder, or create our own config file for the server api calls

> HttpClientModule is imported into the `imports` of `app module`.
Modules and inbuilt functionalities are imported into the **`imports`**, Classes and Components are imported into **`declarations`**. 

Http Client module is injected into the service by defining into the constructor itself.

```typescript
export class PostService {
    constructor(private http: HttpClient) { }
}
```

### Calling the api url

To use the HttpClient and get the data from the URL we use `this.http.get(#url)` method. That will use the program to call the api and send the respond.

It returns the `observable`. So return type of the program must be defined same.

```js
getPost(): Observable<Post[]> { 
    return this.http.get<Post[]>(this.apiUrl);
}
```

The returned `observable` is handled by the `.subscribe()` method.

## Post method in HttpClientModule

Sending the data from the client to the server handled by the `post` request. `this.http.post<DataToSend>(#apiUrl, #dataToSend)` is the syntax to send the data to server.


## Subject

The recievers whosubscribe to the observable event is called as the observer. Observer always subscribes...

It's the combination of the observable and observer - which can act as both and a deep concept of async calls.

Whenever the successful event done by the observable then the subject will be changed and all the observers will get updated accordingly.

Subject will be used as the service so that it can be used as the singleton object. 

**Using the subject service** - to get the messageand pass the message where the message actually is the observable

```javascript
import {Subject, Observable} from 'rxjs';

class message-passing {
    subject = new Subject();

    getMsg() {
        return this.subject.asObservable();
    }

    setMsg(msg) {
        return this.subject.next(msg);
    }
}
```

To update the data everytime we change the dom - we can use the message passing in the place. Like as followed.

```js
ngOnInit() {
    this.messageService.getMsg()
    .subscribe(() => {
        this.getPosts(); // to update the message
    })
}
```

When the call of `this.messaegService.setMsg({msg: "string"})` is made then the subscription of the getMsg will be executed.
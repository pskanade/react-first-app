This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Creating dynamic application

- Use `{}` to write some java script inside the JSX tags.

### Using attributes with user defined component tags: Use of `PROPS`

> (Take a look at the alongside code with the same commit.)

- `props` object gets passed to the **Functional component** in this case.
- When using **Class component** `this.props` gives access to the same attributes as above.
- The text enclosed inside the component tag can be accessed using `props.children`

### Using STATE

- `state` object is allowed to be used in every component that extends `Component`.
- This makes it easier to dynamically modify the UI, followed after the any event.

> Most of the components in the react app should be functional. This means that one should limit the number of components, that could change the state of an application. This ensures that the state manipulation operation will be contained. The components that can chagne the state are called CONTAINERS.

### Changing State from functional component (Passing components to other components)

- One can do this by passing a eventHandler/other function reference with an `attribute` of `props`.

```javascript
<Person
    name={this.state.persons[0].name}
    age={this.state.persons[0].age}
    click={this.switchNameHandler}      // this is how
>
```

- The function can be used in `Person` component as:

```javascript
onClick={props.click}
```

#### Passing argument with the function to other components

- There are two ways to do this
  1. Use `bind` method
  2. Use **Arrow function**

##### `bind` method

```javascript
this.eventHandler.bind(this, "hello", "pranav");
```

##### Arrow function (This is costly)

```javascript
onClick={() => this.eventHandler("hello", "pranav")}
```

- In large application where the component renders frequestly, this might create performance issue.

#### Adding two way communication between `class` and `functional` component

- **REQ:** We want to change the value of the name according to the inbox that is inside a functional component.

```js
// class Component
onInboxChangeHandler = event => {
    name = event.target.value
}
// pass following as an atribute to the component
// changed={this.onInboxChangeHandler}
// functional component
<input onChange={props.changed} value={props.name} />
```

## Working with list data

- Use `map` function.
- Always make a temp copy before operating on mutable state properties.
- Use key attribute when working with the lists. It gives dom clear idea to find which components need rerendering.

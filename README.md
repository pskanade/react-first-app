# This is my

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

## Deep dive in the Components: Stateful and Stateless

#### Stateful

- It extens `React.Component`
- It can access **State**
- It can have **Lifecycle Hooks** (_Handlers_)
- Use only if you need to manage State or access to lifecycle hooks.

#### Stateless

- In all other cases.

### Component Lifecycle - Creation

> Side effects - Requesting data from server

![Creation Lifecycle](/assets/img/Creation_life.png)

### Component Lifecycle - Update (tirggred by Parent)

![Update Lifecycle](/assets/img/Update_by_parent_life.png)

> componentWillUpdate - Update states here it is more appropriate

> shouldComponentUpdate - This function returns `True` or `False`. This decides if the compont gets re-rendered.

### `PureComponent`

This is another type of object which should be used when you know that the derived component will have state dependent updates in it. By extending this component, one no longer have to implement `componentShouldUpdate` method.

### Updating DOM

![Update DOM](/assets/img/Updaitng_dom.png)

## Higher order components

- Find the alongside commit

### Fragments

If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

It's actually not called Aux but you simply use <> - an empty JSX tag.

So the following code

```jsx
<Aux>
  <h1>First Element</h1>
  <h1>Second Element</h1>
</Aux>
```

becomes

```jsx
<>
  <h1>First Element</h1>
  <h1>Second Element</h1>
</>
```

Behind the scenes, it does the same our Aux component did.

#### Using Classes in higher order components

```jsx
const withHoc = Comp => {
  return class extends Components {
    render() {
      <div>
        <Comp {...props} />
      </div>;
    }
  };
};
```

## `setState` using previous state

- `setState` gets executed async. So, there is always possibilility of overriding the previous state from some where else. use following to refelect the correct results.

```js
this.setState((prevState, props) => {
  return {
    show: !this.state.show,
    toggleClicked: prevState.toggleClicked + 1
  };
});
```

## Validating props type

> npm install --save prop-types

[Guide](https://reactjs.org/docs/typechecking-with-proptypes.html)
[Notes](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8302820?start=0)

## Adding references for FOCUS

> Check the alongside commit for code.

## Context API

- User `.Consumer` and `.Provider` methods on the global context to pass and use their values.
- `React.createContext` can be called to create a component.

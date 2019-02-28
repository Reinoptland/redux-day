React

## Lifecycle methods
render() // display 'current' content
componentDidMount() 
// There are more 

every setState() triggers a render()
when you pass new props to a component it triggers a render()

## Seperation of concerns 
Container / Component
Presentational Component
import / export 
MVC (Model, View, Controller)
MVP (Model, View, Presenter)

// more to come!

## Routing
React Router (library)

movies/:id (route parameter)
Link
encodeUricomponent?? --> investigate
SPA, Single Page Application

## Componentization of our userinterface

### State & Props

#### Props
Are passed from a parent to a child component
Read-only

PropTypes -> typechecking for props 

default props 
props.children ..? --> investigate

#### State 
Store the current data, 
Can be updated

this.setState()

## Tooling

React Devtools -> inspect virtual DOM
create-react-app -> create 'boilerplate' for a react
httpie 
babel
npm (run) start (react script)


## Libraries often used:
superagent
React Router
Redux


## Syntax (ES6)

JSX <h1> Hallo </h1> -> React.createElement()
Spread operator
Destructuring 
Arrow functions
mapping over data and returning components (that works? yes)


## React under the hood
Virtual DOM 
-> no direct DOM manipulation allowed (document.getElementById)
-> Comparing the VDOM to the real DOM (performance!)

JSX <h1> Hallo </h1> -> React.createElement()


## Gotcha's
Use arrow function when writing callbacks (that you pass down to children)
this
bind 






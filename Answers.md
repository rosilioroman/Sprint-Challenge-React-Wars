# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a UI component library created by the engineers at Facebook. React tries to solve the issues of managing complex state (especially in large applications). 

1.  What does it mean to _think_ in react?

_Thinking_ in react involves visualizing a User Interface as the sum of its components (basically). To _think_ in react, one would look at UI design and break it down into smaller and smaller components, following what they call the 'single-responsibility principle'. This means that a UI component should really only do one thing, and if it does more than that, one should look at breaking it down into smaller components. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component (in React) is a component that has the ability to store/manage/pass down state. A Functional/Presentational component then is the component that actually renders that data to the UI. Only Class/Stateful components have the ability to create a state object. Class/Stateful components also extend the base React.Component class, which gives them access to several other methods (called Lifecycle Methods) that help manage state throughout the lifecycle of the component. A Functional/Presentational component is simply a JavaScript function that returns JSX elements that React then can render to the UI.

1.  Describe state.

_State_ is a JavaScript object that represents the data pertinent to the application. This object can be changed/modified by a component to reflect changes in data.

1.  Describe props.

_Props_ are data that is passed down to a component (by its parent component) that cannot be changed/modified by the component. A component is simply responsible of either passing down its props to a child component or using its props to render data on the UI.

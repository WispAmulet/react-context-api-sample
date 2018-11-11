import React, { Component } from 'react';

// 1. Create a context
const MyContext = React.createContext();

// 2. Create a provider Component
class MyProvider extends Component {
  state = {
    name: 'yly',
    age: 20
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOld: () => {
          this.setState({ age: this.state.age + 1 })
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class Person extends Component {
  render() {
    return (
      <div className="person">
        {/* 4. Use context in the comsumer */}
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOld}>Click me!</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class Family extends Component {
  render() {
    return (
      <div className="family">
        <Person />
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      // 3. Wrap the whole things
      <MyProvider>
        <p>Hello world!</p>
        <Family />
      </MyProvider>
    );
  }
}

export default App;

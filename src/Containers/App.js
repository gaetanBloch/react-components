import React, { Component } from 'react';

import styles from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Gaëtan', age: 31},
      {id: 2, name: 'Patrick', age: 30},
      {id: 3, name: 'Sandra', age: 32}
    ],
    showPersons: false,
    showCockpit: true
  };

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log({props, state});
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate');
    console.log({nextProps, nextState, nextContext});
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    console.log({prevProps, prevState, snapshot});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  render() {
    console.log('[App.js] render')

    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} />
    }

    return (
      <WithClass classes={styles.App}>
        <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>

        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} /> : null
        }
        {persons}
      </WithClass>
    );
  }
}

export default App;

import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Gaëtan', age: 31},
      {id: 2, name: 'Patrick', age: 30},
      {id: 3, name: 'Sandra', age: 32}
    ],
    showPersons: false
  };

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
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} />
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;

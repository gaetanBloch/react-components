import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate');
    console.log({nextProps, nextState, nextContext});
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    console.log({prevProps, prevState});
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log({prevProps, prevState, snapshot});
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] render');

    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={() => this.props.clicked(index)}
        nameChanged={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;

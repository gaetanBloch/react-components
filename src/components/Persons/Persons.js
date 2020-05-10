import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

  // Don't need to check if all props changed because we use PureComponent

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   console.log({nextProps, nextState, nextContext});
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

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
        isAuth={this.props.isAuthenticated}
        click={() => this.props.clicked(index)}
        nameChanged={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;

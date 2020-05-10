import React, { Component } from 'react';

import styles from './Person.module.css'
import WithClass from '../../../hoc/WithClass';
// import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {

  render() {
    console.log('[Person.js] render');

    const pStyle = {
      cursor: 'pointer'
    };

    return (
      // <div className={styles.Person}>
      // <React.Fragment>
      // <Auxiliary>
      <WithClass classes={styles.Person}>
        <p onClick={this.props.click} style={pStyle}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input type="text" onChange={this.props.nameChanged} defaultValue={this.props.name} />
      </WithClass>
      // </Auxiliary>
      //</React.Fragment>
      // </div>
    )
  }
}

export default Person;

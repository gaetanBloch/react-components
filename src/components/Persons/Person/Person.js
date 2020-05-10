import React, { Component } from 'react';

import styles from './Person.module.css'
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {

  render() {
    console.log('[Person.js] render');

    const pStyle = {
      cursor: 'pointer'
    };

    return (
      // <div className={styles.Person}>
      // <React.Fragment>
      // <WithClass classes={styles.Person}>
      <Auxiliary>
        <p onClick={this.props.click} style={pStyle}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input type="text" onChange={this.props.nameChanged} defaultValue={this.props.name} />
      </Auxiliary>
      // </WithClass>
      //</React.Fragment>
      // </div>
    )
  }
}

export default withClass(Person, styles.Person);

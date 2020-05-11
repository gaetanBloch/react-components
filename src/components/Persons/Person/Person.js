import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './Person.module.css'
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import AuthContext from'../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('Authenticated: ' + this.context.authenticated)
  }

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
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
        <p onClick={this.props.click} style={pStyle}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          type="text"
          // ref={(inputEl) => this.inputElement = inputEl}
          ref={this.inputElementRef}
          onChange={this.props.nameChanged}
          value={this.props.name} />
      </Auxiliary>
      // </WithClass>
      // </React.Fragment>
      // </div>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  nameChanged: PropTypes.func
};

export default withClass(Person, styles.Person);

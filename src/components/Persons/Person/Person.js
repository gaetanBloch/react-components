import React, { Component } from 'react';

class Person extends Component {

  render() {
    console.log('[Person.js] render');

    const pStyle = {
      cursor: 'pointer'
    };

    return [
      // <div className={styles.Person}>
      <p key="1" onClick={this.props.click} style={pStyle}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>,
      <input
        key="2"
        type="text"
        onChange={this.props.nameChanged}
        defaultValue={this.props.name} />
      // </div>
    ]
  }
}

export default Person;

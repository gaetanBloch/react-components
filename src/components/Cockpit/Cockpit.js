import React from 'react';

import styles from './Cockpit.module.css'

const Cockpit = (props) => {
  const classes = [];
  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.red;
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Show Persons
      </button>
    </div>
  );
};

export default Cockpit;

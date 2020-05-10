import React, { useEffect } from 'react';

import styles from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect');

    // Faking Http request
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000)

    return () => {
      console.log('[Cockpit.js] cleanup work in 1st useEffect');
    }

    // Execute it when props.personLength is updated
  // }, [props.personsLength]);

    // Execute it only once
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

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

import React, { useEffect, useRef } from 'react';

import styles from './Cockpit.module.css'

const Cockpit = props => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect');

    toggleButtonRef.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup work in 1st useEffect');
    }

    // Execute it when props.personLength is updated
    // }, [props.personsLength]);

    // Execute it only once when the component renders the first time
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
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Show Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);

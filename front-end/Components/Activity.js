import React, { useState, useEffect, useRef } from 'react';
import styles from "../styles/advisor.module.css";


function Activity(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.courseForm}>
        <>
          <input
            placeholder=''
            value={input}
            onChange={handleChange}
            name={styles.text}
            className={styles.courseInput}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className={styles.courseButton}>
            Add Extra Curricular Activity
          </button>
        </>
      
    </form>

    
    
  );
}

export default Activity;
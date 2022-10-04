import React from 'react'
import styles from '../styles/Map.module.css'

const Season = ({color, label}) => {
  return (
    <h5 className={styles.season } style={{backgroundColor: color}}>
        {label}
    </h5>
  )
}

export default Season
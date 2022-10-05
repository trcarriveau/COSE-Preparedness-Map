import React from 'react'
import Year from './Year'
import Colors from './Colors'
import styles from '../styles/Map.module.css'
//TODO: update years to have a years object parameter that replaces the array with values from DB
const years = [
  {
    color: Colors.primaryLightest,
    yearNumber: '1', 
    studentClass: 'Freshman',
  },

  {
    color: Colors.primaryLight,
    yearNumber:'2', 
    studentClass:'Sophomore',
  },
  {
    color: Colors.primaryMain,
    yearNumber:'3', 
    studentClass:'Junior',
  },
  {
    color: Colors.primaryDark,
    yearNumber:'4', 
    studentClass:'Senior',
  },
]



const Years = ( ) => {
  return (
    <div className={styles.years}>
        {years.map((year) => 
        (
            <>
              <Year
                color={year.color}
                yearNumber={year.yearNumber}
                studentClass={year.studentClass}
              />
            </>
        ))}
    </div>
  )
}

export default Years
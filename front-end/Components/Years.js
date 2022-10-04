import React from 'react'
import Year from './Year'
import Colors from './Colors'
import styles from '../styles/Map.module.css'
//TODO: update years to have a years object parameter that replaces the array with values from DB
const years = [
  {
    color: Colors.gray1,
    yearNumber: '1', 
    studentClass: 'Freshman',
  },

  {
    color: Colors.gray2,
    yearNumber:'2', 
    studentClass:'Sophomore',
  },
  {
    color: Colors.gray3,
    yearNumber:'3', 
    studentClass:'Junior',
  },
  {
    color: Colors.gray4,
    yearNumber:'4', 
    studentClass:'Senior',
  },
]



const Years = ( ) => {
  return (
    <div className={styles.years}>
        {years.map((year) => 
          (<>
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
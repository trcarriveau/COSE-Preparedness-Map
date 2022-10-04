import React, { useEffect } from 'react'
import styles from '../styles/Map.module.css'
import Season from './Season'
import Colors from './Colors'

const Seasons = ({ total_years } ) => {
 
  let seasons= []; 
  let i = 1; 
  while (i <= total_years) {
      let color = 'Colors.gray'+i
        seasons.push(
          {
              id: i, 
              label: 'Fall  ',
              color: {color},
          }
      )
      seasons.push (
          {
              id: i*10, 
              label: 'Spring',
              color: color,
          }
      )
      i++;
      console.log("i is: ", i, "total years is: ", total_years,)
  }
  console.log(seasons)
  return (
    <div className={styles.seasons}>
        {seasons.map((season) =>
        (
            <>
                <Season
                   key = {season.id}
                   label = {season.label}
                   color = {season.color.color}
                />
            </>
        ))}
        
    </div>
  )
}

export default Seasons
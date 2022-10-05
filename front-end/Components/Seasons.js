import React, { useEffect } from 'react'
import styles from '../styles/Map.module.css'
import Season from './Season'
import Colors from './Colors'

const Seasons = ({ total_years } ) => {
 
    let fall = '';
    let spring = '';
    let seasons= [];
    let i = 1;
    while (i <= total_years) {
    if (i%4 == 1) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryLightest}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryLightest}
    } else if (i%4 == 2) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryLight}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryLight}
    } else if (i%4 == 3) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryMain}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryMain}
    } else if (i%4 == 0) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryDark}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryDark}
    } else {
        console.log("not sure how you got here....")
    }
    seasons.push(fall)
    seasons.push(spring)
        i++;
    }


  return (
    <div className={styles.seasonsContainer}>
       <div className={styles.seasons}>
            {seasons.map((season) =>
            
            (
                <>
                    <Season
                    key = {season.id}
                    label = {season.label}
                    color = {season.color}
                    />
                </>
            ))}
            
        </div>
    </div>
  )
}

export default Seasons
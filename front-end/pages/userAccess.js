import styles from "../styles/userAccess.module.css"
import User from "../components/User";
import Users from "../components/Users";
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {MdArrowForwardIos} from "react-icons/md"
import { icons } from "react-icons/lib";

export default function userAccess() {

    return (
        <div className = {styles.container}>
            <div className={styles.usercontainer}>
                <h3> Users</h3>
                
                <Users/>

            </div>
            <div className={styles.arrow}><MdOutlineArrowBackIosNew/> <MdArrowForwardIos/> </div>
            <div className={styles.usercontainer}>   
            <h3> Admin</h3>
            <Users/>
            </div>
     
        </div>
        
    );

}
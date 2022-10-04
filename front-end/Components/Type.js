import React from 'react'

//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'
import {GrGroup} from 'react-icons/gr'
import {GiArchiveResearch} from 'react-icons/gi' 
import {GiCube} from 'react-icons/gi'
import {BsTriangleFill} from 'react-icons/bs'
import TypesKey from './TypesKey'

const Type = ({ type }) => {
    let Icon = type.type_icon
    console.log("icon is: ",type.type_icon)
    return (
    <div>
        
        <GrGroup></GrGroup>
        {type.type_name}
        
        <h3>
            <type.type_icon/>
            {type.type_map}
            <Icon/>

        </h3>
    </div>
  )
}

export default Type
import Colors from "./Colors"
import PropTypes from 'prop-types'
import React from "react"

const Button = React.forwardRef(({color, text, alga_var, onClick, href }, ref) => {
// const Button = ({ color, text, onClick }) => {
  return (
    <>
    {/* <a href={href} ref={ref} > */}
            <button style={{
                backgroundColor: color,
                width: '100%',
                padding: '1rem 2rem',
                // fontWeight: 'bold',
                fontSize: '1.1rem',
                color: 'white',
                borderStyle: 'solid',
                borderColor: 'black', 
                borderRadius: '10px',
                borderWidth: 'thin',
                outline: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                
                }} 
                onClick={onClick} 
                href={href}
                ref={ref}
            >
                
                {text}                   
                {alga_var}
            </button>
        {/* </a>  */}
    </>
  )
})

Button.defaultProps = {
    color: Colors.button
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
import React from "react"

const CustomButton = (props) => {
    return (
      <button style={{
                backgroundColor: '#4B3869',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                cursor: 'pointer',
                marginBottom: '10px',
                padding: '10px',
                width: '50vw'
           }} onClick={props.action}>{props.title}</button>
    )
}

export default CustomButton
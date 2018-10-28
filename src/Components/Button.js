import React from 'react';

const Button = (props) => {
    if(props.toggle===props.index)
    {
        return (
            <button 
              onClick={props.toggleButton}
              style={styles.returnButtonStyle}
            >Return
            </button> 
        )
    }
    else 
    {
        return (
            <button  
              onClick={props.toggleButton1}
              style={styles.buttonStyle}>
              Reserve
            </button>
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#337ab7',
        borderColor: '#2e6da4',
        color: 'white',
        marginLeft: 24,
        width: 80,
        height: 30,
        fontSize: 14,
        fontWeight: 'bold'
       },
       returnButtonStyle: {
        backgroundColor: '#d9534f',
        borderColor: '#2e6da4',
        color: 'white',
        marginLeft: 24,
        width: 80,
        height: 30,
        fontSize: 14,
        fontWeight: 'bold'
      
       }
}

export default Button;
import React from 'react'

const styles = {
    text: {

    },
    outlined: {

    },
    contained: {

    }
}

function Buttons() {
    return (
        <>
            <div >
                <button style={styles.text}>Text</button>
                <button className='outlined'>Contained</button>
                <button className='contained'>Outlined</button>
            </div>
        </>
    )
}

export default Buttons
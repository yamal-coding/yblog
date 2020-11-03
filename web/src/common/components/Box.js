import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    box: {
        border: '2px black solid',
        marginTop: '5px',
        marginRight: '10px',
        marginLeft: '10px',
        padding: '5px',
        background: '#63C5DA',
        borderRadius: '5px'
    },
    '@media (min-width: 610px)': {
        box: {
            marginRight: 'auto',
            marginLeft: 'auto',
            width: '600px'
        }
    }
});

const Box = ({children}) => {
    const classes = useStyles();

    return <div className={classes.box}>
        {children}
    </div>;
}

export default Box;

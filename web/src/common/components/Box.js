import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    box: {
        border: '2px black solid',
        margin: '5px',
        padding: '5px',
        background: '#63C5DA'
    }
});

const Box = ({children}) => {
    const classes = useStyles();

    return <div className={classes.box}>
        {children}
    </div>;
}

export default Box;
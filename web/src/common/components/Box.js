import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = ({color}) => { 
    return createUseStyles({
        box: {
            border: '2px black solid',
            marginTop: '5px',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '5px',
            background: color,
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
};

const Box = ({children, boxColor}) => {
    const classes = useStyles({
        color: (boxColor) ? boxColor : '#63C5DA'
    })();

    return <div className={classes.box}>
        {children}
    </div>;
}

export default Box;

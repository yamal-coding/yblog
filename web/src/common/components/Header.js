import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    header: {
        textAlign: "center"
    },
    title: {
        margin: 0,
        padding: '20px'
    }
});

const Header = () => {
    const classes = useStyles()

    return <div className={classes.header}>
        <h1 className={classes.title}>YBLOG</h1>
    </div>
};

export default Header;

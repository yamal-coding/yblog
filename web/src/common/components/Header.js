import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    header: {
        textAlign: "center"
    }
});

const Header = () => {
    const classes = useStyles()

    return <div className={classes.header}>
        <h1>YBLOG</h1>
    </div>
};

export default Header;

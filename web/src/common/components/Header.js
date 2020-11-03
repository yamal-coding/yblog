import React from 'react';
import {createUseStyles} from 'react-jss'
import headerLogo from '../../assets/header_logo.png'

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: 0,
        padding: '20px'
    },
    logo: {
        width: '100px',
        height: '100px'
    },
    '@media (min-width: 610px)': {
        logo: {
            width: '150px',
            height: '150px'
        }
    }
});

const Header = () => {
    const classes = useStyles()

    return <div className={classes.header}>
        <img src={headerLogo} alt="logo" className={classes.logo}/>
        <h1 className={classes.title}>yBlog</h1>
    </div>
};

export default Header;

import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon, ...history }) => {

    const authContext = useContext(AuthContext);
    
    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }
    // Guest links page check code
    const pageCheck = () => {
            // console.log(history.history.location.pathname);
            if(history.history.location.pathname !== '/login') {
               return <li><Link to='/login'>Login</Link></li>
            } else {
               return  <li><Link to='/register'>Register</Link></li>
            }  
            // return() 
        };

    // Authentication Navbar links
    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fa fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );
    // Guest links code
    const guestsLinks = (
        <Fragment>
            {pageCheck()}
        </Fragment>
    );
    
    return (
        <div className="navbar bg-dark">
            <h1><i className={icon} />{title}</h1>
            <ul>
                {isAuthenticated ? authLinks : guestsLinks}
                {/* <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li> */}
            </ul>
        </div>
    )
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Movie List',
    // icon: 'fa fa-film',
};

export default  withRouter(Navbar);
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {

    // const contactContext = useContext(ContactContext);, useContext
    
    // const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, movie_title, release_date, genre, movie_rating, movie_duration, img_url } = contact;

    // const onDelete = () => {
    //     deleteContact(id);
    //     clearCurrent();
    // };

    return (
        <Fragment>
            <div className="card">
            <div>
                <img src={img_url} />
                <h3 className="text-light text-left">
                    {movie_title}{' '}
                    <span className="text-center"
                        // className={'badge ' + 
                        // (type === 'professional' ? 'badge-success' : 'badge-primary')}
                    > <i className="fas fa-heart" /> {movie_rating}
                        {/* {type.charAt(0).toUpperCase() + type.slice(1)} */}
                    </span>
                </h3>
                <ul className="list">
                    {genre && (
                        <li>
                            <span className="genre"><i className="fas fa-film"></i> <strong>{genre}</strong> </span>
                            <span style={{float: 'right'}}><i className="fas fa-clock"></i> <strong>{movie_duration}</strong> </span>
                        </li>
                    )}
                    {release_date && (
                        <li>
                            <p className="release_date"><i className="fas fa-calendar"></i> <strong>{release_date}</strong> </p>
                        </li>
                    )}
                    {movie_duration && (
                        <li>
                            
                        </li>
                    )}
                </ul>
                {/* <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}
                </div>
            </div>
        </Fragment>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
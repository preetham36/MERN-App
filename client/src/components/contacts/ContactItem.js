import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);
    
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, movie_title, release_date, genre, movie_rating, movie_duration } = contact;

    // const onDelete = () => {
    //     deleteContact(id);
    //     clearCurrent();
    // };

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {movie_title}{' '}
                <span style={{float: 'right'}} 
                    // className={'badge ' + 
                    // (type === 'professional' ? 'badge-success' : 'badge-primary')}
                > <i className="fa icon-heart" /> {movie_rating}
                    {/* {type.charAt(0).toUpperCase() + type.slice(1)} */}
                </span>
            </h3>
            <ul className="list">
                {genre && (
                    <li>
                        <i className="fas"></i> {genre}
                    </li>
                )}
                {release_date && (
                    <li>
                        <i className="fas "></i> {release_date}
                    </li>
                )}
                {movie_duration && (
                    <li>
                        <i className="fas"></i> {movie_duration}
                    </li>
                )}
            </ul>
            {/* <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}
        </div>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
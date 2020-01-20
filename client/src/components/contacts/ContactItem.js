import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactPop from "./ContactPop";
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    console.log("contact item", contact)
    // const { openModal } = ContactPop;

    // const contactContext = useContext(ContactContext);, useContext
    
    // const { deleteContact, setCurrent, clearCurrent } = contactContext; id,

    const {  movie_title, release_date, genre, movie_rating, movie_duration, img_url } = contact;

    // const onDelete = () => {
    //     deleteContact(id);
    //     clearCurrent();
    // };
    // const onModal = () => {
    //     openModal();
    // }

    return (
        <Fragment>
            <div className="card">
            <div>
                <div className="openModal-popUp">
                    <ContactPop movie={contact}  />
                </div>
                <img src={img_url} />
                <span className="text-center rating-icon"
                    // className={'badge ' + 
                    // (type === 'professional' ? 'badge-success' : 'badge-primary')}
                > <i className="fas fa-heart" /> {movie_rating}
                    {/* {type.charAt(0).toUpperCase() + type.slice(1)} */}
                </span>
                {/* <ContactPop trigger={<button className="button"> Open Modal </button>} modal></ContactPop> */}

                <div className="list-block">
                    <h3 className="text-light text-center">
                        {movie_title}{' '}
                    </h3>
                    <ul className="list">
                            <li>
                                {genre && ( <span className="genre"><i className="fas fa-film"></i> <strong>{genre}</strong> </span> )}
                                {release_date && ( <span className="movie_duration"><i className="fas fa-clock"></i> <strong>{movie_duration}</strong> </span>)}
                                {movie_duration && ( <span className="release_date"><i className="fas fa-calendar"></i> <strong>{release_date}</strong> </span>)}
                            </li>
                        {/* )}
                         {release_date && (
                            <li>
                                <span className="release_date"><i className="fas fa-calendar"></i> <strong>{release_date}</strong> </span>
                            </li>
                        )}
                        {movie_duration && (
                            <li>
                                
                            </li>
                        )} */}
                    </ul>
                </div>
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
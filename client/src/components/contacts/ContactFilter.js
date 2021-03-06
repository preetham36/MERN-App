import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactFilter = () => {
    
    const contactContext = useContext(ContactContext);
    const text = useRef('');
    const { filterContacts, clearFilter, filtered } = contactContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if(text.current.value !== ''){
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
        
    };
    
    return (
        <form>
            <h2 className="text-light">Search Movie</h2>
            <div className="input-container">
                <div className="input-icon fas fa-search"></div>
                <input ref={text} type="text" placeholder="Search..." onChange={onChange} className="search_movie" />
            </div>
        </form>
    )
}
export default ContactFilter;
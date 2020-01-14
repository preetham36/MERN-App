import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, current, clearCurrent } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => 
    setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        
        if(current === null){
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
        
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    };
    
    const clearAll = () => {
        clearCurrent();
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit' : 'Add Contact'}</h2>
            <input type='text' placeholder='Movie Name' name='name' value={name} onChange={onChange} />
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
            <input type='phone' placeholder='Phone' name='phone' value={phone} onChange={onChange} />
            <h5>Contact Type </h5>


            <input type='radio' id="personal" name='type' value='personal' checked={type === 'personal'} onChange={onChange} />
            <label htmlFor="personal">Personal{' '}</label>

            <input type='radio' id="professional" name='type' value='professional' checked={type === 'professional'} onChange={onChange} />
            <label htmlFor="professional">Professional</label>
            <div>
                <input type='submit' value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block' /> 
            </div>
            {current && 
                <div>
                    <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>
            }
        </form>
    )
}

export default ContactForm;
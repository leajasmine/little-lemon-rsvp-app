import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    return (
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>

                        <fieldset className='formField'>
                            {/* BOOKING DATE */}
                            <div>
                                <label htmlFor='book-date'>Choose Date:</label>
                                <input id='book-date' type='date' value={date} onChange={(e) => handleChange(e.target.value)} name='book-date' required />
                            </div>
                            {/* TIME SELECTION */}
                            <div>
                                <label htmlFor='book-time'>Choose Time:</label>
                                <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                    <option value="">Select a Time</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="17:30">5:30 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="18:30">6:30 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="19:30">7:30 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="20:30">8:30 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                    <option value="21:30">9:30 PM</option>
                                    <option value="22:00">10:00 PM</option>
                                    <option value="22:30">10:30 PM</option>
                                    <option value="23:00">11:00 PM</option>

                                </select>
                            </div>
                            {/* GUEST SELECTION */}
                            <div>
                                <label htmlFor='book-guests'>Number of Guests:</label>
                                <input id='book-guests' type='number' value={guests} onChange={(e) => setGuest(e.target.value)} name='book-guests' min='1' required />
                            </div>

                            {/* OCCASION SELECTION */}
                            <div>
                                <label htmlFor='book-occasion'>Occasion:</label>
                                <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                    <option value="">Select an Occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="graduation">Graduation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div>
                                <input aria-label='On Click' type='submit' value='Reserve Table' onClick={(e) => handleSubmit(e)} />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
};

export default BookingForm;
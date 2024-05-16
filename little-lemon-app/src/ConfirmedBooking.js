import React from 'react';
import BookingForm from './BookingForm';

const ConfirmedBooking = (props) => {
    return (
        <div className='confirm'>
            <h2>Thank you for your reservation!</h2>
            <p>Your reservation is confirmed.</p>
            <p>We look forward to seeing you!</p>
        </div>
    );
};

export default ConfirmedBooking;
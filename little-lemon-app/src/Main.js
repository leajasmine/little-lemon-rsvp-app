import React, { useReducer } from 'react';
import { Route, Routes, Router, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';



const Main = () => {
    const seedRandom = function(seed) {
        const m = Math.pow(2, 35) - 31;
        const a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        }
    }

    const fetchAPI = function(date){
            let result = [];
            let random = seedRandom(date.getDate());
            for (let i = 17; i < 23; i++){
                if(random() > 0.5){
                    result.push({id: i, time: `${i}:00`});
                }
                if(random() > 0.5){
                    result.push(i + ':30');
                }
        }
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = React.useReducer(updateTimes, initialState);

        function updateTimes(state, date) {
            return {availableTimes: fetchAPI(new Date())};
        }

            const navigate = useNavigate();
            function submitForm (formData){
                if(submitAPI(formData)){
                    navigate('/confirmed')
                }
            };


    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );

};

export default Main;

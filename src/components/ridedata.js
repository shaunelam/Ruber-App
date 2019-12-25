import React from 'react';
import { number } from 'prop-types';

const RideData = ({grabLength, pastRideData, randMiles}) => {

    // Rides and average ride length should be passed in as props
    
    return (
        <div id='datalist-data'>
            <h6>Rides this month: {grabLength(pastRideData)}</h6>
            <h6>Average ride length: {randMiles(1,100)} miles</h6>
        </div>
        
    );
}

RideData.propTypes = {
    monthlyRides: number,
    averageRideLength: number
};

export default RideData;
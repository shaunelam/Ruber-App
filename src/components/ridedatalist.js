import React from 'react';
import RideData from './ridedata';
import { array, number, func } from 'prop-types';
import historyIcon from '../images/History.png';

const RideDataList = ({pastRideData, deleteUser, grablength, onRideEditButton}) => {

    const grabLength = data =>(data.length)

    function randMiles(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    return (
        <div>
            <div id='datalist-title-content'>
                <img id='datalist-img' src={historyIcon} alt='History Icon' />
                <h1 id='datalist-title'>Past Rides</h1>
            </div>
            <div id='datalist-content'>

                {/* don't hardcode the ride data here. instead, map through
                the pastRideData prop. */}
            {pastRideData.length > 0 ? (
                pastRideData.map(ride => ( // You can just use the Map function
                <div className='container datalist-containe' key = {ride.id}>
                    <div className='row' >
                        <div className='col-md-4 datalist-content'>{`${ride.firstname} ${ride.lastname}`}</div>
                        <div className='col-md-4 datalist-content'>{ride.pickup}</div>
                     
                        <div className='col-md-4 datalist-content'><button
                            onClick={() => {deleteUser(ride.id)}} // or Index
                            className='btn btn-danger btn-sm delete-button pull-right'> x </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 datalist-content'>{ride.date}</div>
                        <div className='col-md-4 datalist-content'>{ride.dropoff}</div>
                        
                        <div className='col-md-4 datalist-content'><button
                            className='btn btn-info btn-sm update-button pull-right'
                            onClick={() => {onRideEditButton(ride.id, ride)}}>&#x21bb; </button>
                        </div>
                    </div>
                </div>
               ))) : (
                <div>
                    <div>No users</div>
                </div>
               
               )}
            </div>

            <RideData 
            grabLength={grabLength} 
            pastRideData={pastRideData} 
            randMiles={randMiles} />
        </div>
    );


};

RideDataList.propTypes = {
    pastRideData: array,
    onRideDeleteButton: func,
    onRideEditButton: func,
    monthlyRides: number,
    averageRideLength: number
};

export default RideDataList;
import React, { useState } from 'react';
import './App.css';
import BookRideForm from './components/bookrideform';
import RideDataList from './components/ridedatalist';
import Header from './components/header';
import BookRideEditForm from './components/bookrideeditform';

const App = () => {

  // Other state variables that may be useful:
  // pastRideData
  // editRideData
  // monthlyRides
  // averageRideLength
  // isRideEditing

  // 1. Create and initialize state variables.
  // 2. Create four new methods to handle add ride, delete ride, edit
  //    ride and update ride.
  // 3. Pass appropriate props to child components. Each component has
  //    PropTypes indicating the props that it needs.
  // const initialState = {
  //   isRideEditing: false,
  // }

  // const [state, setState] = useState(initialState);

  const [isRideEditing, setIsRideEditing] = useState(false)
  const [pastRideData, setPastRideData] = useState([])
  const [editRideData, setEditRideData] = useState({})
  const [editRideId, setEditRideId] = useState()

  const addRide = ride => {
    ride.id = pastRideData.length + 1;
    setPastRideData([...pastRideData, ride]);
  };

  const deleteUser = id => {
	  setIsRideEditing(false);
    setPastRideData(pastRideData.filter(ride => ride.id !== id));
  };

  const updateRide = ride => {
    let newRideData = pastRideData.filter(ride => ride.id !== editRideId)
    setPastRideData([...newRideData, ride])
    setIsRideEditing(false)
  };

  const onRideEditButton = (id, ride) => {
    setIsRideEditing(true)
    setEditRideData(ride)
    setEditRideId(id)
  };


  const rideHistoryPage = () => {
    return (
      <div className='row'>
        <div className='col-md-6'>
          {isRideEditing
            ? <BookRideEditForm editRideData={editRideData} updateRide={updateRide} />
            : <BookRideForm addRide={addRide} />
          }
        </div>
        <div className='col-md-6'>
          <RideDataList 
          onRideEditButton = {onRideEditButton}
          pastRideData={pastRideData} 
          deleteUser={deleteUser}

          />
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <Header />
      {
        rideHistoryPage()
      }
    </div>
  );
}


export default App;

import React, {useState, useEffect} from 'react';
import { func, object } from 'prop-types';
import editCarIcon from '../images/edit-ride.png';

const BookRideEditForm = (props) => {

    // 1. Create and initialize state variable for form data.
    // 2. Set state form variables to props variables. useState
    //    will help with this.
    // 3. Implement two-way binding on form inputs.
    // 4. Implement an onSubmit function for the form to call
    //    an updateRide function passed in as a prop. Then clear
    //    the form.

    const initialState = {
      id: null,
      firstname:'',
      lastname:'',
      pickup:'',
      dropoff:'',
    date: new Date().toLocaleDateString()
    }
    const [ ride, setRide ] = useState(initialState)
    useEffect(() => {
        setRide(
            {   
                firstname: props.editRideData.firstname,
                lastname: props.editRideData.lastname,
                pickup: props.editRideData.pickup,
                dropoff: props.editRideData.dropoff,
                date: new Date().toLocaleString()
            }
        )
    }, [props.editRideData])

    const onChange = event => {
        setRide({
            ...ride, [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        props.updateRide(ride);
        setRide(initialState);
    }
    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={editCarIcon} alt='Car Icon' />
                <h1 id='form-title'>Edit Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content'
                onSubmit={onSubmit} >
                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input onChange={onChange} value={ride.firstname} type='text' className='form-control' id='first-name' name='firstname' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input onChange={onChange} value={ride.lastname} type='text' className='form-control' id='last-name' name='lastname' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input onChange={onChange} value={ride.pickup} type='text' className='form-control' id='pick-up' name='pickup' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input onChange={onChange} value={ride.dropoff} type='text' className='form-control' id='drop-off' name='dropoff' required />
                    </div>
                    <button type='submit' className='btn btn-warning submit-button'>Update</button>
                </form>
            </div>
        </div>
    );
}

BookRideEditForm
    .propTypes = {
        updateRide: func,
        editRideData: object
    };

export default BookRideEditForm;
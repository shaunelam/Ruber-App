import React, {useState} from 'react';
import carIcon from '../images/car-icon.png';

const BookRideForm = props => {
    const initialState = {
        id: null,
        firstname:'', 
        lastname:'', 
        pickup:'',
        dropoff:'', 
        date: new Date().toLocaleDateString()
    }
    
    const [ ride, setRide ] = useState(initialState)

    const handleInputChange = event => {
		const { name, value } = event.target

		setRide({ ...ride, [name]: value })
	}

    // 1. Create and initialize state variable for form data.
    // 2. Implement two-way binding on form inputs.
    // 3. Implement an onSubmit function for the form to call
    //    addRide function passed in as a prop. Then clear
    //    the form.

    return (
        <div>
            <div id='form-title-content'>
                <img id='form-img' src={carIcon} alt='Car Icon' />
                <h1 id='form-title'>Book Ride</h1>
            </div>
            <div id='form-content'>
                <form id='form-inner-content' 
                onSubmit={event => {
                    event.preventDefault()
    // Used to check inputField   // if (!ride.firstname || !ride.lastname || !ride.pickup || !ride.dropoff) 
                    // return
                    props.addRide(ride)
                    setRide(initialState)
                    }}
                >

                    <div className='form-group'>
                        <label htmlFor='first-name'>First Name</label>
                        <input name='firstname' value={ride.firstname} onChange={handleInputChange} placeholder="Enter your First Name" type='text' className='form-control input-form'  id='first-name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input value={ride.lastname} name='lastname' onChange={handleInputChange} placeholder="Enter your Last Name" type='text' className='form-control input-form' id='last-name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pick-up'>Pick Up</label>
                        <input value={ride.pickup} name='pickup' onChange={handleInputChange} placeholder="Enter your Pickup Location" type='text' className='form-control input-form' id='pick-up' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='drop-off'>Drop Off</label>
                        <input value={ride.dropoff} name='dropoff' onChange={handleInputChange} placeholder="Enter your Drop Off Location" type='text' className='form-control input-form' id='drop-off' required />
                    </div>
                    <button type='submit' className='btn btn-primary submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BookRideForm;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, slots, name } = treatment;
    const submit = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        console.log(date, slot, name, number, email);

        const booking = {
            treatmentId: _id,
            treatment:treatment.name,
            slot,
            name,
            number,
            patientEmail:email,
            date

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
               
                    toast('Successfully submit')
              
            })

        // to close modal 
        setTreatment(null)
    }
    return (
        // code for modal
        <div>
            <input type="checkbox" id="bookingModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="bookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-primary">{name}</h3>
                    <form onSubmit={submit}>
                        <input type="date" name='date' placeholder='date' class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Full Name" class="mt-4 input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' required value={user?.phoneNumber} placeholder="Phone Number" class="mt-4 input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} placeholder="Email" class="mt-4 input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class="mt-4 input bg-secondary 
                    text-white input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
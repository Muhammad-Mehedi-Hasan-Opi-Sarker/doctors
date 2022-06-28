import React from 'react';

const BookingModal = ({ treatment }) => {
    const { slots, name } = treatment;
    return (
        <div>
            <input type="checkbox" id="bookingModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="bookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-primary">{name}</h3>
                    <input type="date" name='date' class="input input-bordered w-full max-w-xs" />
                    <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=> <option>{slot}</option>)
                            }
                    </select>
                    <input type="text" name='name' placeholder="Full Name" class="mt-4 input input-bordered w-full max-w-xs" />
                    <input type="text" name='number' placeholder="Phone Number" class="mt-4 input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Email" class="mt-4 input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Submit' class="mt-4 input bg-secondary 
                    text-white input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
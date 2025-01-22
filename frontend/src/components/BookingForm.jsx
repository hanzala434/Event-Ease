import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleVendor, reset } from '../features/vendor/vendorSlice';
import { createBooking } from '../features/booking/bookingSlice';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: 'Morning',
    type: 'Wedding',
    city: '',
    additional: '',
  });

  const { name, phone, type, time, city, additional } = formData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleVendor(id));
  }, [dispatch, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBooking(formData));
    setFormData({
      name: '',
      phone: '',
      time: 'Morning',
      type: 'Wedding',
      city: '',
      additional: '',
    });

    navigate('/thank-u');
  };

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="flex p-4 justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={onSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-center text-2xl font-bold mb-4">Booking Form</h2>
          <div className="form-group mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="time" className="block mb-2">
              Event Time
            </label>
            <select
              id="time"
              name="time"
              value={time}
              onChange={onChange}
              className="w-full p-2 border rounded"
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="type" className="block mb-2">
              Event Type
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={onChange}
              className="w-full p-2 border rounded"
            >
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Coorporate">Coorporate</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label className="block mb-2">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="form-group mb-4">
            <label className="block mb-2">Additional Info</label>
            <input
              type="text"
              name="additional"
              value={additional}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="form-group">
            <button
              className="w-full bg-red-950 text-white border-2 py-2 rounded hover:bg-slate-50 hover:text-black"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookingForm;

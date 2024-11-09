import axios from "axios";

const API_URL='http://localhost:8000/api/booking/'

//create new booking
const createBooking = async (bookingData,id,token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    console.log("Vendor Data:", bookingData); // Check the payload
  
    try {
      const response = await axios.post(API_URL+id, bookingData, config);
      return response.data;
    } catch (error) {
      console.error("Error creating vendor:", error.response.data); // Log the error response
      throw error; // re-throw the error for further handling
    }
  };

//get booking
const getBooking = async (id,token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
 
  const response = await axios.get(API_URL+id,config);
      return response.data;
}

// //get Single Vendor
// const getSingleVendor = async (id) => {
//   const response = await axios.get(`${API_URL}${id}`); 
//   return response.data;
// };


  
const bookingService={
    createBooking,
    getBooking,

}

export default bookingService
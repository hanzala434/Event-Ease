import axios from "axios";

const API_URL='http://localhost:8000/api/vendors/'

//create new Vendor
const createVendor = async (vendorData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    console.log("Vendor Data:", vendorData); // Check the payload
  
    try {
      const response = await axios.post(API_URL, vendorData, config);
      return response.data;
    } catch (error) {
      console.error("Error creating vendor:", error.response.data); // Log the error response
      throw error; // re-throw the error for further handling
    }
  };

//get Vendor
const getVendor = async () => {
 
  const response = await axios.get(API_URL);
      return response.data;
}

//get Single Vendor
const getSingleVendor = async (id) => {
  const response = await axios.get(`${API_URL}${id}`); 
  return response.data;
};


  
const vendorService={
    createVendor,
    getVendor,
    getSingleVendor

}

export default vendorService
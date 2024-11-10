import axios from "axios";

const API_URL='https://event-ease-1nik.vercel.app/api/services/'

//create new Services
const createServices = async (serviceData,id,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    
  
    console.log("Service Data:", serviceData); 
    console.log(id);

    if (!id) {
      throw new Error('Vendor ID is required');
    }
  
    try {
      const response = await axios.post(`${API_URL}${id}`, serviceData,config);
      return response.data;
    } catch (error) {
      console.error("Error creating vendor:", error.response.data); // Log the error response
      throw error; // re-throw the error for further handling
    }
  };

//get Services
const getServices = async (vendorId) => {
 
  const response = await axios.get(`${API_URL}${vendorId}`); // Use vendor ID in the URL
      return response.data;
}

//get Single Services
const getSingleServices = async (vendorId,serviceId) => {
 console.log(vendorId);
 console.log(serviceId);


  const response = await axios.get(`${API_URL}${vendorId}/${serviceId}`); // Use vendor ID in the URL
      return response.data;
      
}



  
const serviceService={
    createServices,
    getServices,
    getSingleServices

}

export default serviceService
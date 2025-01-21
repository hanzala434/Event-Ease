import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND}/api/packages/`;

//create new packages
const createPackages = async (packagesData,id) => {
    
  
    console.log("Packages Data:", packagesData); 
    console.log(id);

    if (!id) {
      throw new Error('Vendor ID is required');
    }
  
    try {
      const response = await axios.post(`${API_URL}${id}`, packagesData);
      return response.data;
    } catch (error) {
      console.error("Error creating vendor:", error.response.data); // Log the error response
      throw error; // re-throw the error for further handling
    }
  };

//get packages
const getPackages = async (id) => {
 
  const response = await axios.get(`${API_URL}${id}`); // Use vendor ID in the URL
      return response.data;
}


//get Single package
const getSinglePackages = async (id) => {
 
  const response = await axios.get(`${API_URL}/package/${id}`); // Use vendor ID in the URL
      return response.data;
}


//get packages
const getAllPackages = async () => {
 
    const response = await axios.get(`${API_URL}`); // Use vendor ID in the URL
        return response.data;
  }
  


  
const packagesService={
    createPackages,
    getAllPackages,
    getPackages,
    getSinglePackages
 

}

export default packagesService
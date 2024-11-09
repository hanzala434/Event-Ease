import axios from "axios";

const API_URL='http://localhost:8000/api/setup-budget/'

//create new budget
const createBudget = async (budgetData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    console.log("Budget Data:", budgetData); // Check the payload
  
    try {
      const response = await axios.post(API_URL, budgetData, config);
      return response.data;
    } catch (error) {
      console.error("Error creating budget:", error.response.data); // Log the error response
      throw error; // re-throw the error for further handling
    }
  };

//get budget
const getBudget = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + ':id', config);
      return response.data;
}

//delete user budget
const deleteBudget = async (id,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + id, config);
      return response.data;
}

  
const budgetService={
    createBudget,
    getBudget,
    deleteBudget,
}

export default budgetService
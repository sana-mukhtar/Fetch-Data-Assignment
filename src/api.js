import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

// fetching data from Api
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

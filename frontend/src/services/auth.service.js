import axios from "axios";

const basePath = "http://localhost:5000";

const authService = {
    login: async (username, password) => {
        try {
            const url = `${basePath}/auth/login`;
            const params = {
                username: username,
                password: password,
            };
    
            const response = await axios.post(url, params);
            
            if (response.status === 200) {
              const user = response.data;
              return { success: true, data: user };
            } else {
              return { success: false, error: "Login failed" };
            }
        } catch (error) {
          return { success: false, error: "Error during login" };
        }
    },

}

export default authService;
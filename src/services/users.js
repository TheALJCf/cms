import { API_URL } from "./constant";

export async function login(username, password) {
    let errorMsg = '';
    let data = {};
    try {
        const response = await fetch(`${API_URL}login.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        data = await response.json();

        if (data.success) {
            alert("Login successful");
        } else {
            errorMsg = data.message;
        }
        return { data, errorMsg }
    } catch (error) {
        errorMsg = "Something went wrong. Please try again.";
        return { data, errorMsg }
    }
    
}

export async function register(name, username, password, email) {
    let errorMsg = '';
    let data = {};
    try {
        const response = await fetch(`${API_URL}register.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, username, password, email }),
        });
        data = await response.json();

        if (data.success) {
            alert("Login successful");
        } else {
            errorMsg = data.message;
        }
        return { data, errorMsg }
    } catch (error) {
        errorMsg = "Something went wrong. Please try again.";
        return { data, errorMsg }
    }
    
}
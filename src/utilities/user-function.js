import axios from 'axios';

export const signUp = async (formData) => {

        let serverResponse = await axios({
            method: "POST",
            url: "/users/signup", // route to do signup
            data: formData
        });
    return serverResponse;
}
export const logIn = async (formData) => {

        let serverResponse = await axios({
            method: "PUT",
            url: "/users/login", // route to do signup
            data: formData
        });
    return serverResponse;
}
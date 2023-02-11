import React from "react";
import axios from 'axios'

export const loginUser = async (values) => {
    const response = await axios.post(`/api/user`, values);
    console.log(response.data);
}
import { SERVER_URL } from "@/shared/constants";
import axios from "axios";
import axiosInstance from "../helpers/axiosInterceptor";

export const loginAndGetToken = async (formData) => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/admin/auth`, formData);
    localStorage.setItem("token", data.token);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOrders = async () => {
  try {
    const { data } = await axiosInstance.get(`${SERVER_URL}/orders`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

export const getOrderById = async (_id) => {
  try {
    const { data } = await axiosInstance.get(`${SERVER_URL}/orders?_id=${_id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

export const createCategory = async (formData) => {
  try {
    await axiosInstance.post(`${SERVER_URL}/categories`, formData);
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

export const updateCategory = async (_id, formData) => {
  try {
    await axiosInstance.put(`${SERVER_URL}/categories/${_id}`, formData);
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

export const createProduct = async (formData) => {
  try {
    await axiosInstance.post(`${SERVER_URL}/products`, formData);
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

export const deleteCategory = async (_id) => {
  try {
    await axiosInstance.delete(`${SERVER_URL}/categories/${_id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteProduct = async (_id) => {
  try {
    const { data } = await axiosInstance.delete(
      `${SERVER_URL}/products/${_id}`
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateProduct = async (_id, formData) => {
  try {
    const { data } = await axiosInstance.put(
      `${SERVER_URL}/products/${_id}`,
      formData
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteUnusedImages = async () => {
  try {
    await axiosInstance.put(`${SERVER_URL}/admin/clear-images`);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

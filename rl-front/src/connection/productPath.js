import api from "../config/axiosConfig";

//POST
export const createProduct= async (product) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await api.post("/product", product);
        return response.data;
    } catch (error){
        throw error;
    }
};

//GET
export const getProduct= async(product) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await api.get('/product', product);
        return response.data
    } catch (error){
        throw error;
    }
}

//UPDATE
export const updateProduct= async (id, product) => {

    const response = await api.put(`/product/${id}`, product);
    return response.data;
   
}

//DELETE
export const deleteProduct= async (product) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await api.delete(`/product/${product.id}`, product);
        return response.data;
    } catch (error){
        throw error;
    } 
}
//GET BY ID
export const getProductById= async (id) => {
    // eslint-disable-next-line no-useless-catch
    try{
    const response = await api.get(`/product/${id}`);
    return response.data;
    } catch (error){
        throw error.response.data.message;
    }
}
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



//UPDATE
export const updateProduct= async (product) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await api.put(`/product/${product.id}`, product);
        return response.data;
    } catch (error){
        throw error;
    }
}

//DELETE


import { api } from '../../../config/apiConfig';
import { CANCELLED_ORDER_FAILURE, CANCELLED_ORDER_REQUEST, CANCELLED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIEVERED_ORDER_FAILURE, DELIEVERED_ORDER_REQUEST, DELIEVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from './ActionType';


export const getOrders = () =>{
    console.log("get all orders");
    return async (dispatch) => {
        dispatch({type:GET_ORDERS_REQUEST});
        try {
            const response = await api.get(`/api/admin/orders`);
            console.log("get all orders", response.data);
            dispatch({type:GET_ORDERS_SUCCESS, payload:response.data});
        } catch (error) {
           console.log("catch error", error);
           dispatch({type:GET_ORDERS_FAILURE, payload:error.message});
        }
    };
};


export const confirmOrder = (orderId) => async (dispatch) =>{
       dispatch({type:CONFIRMED_ORDER_REQUEST});

        try {
            const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
            const data = response.data;
            console.log("order confirmed", data);
            dispatch({type:CONFIRMED_ORDER_SUCCESS, payload:data});
        } catch (error) {
           console.log("catch error", error);
           dispatch({type:CONFIRMED_ORDER_FAILURE, payload:error.message});
        }
};


export const shipOrder = (orderId) =>{

    return async (dispatch) =>{
        dispatch({type:SHIP_ORDER_REQUEST});
     try {
         const {data} = await api.put(`/api/admin/orders/${orderId}/ship`);
         console.log("order shipped", data);
         dispatch({type:SHIP_ORDER_SUCCESS, payload:data});
     } catch (error) {
        console.log("catch error", error);
        dispatch({type:SHIP_ORDER_FAILURE, payload:error.message});
     }
};
};


export const deliveredOrder = (orderId) => async (dispatch) =>{
    dispatch({type:DELIEVERED_ORDER_REQUEST});

     try {
         const response = await api.put(`/api/admin/orders/${orderId}/deliever`);
         const data = response.data;
         console.log("order delievered", data);
         dispatch({type:DELIEVERED_ORDER_SUCCESS, payload:data});
     } catch (error) {
        console.log("catch error", error);
        dispatch({type:DELIEVERED_ORDER_FAILURE, payload:error.message});
     }
};


// export const cancelOrder = (orderId) => async (dispatch) =>{
//    dispatch({type:CANCELLED_ORDER_REQUEST});
//
//     try {
//         const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
//         const data = response.data;
//         console.log("order cancelled", data);
//         dispatch({type:CANCELLED_ORDER_SUCCESS, payload:data});
//     } catch (error) {
//        console.log("catch error", error);
//        dispatch({type:CANCELLED_ORDER_FAILURE, payload:error.message});
//     }
// };


export const deleteOrder = (orderId) =>{
    return  async (dispatch) => {
    dispatch({type:DELETE_ORDER_REQUEST});
     try {
         const {data} = await api.put(`/api/admin/orders/${orderId}/delete`);
         console.log("order confirmed", data);
         dispatch({type:DELETE_ORDER_SUCCESS, payload:data});
     } catch (error) {
        console.log("catch error", error);
        dispatch({type:DELETE_ORDER_FAILURE, payload:error.message});
     }
};
};
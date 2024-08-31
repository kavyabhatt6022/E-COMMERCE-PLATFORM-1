import {
  CANCELLED_ORDER_FAILURE,
  CANCELLED_ORDER_REQUEST,
  CANCELLED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIEVERED_ORDER_FAILURE,
  DELIEVERED_ORDER_REQUEST,
  DELIEVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACED_ORDER_FAILURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: "",
};

const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: "",
      };
    case GET_ORDERS_FAILURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIEVERED_ORDER_REQUEST:
    case CANCELLED_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRMED_ORDER_SUCCESS:
      return {
        ...state,
        confirmed: action.payload,
        isLoading: false,
      };
    case PLACED_ORDER_SUCCESS:
      return {
        ...state,
        placed: action.payload,
        isLoading: false,
      };
    case DELIEVERED_ORDER_SUCCESS:
      return {
        ...state,
        delievered: action.payload,
        isLoading: false,
      };
    case CANCELLED_ORDER_SUCCESS:
      return {
        ...state,
        cancelled: action.payload,
        isLoading: false,
      };
    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case DELIEVERED_ORDER_FAILURE:
    case CANCELLED_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedOrder: action.payload,
      };
    case DELETE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SHIP_ORDER_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case SHIP_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shipped: action.payload,
      };
    case SHIP_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminOrderReducer;

import {
  GET_SHOPS,
  GET_DETAIL_PRODUCT,
  SEARCH_BY_NAME,
  GET_ALL_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_SHOP,
  RESET,
  LOADING,
  POST_NEW_SHOP,
  // FILTER_BY_CATEGORIES,
  // GET_DATA_USER,
  GET_DATA_USER,
  GET_SHOPS_ID,
  GET_ALL_USERS,
  LOADING_PANEL,
  FILTER_BY_CAT_DISC,
  FILTER_BY_CATEGORIES,
  FILTER_BY_DISCOUNT,
  GET_NAME_OF_SHOP,
  STOP,
  GET_DISCOUNTS,
} from "../actions";

const initialStore = {
  shop: [],
  shops: [],
  productsloaded: [],
  detailProduct: [],
  categories: [],
  discounts: [],
  postnewShop: [],
  dataUser: {},
  allUser: [],
  nameOfShop: "",
  isLoading: true,
  loadingPanel: true
};

export default function reducer(state = initialStore, { type, payload }) {
  switch (type) {
    case GET_SHOPS:
      return {
        ...state,
        shops: payload,
        isLoading: false,
      };
    case GET_SHOPS_ID:
      return {
        ...state,
        shop: payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        productsloaded: payload,
        isLoading: false,
      };
    case GET_DATA_USER:
      return {
        ...state,
        dataUser: payload.user,
        loadingPanel: false,
      };
    case FILTER_BY_CAT_DISC:
      return {
        ...state,
        productsloaded: payload,
      }
    case FILTER_BY_CATEGORIES:
      return {
        ...state,
        productsloaded: payload,
      };
    case FILTER_BY_DISCOUNT:
      return {
        ...state,
        productsloaded: payload,
      };
    case GET_NAME_OF_SHOP:
      return {
        ...state,
        nameOfShop: payload,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: payload,
        isLoading: false,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        productsloaded: payload,
      };
    case POST_NEW_SHOP:
      return {
        ...state,
        postnewShop: payload,
      };
    case GET_CATEGORIES:
      if(Array.isArray(payload)){
        payload = payload.map(e => ({name: e}))
      } 
      return {
        ...state,
        categories: payload,
      };
    case GET_DISCOUNTS:
      return {
        ...state,
        discounts: payload,
      };
    case GET_PRODUCTS_SHOP:
      return {
        ...state,
        productsloaded: payload,
        isLoading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUser: payload,
        isLoading: false,
        loadingPanel: false,
      };
    case RESET:
      return {
        ...state,
        detailProduct: [],
        productsloaded: [],
        isLoading: true,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case LOADING_PANEL:
      return {
        ...state,
        loadingPanel: true,
      };
    case STOP:
      return {
        ...state,
        isLoading: false,
        loadingPanel: false,
      };
    default:
      return state;
  }
}

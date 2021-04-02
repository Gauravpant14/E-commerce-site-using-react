import axios from "axios";
export const fetchUsersRequest = () => {
    return {
      type: "FETCH_USERS_REQUEST",
    };
  };
  
  export const fetchUsersSuccess = (products) => {
    return {
      type: "FETCH_USERS_SUCCESS",
      payload: products,
    };
  };
  
  export const fetchUsersFailure = (error) => {
    return {
      type: "FETCH_USERS_FAILURE",
      payload: error,
    };
  };

  export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest);
      axios
        .get("http://192.168.1.78:8080/products")
        .then((response) => {
          console.log(response.data);
          const products = response.data;
          dispatch(fetchUsersSuccess(products));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error));
          const errMsg = error.message;
          dispatch(fetchUsersFailure(errMsg));
        });
    };
  };
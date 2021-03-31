import axios from "axios";
export const fetchCatRequest = () => {
    return {
      type: "FETCH_CAT_REQUEST",
    };
  };
  
  export const fetchCatSuccess = (category) => {
    return {
      type: "FETCH_CAT_SUCCESS",
      payload: category,
    };
  };
  
  export const fetchCatFailure = (error) => {
    return {
      type: "FETCH_CAT_FAILURE",
      payload: error,
    };
  };

  export const fetchCat = () => {
    return (dispatch) => {
      dispatch(fetchCatRequest);
      axios
        .get("http://192.168.1.82:8080/viewCateg")
        .then((response) => {
          console.log( response.data);
          const category = response.data;
          dispatch(fetchCatSuccess(category));
        })
        .catch((error) => {
          dispatch(fetchCatFailure(error));
          const errMsg = error.message;
          dispatch(fetchCatFailure(errMsg));
        });
    };
  };
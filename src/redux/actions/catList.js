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

  // export const productID = (id) => {
  //   return {
  //     type: "FETCH_ID",
  //     payload: id,
  //   };
  // };

  export const fetchCat = () => {
    return (dispatch) => {
      dispatch(fetchCatRequest);
      axios
        .get("http://192.168.1.78:8080/categories")
        .then((response) => {
          // console.log( response);
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


  //filter Data

  // export const catFilter = () => {

  //   return (dispatch) => {
  //     axios.get('http://192.168.1.82:8080/searchCategoriesItem/', {
  //       params: {
  //         id: 
  //       }
  //     }).then((response) => {
  //       console.log(response.data);
  //       const category = response.data;
  //       dispatch(fetchCatSuccess(category));
  //     })
  //     .catch((error) => {
  //       dispatch(fetchCatFailure(error));
  //       const errMsg = error.message;
  //       dispatch(fetchCatFailure(errMsg));
  //     });
  //   }

  // }
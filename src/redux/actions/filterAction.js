import axios from "axios";
export const fetchfilterRequest = () => {
    return {
      type: "FETCH_FILTER_REQUEST",
    };
  };
  
  export const fetchfilterSuccess = (filterData) => {
    return {
      type: "FETCH_FILTER_SUCCESS",
      payload: filterData,
    };
  };
  
  export const fetchfilterFailure = (error) => {
    return {
      type: "FETCH_FILTER_FAILURE",
      payload: error,
    };
  };

  

export const catFilter = (cId) => {
    console.log("id is coming "+cId)
      return (dispatch) => {
        axios.get('http://192.168.1.78:8080/product/', {
          params: {
            "id": cId  
          }
        }).then((response) => {
          console.log("response is coming" + response)
          console.log(response.data);
          const filterData = response.data;
          dispatch(fetchfilterSuccess(filterData));
        })
        .catch((error) => {
          
         console.log(error)
        });
      }
  
    }  

// export const catFilter = (cId) => {
//   return (dispatch) => {
//     const response = async axios.get('http://192.168.1.78:8080/product/', {
//                 params: {
//                   id: cId  
//                 }
//               })
//   }
// }
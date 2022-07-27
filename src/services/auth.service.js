import {baseUrl, axiosInstance} from './API';

class AuthService {
   getLogedInAssociates=()=>{
    const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"));
    return allBlinkers
   }
   getStudentDetails(studentAccountId){
    return axiosInstance.get(baseUrl + "/api/v2/accounts/fetchAccountById/" + studentAccountId);
   }
   getStudentTransactions(blinkAccountId,blinkUserId){
      return axiosInstance.get(baseUrl + "/api/v2/transactions/searchTransaction?pageNo=1&pageSize=100&userId="+blinkUserId);
     }
}

export default new AuthService();
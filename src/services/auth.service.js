import {baseUrl, axiosInstance} from './API';

class AuthService {
   getLogedInAssociates=()=>{
    const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"))
    return JSON.parse(localStorage.getItem("guardianBlinkers"))
   }
   getStudentDetails(studentAccountId){
    return axiosInstance.get(baseUrl + "/api/v2/accounts/fetchAccountById/" + studentAccountId);
   }
   getStudentTransactions(blinkAccountId,blinkUserId){
      //alert("the Blinker id brought forward is "+blinkAccountId)
      return axiosInstance.get(baseUrl + "/api/v2/transactions/searchTransaction?pageNo=1&pageSize=100&userId="+blinkUserId);
   }
   sendStkPush(data){
      return axiosInstance.post(baseUrl+"/api/v2/wallet/loadByMpesa",data)
   }
   fetchTransactionByTransactionId(transactionId){
      return axiosInstance.post(baseUrl+"/api/v2/transactions/fetchTransactionByTransactionId/"+transactionId)
   }
}

export default new AuthService();
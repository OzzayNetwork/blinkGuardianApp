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

   logIn(data){
      return axiosInstance.post(baseUrl+"/api/v2/admin/auth/login-with-usertype",data)
   }

   fetchTransactionByTransactionId(transactionId){
      return axiosInstance.post(baseUrl+"/api/v2/transactions/fetchTransactionByTransactionId/"+transactionId)
   }
   getTransactionById(trsansactionId){
      return axiosInstance.post(baseUrl+"/api/v2/transactions/searchTransaction?transactionId/"+trsansactionId)
      //let transactionId=30
      //return axiosInstance.post("https://live.blink.co.ke/api/v2/transactions/searchTransaction?transactionId/"+transactionId)
   }

   getTransactionsByDate(userId,dateFrom,dateTo){
      return axiosInstance.get(baseUrl+"/api/v2/transactions/searchTransaction?userId="+userId+"&fromDateTime="+dateFrom+"&toDateTime="+dateTo)
      //let transactionId=30
      //return axiosInstance.post("https://live.blink.co.ke/api/v2/transactions/searchTransaction?transactionId/"+transactionId)
   }
}

export default new AuthService();
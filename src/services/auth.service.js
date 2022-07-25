import {baseUrl, axiosInstance} from './API';

class AuthService {
   getLogedInAssociates=()=>{
    const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"));
    return allBlinkers
   }
   getStudentDetails(studentAccountId){
    return axiosInstance.get(baseUrl + "/api/v2/accounts/fetchAccountById/" + studentAccountId);
   }
}

export default new AuthService();
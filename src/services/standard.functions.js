import {baseUrl, axiosInstance} from './API';

class stdFunctions {
   // converting numbers to currency
   kenyaCurrency=(num)=>{
        return 'KES ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    //checking if a transaction is a deposit 
    isDepositTransaction=(transactionType)=>{
        if (transactionType==="Deposit"){
            return true
        }
        else{
            return false
        }
    }

    //phone number formating function starts here
    phoneOutput=(str)=> {
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');

        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
          };
        
          return str
    }

    //check if array is empty
    isArrayEmpty=(num)=>{
        if(num===0){
           return true
        }
        else{
            return false
        }
    }

    //function that removed the first character
    removeFirstCharacter=(str)=>{
        str=str.substr(1)
        return(str)
    }

    //checking if i have more than one blinkers
    isBlinkersMore=(num)=>{
        if(num===1){
           return false
        }
        else{
            return true
        }
    }
}

export default new stdFunctions();
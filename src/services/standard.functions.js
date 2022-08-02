import {baseUrl, axiosInstance} from './API';
import React, {useState, useEffect} from 'react';


class stdFunctions {
    //getting active blinker

   // converting numbers to currency
   kenyaCurrency=(num)=>{
        let formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      })
      return formatCurrency.format(num)
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

    //is money transfer
    isMoneyTransfer=(str)=>{
        if(str==="Money_transfer"){
            return true
        }
        else{
            return false
        }
    }

    //checking if phone number is valid
    isValidPhoneNum=(str)=>{
        if(str.length>9){
            return true
        }
        else{
            return false
        }

    }

    //checking if a number is greater than one
    isgreaterThanOne=(str)=>{
        str=parseFloat(str)
        if(str>1){
            return true
        }
        else{
            return false
        }
    }

    //includes function
    strIncludes(str1,str2){
        if(str1.includes(str2)){
            return true
        }
        else{
            return false
        }
    }

    //includes function
    equalTo(str1,str2){
        if(str1===str2){
            return true
        }
        else{
            return false
        }
    }

    //checking if a number is greater than 0
    isGreaterThanZero=(str)=>{
        str=parseFloat(str)
        if(str>0){
            return true
        }
        else{
            return false
        }
    }
    //checking if account is active
    isActiveAccount=(str)=>{
       if(str==="Active"){
        return true
       } 
       else{
        return false
       }
    }


    //checking if account is pocket money
    isPocketMoney=(str)=>{
        if(str==="POCKECT_MONEY"){
         return true
        } 
        else{
         return false
        }
     }

     
    //checking if an account id a welfare account
    isWelfareAccount=(str)=>{
        if(str==="WELFARE_ACCOUNT"){
         return true
        } 
        else{
         return false
        }
     }


    //removing and underscore
    removeUnderscore=(str)=>{
        let cleaned = ('_' + str).replace(/\D/g, ' ');

        str=str.replace('_',' ')
        return str;
    }

    //remove specified character
    removeSpecificCharacter=(str,character)=>{
        let cleaned = (character + str).replace(/\D/g, ' ');

        //str=str.replace(",",' ')
        return str;
    }

    //comparing two separate strings
    areTheyThesame(str1,str2){

        if(str1===str2){
            return true
        }
        else{
            return false
        }
    }

    //formating characters to a specific style
    chunkSubstr=(str, size)=> {
        
        const numChunks = Math.ceil(str.length / size)
        const chunks = new Array(numChunks)
      
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          chunks[i] = str.substr(o, size)
        }

        return chunks
      }

    //phone number formating function starts here
    phoneOutput=(str)=> {
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');
        cleaned=('+' + cleaned).replace(/\D/g, '');

        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);

        if (match) {
           return '+' + match[1] + ' ' + match[2] + ' ' + match[3]+ '' + match[4]
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

    //checking if a transaction is a goods purchase transaction
    isGoodsPurchase=(str)=>{
        if(str==="Merchant_Pay"){
            return true
        }
        if(str==="Money_transfer"){
            return true
        }
        if(str==="Deposit"){
            return false
        }
    }

    //checking if transaction is a merchant pay
    isMerchantPay=(str)=>{
        if(str==="Merchant_Pay"){
            return true
        }
        else{
            return false
        }
    }

     parentId=localStorage.getItem("parentId")
     parentEmail= localStorage.getItem("parentEmail")
     parentUserName= localStorage.getItem("parentUserName")
     parentFName=localStorage.getItem("parentUserFName")
     parentLName=localStorage.getItem("parentUserLName")
     parentWalletBal=localStorage.getItem("guardianWalletBal")
     ActiveBlinker=parseInt(localStorage.getItem("activeBlinker"))
     ActiveBlinkerIndex=parseInt(localStorage.getItem("activeBlinkerIndex"))
     parentPhoneNo=localStorage.getItem("parentPhone")
}

export default new stdFunctions();
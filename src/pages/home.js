import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import AuthService from "../services/auth.service";
import StdFunctions from "../services/standard.functions";
import Moment from 'moment'
import {Link,useLocation,matchRoutes} from "react-router-dom";


import $ from 'jquery';
// import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
const Home=()=>{


    const [students, setstudents] = useState([])
    const [studentProfile, setStudentProfile] = useState({})
    const [dateToday,setDateToday]=useState("")
    const [dateYesterday,setDateYesterday]=useState("")
    const [selectedStudentId,setSelectedStudentId]=useState("")
    const parentFName=localStorage.getItem("parentUserFName")
    const[todaysExpenditure,setTodaysExpenditure]=useState(0)
    const[yesterdaysExpenditure,setYesterdaysExpenditure]=useState("")
    const[todaysTransactions,setTodaysTransactions]=useState({})
    let theAmounts=0

    let theAmountsYesterday=0

    // this stores all the student transactions
    const [studentTransactions, setStudentTransactions] = useState([])

    //getting number of transactions per blinker
    const[transactionsCount,getTransactionsCount]=useState(0)

    //getting selected account pocket money id
    const[blinkWalletAccountNum,setBlinkWalletAccountNum]=useState("")

    const [firstStudent,setFirstStudent]=useState({})
    const [schoolName,setSchoolName]=useState("")
    const [myBlinkersCount,setMyBlinkersCount]=useState(0);
    


    //transaction states start here
    const[boughtItemsQty,setBoughtItemsQty]=useState(0)
    const[transactionDetails,setTransactionDetails]=useState({})
    const[transactionProducts,setTransactionProducts]=useState([])
    const [transactionTackShop,settransactiontackShop]=useState("")
    const[transactionInstitution,setTransactionInstitution]=useState("")
    const[transactionFee,setTransactionFee]=useState("")
    const[transactionServiceCategory,setTransactionServiceCategory]=useState("")

    //transaction states end here

   

    //Accounts states start here
    const [allBlinkAccounts,setAllBlinkAccounts]=useState([])
    const [numOfAccounts,setNumOfAccounts]=useState(0)
    //account states end here

    
    useEffect(() => {
        //const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"));
        const allBlinkers=AuthService.getLogedInAssociates()
        setstudents(allBlinkers)
        setFirstStudent(allBlinkers[0])
        setMyBlinkersCount(allBlinkers.length)
        //console.log(allBlinkers[0])
        
        AuthService.getStudentDetails(AuthService.getLogedInAssociates()[0].userId).then((res)=>{
            setStudentProfile(res.data.data.userProfile)
            setBlinkWalletAccountNum(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').accountNumber)
            console.log("the blink wallet account Id is:"+blinkWalletAccountNum)
            //alert(blinkWalletAccountNum)
            console.log(studentProfile)
            //all other accounts
            setAllBlinkAccounts(res.data.data.userProfile.blinkaccounts)
            setNumOfAccounts(allBlinkAccounts.length)
            //alert(numOfAccounts)
            console.log("All accounts for first blinker are "+allBlinkAccounts)
            console.log(allBlinkAccounts)


        }).catch((err)=>{

        })


        

        console.log("The transactions should appear down here as an object")

        AuthService.getStudentTransactions(blinkWalletAccountNum,AuthService.getLogedInAssociates()[0].userId).then((res)=>{
            //setStudentProfile(res.data.data.userProfile)
            setStudentTransactions(res.data.data)
            // console.log("We are here for transactions")
            // console.log(res.data.data)
            // console.log("The transactions start here <br/>"+res.data.length)
            //alert(studentTransactions.length)
            getTransactionsCount(res.data.length)
            
            if(res.data.data.length!=0){
                //alert("not zero")
                $('body .show-trans-cont').removeClass("d-none");
                $('body .no-trans-cont').addClass("d-none")
                $('.product-items').each(function(index) {
                    const products = $(this).text()
                   $(this).text(StdFunctions.removeFirstCharacter(products))
                });
            }
            if(res.data.data.length===0){
                //alert("it is a zero")
                $('body .show-trans-cont').addClass("d-none");
                $('body .no-trans-cont').removeClass("d-none")
            }

          

        }).catch((err)=>{
            console.log(err)
        })
    },[])

    //setting todays date
    useEffect(()=>{
        setDateToday(Moment().format('YYYY-MM-DD 00:00:00'))
        let dateTodayEnd=Moment().format('YYYY-MM-DD 23:59:59')
        let dateYesterdayEnd=Moment().subtract(1, 'days').format('YYYY-MM-DD 23:59:59')
        //alert(dateYesterday)
        setDateYesterday(Moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00'))
        setSelectedStudentId(firstStudent.userId)
        console.log("The date yesterday is: "+dateYesterday)
        console.log("selected Student ID "+selectedStudentId)
        

        AuthService.getTransactionsByDate(firstStudent.userId,dateToday,dateTodayEnd).then((res)=>{
            res.data.data.map((transaction,index)=>{
                if(transaction.transType==="Merchant_Pay"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                    setTodaysExpenditure(theAmounts)
                    
                }
                else{
                    console.log("The transaction at "+index+" is not a merchant transaction")
                }
            })

        //getting the transactions for yesterday
        
            console.log("the amounts are")
            console.log("Total spent: "+theAmounts)
            console.log("Total spent: "+todaysExpenditure)
        }).catch((err)=>{
            console.log(err)
            //alert("error")
        })

        AuthService.getTransactionsByDate(firstStudent.userId,dateYesterday,dateYesterdayEnd).then((res)=>{
            res.data.data.map((transaction,index)=>{
                if(transaction.transType==="Merchant_Pay"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmountsYesterday+=parseFloat(transaction.amount)
                    setYesterdaysExpenditure(theAmountsYesterday)
                    
                }
                else{
                    console.log("The transaction at "+index+" is not a merchant transaction")
                }
            })

        //getting the transactions for yesterday
        
            console.log("the amounts are")
            console.log("Total spent: "+theAmounts)
            console.log("Total spent: "+todaysExpenditure)
        }).catch((err)=>{
            console.log(err)
            //alert("error")
        })
       
    },[dateYesterday,selectedStudentId,todaysExpenditure,firstStudent])
    

    //this function helps get the details pertaining to the details of a student's account
    let targetId=firstStudent.userId
    //alert(targetId)


    const getInstitututionName=(studentId)=>{
        var studentInstitutionName
        AuthService.getStudentDetails(studentId).then((res)=>{
            //console.log(res)
          //  setSchoolName(res.data.data.associates[0].institution.institutionName)
          
          studentInstitutionName=res.data.data.associates[0].cardId
            //alert(schoolName);
           // console.log("the school Name is "+studentInstitutionName)
            
        })
        return studentInstitutionName
    }

    

   // console.log(students);
    const blinkerClicked=(studentId,clickedIndex)=>{
        AuthService.getStudentDetails(studentId).then((res)=>{
           
            //console.log(res)
            setSchoolName(res.data.data.associates[0].institution.institutionName)
            //alert(schoolName);
            //console.log("the school Name is "+schoolName)
            setStudentProfile(res.data.data.userProfile)
            //console.log(studentProfile)
            //alert(clickedIndex)

            const allBlinkers=AuthService.getLogedInAssociates()

            setFirstStudent(allBlinkers[clickedIndex])
            setMyBlinkersCount(allBlinkers.length)
            //console.log(allBlinkers[0])
            //alert(studentId)
        
        AuthService.getStudentDetails(AuthService.getLogedInAssociates()[clickedIndex].userId).then((res)=>{
            setStudentProfile(res.data.data.userProfile)

            //clicke blinker wallet Id
            setBlinkWalletAccountNum(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').accountNumber)

            //console.log(studentProfile)
            //all other accounts
            setAllBlinkAccounts(res.data.data.userProfile.blinkaccounts)
            setNumOfAccounts(allBlinkAccounts.length)
            //alert(numOfAccounts)
            //console.log("All accounts for first blinker are "+allBlinkAccounts)
            //console.log(allBlinkAccounts)

            //clicked blinker transactions
            AuthService.getStudentTransactions(blinkWalletAccountNum,AuthService.getLogedInAssociates()[clickedIndex].userId).then((res)=>{
            //setStudentProfile(res.data.data.userProfile)
            setStudentTransactions(res.data.data)
            // console.log("We are here for transactions")
            // console.log(res.data.data)
            // console.log("The transactions start here <br/>"+res.data.length)
            //alert(studentTransactions.length)
            
            if(res.data.data.length!=0){
                //alert("not zero")
                $('body .show-trans-cont').removeClass("d-none");
                $('body .no-trans-cont').addClass("d-none")
                $('.product-items').each(function(index) {
                    const products = $(this).text()
                   $(this).text(StdFunctions.removeFirstCharacter(products))
                });
            }
            if(res.data.data.length===0){
                //alert("it is a zero")
                $('body .show-trans-cont').addClass("d-none");
                $('body .no-trans-cont').removeClass("d-none")
            }

            setSelectedStudentId(firstStudent.userId)
            //alert(firstStudent.userId)

          

        }).catch((err)=>{
            console.log(err)
        })
        }).catch((err)=>{

        })
        })
        // const returnedData= AuthService.getStudentDetails(studentId)
        // const GetSchoolName=returnedData.data.cardStatus
        

       

    }

    //getting clcicked transaction details
    let QuantityOfItems=0
    //getting transaction details
    const clickedTransaction=(transactionId,tuckShop,transactionFee,transactingInstitute,serviceCategory,clickedTransactionProducts)=>{
        //alert(transactionId)
        setTransactionDetails(studentTransactions.find(x=>x.transactionId===transactionId))
        setTransactionProducts(clickedTransactionProducts)
        settransactiontackShop(tuckShop)
        setTransactionInstitution(transactingInstitute)
        setTransactionServiceCategory(serviceCategory)
        setTransactionFee(transactionFee)

        console.log("the clicked transaction Produuct Items")
        console.log(transactionProducts)

       
            clickedTransactionProducts.map((productItem)=>{
           
            setBoughtItemsQty(QuantityOfItems+=productItem.units)
        })
        console.log("The total items are: "+QuantityOfItems)


    }
    //getting clicked transaction ends here

    

   

   
    return ( 
        <>

        <Helmet>
        <title>Blink! | Digital Wallet for Students</title>
        </Helmet>    {/* the modals container */}
        <div className="container-fluid">

        {/* <!-- start page title --> */}
        <div className="row d-none">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">Dashboards</Link></li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

        <div className="row d-sm-none d-md-flex">
            <div className="col-12">
                <h4 className="text-black pt-0 pl-0 pb-3 p-3  fw-medium m-0">Hello, {parentFName}</h4>
            </div>
        </div>

        {/* <!-- end page title --> */}
        <div className="row">
        <div className="col-lg-12">
            <div className="card d-md-flex d-lg-none no-shadow  mb-0 ">
                <div className="card-body mt-3  p-3 bg-light mx-3 mt-2 rad-sm-8px rad-0px">
                    <div className="row">
                    <div className="dropdown d-inline-block w-100 d-flex align-items-center">
                        <button type="button" className="btn header-item waves-effect align-items-center w-100  text-left d-flex p-0" id="blinkers-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="flex-shrink-0 me-3">
                                <img className="rounded-circle d-none" src="assets/images/logo-files/blink-icon2.svg" alt="Generic placeholder image" height="65"/>
                                <div className="avatar-sm mx-auto ">
                                    <span className="avatar-title rounded-circle bg-random font-size-20">
                                        {studentProfile?.institution != undefined && firstStudent?.firstName.charAt(0)+""+firstStudent?.middleName.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex-grow-1 chat-user-box me-3">
                                <h6 className="user-title m-0  text-black">{firstStudent?.firstName+" "+firstStudent?.middleName}</h6>
                                <p className="text-muted m-0 p-0 font-size-12">{firstStudent?.blinkId}</p>
                            </div>
                            {StdFunctions.isBlinkersMore(students?.length)?(
                                <div className="d-flex justify-content-center align-items-center">
                                    <span class="badge rounded-pill bg-primary-blink float-end">+{students?.length-1} More</span><span><i className="mdi mdi-chevron-down  d-xl-inline-block me-3 font-21"></i></span>
                                </div>
                                ):(
                                <span></span>
                                )}
                            
                        </button>
                        

                        
                        <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-start p-0 w-100 ${StdFunctions?.isgreaterThanOne(myBlinkersCount) ? "" : "d-none"}`}>
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0" key="t-notifications"> My Blinkers </h6>
                                    </div>
                                    <div className="col-auto d-none">
                                        <a href="notifications.html" className="small" key="t-view-all"> View All</a>
                                    </div>
                                </div>
                            </div>
                            {students?.length> 1 && students.map((item, index)=>(
                                <div  style={{ maxheight: "230px" }}>
                                    <a onClick={()=> blinkerClicked(item?.userId,index)}   className="d-flex px-3 pb-2 waves-effect dropdown-item">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded-circle d-none" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36"/>
                                            <div className="avatar-sm mx-auto ">
                                                <span className="avatar-title rounded-circle bg-random font-size-16 profile-abriv">
                                                    {item?.firstName.charAt(0)+item.middleName.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 chat-user-box">
                                            <p className="user-title m-0">{item?.firstName+" "+item.middleName}</p>
                                            <p className="text-muted">{item?.blinkId}</p>
                                        </div>                                                            
                                    </a>
                                    </div>
                                ))
                                
                            }  
                            
                        </div>

                        <ul className="list-inline user-chat-nav text-end mb-0 d-none">                                                   

                            <li className="list-inline-item pr-sm-0 pr-4">
                                <div className="dropdown">
                                    <button className="btn nav-btn mr-4" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-start">
                                        <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-shield-account me-3"></i>View Account</a>
                                        <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-clipboard-text me-3"></i>Tasks</a>
                                        <a className="dropdown-item text-danger" href="#"><i className="font-size-15 mdi mdi-lock-remove me-3"></i>Block Account</a>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="col-lg-12 ">
                <div className="card no-shadow-sm mb-sm-0 mb-md-4 mb-xs-0 mb-4 mb-xm-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 d-md-none d-sm-none d-lg-flex align-content-center">
                                <div className="dropdown d-inline-block w-100 d-flex align-items-center">
                                    <button type="button" className="btn header-item waves-effect align-items-center w-100  text-left d-flex p-0" id="blinkers-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="flex-shrink-0 me-3">
                                            <img className="rounded-circle d-none" src="assets/images/logo-files/blink-icon2.svg" alt="Generic placeholder image" height="65"/>
                                            <div className="avatar-sm mx-auto ">
                                                <span className="avatar-title rounded-circle bg-random font-size-20">
                                                    {studentProfile.institution != undefined && firstStudent.firstName.charAt(0)+""+firstStudent.middleName.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex-grow-1 chat-user-box me-3">
                                            <h6 className="user-title m-0  text-black fw-medium">{firstStudent?.firstName+" "+firstStudent?.middleName}</h6>
                                            <p className="text-muted m-0 p-0 font-size-12">{firstStudent?.blinkId}</p>
                                        </div>
                                        {StdFunctions.isBlinkersMore(students.length)?(
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span class="badge rounded-pill bg-primary-blink float-end">+{students?.length-1} More</span><span><i className="mdi mdi-chevron-down  d-xl-inline-block me-3 font-21"></i></span>
                                            </div>
                                            ):(
                                            <span></span>
                                            )}
                                        
                                    </button>
                                    

                                    
                                    <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-start p-0 w-100 ${StdFunctions.isgreaterThanOne(myBlinkersCount) ? "" : "d-none"}`}>
                                        <div className="p-3">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="m-0" key="t-notifications"> My Blinkers </h6>
                                                </div>
                                                <div className="col-auto d-none">
                                                    <a href="notifications.html" className="small" key="t-view-all"> View All</a>
                                                </div>
                                            </div>
                                        </div>
                                        {students.length> 1 && students.map((item, index)=>(
                                            <div  style={{ maxheight: "230px" }}>
                                                <a onClick={()=> blinkerClicked(item.userId,index)}   className="d-flex px-3 pb-2 waves-effect dropdown-item">
                                                    <div className="flex-shrink-0 me-3">
                                                        <img className="rounded-circle d-none" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36"/>
                                                        <div className="avatar-sm mx-auto ">
                                                            <span className="avatar-title rounded-circle bg-random font-size-16 profile-abriv">
                                                                {item.firstName.charAt(0)+item.middleName.charAt(0)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 chat-user-box">
                                                        <p className="user-title m-0 text-black">{item.firstName+" "+item.middleName}</p>
                                                        <p className="text-muted">{item.blinkId}</p>
                                                    </div>                                                            
                                                </a>
                                                </div>
                                            ))
                                            
                                        }  
                                        
                                    </div>

                                    <ul className="list-inline user-chat-nav text-end mb-0 d-none">                                                   

                                        <li className="list-inline-item pr-sm-0 pr-4">
                                            <div className="dropdown">
                                                <button className="btn nav-btn mr-4" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-start">
                                                    <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-shield-account me-3"></i>View Account</a>
                                                    <a className="dropdown-item" href="#"><i className="font-size-15 mdi mdi-clipboard-text me-3"></i>Tasks</a>
                                                    <a className="dropdown-item text-danger" href="#"><i className="font-size-15 mdi mdi-lock-remove me-3"></i>Block Account</a>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12 align-self-center p-sm-0">
                                <div className="text-lg-left mt-4 mt-lg-0 mt-sm-0">
                                    <div className="row">
                                        <div className="col-sm-6  col-md-3 d-none">
                                            <div className="px-2">
                                                <div className="avatar-sm mb-3">
                                                    <span className="avatar-title rounded-circle bg-info font-size-24">
                                                        <i className="mdi mdi-account-child text-white"></i>
                                                    </span>
                                                </div>
                                                <p className="text-muted text-truncate mb-2">All Blinkers</p>
                                                <h5 className="mb-0">{myBlinkersCount}</h5>
                                            </div>
                                        </div>
                                        <div className=" col-sm-3 d-none d-sm-none col-md-3">
                                            <div className="px-2">
                                                <div className="avatar-sm mb-3">
                                                    <span className="avatar-title rounded-circle bg-success font-size-24">
                                                            <i className="mdi mdi-cash-multiple text-white"></i>
                                                        </span>
                                                </div>
                                                <p className="text-muted text-truncate mb-2">Avg. Daily Consumption</p>
                                                <h5 className="mb-0">KES 450</h5>
                                            </div>
                                        </div>
                                        <div className="d-sm-none  d-none  col-sm-3 col-md-3">
                                            <div>
                                                <div className="avatar-sm mb-3">
                                                    <span className="avatar-title rounded-circle font-size-24">
                                                            <i className="mdi mdi-swap-horizontal text-white"></i>
                                                        </span>
                                                </div>
                                                <p className="text-muted text-truncate mb-2">Avg Daily Transactions</p>
                                                <h5 className="mb-0">22</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3 d-none">
                                            <div>
                                                <div className="avatar-sm mb-3">
                                                    <span className="avatar-title rounded-circle bg-pink font-size-24">
                                                            <i className="mdi mdi-clipboard-edit-outline text-white"></i>
                                                        </span>
                                                </div>
                                                <p className="text-muted text-truncate mb-2">Pending Tasks</p>
                                                <h5 className="mb-0">180</h5>

                                            </div>
                                        </div>

                                        {/* account options start here */}

                                        <div className="col-12 d-none">
                                            <hr/>
                                        </div>
                                        <div className="col-3 d-none">
                                            <div className="text-ceter align-items-center d-flex justify-content-center flex-column px-0">
                                                <div className="avatar-sm mb-0">
                                                    <div className="flex-shrink-0 m-0 d-flex justify-content-center align-items-center">
                                                        <img className="m-0 p-0" src="assets/images/Account-options/tasks.svg" alt="" height="45px"/>
                                                    </div>
                                                </div>
                                                <p className="fw-medium text-black text-center text-center mb-0 mt-2">{firstStudent?.firstName}'s Tasks</p>
                                            </div>
                                        </div>

                                        <a href="#" className="col-4 waves-effect py-3">
                                            <div className="text-ceter align-items-center d-flex justify-content-center flex-column px-0">
                                                <div className="avatar-sm mb-0">
                                                    <div className="flex-shrink-0 m-0 d-flex justify-content-center align-items-center">
                                                        <img className="m-0 p-0" src="assets/images/Account-options/profile.svg" alt="" height="45px"/>
                                                    </div>
                                                </div>
                                                <p className="fw-medium text-black text-center text-center mb-0 mt-2">{firstStudent?.firstName}'s Profile</p>
                                            </div>
                                        </a>

                                        <a href="#" className="col-4 waves-effect py-3">
                                            <div className="text-ceter align-items-center d-flex justify-content-center flex-column px-0">
                                                <div className="avatar-sm mb-0">
                                                    <div className="flex-shrink-0 m-0 d-flex justify-content-center align-items-center">
                                                        <img className="m-0 p-0" src="assets/images/Account-options/settings.svg" alt="" height="45px"/>
                                                    </div>
                                                </div>
                                                <p className="text-black fw-medium text-center mb-0 mt-2">Restrictions</p>
                                            </div>
                                        </a>

                                        <a href="#" className="col-4 waves-effect py-3">
                                            <div className="text-ceter align-items-center d-flex justify-content-center flex-column px-0">
                                                <div className="avatar-sm mb-0">
                                                    <div className="flex-shrink-0 m-0 d-flex justify-content-center align-items-center">
                                                        <img className="m-0 p-0" src="assets/images/Account-options/block.svg" alt="" height="45px"/>
                                                    </div>
                                                </div>
                                                <p className="text-black fw-medium text-center mb-0 mt-2">Block {firstStudent?.firstName}</p>
                                            </div>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <!-- end row --> */}
                    </div>
                </div>
            </div>
        </div>



            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-5 col-sm-12">
                    <div className="row">
                        <div className="col-12 d-non ">
                            <div className="card bg-primary bg-primary-blink blink-card-bg mx-0 mx-sm-3 rad-sm-8px overflow-hidden">
                                <div className="card-body blink-car rad-sm-8px">

                                <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div className="flex-shrink-0 align-self-center mb-3">
                                            <img src="assets/images/users/avatar-1.jpg" className="avatar-md rounded-circle img-thumbnail d-none" alt=""/>
                                            <div class="avatar-md avatar-card mx-auto ">
                                                <span class="avatar-title rounded-circle bgrandom7 font-size-20 border-white">
                                                {studentProfile?.institution != undefined && studentProfile.firstName.charAt(0)+""+studentProfile.middleName.charAt(0)}
                                                </span>
                                            </div>
                                        
                                        </div>
                                        <div>
                                            <img src="assets/images/logo-files/blink-white.svg" className="img" alt="" height="40px"/>
                                        </div>
                                </div>

                                    <div className="d-flex align-content-center align-items-center mb-3">
                                    
                                        <div className="flex-grow-1">
                                            <p className="m-0 p-0 text-white-50">Blink Wallet Holder</p>
                                            <h4 className="font-size-15 mb-0 text-white text-capitalize">{studentProfile?.institution != undefined && studentProfile.firstName+" "+studentProfile.middleName}</h4>
                                            
                                        </div>

                                        <div className="flex-grow-1 text-right">
                                            <p className="m-0 p-0 text-white-50">School</p>
                                            <h5 className="font-size-15 mb-0 text-white">{studentProfile?.institution != undefined && studentProfile.institution.institutionName}</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="row d-non">
                                        <div className="col-sm-12 col-md-6 ">
                                            <div className="d-flex align-items-center">
                                                <span className="badge  badge-soft-light font-size-12"> {StdFunctions.kenyaCurrency(todaysExpenditure)} </span> <span className="ms-2 mb-0 pb-0 text-truncate text-white">Used Today</span>

                                            </div>
                                        </div>
                                        <div className="col-6 d-sm-none d-md-flex align-items-end justify-content-end text-right">
                                            <span className="mt-0 mb-0 text-nowrap"><span className="badge badge-soft-light font-size-11 me-2"> {StdFunctions.kenyaCurrency(todaysExpenditure-yesterdaysExpenditure)} <i className="mdi mdi-arrow-up"></i> </span> <span className="text-white opacity-50">From Yesterday</span></span>

                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <div className="text-white">
                                        <p className="text-white-50 text-truncate mb-0">Wallet Balance.</p>
                                        <h3 className="text-white kenyan-carency mb-0 pb-0">{studentProfile?.blinkaccounts != undefined && StdFunctions.kenyaCurrency(studentProfile?.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').currentBalance)}</h3>
                                       
                                    
                                    </div>
                                    <div>
                                        <button class="btn btn btn-dark waves-effect waves-light btn-sm" data-bs-toggle="modal" data-bs-target="#walletTopUp"><i className="mdi mdi-flip-h mdi-18px mdi-reply font-size-16 align-middle me-2"></i>Send Money</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-none">
                            <div className="card bg-primary bg-primary-blink">
                                <div className="card-body">
                                    <div className="d-flex align-content-center align-items-center mb-3">
                                        <div className="flex-shrink-0 align-self-center me-3">
                                            <img src="assets/images/users/avatar-1.jpg" className="avatar-sm rounded-circle img-thumbnail" alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="font-size-15 mb-0 text-white">Alex Wanjala</h5>
                                            <p className="m-0 p-0 text-white-50">Blink Academy</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="text-white">
                                                <p className="text-white-50 text-truncate mb-0">Wallet Balance.</p>
                                                <h4 className="text-white">KES 9,134.39</h4>
                                            
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex align-items-end justify-content-end">
                                            <p className="text-right mb-0 pb-0 text-white-50">Blink ID: 1235 2659 2358</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <div className="card history-card"> */}
                            <div className="card history-card no-shadow-sm border-sm-bottom-1px">
                                <div className="card-header bg-white px-sm-2 py-sm-3">
                                    <h4 className="card-title mb-0 text-capitalize text-black">Recent Transactions for {firstStudent?.firstName}</h4>
                                </div>
                                <div className="card-body px-2 show-trans-cont d-none px-sm-0 pt-sm-0">                                           

                                    <div className="table-responsive">
                                        <table className="table table-nowrap  align-middle mb-0 table-hover ">
                                        <thead className="table-light text-black">
                                            <tr>
                                                
                                                <th className="" colspan="2">
                                                    Transaction details
                                                </th>
                                                <th className="text-right">
                                                    <span>Amount & time</span>
                                                </th>
                                            </tr>
                                        </thead>
                                            
                                            <tbody>

                                            {studentTransactions?.length>0 && studentTransactions.slice(0,4).map((transaction,index)=>(
                                                <tr onClick={()=> clickedTransaction(transaction?.transactionId,transaction?.blinkMerchant.merchantName,transaction?.service.institution.commission,transaction?.service.institution.institutionName,transaction?.transType,transaction.productsSold)} data-bs-toggle="modal" data-bs-target="#transaction-details" className="mouse-pointer">
                                                    <th scope="row" className="px-sm-0 pl-sm-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar-xs me-0">
                                                               
                                                                {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                                    <span className="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                                        <i className="mdi mdi-arrow-down-bold"></i>
                                                                    </span>
                                                                ):(
                                                                    <span className="avatar-title rounded-circle bg-danger bg-soft text-danger font-size-18">
                                                                        <i className="mdi mdi-arrow-up-bold"></i>
                                                                     </span>
                                                                )}
                                                            </div>
                                                            
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div  className="text-truncate text-black fw-medium text-capitalize product-items-trunc" >
                                                                {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                                    StdFunctions.phoneOutput(transaction.accountFrom)
                                                                ):(
                                                                    <span></span>                                                                  
                                                                )}
                                                                <span className="product-items" 
                                                                
                                                                >                                    
                                                                    {
                                                                        transaction.productsSold.length> 0 && transaction.productsSold.map((product,index)=>(<span>,{product.productName} </span>)) 
                                                                    }  
                                                                </span>
                                                            {/* {transaction.blinkMerchant.merchantName }<small>{" ("+transaction.service.institution.institutionName+")"}</small> */}
                                                        </div>
                                                        <p className="text-muted p-0 m-0 text-truncate  product-items-trunc">
                                                                {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                                    <small className="d-none d-md-inline">Receipt No.</small> 
                                                                ):(
                                                                    <small></small>                                                                  
                                                                )}
                                                                {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                                    
                                                                    transaction.receiptNumber
                                                                ):(
                                                                    transaction.blinkMerchant.merchantName                                                                  
                                                                )}
                                                            
                                                        </p>
                                                    </td>
                                                    <td className="text-right px-sm-0 text-capitalize pr-sm-2">

                                                             {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                            <h5 className="font-size-14 mb-1 text-success">{StdFunctions.kenyaCurrency(transaction.amount)}</h5>
                                                            ):(
                                                                <h5 className="font-size-14 mb-1 text-danger">{StdFunctions.kenyaCurrency(transaction.amount)}</h5>                                                                 
                                                            )}
                                                        <div className="text-muted">
                                                        {
                                                            Moment(transaction.dateCreated).add(3, 'hours').calendar(null, {
                                                            sameElse: 'DD MMM YYYY  hh:mm A'
                                                        })}
                                                        </div>
                                                    </td>                                                           
                                                </tr>
                                               
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="text-center mt-4"><Link to="/transactions" className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ms-1"></i></Link></div>
                                </div>
                                <div className="card-body px-5 d-flex flex-column justify-items-center align-items-center text-center no-trans-cont">
                                    <div className="p-5 py-0">
                                        <img src="assets/images/illustration-images/empty-transactions.svg" className="img mb-4"/>
                                    </div>
                                    <h4 className="fw-bold">No Transactions Yet</h4>
                                    <p>No transactions have been registered with the student, you can start by sending them money first </p>
                                    <a className="font-size-24px d-none" href="" data-bs-toggle="modal" data-bs-target="#walletTopUp">Send Money</a>
                                    <a href="javascript: void(0);" data-bs-toggle="modal" data-bs-target="#walletTopUp" className="text-primary font-16">Send Money <span className="flip-x"><span ><i class="mdi mdi-arrow-right-thick"></i></span></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-7 col-sm-12 ">
                    <div className="card expenditure-card no-shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title mb-0 d-none">Expenditure</h4>
                            <small className="mb-4 text-muted d-none">The last 12 Months for {studentProfile.institution != undefined && studentProfile.firstName+" "+studentProfile.middleName}</small>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="member-salary-chart" className="apex-charts" dir="ltr"></div>
                                </div>

                                <hr className="d-none" />


                                <div className="col-lg-12  col-sm-12 mb-3 d-none">
                                    <div className="text-muted pt-5">
                                        <div className="row">
                                            <div className="col-auto mb-4">
                                                <div className="text-capitalize pe-4">
                                                    <p className="mb-0">Last month's Expenditure</p>
                                                    <h5>KES 639</h5>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="text-capitalize">
                                                    <p className="mb-0">This month's Expenditure</p>
                                                    <h4 className="d-flex flex-column">
                                                        <span className="pr-2">KES 562</span>
                                                        <div className="font-size-12 mt-1 text-muted"><span className="badge badge-soft-success font-size-12 me-1"> + 0.2% </span> From previous period</div>
                                                    </h4>
                                                    
                                                </div>
                                                <div className="mt-3 d-none">
                                                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View Details <i className="mdi mdi-chevron-right ms-1"></i></a>
                                                </div>
                                            </div>
                                            

                                            
                                            
                                        
                                        </div>                                                
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div>
                                        <div className="row">
                                            <h4 className="card-title font-12px pt-5 mb-0 ">All Accounts summary for {firstStudent.firstName}</h4>
                                            <p className="text-muted">Expenditure and transactions </p>
                                        </div>
                                    </div>
                                    <div>

                                        {allBlinkAccounts.length> 0 && allBlinkAccounts.slice(0,40).map((account, index)=>(
                                            
                                                <div className="row">
                                                    <div className="d-none">Testing to see if my if else statememnt might work</div>
                                                        {StdFunctions.isActiveAccount(account.accountStatus) ? (
                                                        <div className={`bg-soft px-3 py-2 mb-3 d-flex align-items-center justify-content-between text-capitalize ${StdFunctions.isPocketMoney(account.blinkersAccountType) ? "bg-warning" : "bg-danger "}`}>
                                                        {/* <div className={'bg-danger bg-soft px-3 py-2 mb-3 d-flex align-items-center justify-content-between text-capitalize ${StdFunctions.isWelfareAccount(account.blinkersAccountType)?"d-none":""}'}> */}
                                                            <div className="d-flex align-items-center">

                                                                <div className="me-3 d-sm-none d-md-flex">
                                                                    {StdFunctions.isWelfareAccount(account.blinkersAccountType) ? (
                                                                        <img className="me-2" src="assets/images/blink-accounts/welfare.svg" alt="" height="40px"/>
                                                                        
                                                                        ) : (
                                                                        <></>
                                                                    )}
                                                                    {StdFunctions.isPocketMoney(account.blinkersAccountType) ? (
                                                                        <img className="me-2" src="assets/images/blink-accounts/card.svg" alt="" height="40px"/>
                                                                        
                                                                        ) : (
                                                                        <></>
                                                                    )}
                                                                    
                                                                </div>

                                                            <div>
                                                                <h6 className="mb-0 text-capittalize">{account.accountName}</h6>
                                                                <small className="mb-0 p-0">Acc Type: <strong>{StdFunctions.removeUnderscore(account.blinkersAccountType)}</strong></small>
                                                                {" "}
                                                                <small className="mb-0 p-0">Acc No.: <strong>{StdFunctions.chunkSubstr(account.accountNumber,4)}</strong></small>
                                                            </div>
                                                        </div>

                                                        <div className="text-right ms-3 d-flex flex-column">
                                                            {StdFunctions.isWelfareAccount(account.blinkersAccountType) ? (
                                                                <small className="mb-0 pb-0">Target Amount</small>
                                                                
                                                                    ) : (
                                                                       <div className="text-right">
                                                                       <small className="mb-0 pb-0 d-sm-none d-md-block w-100">Current Balance</small><small className="mb-0 pb-0 d-sm-block d-md-none w-100">Bal.</small>
                                                                       </div>
                                                                        
                                                            )}

                                                            {StdFunctions.isWelfareAccount(account.blinkersAccountType) ? (
                                                                <strong className="">{StdFunctions.kenyaCurrency(account.targetAmount)}</strong>
                                                                
                                                                    ) : (
                                                                        <strong className="">{StdFunctions.kenyaCurrency(account.currentBalance)}</strong>
                                                            )}
                                                           
                                                            <></>
                                                            
                                                            
                                                                
                                                                
                                                        </div>
                                                    
                                                    </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    
                                                    
                                                </div>
                                            ))
                                            
                                        }  
                                                                               
                                    </div>
                                </div>

                
                            </div>
                            
                        </div>
                    </div>

                </div>
                

            </div>
            {/* <!-- end row --> */}



            </div>

            {/* transaction details modal */}
        <div className="modal fade" id="transaction-details" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-centered modal-md text-center" role="document">
              <div className="modal-content">
                  <div className="modal-header d-none">
                      <span className="badge badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Send Money</span>
                  
                          
                      <button type="button" className="btn btn-light position-relative p-0 avatar-xs rounded-circle close-modal" data-bs-dismiss="modal" aria-label="Close">
                          <span className="avatar-title bg-transparent text-reset font-18px">
                              <i className="bx bx-x"></i>
                          </span>
                      </button>
  
                  </div>
                  <div className="modal-body">
                      <div className="d-flex justify-content-between align-items-center">
                          <span className="badge  badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Transaction details</span>
                  
                          
                      <button type="button" className="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-bs-dismiss="modal" aria-label="Close">
                          <span className="avatar-title bg-transparent text-reset font-18px">
                              <i className="bx bx-x"></i>
                          </span>
                      </button>
                      </div>
  
                      <div className="payment-panel-parent">
                          <div className="">
                                <div className="flex-shrink-0 me-3 mt-4 mb-3">
                                    <div class="avatar-md mx-auto ">
                                        <span class="avatar-title rounded-circle bg-random font-size-24">
                                            {studentProfile.institution != undefined && studentProfile.firstName.charAt(0)+""+studentProfile.middleName.charAt(0)}
                                        </span>
                                    </div>
                                    <img className="rounded-circle avatar-sm d-none" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="65"/>
                                </div>
                                <h4 className="mb-0 text-uppercase">
                                {studentProfile.institution != undefined && studentProfile.firstName+" "+studentProfile.middleName}
                                </h4>
                                <p className="text-muted text-uppercase mb-2">{firstStudent?.blinkId}</p>
                                <span className="text-uppercase badge badge-soft-info">
                                    {StdFunctions.removeUnderscore(transactionServiceCategory)}
                                </span>
                                <h2 className=" text-uppercase mt-4 mb-1">
                                        {StdFunctions.isGoodsPurchase(transactionServiceCategory)?(
                                            <span className="">-{StdFunctions.kenyaCurrency(transactionDetails?.amount)}</span>
                                            
                                        ):(
                                            <span className="">{StdFunctions.kenyaCurrency(transactionDetails?.amount)}</span>
                                        )}
                                   
                                </h2>
                                <p className="text-uppercase mb-4">Transaction Fee <span className="fw-semibold">{StdFunctions.kenyaCurrency(transactionFee)}</span> </p>

                            </div>
                            <div className="px-4 px-sm-0 mb-4 transactions-details-table text-left d-flex justify-items-center align-items-center w-100">
                            
                                <div className="d-flex flex-column boarder-grey border-1 justify-content-center align-items-center w-100  p-3">
                                   
                                    <table className="table table-borderless mb-0 mt-0 table-sm single-receipt">
                                            {StdFunctions.isMerchantPay(transactionServiceCategory)?(
                                                <></>
                                            ):(
                                               <p className="mb-0 pb-0 mt-3"><blockquote className="text-center"><span className="text-muted">Receipt No.</span> {transactionDetails?.receiptNumber}</blockquote></p>
                                                                                          
                                            )}

                                            {StdFunctions.isDepositTransaction(transactionDetails?.transType)?(
                                                <h4><blockquote className="text-center"><span className="text-muted text-uppercase">Received From:</span><br className="d-sm-flex d-md-none"/> <span className="text-info">{ StdFunctions.phoneOutput(transactionDetails?.accountFrom)}</span></blockquote></h4>
                                            ):(
                                                  <></>                                        
                                            )}
                                            {StdFunctions.isMoneyTransfer(transactionDetails?.transType)?(
                                                <h4><blockquote className="text-center"><span className="text-muted text-uppercase">Received From:</span><br className="d-sm-flex d-md-none"/> <span className="text-info">{ StdFunctions.phoneOutput(transactionDetails?.accountFrom)}</span></blockquote></h4>
                                            ):(
                                                  <></>                                        
                                            )}
                                            <thead className="table-border">
                                                {StdFunctions.isMerchantPay(transactionServiceCategory)?(
                                                    <tr>
                                                    <th colspan="4" className="text-black text-uppercase pb-0 mb-0">
                                                        <blockquote className=""><span className="text-muted">Receipt No.</span> {transactionDetails?.receiptNumber}</blockquote>
                                                    </th>
                                                </tr>
                                            ):(
                                                <></>
                                            )}

                                            {StdFunctions.isMerchantPay(transactionServiceCategory)?(
                                                <tr>
                                                    <th scope="col" colspan="2">Items</th>
                                                    <th scope="col" className="text-center">Qty</th>
                                                    <th scope="col" className="text-right">Price</th>
                                                    <th scope="col" className="text-right">Total</th>
                                                </tr>  
                                            ):(
                                                <></>
                                            )}
                                            
                                        </thead>
                                        <tbody>
                                        {transactionProducts?.length>0 && StdFunctions.isMerchantPay(transactionServiceCategory)===true && transactionProducts.map((productItem,index)=>(
                                            <tr className="text-capitalize">
                                                <th scope="row">{index+1}.</th>
                                                <td>{productItem.productName}</td>
                                                <td className="text-center">{productItem.units}</td>
                                                <td className="text-right">{StdFunctions.kenyaCurrency(productItem.unitPrice)}</td>
                                                <td className="text-right">{StdFunctions.kenyaCurrency(productItem.unitPrice*productItem.units)}</td>
                                            </tr>
                                        ))}
                                            
                                           
                                            
                                        </tbody>
                                        {StdFunctions.isMerchantPay(transactionServiceCategory)?(
                                            <tfoot><tr><th colspan="2" className="pt-3 text-uppercase">Total</th><th className="text-center pt-3">{boughtItemsQty}</th><th colspan="2" className="text-right pt-3">{StdFunctions.kenyaCurrency(transactionDetails?.amount)}</th></tr></tfoot>
                                            
                                        ):(
                                            <></>
                                        )}
                                    </table>
                                </div>                                        
                            </div>
                            <div className="px-4 pt-3 mt-3 px-sm-0">
                                <div className="border-1px-solid bg-light px-4 py-3 mb-3 d-flex align-items-center justify-content-between border-15px">
                                    <div className="d-flex align-items-center">


                                    <div class="d-flex align-items-center">
                                            {StdFunctions.isGoodsPurchase(transactionServiceCategory)?(
                                                <div class="avatar-xs me-3">
                                                    <span class="avatar-title rounded-circle bg-danger text-white font-size-18">
                                                        <i class="mdi mdi-arrow-up-bold"></i>
                                                    </span>
                                                </div>                                                
                                            ):(
                                                <div class="avatar-xs me-3">
                                                    <span class="avatar-title rounded-circle bg-success text-white font-size-18">
                                                        <i class="mdi mdi-arrow-down-bold"></i>
                                                    </span>
                                                </div>
                                            )}
                                            
                                            </div>
                                            <div className="text-left">
                                                <h6 className="mb-0 text-capitalize">Receipted At <span className="fw-semibold">{transactionTackShop}</span>  
                                                <small> ({" "+transactionInstitution})</small></h6>
                                                <p className="mb-0 p-0 text-capitalize">
                                                {
                                                    Moment(transactionDetails?.dateCreated).add(3, 'hours').calendar(null, {
                                                    sameElse: 'DD MMM YYYY  hh:mm A'
                                                })}
                                                </p>
                                            </div>
                                        </div>

                                       
                                    
                                </div>
                            </div>

                            
                          
                      </div>
                  </div>
                  
              </div>
              </div>
          </div>
        </>
    );

}
export default Home;
import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import AuthService from "../../services/auth.service";
import StdFunctions from "../../services/standard.functions";
import Moment from 'moment'
import {Link,useLocation,matchRoutes,useParams} from "react-router-dom";
import $ from 'jquery';

// import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
const BlinkerDetails =()=> {
    const transactionsCountTwo=0
    const { id } = useParams();
    const theNewStudentId=id
     // loader setting
     const [loading, setLoading] = useState(false);
     const [quote, setQuote] = useState({});
     const [selectedStudentId,setSelectedStudentId]=useState(theNewStudentId)

    const [students, setstudents] = useState([])
    const [studentProfile, setStudentProfile] = useState({})

    const [fetchedStudentDetails,setFetchedStudentDetails]=useState({})
    //Accounts states start here
    const [allBlinkAccounts,setAllBlinkAccounts]=useState([])
    const [numOfAccounts,setNumOfAccounts]=useState(0)
    const[selectedPocketMoneyId,setselectedPocketMoneyId]=useState("")
    
    const[theMonth,setTheMonth]=useState(Moment().startOf('month').format('MMMM, YYYY'))
    const[theWeek,setTheWeek]=useState(Moment().startOf('week').format('DD MMM YYYY')+"-"+Moment().endOf('week').format('DD MMM YYYY'))
    const[theDate,setTheDate]=useState(Moment().format('DD MMM YYYY'))
    
    const[weekStart,setWeeekStart]=useState(Moment().startOf('week').format('YYYY-MM-DD 00:00:00'))
    const[weekEnd,setWeeekEnd]=useState(Moment().endOf('week').format('YYYY-MM-DD 23:59:59'))
    
    const[monthStart,setMonthStart]=useState(Moment().startOf('month').format('YYYY-MM-DD 00:00:00'))
    const[monthEnd,setMonthEnd]=useState(Moment().endOf('month').format('YYYY-MM-DD 23:59:59'))

    const[dateStart,setDateStart]=useState(Moment().format('YYYY-MM-DD 00:00:00'))
    const[dateEnd,setDateEnd]=useState(Moment().format('YYYY-MM-DD 23:59:59'))

    const[dailyUsage,setDailyUsage]=useState("0")
    const[weeklyUsage,setWeeklyUsage]=useState("0")
    const[monthlyUsage,setMonthlyUsage]=useState("0")

    const[dailyDep,setDailyDep]=useState("0")
    const[weeklyDep,setWeeklyDep]=useState("0")
    const[monthlyDep,setMonthlyDep]=useState("0")
    






    //getting selected account pocket money id
    const[blinkWalletAccountNum,setBlinkWalletAccountNum]=useState("")
    const[cardBal,setCardBal]=useState("")

    const [firstStudent,setFirstStudent]=useState({})
    const [schoolName,setSchoolName]=useState("")
    const [myBlinkersCount,setMyBlinkersCount]=useState(0);
    const [hasBlinkers,setHasBlinkers]=useState(false)

    const idParams=useParams();
    console.log("The params are")
    console.log(JSON.stringify(idParams))
    //alert("we are here")

   

    useEffect(() => {
        console.log(selectedStudentId)
        //load before showiing data
        setLoading(true);
        //const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"));
        const allBlinkers=AuthService.getLogedInAssociates()
        setstudents(allBlinkers)
        setFirstStudent(allBlinkers[selectedStudentId])
        setMyBlinkersCount(allBlinkers.length)
        console.log(allBlinkers[selectedStudentId])

        AuthService.getStudentDetails(selectedStudentId).then((res)=>{
            
              
            setStudentProfile(res.data.data.userProfile)
            setBlinkWalletAccountNum(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').accountNumber)
            setCardBal(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').currentBalance)
            console.log("the blink wallet account Id is:"+blinkWalletAccountNum)
            //alert(blinkWalletAccountNum)
            setFetchedStudentDetails(res.data.data)
            console.log(res.data.data)
            setSchoolName(res.data.data.userProfile.institution.institutionName)
            //all other accounts
            setAllBlinkAccounts(res.data.data.userProfile.blinkaccounts)
            setNumOfAccounts(allBlinkAccounts.length)
            setselectedPocketMoneyId(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').blinkAccountId)

            //alert(numOfAccounts)
            console.log("All accounts for first blinker are "+allBlinkAccounts)
            console.log(allBlinkAccounts)
            console.log(studentProfile)
            setLoading(false);


        }).catch((err)=>{

        })
        
    },[selectedStudentId])

    // Daily transactions
    useEffect(()=>{
        setDailyUsage("0")
        
        let theAmounts=0 
        let deposit=0

        AuthService.getTransactionsByDate(selectedStudentId,dateStart,dateEnd).then((res)=>{
            res.data.data.map((transaction,index)=>{
                if(transaction.transType==="Merchant_Pay"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                    
                }

                if(transaction.transType==="Money_transfer"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                }
                setDailyUsage(theAmounts)
                
            })

            
        }).catch((err)=>{
            console.log(err)
            //alert("error")
            setDailyUsage(0)
        })

    },[selectedStudentId,theDate])

    //weekly transactions
    useEffect(()=>{
        setWeeklyUsage("0")
        let theAmounts=0 
        let depAmount=0
        AuthService.getTransactionsByDate(selectedStudentId,weekStart,weekEnd).then((res)=>{
            res.data.data.map((transaction,index)=>{
                if(transaction.transType==="Merchant_Pay"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                    
                }
                if(transaction.transType==="Money_transfer"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                }

                if(transaction.transType==="Deposit"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    depAmount+=parseFloat(transaction.amount)
                }

                setWeeklyUsage(theAmounts)
                setWeeklyDep(depAmount)
            })

            
        }).catch((err)=>{
            console.log(err)
            //alert("error")
            setWeeklyUsage(0)
        })


    },[theWeek,selectedStudentId])

    // monthly usage
    useEffect(()=>{
        setMonthlyUsage("0")
        let theAmounts=0 
        let depAmount=0

        AuthService.getTransactionsByDate(selectedStudentId,monthStart,monthEnd).then((res)=>{
            res.data.data.map((transaction,index)=>{
                if(transaction.transType==="Merchant_Pay"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                    
                    
                }
                if(transaction.transType==="Money_transfer"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    theAmounts+=parseFloat(transaction.amount)
                }

                if(transaction.transType==="Deposit"){
                    console.log("The transaction amount of item "+index+" is "+transaction.amount)
                    depAmount+=parseFloat(transaction.amount)
                }

                setMonthlyUsage(theAmounts)
                setMonthlyDep(depAmount)
            })

            
        }).catch((err)=>{
            console.log(err)
            //alert("error")
            setMonthlyUsage(0)
        })


        

    },[theMonth,selectedStudentId])

    //console.log(fetchedStudentDetails.userProfile.institution.institutionName)
   

    
    const getInstitututionName=(studentId)=>{
        var studentInstitutionName
        AuthService.getStudentDetails(studentId).then((res)=>{
            console.log(res)
          //  setSchoolName(res.data.data.associates[0].institution.institutionName)
          
          studentInstitutionName=res.data.data.associates[0].cardId
            //alert(schoolName);
            console.log("the school Name is "+studentInstitutionName)
            
        })
        return studentInstitutionName
    }

    
    
   
    return ( 
        <>

        {loading ? (
            <div className="content-loader-container bg-black bg-opacity-50">
                <div className="bg-white p-3 ">
                    <div className="p-3">
                        <div className="spinner-chase">
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                            <div className="chase-dot"></div>
                        </div>
                    </div>
                    <p className="m-0 p-0 text-u">Please Wait</p>
                </div>
            </div>
            ):(
                <h1 className="d-none">Found</h1>
            )
        }

        <Helmet>
        <title>Blink! | {studentProfile.firstName+" "}Account Details</title>
        </Helmet>    {/* the modals container */}
        <div className="container-fluid">

        {/* <!-- start page title --> */}
        <div className="row d-sm-none d-md-flex">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">{studentProfile.firstName} Details</h4>

                    <div className="page-title-right d-sm-none d-md-flex">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">Dashboards</Link></li>
                            <li className="breadcrumb-item"><Link to="/MyBlinkers">My blinkers</Link></li>
                            <li className="breadcrumb-item active">{studentProfile.firstName}</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

        <div className="row d-sm-none d-md-none ">
            <div className="col-12">
                <h4 className="text-black pt-4 pb-3 p-3 border-bottom-1px fw-medium ">Transactions</h4>
            </div>
        </div>
        {/* <!-- end page title --> */}
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body text-center align-items-center justify-content-center">

                        {/* profile picture */}
                            <div class=" mb-2 position-relative">
                                <button class="avatar-title change-pic rounded-circle btn btn-info font-size-16">
                                    <i class="mdi-camera-outline mdi font-size-20 text-white"></i>
                                </button>
                                <img src="assets/images/users/avatar-1.jpg" class="avatar-md rounded-circle img-thumbnail d-none" alt=""/>
                                <div class="avatar-xl avatar-card mx-auto ">
                                    <span class="avatar-title rounded-circle bgrandom7 font-size-30 border-white text-uppercase">                                                
                                        {studentProfile?.institution != undefined && studentProfile.firstName.charAt(0)+""+studentProfile.middleName.charAt(0)}
                                    </span>
                                </div>
                            </div>
                        {/* end of profile picture */}

                        <div className="flex-grow-1">
                            <h5 className="font-size-14 mt-3 mb-0 text-capitalize">{studentProfile?.firstName+" "+studentProfile?.middleName+" "+studentProfile.lastName}</h5>
                            <small className="text-muted text-capitalize">{schoolName}</small>
                        </div>
                        <div>
                            <button className="btn btn-info waves-effect waves-light mt-3">Edit Details</button>
                        </div>


                        <div className="mt-4">
                            <h1 className="mb-0 pb-0 text-black">{StdFunctions.kenyaCurrency(cardBal)}</h1>
                            <small className="text-muted text-capitalize text-black fw-semibold">Wallet balance.</small>
                            <h5 className="font-size-14 mt-3 mb-0 text-capitalize">Blink ID: <span className="text-black fw-semibold">{StdFunctions.creditCard2(blinkWalletAccountNum)}</span></h5>
                        </div>
                        

                        
                    </div>
                    <div className="col-12 bg-success bg-soft">
                        <div className="row text-left p-4">
                            <div className="col-6 border-right">
                                <div class="avatar-xs me-0 d-none">
                                    <span class="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                        <i class="mdi mdi-arrow-up-bold"></i>
                                    </span>
                                </div>
                                <p className="fw-semibold text-black mb-0">KES 200.00</p>
                                <small>Avg. Monthly Deposits</small>
                            </div>

                            <div className="col-6">
                                <p className="fw-semibold text-black mb-0">KES 200.00</p>
                                <small>Avg. Monthly Usage</small>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="mb-0">Was registered on  
                            { " "+Moment(fetchedStudentDetails.dateCreated).add(3, 'hours').calendar(null, {sameElse: 'DD MMM YYYY  hh:mm A' })}
                        </p>
                    </div>
                    
                    <div className="card-header bg-white border-top">
                        <h6 className="text-uppercase mb-3">Account Options</h6>

                        <a className="d-flex align-items-center py-2">
                            <span className="mdi mdi-calendar-alert me-2 font-24px "></span>
                            <span className="flex-grow-1"> Change Expenditure Limit</span>
                            <span class="d-flex align-items-center change-icon">
                                <i class="bx bx-chevron-right font-size-30 text-primary"></i>
                            </span>
                        </a>

                        <a className="d-flex align-items-center py-2">
                            <span className="mdi-comment-alert-outline mdi me-2 font-24px "></span>
                            <span className="flex-grow-1"> Notification Level</span>
                            <span class="d-flex align-items-center change-icon">
                                <i class="bx bx-chevron-right font-size-30 text-primary"></i>
                            </span>
                        </a>

                        <a className="d-flex align-items-center py-2 text-danger">
                            <span className="mdi mdi-cancel me-2 font-24px "></span>
                            <span className="flex-grow-1"> Block Tom</span>
                            <span class="d-flex align-items-center change-icon">
                                <i class="bx bx-chevron-right font-size-30 text-danger"></i>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-sm-12 col-md-6 col-lg-8">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                        <div className="card-header bg-white d-flex justify-content-between align-items-center w-100 border-bottom p-3">
                            <div class="d-flex w-100">
                                <div class="d-flex align-items-center justify-content-between w-100 ">
                                    <h4 class="card-title mb-0 me-3">This Month's Summary</h4>
                                    <div>
                                        <div class="input-group input-group-sm">
                                            <select class="form-select form-select-sm">
                                                <option value="JA" selected="">Jan</option>
                                                <option value="DE">Dec</option>
                                                <option value="NO">Nov</option>
                                                <option value="OC">Oct</option>
                                            </select>
                                                <label class="input-group-text">Month</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="card-header bg-white border-bottom p-3">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-4 py-2">
                                        <div className="border border-grey p-3 rounded ">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-warning bg-soft text-warning font-size-18">
                                                        <i className="mdi mdi-calendar-today"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Today's Expenditure</h5>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-muted mt-3">
                                                        <p>{theDate}</p>
                                                        <h4>{StdFunctions.kenyaCurrency(dailyUsage)}</h4>
                                                        <p className="mb-0 text-uppercase">
                                                            <span className="badge rounded-pill bg-success">
                                                                <i className="mdi mdi-arrow-up-bold pe-1"></i>{StdFunctions.kenyaCurrency(dailyDep)} DEPOSIT
                                                            </span>
                                                        </p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 py-2">
                                        <div className="border border-grey p-3 rounded ">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-info bg-soft text-info font-size-18">
                                                        <i className="mdi mdi-calendar-range"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0">Weekly Expenditure</h5>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-muted mt-3">
                                                        <p>{theWeek}</p>
                                                        <h4>{StdFunctions.kenyaCurrency(weeklyUsage)}</h4>
                                                        <p className="mb-0 text-uppercase">
                                                            <span className="badge rounded-pill bg-success">
                                                                <i className="mdi mdi-arrow-up-bold pe-1"></i>{StdFunctions.kenyaCurrency(weeklyDep)} DEPOSIT
                                                            </span>
                                                        </p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 py-2">
                                        <div className="border border-grey p-3 rounded ">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title rounded-circle bg-success bg-soft text-success font-size-18">
                                                        <i className="mdi mdi-calendar-month"></i>
                                                    </span>
                                                </div>
                                                <h5 className="font-size-14 mb-0 text-capitalize">This month</h5>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-muted mt-3">
                                                        <p>{theMonth}</p>
                                                        <h4>{StdFunctions.kenyaCurrency(monthlyUsage)}</h4>
                                                        <p className="mb-0 text-uppercase">
                                                            <span className="badge rounded-pill bg-success">
                                                                <i className="mdi mdi-arrow-up-bold pe-1"></i>{StdFunctions.kenyaCurrency(monthlyDep)} DEPOSIT
                                                            </span>
                                                        </p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>

                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- end row --> */}
        </div>

        </>
    );
}
export default BlinkerDetails;
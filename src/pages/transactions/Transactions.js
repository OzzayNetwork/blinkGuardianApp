import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import AuthService from "../../services/auth.service";
import StdFunctions from "../../services/standard.functions";
import Moment from 'moment'
import {Link,useLocation,matchRoutes} from "react-router-dom";
import $ from 'jquery';

// import   JquerryAccordion   from "./customPlugins/jquerryAccordion";
const Transactions =()=> {
    const transactionsCountTwo=0

    const [students, setstudents] = useState([])
    const [studentProfile, setStudentProfile] = useState({})

    //getting number of transactions per blinker
    const[transactionsCount,getTransactionsCount]=useState("")

    // this stores all the student transactions
    const [studentTransactions, setStudentTransactions] = useState([])

    //getting selected account pocket money id
    const[blinkWalletAccountNum,setBlinkWalletAccountNum]=useState("")

    const [firstStudent,setFirstStudent]=useState({})
    const [schoolName,setSchoolName]=useState("")
    const [myBlinkersCount,setMyBlinkersCount]=useState(0);

     useEffect(() => {
        $('.product-items').each(function(index) {
            const products = $(this).text()
           $(this).text(StdFunctions.removeFirstCharacter(products))
        });
        //function that removed the first character
       
        //const allBlinkers=JSON.parse(localStorage.getItem("guardianBlinkers"));
        const allBlinkers=AuthService.getLogedInAssociates()
        setstudents(allBlinkers)
        setFirstStudent(allBlinkers[0])
        setMyBlinkersCount(allBlinkers.length)
        //console.log(allBlinkers[0])
        
        AuthService.getStudentDetails(AuthService.getLogedInAssociates()[0].userId).then((res)=>{
            setStudentProfile(res.data.data.userProfile)
            
            //setBlinkWalletAccountNum(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').accountNumber)
            setBlinkWalletAccountNum(res.data.data.userProfile.blinkaccounts.find(x=>x.blinkersAccountType==='POCKECT_MONEY').accountNumber)
            console.log("the blink wallet account Id is:"+blinkWalletAccountNum)
            //alert(blinkWalletAccountNum)
            console.log(studentProfile)
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
            //getTransactionsCount(res.data.length)
            //transactionsCountTwo=res.data.len
            
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

    

    

    console.log(students);
    const blinkerClicked=(studentId,clickedIndex)=>{
        AuthService.getStudentDetails(studentId).then((res)=>{
           
            console.log(res)
            setSchoolName(res.data.data.associates[0].institution.institutionName)
            //alert(schoolName);
            console.log("the school Name is "+schoolName)
            setStudentProfile(res.data.data.userProfile)
            console.log(studentProfile)
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

            console.log(studentProfile)

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

            

          

        }).catch((err)=>{
            console.log(err)
        })
        }).catch((err)=>{

        })
        $('.product-items').each(function(index) {
            const products = $(this).text()
           $(this).text(StdFunctions.removeFirstCharacter(products))
        });
        })
        // const returnedData= AuthService.getStudentDetails(studentId)
        // const GetSchoolName=returnedData.data.cardStatus
        
        $('.product-items').each(function(index) {
            const products = $(this).text()
           $(this).text(StdFunctions.removeFirstCharacter(products))
        });
       

    }

    //date formating
    
    
   
    return ( 
        <>

        <Helmet>
        <title>Blink! | Transactions</title>
        </Helmet>    {/* the modals container */}
        <div className="container-fluid">

{/* <!-- start page title --> */}
<div className="row">
    <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Blink Transactions</h4>

            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><Link to="/">Dashboards</Link></li>
                    <li className="breadcrumb-item active">{firstStudent.firstName} Transactions</li>
                </ol>
            </div>

        </div>
    </div>
</div>
{/* <!-- end page title --> */}
<div className="row">
    <div className="col-12">
        <div className="card">
            <div className="card-header bg-white d-flex justify-content-between align-items-center w-100 border-bottom">
                <div className="col-sm-4 col-md-6 col-lg-8 col-xl-5">
                <div className="dropdown d-inline-block w-100 d-flex align-items-center">
                    <button type="button" className="btn header-item waves-effect align-items-center w-100  text-left d-flex p-0" id="blinkers-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="flex-shrink-0 me-3">
                            <img className="rounded-circle d-none" src="assets/images/logo-files/blink-icon2.svg" alt="Generic placeholder image" height="65"/>
                            <div className="avatar-sm mx-auto ">
                                <span className="avatar-title rounded-circle bg-random font-size-24">
                                    {studentProfile.institution != undefined && firstStudent.firstName.charAt(0)+""+firstStudent.middleName.charAt(0)}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex-grow-1 chat-user-box me-3">
                            <h6 className="user-title m-0 font-size-18">{firstStudent?.firstName+" "+firstStudent?.middleName}</h6>
                            <p className="text-muted m-0 p-0 font-size-12">{firstStudent?.blinkId}</p>
                        </div>

                        
                        {StdFunctions.isBlinkersMore(students.length)?(
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="d-flex align-items-center"><small className="text-info mr-3">Click to change</small> <i className="mdi mdi-chevron-down  d-xl-inline-block me-3 font-21"></i></span>
                                    </div>
                                ):(
                                   <span></span>
                                )}
                        
                    </button>
                    
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-start p-0 w-100">
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
                                            <p className="user-title m-0">{item.firstName+" "+item.middleName}</p>
                                            <p className="text-muted">{item.blinkId}</p>
                                        </div>                                                            
                                    </a>
                                    </div>
                                ))
                                
                            }                                           
                        
                        
                        
                    </div>

                </div>
                </div>
            </div>
            <div className="card-body show-trans-cont">
                <div className="table-responsive">

                    <table className="table align-middle table-nowrap table-hover  contacts-table table-striped " id="datatable-buttons">
                        <thead className="table-light text-capitalize">
                            <tr className="table-dark">
                                <th></th>
                                <th>Receipt No.</th>
                                <th scope="col">Tack Shop Name</th>
                                <th>Deposit from</th>
                                <th scope="col">Items Bought</th>
                                <th scope="col">Date</th>
                                <th scope="col" className="text-right">Transaction Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {studentTransactions.length>0 && studentTransactions.map((transaction,index)=>(
                                                
                                <tr>
                                <td>
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
                                </td>
                                <td className="text-capitalize text-nowrap"><strong>{transaction.receiptNumber}</strong></td>
                                <td className="text-capitalize text-nowrap">
                                    {StdFunctions.isDepositTransaction(transaction.transType)?(
                                        <strong>-</strong>  
                                    ):(
                                        transaction.blinkMerchant.merchantName                                                                   
                                    )}
                                </td>
                                <td className="text-capitalize text-nowrap">
                                    {StdFunctions.isDepositTransaction(transaction.transType)?(
                                        StdFunctions.phoneOutput(transaction.accountFrom)
                                    ):(
                                        <strong>-</strong>                                                                  
                                    )}
                                </td>
                                <td className="text-capitalize text-nowrap">
                                    {StdFunctions.isArrayEmpty(transaction.productsSold.length)?(
                                       <strong>-</strong>
                                    ):(
                                    <span></span>
                                    )}
                                    <span className="product-items">                                    
                                        {
                                            transaction.productsSold.length> 0 && transaction.productsSold.map((product,index)=>(<span>,{product.productName} </span>)) 
                                        }  
                                    </span>
                                                                    
                                </td>
                                <td className="text-capitalize text-nowrap">
                                    {
                                        Moment(transaction.dateCreated).calendar(null, {
                                        sameElse: 'DD MMM YYYY  hh:mm A'
                                    })}
                                </td>
                                <td className="text-capitalize text-nowrap text-right fw-bold">
                                {StdFunctions.isDepositTransaction(transaction.transType)?(
                                                            <h5 className="font-size-14 mb-1 text-success">{StdFunctions.kenyaCurrency(transaction.amount)}</h5>
                                                            ):(
                                                                <h5 className="font-size-14 mb-1 text-danger">{StdFunctions.kenyaCurrency(transaction.amount)}</h5>                                                                 
                                                            )}
                                </td>
                               
                                <td>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3" data-bs-toggle="modal" data-bs-target=".receipting-modal">View Details</button>
                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light text-nowrap me-3" data-bs-toggle="modal" data-bs-target=".receipting-modal">Items Bought</button>

                                    </div>
                                </td>
                            </tr>              
                            ))}
                           
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
            <div className="card-body no-trans-cont px-5 d-flex flex-column justify-items-center align-items-center text-center">
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
    {/* <!-- end col --> */}
</div>

{/* <!-- end row --> */}
</div>
        
        </>
    );
}
export default Transactions;
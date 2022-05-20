import {useState} from 'react'
import PersonalInfo from "./PersonalInfo"
import CompanyInfo from "./CompanyInfo"
import SecurityInfo from "./SecurityInfo"

const Register = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        companyName:"",
        usdot:"",
        timeZone:"",
        phone:""
    });

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        console.log(page)
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <CompanyInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <SecurityInfo formData={formData} setFormData={setFormData} />;
        }
    };

    const checkPage = () => {
        if (page === FormTitles.length - 1) {
          //alert("FORM SUBMITTED");
          console.log(formData);
        } else {
          setPage((currPage) => currPage + 1);
        }
    }

    return (
        <>
        <div className="wrapper-page">
            <div className="container-fluid p-0">
                <div className="card ">
				    <div className="card-body">
                        <div className="text-center mt-4">
                            <div className="mb-3">
                                <a href="index.html" className="auth-logo">
                                    <img src="assets/images/BLE-Logo.png"  className="logo-dark mx-auto" alt="logo"/>
                                   
                                </a>
                            </div>
					 
					        <h4 className="text-center font-size-18 mb-3"><b>Create An Account</b></h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                {/* <form id="msform"> */}
                                    <ul id="progressbar">
                                        <li className={page>=0 ? "active" : ""}>{FormTitles[page]}</li>
                                        <li className={(page >= 1) ? "active" : ""}>{FormTitles[page]}</li>
                                        <li className={(page > 1 && page<=2) ? "active" : ""}>{FormTitles[page]}</li>
                                    </ul>
                                    {PageDisplay()}
                                    {/* <button name="next" className="next btn btn-primary custom-btn  wave-effect wave-light  float-right">Next &nbsp; <i className="dripicons-arrow-thin-right"></i></button> */}
                                    
                                    <button className=" btn btn-primary  wave-effect wave-light custom-btn  float-right" onClick={() => {
                                    if (page === FormTitles.length - 1) {
                                        //alert("FORM SUBMITTED");
                                        console.log(formData);
                                    } else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                    }}>{page === FormTitles.length - 1 ? "Create":"Next"} &nbsp;{page === FormTitles.length - 1 ? <i className="fa fa-plus" aria-hidden="true"></i> : <i className="dripicons-arrow-thin-right" aria-hidden="true"></i>}</button>
                                    <button disabled={page == 0}
                                    onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                    }} className="previous btn btn-outline-secondary  custom-btn"><i className="dripicons-arrow-thin-left" aria-hidden="true"></i>&nbsp; Back</button>
                                {/* </form> */}
                                
                                <div className="col-12 mt-3 border-top text-center">
                                    <label className="pt-4">Already Registerd ? <a href="/login">Login</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </div>
        </>
    )
}

export default Register
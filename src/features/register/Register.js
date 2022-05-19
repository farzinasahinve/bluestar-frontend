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
        if (page === 0) {
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
        return <CompanyInfo formData={formData} setFormData={setFormData} />;
        } else {
        return <SecurityInfo formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <>
        <div class="wrapper-page">
            <div class="container-fluid p-0">
   
                <div class="card ">
				    <div class="card-body">
                        <div class="text-center mt-4">
                            <div class="mb-3">
                                <a href="index.html" class="auth-logo">
                                     <img src="assets/images/BLE-Logo.png"  class="logo-dark mx-auto" alt="logo"/>
                                   
                                </a>
                            </div>
					 
					        <h4 class="text-center font-size-18 mb-3"><b>Create An Account</b></h4>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mx-0">
                                <form id="msform">
                                    <ul id="progressbar">
                                        <li class="active">Account Setup</li>
                                        <li>Social Profiles</li>
                                        <li>Personal Details</li>
                                    </ul>
                                    {PageDisplay()}
                                </form>
                                
                                <div class="col-12 mt-3 border-top text-center">
                                    <label class="pt-4">Already Registerd ? <a href="login.html">Login</a></label>
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
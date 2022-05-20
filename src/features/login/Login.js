import { loginAsync, selectUser } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react"

const Login = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: '',
        remember_me:false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const authUser = useSelector(selectUser)
    
    useEffect(() => {
        if(authUser?.token) window.location.href = '/dashboard'
    },[authUser])

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateLoginForm(values))
        dispatch(loginAsync(values))
        setIsSubmitted(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted){
          console.log(values)
        }
    },[errors])
    const validateLoginForm = (values)=>{
        const errors = {}
        //const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email || !emailRegex.test(values.email)){
          errors.email = "Please enter a valid email"
        }
    
        if(!values.password){
          errors.password = "Password is required"
        }
        console.log(errors)
        return errors
    }
    return (
        <>
            <div className="container-fluid p-0">
                <div className="card ">
                    <div className="card-body">
                        <div className="text-center mt-4">
                            <div className="mb-3">
                                <a href="index.html" className="auth-logo">
                                    <img src="assets/images/BLE-Logo.png"  className="logo-dark mx-auto" alt="logo"/>
                                    
                                </a>
                            </div>
                        
                            <h4 className="text-center font-size-18 mb-3"><b>Login In to your Account</b></h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-card">
                                        <div className="form-group mb-3 row">
                                            <div className="col-12">
                                                <label className="form-label ms-1 mb-1 font-light">E-mail<span className="required">*</span></label>
                                                <input type="text" name='email' value={values.email} placeholder="E-mail" onChange={handleChange('email')} className="form-control"/>
                                                <span className="error text-danger mt-5">{errors.email}</span>
                                            </div>
                                        </div>
                                            
                                        <div className="form-group mb-3 row">
                                            <label className="form-label ms-1 mb-1 font-light">Password<span className="required">*</span></label>
                                            <div className="col-12">
                                                <input type="password" name='password' value={values.password} placeholder="Password" onChange={handleChange('password')} className="form-control"/>
                                                <span className="error text-danger mt-5">{errors.password}</span>
                                            </div>
                                        </div>
                                                
                                        <div className="form-group mb-3 row">
                                            <div className="col-12">
                                                <button className="btn btn-primary custom-btn w-100 waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
            
                                    </div>
                                </form>
                                <div className="form-group mb-3 row mt-2">
                                    <div className="col-sm-12">
                                        <a href="/forgot-password" className="float-end"><strong>Forgot your password?</strong></a>
                                    </div>
                                </div>
                                <div className="col-12 mt-3 border-top text-center">
                                    <label className="pt-4">Don't have Account? <a href="/register">Create your  Account</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}

export default Login
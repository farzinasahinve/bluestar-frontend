import React from 'react'

const RegisterSuccess = () => {
  return (
    <>
    <div className="wrapper-page">
        <div className="container-fluid p-0">
            <div className="card">
                <div className="card-body">
                    <div className="text-center mt-4">
                            <div className="mb-3">
                            <a href="index.html" className="auth-logo">
                                <img src="assets/images/BLE-Logo.png"  className="logo-dark mx-auto" alt="logo"/>
                                
                            </a>
                        </div>
                    </div>
    
                    <h4 className=" text-center font-size-18"><b>E-mail has been Sent</b></h4>
    
                    <div className="p-3">
                          <p> Confirmation email has been sent to user@gmail.com. Please check for an email from ELD and click on the included link to activate your account.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterSuccess
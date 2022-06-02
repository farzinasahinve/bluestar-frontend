import React from 'react'

const ForgotPassword = () => {
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
                        <h4 className=" text-center font-size-18"><b>Reset Password</b></h4>
        
                        <div className="p-3">
                            <form className="form-horizontal mt-3">
                                <div className="form-group mb-3">
                                    <div className="col-xs-12">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
        
                                <div className="form-group pb-2 text-center row mt-3">
                                    <div className="col-12">
                                        <button className=" btn btn-primary custom-btn  w-100 waves-effect" type="submit">Send Email</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default ForgotPassword
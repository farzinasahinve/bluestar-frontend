import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"

const CompanyUserForm = () => {
  const pageHead = ''
  return (
    <>
        <div id="layout-wrapper">
          <Header pageHead={pageHead}/>
          <Sidebar/>
          <div className="main-content">

                <div className="page-content" style={{background:"#eff3f6"}}>
                    <div className="container-fluid">

                        
                        <div className="row">
                            <div className="col-10 mt-3 mx-auto">
                                <div className="page-title-box">
                                    
<div className="row">
										
									<div className="col-8">
									<div className="row">
										<h3 className="text-capitalize"><strong>User Info</strong></h3>
									</div>
									</div>		
								
										
									<div className="col-4 ps-4">
									<div className="row">
										
									<div className="col-sm-5 ps-5">
									<div className="form-group">
									
                                     <button className="btn cancel-btn btn border border-color d-block  bg-white ">Cancel</button>
										</div>
										</div>

									<div className="col-sm-7">
									<div className="form-group">
									
                                    <button type="button" className="btn d-block w-100 add-button"><i className="dripicons-plus font-size-20 vertical-align-top"></i> Add User</button>
										</div>
										</div>
											
											
										
										</div>
										</div>
										
									</div>									
									<div className="row mt-4">
									<div className="col-md-12">
										<div className="card">
										<div className="card-body">
										<form className="search-data add-driver">



														<div className="row">
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom01" className="form-label">First name</label>
																	<input type="text" className="form-control"  placeholder="First name" required=""/>

																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom02" className="form-label">Last name</label>
																	<input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  required=""/>

																</div>
															</div>
														</div>

                                                            <div className="row">
															<div className="col-md-12">
																<div className="mb-4 e-mail-icon">
																 <label  className="form-label">E-mail</label>
																	<input type="text" className="form-control"  placeholder="" value="Mark" required=""/>

																</div>
															</div>
																

														</div>
											
											                <div className="row">
															<div className="col-md-12">
																<div className="mb-4 phone-icon">
																 <label  className="form-label">Phone</label>
																	
																	<input id="input-mask" placeholder="Tel:(+1)( _ ) - (_____)" className="form-control input-mask" data-inputmask="'mask': '99-9999999'" inputmode="text"/>

																</div>
																
																
															</div>

														</div>

														<div className="row">
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom01" className="form-label">Password </label>
																	<input type="text" className="form-control"  placeholder="New Passowrd"  required=""/>

																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom02" className="form-label">Confirm Password </label>
																	<input type="text" className="form-control"  placeholder="Confirm Passowrd"  required=""/>

																</div>
															</div>
														</div>
											
											
											                <div className="row">
															<div className="col-md-12">
																<div className="mb-2">
																	<label for="validationCustom01" className="form-label">Role</label>
																	<select className="form-control form-select">
                                                            
                                                            
                                                                <option value="AK">Company Admin</option>
                                                                <option value="HI">Company Support</option>
                                                         
                                                          
																
                                                            
                                                        </select>

                                                    </div>
                                                    <div>
                                                       


																</div>
															</div>
														</div>

														</form>






										</div>
										</div>
									</div>

									</div>

									
                                </div>
                            </div>
                        </div>
                        
                        
        

                       
                        
						
                        
                     </div> {/*<!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}
             
                
            </div>
        </div>
      </>
  )
}

export default CompanyUserForm
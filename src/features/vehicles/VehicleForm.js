import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"

const VehicleForm = () => {
    const pageHead =''
    return (
        <>
        <div id="layout-wrapper">
            <Header pageHead={pageHead}/>
            <Sidebar/>
            <div className="main-content">
                <div className="page-content" style={{background:'#eff3f6'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mt-3 mx-auto">
                                <div className="page-title-box">
									<div className="row">
									    <div className="col-8">
									        <div className="row">
										        <h3 className="text-capitalize"><strong>Vechile Info</strong></h3>
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
                                                        <button type="button" className="btn d-block w-100 add-button"><i className="dripicons-plus font-size-20 vertical-align-top"></i> Add Vehicle</button>
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
															<div className="col-md-12">
																<div className="mb-4 user-input">
																    <label  className="form-label">Driver ID</label>
																	<input type="text" className="form-control"  placeholder=""  required=""/>
																</div>
															</div>
														</div>

														<div className="row">
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom01" className="form-label">Make </label>
																	<input type="text" className="form-control"  placeholder=""  required=""/>
																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom02" className="form-label">Model </label>
																	<input type="text" className="form-control" id="validationCustom02" placeholder=""  required=""/>

																</div>
															</div>
														</div>

                                                            <div className="row">
															<div className="col-md-12">
																<div className="mb-4">
																 <label  className="form-label">year</label>
																	<input type="text" className="form-control"  placeholder=""  required=""/>

																</div>
															</div>
																

														</div>
											
											                <div className="row">
															<div className="col-md-12 mb-4">
																<div className="mb-0">
																 <label  className="form-label">VIN</label>
																	
																	<input type="text" className="form-control"  placeholder="" value="" required=""/>

																</div>
																<span className="form-label">Please make sure your VIN was entered correctly. Once the vehicle record is created its VIN cannot be changed.
                                                                </span>
																
																
															</div>

														</div>
											
											               <div className="row">
															<div className="col-md-12">
																<div className="mb-4">
																 <label  className="form-label">Fuel Type</label>
																<select className="form-control form-select">
                                                                <option value="AK">Diesl</option>
                                                                <option value="HI">Petrol</option>
																
																</select>
																
																
															</div>

														</div>
											              </div>
											
											
											                <div className="row">
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom01" className="form-label">Driving License Issuing State </label>
																	<select className="form-control form-select">
                                                            
                                                            
                                                                <option value="AK">Alaska</option>
                                                                <option value="HI">Hawaii</option>
                                                           
                                                          
																
                                                            
                                                        </select>

                                                    </div>
                                                    <div>
                                                       


																</div>
															</div>
															<div className="col-md-6">
																<div className="mb-4">
																	<label for="validationCustom02" className="form-label">Driver License Number </label>
																	<input type="text" className="form-control"  placeholder=""  required=""/>

																</div>
															</div>
														</div>

														</form>






										</div>
											

										</div>
									</div>

									</div>

									
									<div className="row">
										<h3 className="text-capitalize"><strong>ELD Settings</strong></h3>
									</div>
									
									<div className="row mt-4">
									<div className="col-md-12">
										<div className="card">
										<div className="card-body">
										<form className="search-data add-driver">


															<div className="row">
															<div className="col-md-12">
																<div className="mb-4">
																 <label  className="form-label">Assign ELD</label>
																<select className="form-control select2">
                                                                <option>No ELD</option>
                                                            <optgroup label="">
                                                                <option value="AK">123456789 (C2 12:323:e233:2323)</option>
                                                               <option value="AK">123456789 (C2 12:323:e233:2323)</option>
                                                            </optgroup>
                                                            
                                                           </select>

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
                        
						
                        
                    </div> 
                </div>
             
                
            </div>
        </div>
        </>
    )
}

export default VehicleForm
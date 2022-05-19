import React from 'react'

const PersonalInfo = () => {
  return (
    <fieldset>
								
								
								
                                <div class="form-card">
                                   
                                     <div class="form-group mb-3 row">
                                    <div class="col-12">
										<label class="form-label ms-1 mb-1 font-light">First Name *</label>
                                        <input class="form-control" type="text"  placeholder="First Name"/>
                                    </div>
                                </div>

									
                                <div class="form-group mb-3 row">
									<label class="form-label ms-1 mb-1 font-light">Last Name *</label>
                                    <div class="col-12">
                                        <input class="form-control" type="text"  placeholder="Last Name"/>
                                    </div>
                                </div>
									
									
									     <div class="form-group mb-3 row">
									<label class="form-label ms-1 mb-1 font-light">E-mail *</label>
                                    <div class="col-12">
                                        <input class="form-control" type="Email"  placeholder="Enter Your E-mail"/>
                                    </div>
                                </div>
    
                                </div>
								<button name="next" class="next btn btn-primary custom-btn  wave-effect wave-light  float-right">Next &nbsp; <i class="dripicons-arrow-thin-right"></i></button>
                            </fieldset>
  )
}

export default PersonalInfo
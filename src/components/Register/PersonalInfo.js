import React from 'react'

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <fieldset>					
								
            <div className="form-card">
                    
                <div className="form-group mb-3 row">
                    <div className="col-12">
                        <label className="form-label ms-1 mb-1 font-light">First Name *</label>
                        {/* <input className="form-control" type="text"  placeholder="First Name"/> */}
                        <input className="form-control"
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            }}
                        />
                    </div>
                </div>

                                            
                <div className="form-group mb-3 row">
                    <label className="form-label ms-1 mb-1 font-light">Last Name *</label>
                    <div className="col-12">
                        <input className="form-control"
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                            }}/>
                    </div>
                </div>
                                            
                                            
                <div className="form-group mb-3 row">
                    <label className="form-label ms-1 mb-1 font-light">E-mail *</label>
                    <div className="col-12">
                        <input className="form-control"
                            type="text"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                        }}/>
                    </div>
                </div>
    
            </div>
            {/* <button name="next" classNameName="next btn btn-primary custom-btn  wave-effect wave-light  float-right">Next &nbsp; <i classNameName="dripicons-arrow-thin-right"></i></button> */}
        </fieldset>
    )
}

export default PersonalInfo
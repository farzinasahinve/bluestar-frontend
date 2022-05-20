import React from 'react'

const SecurityInfo = ({ formData, setFormData }) => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="form-group mb-3 row">
          <div className="col-12">
            <label className="form-label ms-1 mb-1 font-light">Phone Number *</label>
            <input className="form-control" type="text" placeholder="Phone Number"/>
          </div>
        </div>                          
                                  

									
        <div className="form-group mb-3 row">
          <label className="form-label ms-1 mb-1 font-light">Password *</label>
          <div className="col-12">
              <input className="form-control" type="text"  placeholder="At least 8 Character"/>
          </div>
        </div>
									
									
        <div className="form-group mb-3 row">
          <label className="form-label ms-1 mb-1 font-light">Confirm Passowrd *</label>
          <div className="col-12">
              <input className="form-control" type="Email" required="" placeholder="At least 8 Character"/>
          </div>
        </div>
									
        <div className="form-group mb-3 row">
                          <div className="col-12">
                              <div className="form-check">
                                              <input className="form-check-input" type="checkbox" id="formCheck2" checked=""/>
                                              <label classNameName="form-check-label" for="formCheck2">
                                                  Form Checkbox checked
                                              </label>
                                          </div>
          
                          </div>
        </div>

      </div>
      
                               
    </fieldset>
  )
}

export default SecurityInfo
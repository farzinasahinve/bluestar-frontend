import React from 'react'

const SecurityInfo = ({ formData, setFormData }) => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="form-group mb-3 row">
          <div className="col-12">
            <label className="form-label ms-1 mb-1 font-light">Phone Number *</label>
            <input className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={(e) => {
                            setFormData({ ...formData, phoneNumber: e.target.value });
                    }}/>
          </div>
        </div>                          
                                  

									
        <div className="form-group mb-3 row">
          <label className="form-label ms-1 mb-1 font-light">Password *</label>
          <div className="col-12">
              <input className="form-control"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => {
                            setFormData({ ...formData, password: e.target.value });
                    }}/>
          </div>
        </div>
									
									
        <div className="form-group mb-3 row">
          <label className="form-label ms-1 mb-1 font-light">Confirm Passowrd *</label>
          <div className="col-12">
              {/* <input className="form-control" type="password" required="" placeholder="Confirm Password"/> */}
              <input className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => {
                            setFormData({ ...formData, confirmPassword: e.target.value });
                    }}/>
          </div>
        </div>
									
        {/* <div className="form-group mb-3 row">
          <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="formCheck2" checked=""/>
                <label className="form-check-label" for="formCheck2">
                    Form Checkbox checked
                </label>
            </div>
          </div>
        </div> */}

      </div>
      
                               
    </fieldset>
  )
}

export default SecurityInfo
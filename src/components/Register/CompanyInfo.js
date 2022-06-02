import React from 'react'

const CompanyInfo = ({ formData, setFormData }) => {
  return (
    <fieldset>
        <div className="form-card">
            <div className="form-group mb-3 row">
                <div className="col-12">
                    <label className="form-label ms-1 mb-1 font-light">Company Name *</label>
                    <input className="form-control"
                            type="text"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={(e) => {
                            setFormData({ ...formData, companyName: e.target.value });
                    }}/>
                </div>
            </div>


            <div className="form-group mb-3 row">
                <label className="form-label ms-1 mb-1 font-light">USDOT *</label>
                <div className="col-12">
                <input className="form-control"
                            type="text"
                            placeholder="USDOT"
                            value={formData.dotNumber}
                            onChange={(e) => {
                            setFormData({ ...formData, dotNumber: e.target.value });
                    }}/>
                </div>
            </div>


            <div className="form-group mb-3 row">
                <label className="form-label ms-1 mb-1 font-light">Time Zone *</label>
                <div className="col-12">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => {
                            setFormData({ ...formData, timeZone: e.target.value });
                    }}>
                        <option value="">Select a time Zone</option>
                        <option value="Alaskan Standard time">Alaskan Standard time</option>
                        <option value="Central Standard time">Central Standard time</option>
                        <option value="Eastern Standard time">Eastern Standard time</option>
                        <option value="Arizona Mountain Standard time">Arizona Mountain Standard time</option>
                        <option value="Mountain Standard time">Mountain Standard time</option>
                    </select>
                </div>
            </div>
        </div>

{/* <button name="next" className="next btn btn-primary  wave-effect wave-light custom-btn  float-right">Next &nbsp;<i className="dripicons-arrow-thin-right" aria-hidden="true"></i></button>
<button type="button" name="previous" className="previous btn btn-outline-secondary  custom-btn" value="Previous"><i className="dripicons-arrow-thin-left" aria-hidden="true"></i>&nbsp; Back</button> */}
   
   
    </fieldset>
  )
}

export default CompanyInfo
import React from 'react'

const CompanyInfo = () => {
  return (
    <fieldset>
    <div class="form-card">
       
         <div class="form-group mb-3 row">
        <div class="col-12">
<label class="form-label ms-1 mb-1 font-light">Company Name *</label>
            <input class="form-control" type="text"  placeholder="Company Name"/>
        </div>
    </div>


    <div class="form-group mb-3 row">
<label class="form-label ms-1 mb-1 font-light">USDOT *</label>
        <div class="col-12">
            <input class="form-control" type="text"  placeholder="USDOT"/>
        </div>
    </div>


<div class="form-group mb-3 row">
<label class="form-label ms-1 mb-1 font-light">Time Zone *</label>
        <div class="col-12">

<select class="form-select" aria-label="Default select example">
                        <option selected="">Select a time Zone</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
            
        </div>
    </div>

    </div>

<button name="next" class="next btn btn-primary  wave-effect wave-light custom-btn  float-right">Next &nbsp;<i class="dripicons-arrow-thin-right" aria-hidden="true"></i></button>
<button type="button" name="previous" class="previous btn btn-outline-secondary  custom-btn" value="Previous"><i class="dripicons-arrow-thin-left" aria-hidden="true"></i>&nbsp; Back</button>
   
   
</fieldset>
  )
}

export default CompanyInfo
import React from 'react'

function Contact() {
    return (
        
        <form class="row g-3 needs-validation m-auto" novalidate>
            <h1 class="text-center" >Contact Us</h1>
            <hr/>
        <div class="col-md-4 p-2">
          <label for="validationCustom01" class="form-label">First name</label>
          <input type="text" class="form-control" id="validationCustom01"  required/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4  p-2">
          <label for="validationCustom02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationCustom02"  required/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4  p-2">
          <label for="validationCustom02" class="form-label">Number</label>
          <input type="text" class="form-control" id="validationCustom02"  required/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4  p-2">
          <label for="validationCustom02" class="form-label">Email</label>
          <input type="text" class="form-control" id="validationCustom02"  required/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4  p-2">
          <label for="validationCustom03" class="form-label">City</label>
          <input type="text" class="form-control" id="validationCustom03" required/>
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-4 p-2">
          <label for="validationCustom04" class="form-label">State</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected enabled>Select State</option>
            <option>SC</option>
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
            <option>CA</option>
            <option>CO</option>
            <option>CT</option>
            <option>DE</option>
            <option>FL</option>
            <option>GA</option>
            <option>HI</option>
            <option>ID</option>
            <option>IL</option>
            <option>IN</option>
            <option>IA</option>
            <option>KS</option>
            <option>KY</option>
            <option>LA</option>
            <option>ME</option>
            <option>MD</option>
            <option>MA</option>
            <option>MI</option>
            <option>MN</option>
            <option>MS</option>
            <option>MO</option>
            <option>MT</option>
            <option>NE</option>
            <option>NV</option>
            <option>NH</option>
            <option>NJ</option>
            <option>NM</option>
            <option>NY</option>
            <option>NC</option>
            <option>ND</option>
            <option>OH</option>
            <option>OK</option>
            <option>OR</option>
            <option>PA</option>
            <option>RI</option>
            <option>SC</option>
            <option>SD</option>
            <option>TN</option>
            <option>TX</option>
            <option>UT</option>
            <option>VT</option>
            <option>VA</option>
            <option>WA</option>
            <option>WV</option>
            <option>WI</option>
            <option>WY</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-4  p-2">
          <label for="validationCustom05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="validationCustom05" required/>
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-12  p-4">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    )
}

export default Contact;
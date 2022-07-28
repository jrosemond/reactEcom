import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className="fa fa-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="fa fa-twitter"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Suits Galore
              </h6>
              <p>
                Tailor Made Suits and Tuxedos. Feel confident and look dapper in your OWN.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Suits
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tuxedos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accessories
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className="fa fa-home"></i> Charlotte, NC  
              </p>
              <p>
                
                <i className="fa fa-envelope"></i> 
                tailormade@suitsgalore.com
              </p>
              <p>
                <i className="fa fa-phone"></i> 704-533-8761
              </p>
              <p>
                <i className="fa fa-phone"></i> 704-746-9738
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:   
        <a className='text-reset fw-bold' href=''> 
            Suitsgalore.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
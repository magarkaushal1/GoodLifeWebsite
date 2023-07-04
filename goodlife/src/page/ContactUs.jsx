import React from 'react'
import "../assets/ContactUs.css"


export default function ContactUs() {
    return (
        <>
            <div>
                <section>
                    <div className='container shadow my-5'>
                        <div className='component-page-heading text-center shadow my-5'>
                            <h1>Contact US</h1>
                        </div>
                        <div className="image-container">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/images/japan2.jpeg" alt="" className="background-image" />
                                    </div>
                                    <div className="image-text">
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className='divider'>
                            <div className='container shadow my-5 pt-30 pb-60'>
                                <div className='section-title'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='title text-center'>
                                                <h3>Have any Questions?</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='row mt-60'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='image-container'>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13027764.816038217!2d132.80998329411509!3d37.138272337176474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2snp!4v1687003676322!5m2!1sen!2snp"
                                                width="600"
                                                height="450"
                                                style={{ border: "0" }}
                                                allowFullScreen="" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade">
                                            </iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div class="icon-box-wrapper">
                                            <div class="icon-box-icon">
                                                <span class="icon-animation">
                                                    <i class="fas fa-map-marker-alt">
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>GOODLIFE Educational Consulltancy</h5>
                                                <hr class="foooterhr"></hr>
                                                <p>
                                                    Balaju, Kathmandu, Nepal<br />
                                                    (Near Ganga Hall)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div class="icon-box-wrapper">
                                            <div class="icon-box-icon">
                                                <span class="icon-animation">
                                                    <i class="fas fa-phone">
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>Contact Number</h5>
                                                <hr class="foooterhr"></hr>
                                                <p>
                                                    +9779817120066,
                                                    +9779866282982
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div class="icon-box-wrapper">
                                            <div class="icon-box-icon">
                                                <span class="icon-animation">
                                                    <i class="fas fa-envelope">
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>Email Address</h5>
                                                <hr class="foooterhr"></hr>
                                                <p>
                                                    <a href='/'>
                                                        <span style={{ color: '#0000ff' }}>goodlifeedu@gmail.com</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div class="icon-box-wrapper">
                                            <div class="icon-box-icon">
                                                <span class="icon-animation">
                                                    <i class="fas fa-globe">
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>URL</h5>
                                                <hr class="foooterhr"></hr>
                                                <p>
                                                    <a href='/'>
                                                        <span style={{ color: '#0000ff' }}>www.goodlifeedu.np</span>
                                                    </a>

                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className='divider bg-lighter'>
                            <div className='container shadow my-5 pt-30 pb-60'>
                                <div className='section-title'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='title text-center'>
                                                <h3>Interested in discussing?</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='forms'>
                            <div className='row pt-30'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div id='cont-form'>
                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <label for="inputEmail4" class="form-label">First Name</label>
                                                        <input type="text" class="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="inputPassword4" class="form-label">Last Name</label>
                                                        <input type="text" class="form-control" id="" />
                                                    </div>
                                                    <div class="col-6">
                                                        <label for="inputAddress" class="form-label">Address</label>
                                                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                                    </div>
                                                    <div class="col-6">
                                                        <label for="inputMobile" class="form-label">Mobile No</label>
                                                        <input type="text" class="form-control" id="inputAddress2"
                                                            placeholder="" />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label for="inputMobile" class="form-label">Email</label>
                                                        <input type="email" class="form-control" id="inputEmail" />
                                                    </div>
                                                    <div class="col-md-8">
                                                        <label for="exampleFormControlTextarea1" class="form-label">
                                                            Your Message
                                                        </label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5">
                                                        </textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                            <label class="form-check-label" for="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button type="submit" class="btn btn-primary">Send Message
                                                            <i className="fas fa-paper-plane ms-2"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-img'>
                                        <img src="/images/office.jpeg" alt="japan" className="w-75 mt-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >

            </div >

            <div>
            </div >

        </>
    )
}

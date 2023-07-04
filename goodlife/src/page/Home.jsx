import { Link } from 'react-router-dom';
import Header from '../components/Header';
export default function Home() {
    return (
        <div>
            <Header />

            <>
                <div className="container">
                    <div class="container-services">
                        <h2 class="text-uppercase title"> Study<span class="text-theme-colored2"> Abroad </span></h2>
                        <hr className='foooterhr'></hr>
                        <div className='row gy-3 my-3 '>
                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinjapan">
                                    <div className="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card1.jpeg" className="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Japan</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinjapan" className="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinaustralia">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card3.jpg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Australia</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinaustralia" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinuk">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card2.jpeg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At UK</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinuk" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyincanada">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/canada.jpg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Canada</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyincanada" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <section class="parallax " data-bg-img="" >
                        <div class="container pt-70 pb-90">
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="banner-text text-center">
                                            <h2 class="banner-text">Grow Up Your <span class="text-theme-colored2">career </span> With Us</h2>

                                            <h5 class="Banner-text  mt-15 mb-20">
                                                <p>We alawys try to provide you our best business consulting service</p>
                                            </h5>
                                            <a class="wow flash btn btn-dark btn-theme-colored2 font-16 btn-lg pr-40 pl-40 mt-15 mr-10"
                                                href="/contactus" >Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="feature-services">
                        <div class="section-content our_services">
                            <div class=" ">
                                <div class="container-services">
                                    <h2 class="text-uppercase title"> Our <span class="text-theme-colored2"> Services </span></h2>
                                    <hr className='foooterhr'></hr>
                                    <div className='row '>
                                        <div className=' col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/abroad.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Study Abroad</h3>
                                                </div>
                                                <p> Consequuntur necessitatibus et provident voluptatem cupiditate, sunt quibusdam odit, suscipit nihil, facilis vitae!</p>
                                                <a href="/studyabroad" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                        <div className=' col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/test.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Test Preparation</h3>
                                                </div>
                                                <p> Consequuntur necessitatibus et provident voluptatem cupiditate, sunt quibusdam odit, suscipit nihil, facilis vitae!</p>
                                                <a href="/" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                        <div className='col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/course.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Courses</h3>
                                                </div>
                                                <p> Consequuntur necessitatibus et provident voluptatem cupiditate, sunt quibusdam odit, suscipit nihil, facilis vitae!</p>
                                                <a href="/" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='testinomial'>
                        <div className='testinomial-heading'>
                            <b>Our</b> Testimonials
                            <hr className='foooterhr'></hr>
                        </div>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='wrapper'>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='wrapper'>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='wrapper'>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                        <div className='container-testimonials'>
                                            <div className='profile'>
                                                <div className='imgBox'>
                                                    <img src="/images/11.jpg" alt='' />
                                                </div>
                                                <h2>Person 1</h2>
                                            </div>
                                            <p><span className='fa fa-quote-left left'></span>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Ipsam aperiam eligendi ea nam voluptatem sunt, non maxime praesentium
                                                autem dignissimos rem delectus, repellat et sint placeat architecto dolorum, ullam nulla.
                                                <span className='fa fa-quote-right right'></span>
                                            </p>
                                            <div className='testimonial-social'>
                                                <i className="fab fa-facebook-f icon"></i>
                                                <i className="fab fa-instagram icon"></i>
                                                <i className="fab fa-twitter icon "></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='interested'>
                        <div className='container-interested my-5 '>
                            <div className='interest'>
                                <h2 className="text-uppercase title"> Interested in <span class="text-theme-colored2">discussing? </span></h2>
                                <hr className='foooterhr'></hr>
                            </div>
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
                                        <div className='image-container'>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13027764.816038217!2d132.80998329411509!3d37.138272337176474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2snp!4v1687003676322!5m2!1sen!2snp"
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
                        </div>
                    </section>


                </div>
            </>
        </div>

    );
}



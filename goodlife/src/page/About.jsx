import React from 'react'
import "../assets/About.css"


export default function About() {
    return (
        <>
            <section>
                <div className='container shadow my-5'>
                    <div className='component-page-heading text-center shadow my-5'>
                        <h1>About US</h1>
                    </div>
                    <div className="image-container">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/about.jpeg" alt="Image" className="background-image" />
                                </div>
                                <div className="image-text">
                                    <span>About Us</span>
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
                                            <h3>Introduction</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="about shadow my-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/images/111.jpeg" alt="about" className="w-75 mt-5" />
                            </div>
                            <div className="col-md-6" >
                                <h6 className="display-6 mb-2 front-weight-normal py-2">
                                    GoodLife Educational Consultancy
                                </h6>
                                <hr className='foooterhr'></hr>
                                <p className="lead mb-4">
                                    Welcome to GoodLife Educational Consultancy, your trusted partner in shaping bright futures through international education opportunities.
                                    We specialize in providing comprehensive consultancy services to students aspiring to study abroad, with a particular focus on sending students to Japan and various other countries.
                                    <br />
                                    We believe in holistic development and offer additional services to enhance students' overall experience. From language proficiency training and cultural orientation programs to assisting with accommodation arrangements and providing ongoing support during their stay abroad, we strive to make the transition as smooth as possible.
                                    At GoodLife Educational Consultancy, we prioritize the success and well-being of our students. We take pride in our personalized approach, offering guidance tailored to each individual's unique needs, interests, and aspirations.
                                    Our team is dedicated to providing reliable and transparent services, building trust with students and their families. We understand the significance of making the right choices when it comes to education and strive to help students embark on a transformative journey that opens doors to a GoodLife.
                                    Contact us today to begin your journey towards a world-class education and a brighter future with GoodLife Educational Consultancy. Together, let's unlock your potential and turn your dreams of studying abroad into a reality.

                                </p>
                            </div>
                        </div>
                    </div>

                    <section className='background-text'>
                        <div class="container-about shadow my-5 ">
                            <div className='row'>
                                <div className='col'>
                                    <div class="elementor-widget-container">
                                        <h3
                                            class="title">
                                            Our Vision
                                        </h3>
                                        <hr className='foooterhr'></hr>
                                        <p >
                                            <span style={{ color: 'white' }}>
                                                "GoodLife Educational Consultancy is a professional and
                                                user-friendly educational advising agency that specializes
                                                in providing affordable, high-quality test preparation and
                                                accurate advising services to students aspiring to study
                                                in the United States and other study destinations. Our
                                                primary goal is to meet the expectations of Nepalese
                                                students, families, and institutions by offering
                                                comprehensive guidance tailored to their unique needs. We
                                                are dedicated to empowering Nepalese students by helping
                                                them gain access to educational experiences and career
                                                opportunities in Japan, as well as other countries such as
                                                Canada, Australia, and the United Kingdom."
                                            </span>
                                        </p>
                                    </div>
                                    <div class="elementor-widget-second">
                                        <h3 class="title">
                                            Our Mission
                                        </h3>
                                        <hr className='foooterhr'></hr>

                                        <p>
                                            <span style={{ color: 'white' }}>
                                                "Our mission is to deliver professional and user-friendly
                                                educational services with a focus on fostering qualitative
                                                growth in students. We strive to empower them to achieve
                                                success in both their personal and professional lives.
                                                Through our dedication and commitment, we aim to provide
                                                excellence in educational guidance, equipping students
                                                with the necessary tools and skills to thrive in their
                                                chosen paths. Our ultimate goal is to be a catalyst for
                                                their success, supporting them in realizing their full
                                                potential and shaping a prosperous future."
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section >
                </div>
            </section >
        </>

    )
}

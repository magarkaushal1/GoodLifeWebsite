import React from 'react'

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container '>
                    <div className="row top-bar">
                        <div className='col'>
                            <div className='left'>
                                <span className='text-white text-left'>
                                    <i className="fab fa-facebook-f icon"></i>
                                </span>
                                <span className='text-white'>
                                    <i className="fab fa-instagram icon"></i>
                                </span>
                                <span className='text-white'>
                                    <i className="fab fa-twitter icon "></i>
                                </span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='right'>
                                <span className='phone'>
                                    <i className='fas fa-phone-volume'></i>&nbsp;
                                    <a href="tel:+9779817120066">9817120066</a>

                                </span>
                                <span className='text-primary'>
                                    |
                                </span>
                                <span className='email'>
                                    <i className='fa fa-envelope'></i>&nbsp;
                                    <a href="mailto:contact@email.com">goodlifeedu@gmail.com</a>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Head
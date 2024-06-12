import React from 'react'

const Courses = () => {
    return (
        <div >
            <div className="black-bg">
                {/*<!--? Hero Start -->*/}
                <div className="slider-area2">
                    <div className="slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap hero-cap2 pt-70">
                                        <h2>Courses</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Hero End -->*/}
                {/*<!--? Team -->*/}
                <section className="team-area fix section-padding30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-tittle text-center mb-55">
                                    <h2>What I Offer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30">
                                    <div className="cat-icon">
                                        <img src="assets/img/gallery/team1.png" alt=""></img>
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Body Building</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30">
                                    <div className="cat-icon">
                                        <img src="assets/img/gallery/team2.png" alt=""></img>
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Muscle Gain</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-cat text-center mb-30">
                                    <div className="cat-icon">
                                        <img src="assets/img/gallery/team3.png" alt=""></img>
                                    </div>
                                    <div className="cat-cap">
                                        <h5><a href="services.html">Weight Loss</a></h5>
                                        <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Services End -->*/}
                {/*<!-- Traning categories Start -->*/}
                <section className="traning-categories black-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="assets/img/gallery/cat1.png" alt=""></img>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3>Personal traning</h3>
                                                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br></br> the language needed for a successful answer.</p>
                                                <a href="courses.html" className="border-btn">View Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="assets/img/gallery/cat2.png" alt=""></img>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3>Group traning</h3>
                                                <p>You’ll look at graphs and charts in Task One, how to approach the task and <br></br> the language needed for a successful answer.</p>
                                                <a href="courses.html" className="btn">View Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Traning categories End-->*/}
                {/*<!--? video_start -->*/}
                <div className="video-area section-bg2 d-flex align-items-center" data-background="assets/img/gallery/video-bg.png">
                    <div className="container">
                        <div className="video-wrap position-relative">
                            <div className="video-icon" >
                                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- video_end -->*/}
                {/*<!-- ? services-area -->*/}
                <section className="services-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon1.svg" alt=""></img>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Location</h3>
                                        <p>You’ll look at graphs and charts in Task One, how to approach </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon2.svg" alt=""></img>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Phone</h3>
                                        <p>(90) 277 278 2566</p>
                                        <p>  (78) 267 256 2578</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-40">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon3.svg" alt=""></img>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Email</h3>
                                        <p>jacson767@gmail.com</p>
                                        <p>contact56@zacsion.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Courses

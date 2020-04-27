import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {  }
    render() { 
        return (  <div>
        
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                    <h1> EasyPass </h1>
                        <h4 className="text-uppercase text-white font-weight-bold">
                منصة إلكترونية لمنح وانشاء التصاريح وكل مايخصها. </h4>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">
                المنصة تساعدك في سرعة وسهولة اخراج تصاريح التنقل من منطقة الى أخرى
                حيث يشمل التصريح على النقاط السموح التنقل بها، الأوقات، والمدة الزمنية.</p>
                        <Link to="/sign-up" className="btn btn-primary btn-xl js-scroll-trigger"> التسجيل </Link>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">التسجيل</a> */}
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- About--> */}
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">محتاج تصريح؟ </h2>
                        <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                        <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container">
                <h2 className="text-center mt-0">الخدمات</h2>
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">امن</h3>
                            <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">موثق</h3>
                            <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">سرعة</h3>
                            <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 className="h4 mb-2">سهولة الاستخدامله</h3>
                            <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio--> */}
        <section id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg"
                            ><img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Call to action--> */}
        <section className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">إسرع وأمن مع EassyPass</h2>
                <a className="btn btn-light btn-xl" href="https://samidahlawi.github.io/easyPass/#/">Try the Demo Now</a>
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Let's Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Ready to start your next events with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>009662225598</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                        <a className="d-block" href="mailto:contact@yourwebsite.com">EassyPass@easypass.com</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="bg-light py-5">
            <div className="container"><div className="small text-center text-muted">Copyright © 2020 - EasyPass</div></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        </div>
            
            );
    }
}
 
export default Home;
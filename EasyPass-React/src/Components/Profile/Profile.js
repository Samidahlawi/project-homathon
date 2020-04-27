import React, {Component} from 'react';
import { Container,Row,Col,Image,Tabs,Tab } from 'react-bootstrap';

class Profile extends Component{
    constructor(){
        super()
        clearInterval();
    }
    render(){
        return(
            <div>
                <header className="profile-header">
                        <Row className="profile-image">
                            <Col xs={6} md={4}>
                            <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" width="100px"  height="120px" roundedCircle />
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                </header>
                
            
                <main className="profile-background">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title={<div><ion-icon name="newspaper-outline"></ion-icon> <span>معلومات الشـخصـية</span></div> }>
                            <Container className="profile-details">
                                <Row className="profile-row">
                                    <label><ion-icon name="person-outline"></ion-icon>الأسـم: </label>
                                    <h5>محمد العبدالله </h5>
                                </Row>

                                <Row className="profile-row">
                                    <label><ion-icon name="finger-print-outline"></ion-icon>رقم الهوية : </label>
                                    <h5>10xxxxxxxx</h5>
                                </Row>

                                <Row className="profile-row">
                                    <label><ion-icon name="bookmark-outline"></ion-icon>العمل: </label>
                                    <h5> مستشفى الملك خالد </h5>
                                </Row>

                                <Row className="profile-row">
                                    <label><ion-icon name="earth-outline"></ion-icon>الموقع: </label>
                                    <h5>الـريـاض</h5>
                                </Row>


                                <hr className="hr" ></hr>
                                <Row className="profile-row" >
                                   
                                <label className="label-date"><ion-icon name="alarm-outline"></ion-icon>فـترة التـنـقـل :</label>
                                    <br/>
                                    <div className="box-timer">
                                        <div>
                                            <h3>من</h3>
                                            <h3 className="time">09:00<span style={{color:'gray'}}>.AM</span></h3>
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div>
                                            <h3>الى</h3>
                                            <h3 className="time">06:00<span style={{color:'gray'}}>.PM</span></h3> 
                                        </div>
                                    </div>
                                
                                </Row>
                                <hr className="hr" ></hr>

                                <Row>
                                <label className="label-date"><ion-icon name="calendar-outline"></ion-icon> التريـح : </label>
                                    <br/>
                                <div className="box-date" style={{textAlign:"justify"}}>
                                        <div>
                                            <h3>من تاريـخ : <span className="profile-date">1441/09/04 هـ</span></h3>
                                        </div>
                                        
                                        <div>
                                            <h3>الى تاريـخ : <span className="profile-date">1441/09/08 هـ</span></h3>  
                                        </div>
                                    </div>
                                </Row>

                                <Row>
                                    <div>
                                        <h4 className="day">السبت</h4>
                                        <h4 className="day">الأحد</h4>
                                        <h4 className="day">الأثنين</h4>
                                        <h4 className="day-off">ثلاثاء</h4>
                                        <h4 className="day-off">إربعاء</h4>
                                        <h4 className="day-off">خميس</h4>
                                        <h4 className="day-off">جمعة</h4>
                                    </div>
                                </Row>
                            </Container>
                        </Tab>

                        {/* <Tab eventKey="home" title="Profile">
                        <p>xcvzxcvzxcv</p>
                        </Tab> */}
                    </Tabs>
                </main>
            </div>
        )
    }
}

export default Profile;
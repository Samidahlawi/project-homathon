import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {create} from './api'
import { Col,Form,Button, Container} from 'react-bootstrap';




class EmployeeNew extends Component {

   state = {
       employeeForm: {
        name: "",
        id:"",
        reason:"",
        location:"",
        from_time:"",
        to_time:"",
        from_date:"",
        to_date:"",
        days:["السبت","الأحد","الأثنين"],
        state:"",
        url:""
       }
       
   }

    handleChange = (event) => {
        //get the name of input
        const key = event.target.name;
        // get the value of input
        const value = event.target.value;
        this.setState( ({...copyState}) => {
            copyState.employeeForm[key] = value
            return copyState
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.employeeForm)
        // console.log(this.props.match.params.user_id)
        const user = this.props.match.params.user_id
        const employee = this.state.employeeForm
        create(user,employee)
        .then(() => alert('تم ارسال طلب الترصح بنجاح '))
        .then((res) => {
           
             console.log(res.data.employee)
            alert("تم تقدم تصريحك بنجاح")
            })
            .catch(
                err => console.log(err)
            )
    }
    




    onChange(e) {
        // current array of options
        const copyEmployeeForm = {...this.employeeForm}
        const days = copyEmployeeForm.days
        let index
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to days array
          days.push(+e.target.value)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = days.indexOf(+e.target.value)
          days.splice(index, 1)
        }
        copyEmployeeForm.days = days
        // update the state with the new array of days
        this.setState(copyEmployeeForm)
      }


    render() { 
        return ( 
        <div style={{textAlign:"center"}}>
            <Container>
            <Form onSubmit={this.handleSubmit}>
                

                <Form.Row >
                    <Form.Group sm={12} md={6}    as={Col} controlId="formGridEmail">
                    <Form.Label>الأسـم كـامـل</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.employeeForm.name} placeholder="محمد العبدالله" />
                </Form.Group>

                <Form.Group  sm={12} md={6} as={Col} controlId="formGridPassword">
                    <Form.Label>رقـم الهـويـة</Form.Label>
                    <Form.Control type="text" placeholder="10xxxxxxxx" name="id" onChange={this.handleChange} value={this.state.employeeForm.id} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group sm={12} md={6} as={Col}  controlId="formGridAddress1">
                        <Form.Label>التصـنيـف</Form.Label>
                        <Form.Control type="text" placeholder="العمل في وزارة الصحة" name="reason" onChange={this.handleChange} value={this.state.employeeForm.reason} />
                    </Form.Group>

                    <Form.Group sm={12} md={6} as={Col} as={Col} controlId="formGridState">
                        <Form.Label>المدينة</Form.Label>
                        <Form.Control as="select" name="location" onChange={this.handleChange} value={this.state.employeeForm.location}>
                        <option>الرياض</option>
                        <option>جدة</option>
                        <option>الدمام</option>
                        <option>القصيم</option>
                        <option>أبهاء</option>
                        </Form.Control>
                    </Form.Group>

                 
                
                </Form.Row>
                
                
                <hr></hr>
                <Form.Row sm={5} md={5}>
                 <Form.Group style={{border:"1px solid gray", padding:"15px"}} as={Col} controlId="formGridCity">
                 <Form.Label> الأوقات</Form.Label>
                 <hr className="hr"></hr>
                            <Form.Label> مـن</Form.Label>
                            <Form.Control type="time"   name="from_time" onChange={this.handleChange} value={this.state.employeeForm.from_time} />

                            <Form.Label>الـى</Form.Label>
                            <Form.Control type="time"   name="to_time" onChange={this.handleChange} value={this.state.employeeForm.to_time} />
                   </Form.Group>

                   <Form.Group style={{border:"1px solid gray", padding:"15px",marginRight:"5px"}} as={Col} controlId="formGridCity">
                   <Form.Label> الـتواريـخ</Form.Label>
                    <hr className="hr"></hr>
                        <Form.Label> مـن</Form.Label>
                        <Form.Control type="date"   name="from_date" onChange={this.handleChange} value={this.state.employeeForm.from_date} />

                        <Form.Label>الـى</Form.Label>
                        <Form.Control type="date"   name="to_date" onChange={this.handleChange} value={this.state.employeeForm.to_date} />
                   </Form.Group>

                </Form.Row>
                <hr></hr>

                

                

                <Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Row>
                            <Form.Check type="checkbox"  name="days[0]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الأحد</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الأثنين</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الثلاثاء</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الإربعاء</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الخميس</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> الجمعة</Form.Label>
                            <Form.Check type="checkbox"  name="days[2]" onChange={this.handleChange} value={this.state.employeeForm.days }/>
                            <Form.Label> السبت</Form.Label>
                        </Form.Row>
                      
                    </Form.Group>
                </Form.Row>
                   
                <Button variant="primary" type="submit">
                Submit
                </Button>
            {/* from_date */}
               
            </Form>
            </Container>
        </div>

            );
    }
}




 
export default  withRouter(EmployeeNew)
 
 
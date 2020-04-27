import React, {Component, useState} from 'react';
import {index,destroy} from './api'
import {Table,Button,Spinner,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'


class EmployeeIndex extends Component{
    state = {
        employees: [],
        show: false,
        setShow: false
    }

    componentDidMount(){
        index(this.props.user)
        .then(res => {
            console.log(res)
            this.setState({
                employees : res.data.employees
            })
            console.log("done!!")
        })
        .catch(err => console.log(err))
    }


    delete(employeeId){
        const user = this.props.user
        destroy(user,employeeId)
        .then(()=>{alert('Delete')})
        .then(()=>{ 
            const employees = this.state.employees.filter(employee=>employee._id !== employeeId)
            this.setState({
                employees:employees
            })
        })
        .catch(err=>console.log(err))
    }

    setShow(val){
        this.setState({
            show:val
        })
    }
    render() {
        
        return(
            <React.Fragment>
                <div style={{margin:"10px"}}>
                    
<React.Fragment >
<Button variant="primary" onClick={() => this.setShow(true)}>
مـشاركة رابـط الـتسجـيل<Spinner animation="grow" />
</Button>

<Modal
show={this.state.show}
onHide={() => this.setShow(false)}
dialogClassName="modal-90w"
aria-labelledby="example-custom-modal-styling-title"
>
<Modal.Header closeButton>
<Modal.Title id="example-custom-modal-styling-title">
مـشاركـة الـرابـط 
</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>
    <Link to={`/employees/${this.props.user._id}/new`}>شارك الرابط</Link>
</p>
</Modal.Body>
</Modal>
</React.Fragment>

                </div>
                <Table striped bordered hover size="sm" >
                    <thead>
                      <tr>
                        <th style={{width:"120px"}}> الأســم </th>
                        <th>رقم الهوية</th>
                        <th>التصنيف</th>
                        <th>الموقع</th>
                        <th>من</th>
                        <th>الى</th>
                        <th>من تاريخ</th>
                        <th>الى تاريخ</th>
                        <th>الأيام</th>
                        {/* <th>الحالة</th> */}
                        <th>التصريح</th>

                      </tr>
                    </thead>
                    <tbody>
               {this.state.employees.map((employee,index) => {
                   return(
                      <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.id}</td>
                        <td>{employee.reason}</td>
                        <td>{employee.location}</td>
                        <td>{employee.from_time.replace(/:\d+ /, ' ')}</td>
                        <td>{employee.to_time}</td>
                        <td>{employee.from_date}</td>
                        <td>{employee.to_date}</td>
                        <td>{employee.days.map(day => day + ',')}</td>
                        {/* <td>{employee.state}</td> */}
                        <td><a href="https://samidahlawi.github.io/easyPass/#/">Permit-Link</a></td>
                        <td><Link to={"/employees/"+employee._id}><Button variant="primary">عـرض</Button></Link></td>
                        <td>  <Button variant="danger" onClick={() => this.delete(employee._id)}>حـذف</Button></td>
                      </tr>          
                   )
               })}
                 </tbody>
            </Table>
        </React.Fragment>
        )
    }
}




export default EmployeeIndex;
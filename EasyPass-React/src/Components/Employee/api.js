import apiUrl from '../../apiConfig'
import Axios from 'axios'


export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/employees',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const show = ( employeeId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/employees/${employeeId}`
    })
}


export const create = (user_id,newEmployee) => {
    return Axios({
        method:'POST',
        url: apiUrl + `/employees/${user_id}`,
        data:{
            employee:newEmployee
        }
    })
}


export const destroy = (user,employeeId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/employees/${employeeId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateClinc,clincId) => {
    return Axios({
        method:'patch',
        url:apiUrl + `/clincs/${clincId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            clinc:{ name: updateClinc}
        }
    })
}


// The Call for Patients and Turn
export const counter = (user,clincId) => {
    return Axios({
        method:'post',
        url: apiUrl + `/clincs/${clincId}/counter`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            
        }
    })
}



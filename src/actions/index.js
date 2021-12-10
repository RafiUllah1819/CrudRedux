import * as Constants  from '../constants/index';

// export const setName = (name) =>{
//     return {
//         type : Constants.SETNAME,
//         name
//     }
// }
// export const setAge = (age) =>{
//     return {
//         type : Constants.SETAGE,
//         age
//     }
// }
export const setData = (data) =>{
    return {
        type : Constants.SETDATA,
        data
    }
}
export const editData = (id) =>{
    return {
        type : Constants.EDITDATA,
        id
    }
}
export const deleteData = (id) =>{
    return {
        type : Constants.DELETEDATA,
        id
    }
}
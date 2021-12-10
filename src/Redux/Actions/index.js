const setData = (obj) =>{
    return{
      type: "ADD_DATA" ,
        obj
    }
}

const setEdit = (id) =>{
    return {
        type: "EDIT_DATA",
        id
    }
}
const setDelete = (id) =>{
    return{
        type : "DELETE_DATA",
        id
    }
}

const setUpdate = (obj) =>{
    return{
        type: "UPDATE_DATA",
        obj
    }
}

export {
    setData,
    setEdit,
    setDelete,
    setUpdate
}
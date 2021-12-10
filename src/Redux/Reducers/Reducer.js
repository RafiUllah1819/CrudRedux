
const initialState = {
    list: [],
    index: null,
    editable:false
}
// console.log("sdfsdfsdf" , initialState.editable)
const Reducer = (state= initialState, action) =>{
    switch(action.type){
        case "ADD_DATA":
            return{
                ...state,
                list: [...state.list, action.obj]
            }
        case "DELETE_DATA":
            return{
                ...state,
                list:state.list.filter((item, i)=> i!== action.id)
            }
            
        case "EDIT_DATA":
            return{
                ...state,
                index: action.id,
                editable:true
            } 
        case "UPDATE_DATA":
            const copy = [...state.list]
            copy.splice(state.index, 1, action.obj)
            return{
                ...state,
                list: copy,
                index: null,
                editable: false
            }      
        default: return state;    
    }
}

export default Reducer;
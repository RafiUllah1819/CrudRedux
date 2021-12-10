 import * as Constants from '../constants/index'
 
 const initialData = {
    data : [],
    editable:false,
    index:null,
}

const Reducer = (state = initialData, action) =>{
    // console.log(action)
    switch(action.type){
        // case Constants.SETNAME:
        //     return {
        //         ...state,
        //         name:action.name
        //     }
        // case Constants.SETAGE:
        //     return {
        //         ...state,
        //         age:action.age
        //     }    
        case Constants.SETDATA:
            return{
                ...state,
                data:[...state.data, {name:action.name, age:action.age}],
                
            }    
        case Constants.EDITDATA:
            // console.log(action.id)
            // const data1 = state.data.filter((elem,i)=> i === action.id)
            // console.log(data1)
            return {
                ...state,
                // name:data1[0].name,
                // age:data1[0].age,
                index:action.id,
                editable:true
            }    
        case Constants.UPDATEDATA:

               const newData2 = [...state.data]
               newData2.splice(state.index,1, {name:action.name, age:action.age})
            //    console.log("updated data", newData2)
                return {
                ...state,
                data:newData2,
                editable:false,
                index:null, 
            }    
        case Constants.DELETEDATA:
                const newData = state.data.filter((elem,i)=> i !== action.id)
              
                return {
                    ...state,
                    data:newData
                }
           
         default : return state;      
    }
}

export default Reducer
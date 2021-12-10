let Data = [1,2];

const Reducer = (state,action) => {
    switch(action.type){
        case "push":
            return [...state, action.element]
        case "pop":
            state.pop()
            return [...state]
        default:
            return state;
    }
}

const Push = () => {
 return {
     type:"push",
     element:3
    }
}   
const Pop = () => {
 return {
     type:"pop",
    }
}   

const Dispatch = (obj) => {
    return obj
}

Data = Reducer(Data,Dispatch(Pop()));
console.log(Data);
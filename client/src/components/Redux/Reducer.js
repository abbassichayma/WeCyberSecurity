const init ={
    users:[],
    date:[]
}


const Reducer = (state=init,action)=>{
    
    switch (action.type) {
         
        case 'ADD-USER':
           return {
            ...state,
               users:[...state.users,action.payload]
           } 
           
           case 'ADD-DATE':
            const arr = action.payload.toString().split(' ')
            arr[1]= action.payload.getMonth()+1
            console.log('arr',arr)
            return {
             ...state,
                date:arr[2]+" / "+arr[1]+" / "+arr[3]
            } 
            
           default: return state   
    }
}

export default Reducer
import axios from 'axios'

export const addUser = (myData) =>async(dispatch) =>{
  console.log("myData",myData)
    try {
        const {data} =  await axios.post("http://localhost:4000/api/user/add",myData);
       
        dispatch({
            type:'ADD-USER',
            payload:data
        })
    console.log("sdata",data);
    } catch (error) {
        console.log(error)
    }
}

export const addDate = (date) => async(dispatch)=>{
   
    try {
     dispatch({
         type:'ADD-DATE',
         payload:date,
     })
     
    } catch(error) {
     console.log(error)
    } 
 }

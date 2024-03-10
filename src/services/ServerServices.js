import axios from 'axios'

const ServerURL = 'http://10.0.2.2:5000'

const getData = async(URL)=>{

 try {
  var response = await axios.get(`${ServerURL}/${URL}`)
  var result = await response.data
  return result
 }
 catch(e){
    return null
 }
}
const postData = async(URL,body)=>{

   try{
    var response = await axios.post(`${ServerURL}/${URL}`,body)
    var result = await response.data
    return result
   }
   catch(e){
      return null
   }
  }
export {ServerURL,getData,postData}
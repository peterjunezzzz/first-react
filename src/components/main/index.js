import React ,{useState} from 'react'
import {Routes,Route} from "react-router-dom"
import List from '../list'
import ErrorBoundary from '../errorboundary/ErrorBoundary'
import Maincontext from '../../pages/maincontext/maincontext'
import Moredemo    from '../../pages/moredemo/moredemo'
import Searchdemo  from '../../pages/searchdemo/searchdemo'
import axios from 'axios'
import PubSub from 'pubsub-js'





export default function index() {
  
  const[ifclick,changeifclick] = useState(false)
  const[ifclick2,changeifclick2] = useState(false)
  const[ifclick3,changeifclick3] = useState({firstclick:false})
  const[data,changedata] = useState([])  //景點的data
  const[data2,changedata2] = useState([]) //活動的data
  const[data3,changedata3] = useState([]) //美食的data
  const[data4,changedata4] = useState([]) //data4存放的是從demo組件傳過來的data(訂閱與發佈)
  const[data5,changedata5] = useState([]) //data5存放的是從list組件傳過來的data(訂閱與發佈)
  const[data7,changedata7] = useState([]) //data7存放的是從head組件傳過來的data6(訂閱與發佈)
  const[myToken,changetoken] = useState() //存放組件掛載時，向服務器發送post請求拿到的token
  
  
  


  React.useEffect(()=>{PubSub.subscribe('GIVE U DATA',(_,data)=>{changedata4(data)})},[])
  React.useEffect(()=>{PubSub.subscribe('GIVE U DATA2',(_,data)=>{changedata5(data)})},[])
  React.useEffect(()=>{PubSub.subscribe('GIVE U DATA6',(_,data6)=>{changedata7(data6)})},[])
  React.useEffect(()=>{PubSub.subscribe('CHANGE U IFCLICK3',(_,stateobj)=>{changeifclick3(stateobj)})},[])
  
  
  



  const qs = require ('qs')

React.useEffect(()=>{
  axios.post('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
    qs.stringify({grant_type:'client_credentials',client_id:'peter12345qwe-59dd18b4-9665-417a',client_secret:'33018355-96e7-4ac0-b8eb-31c5abad5675'})
    ,{
      headers:{'content-type': 'application/x-www-form-urlencoded'}
    }
).then( (res) => changetoken(res.data.access_token))
},[])


// getToken()
// async function getToken() {
//   try {
//      const res = await axios.post('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',qs.stringify({grant_type:'client_credentials',client_id:'peter12345qwe-59dd18b4-9665-417a',client_secret:'33018355-96e7-4ac0-b8eb-31c5abad5675'})
//      ,{
//               headers:{'content-type': 'application/x-www-form-urlencoded'} }) ;
//           changetoken(res.data.access_token);
//   } catch (err) {
//     console.error(err)
//   }
// }



if(myToken!==undefined){
axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=60&%24format=JSON',{
       headers:{'authorization': `Bearer ${myToken}`} 
  }).then(function(res){
     changedata(res.data)
     
  }).catch(function (error) {
    console.log(error) ;
  })}

  


if(myToken!==undefined){
  axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=60&%24format=JSON',{
       headers:{authorization: `Bearer ${myToken}`} 
  }).then(function(res){
     changedata2(res.data)
  }).catch(function (error) {
    console.log(error);
  })}



if(myToken!==undefined){
  axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=60&%24format=JSON',{
       headers:{authorization: `Bearer ${myToken}` } 
  }).then(function(res){
     changedata3(res.data)
  }).catch(function (error) {
    console.log(error);
  })}




if (myToken!==undefined ){PubSub.publish('GIVE U TOKEN',myToken)}




// React.useEffect(()=>{ 
//   axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=60&%24format=JSON',{
//        headers:{'authorization': `Bearer ${myToken}`} 
//   }).then(function(res){
//      changedata(res.data)
     
//   }).catch(function (error) {
//     console.log(error) ;
//   })},[]); 






 
// React.useEffect(()=>{   
//   axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=60&%24format=JSON',{
//        headers:{authorization: `Bearer ${myToken}`} 
//   }).then(function(res){
//      changedata2(res.data)
//   }).catch(function (error) {
//     console.log(error);
//   })},[]); 

  




 
// React.useEffect(()=>{  
//   axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=60&%24format=JSON',{
//        headers:{authorization: `Bearer ${myToken}` } 
//   }).then(function(res){
//      changedata3(res.data)
//   }).catch(function (error) {
//     console.log(error);
//   })},[]); 

 
  

  

  // getUser()
  // async function getUser() {
  //   try {
  //      const res = await axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=60&%24format=JSON',{
  //               headers:{authorization: `Bearer ${myToken}` } }) ;
  //       changedata(res.data);
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }


  // getUser2()
  // async function getUser2() {
  //   try {
  //      const res = await axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=60&%24format=JSON',{
  //               headers:{authorization: `Bearer ${myToken}` } }) ;
  //       changedata2(res.data);
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }


  // getUser3()
  // async function getUser3() {
  //   try {
  //      const res = await axios.get('https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=60&%24format=JSON',{
  //               headers:{authorization: `Bearer ${myToken}` } }) ;
  //       changedata3(res.data);
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  
  

  
  
 
  
  
    

  return (
    <div>
        {ifclick === true ?
        <div>
        <Routes>
          <Route path='/pages/maincontext' element={<Maincontext changeifclick={changeifclick} data={data4}/>}/>
        </Routes>
        </div> :
         
         ifclick2 === true && data5.length === 60 ?
        <div>
        <Routes>
          <Route path='/pages/moredemo' element={<ErrorBoundary><Moredemo changeifclick={changeifclick} changeifclick2={changeifclick2} data={data5}/></ErrorBoundary>}/>
        </Routes>
        </div> :
        

        ifclick3.firstclick === true  ?
        <div>
        <Routes>
          <Route path='/pages/searchdemo' element={<ErrorBoundary><Searchdemo changeifclick={changeifclick} changeifclick3={changeifclick3} data={data7} changedata7={changedata7}/></ErrorBoundary>}/>
        </Routes>
        </div> :


        
        <div>
         <List title="熱門景點"  changeifclick={changeifclick} changeifclick2={changeifclick2} data={data}/>
        
         <List title="熱門活動"  changeifclick={changeifclick} changeifclick2={changeifclick2} data={data2}/>
     
         <List title="熱門美食"  changeifclick={changeifclick}  changeifclick2={changeifclick2} data={data3}/>
        </div> 
        
        
        
        
        
        }
        
        
    </div>
  )
}



//   const params = new URLSearchParams();

//   params.append('grant_type','client_credentials');
//   params.append('client_id','peter12345qwe-59dd18b4-9665-417a');
//   params.append('client_secret','33018355-96e7-4ac0-b8eb-31c5abad5675');


//    React.useEffect(()=>{
//     axios.post('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',{
//       params
//       },{
//         headers:{'content-type': 'application/x-www-form-urlencoded'}
//       }
//   ).then( (res) => console.log(res))
// },[])



  // React.useEffect(()=>{
  //   axios.post('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',{
  //     grant_type:'client_credentials',
  //     client_id:'peter12345qwe-59dd18b4-9665-417a',
  //     client_secret:'33018355-96e7-4ac0-b8eb-31c5abad5675',
  //     },{
  //       headers:{'content-type': 'application/x-www-form-urlencoded'}
  //     }
  // ).then( (res) => console.log(res))
  
  // },[])
  
//   React.useEffect(()=>{  
//   axios({
//     method: 'post',
//     url: 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
//     headers:'content-type: application/x-www-form-urlencoded',
//     data: {
//         grant_type:'client_credentials',
//         client_id:'peter12345qwe-194ceec9-fe3c-4e89',
//         client_secret:'c9ef7e28-0746-46c8-9876-52403ca07496'
//     }
//   })
//     .then( (response) => console.log(response))
// },[])
  
  
  
  
  
  
  
  



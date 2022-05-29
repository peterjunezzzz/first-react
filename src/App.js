import React  from 'react';

import './normalize.css';
import './App.css';
import Main from './components/main';
import Header from './components/head';

function App() {
//   const[myToken,changetoken] = useState(1) //存放組件掛載時，向服務器發送post請求拿到的token
//   const qs = require ('qs')

//   React.useEffect(()=>{
//   axios.post('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
//     qs.stringify({grant_type:'client_credentials',client_id:'peter12345qwe-59dd18b4-9665-417a',client_secret:'33018355-96e7-4ac0-b8eb-31c5abad5675'})
//     ,{
//       headers:{'content-type': 'application/x-www-form-urlencoded'}
//     }
// ).then( (res) => changetoken(res.data.access_token))
// },[])
  


  return (
    
    <div >
      <Header />
      <Main />
    </div> 
    
) ;
}

export default App;

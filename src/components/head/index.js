import React,{ useState} from 'react'
import styles from './head.module.css'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'
import axios from 'axios'

 
export default function head() {
  
  const [type, setType] = useState("ScenicSpot");
  const [city, setCity] = useState("all");
  const [data6, changedata6] = useState([]);
  const [myToken2,setmyToken] = useState()
  
  
  
  React.useEffect(()=>{PubSub.subscribe('GIVE U TOKEN',(_,myToken)=>{setmyToken(myToken)})},[])
  
  if (data6!==[]) {PubSub.publish('GIVE U DATA6',data6)} //data6存放search按鈕按下後拿到的數據
  
  
  function search(){   //按下按鈕後，做兩件事:發出ajax請求，發布消息將firstclick改為true
    if(city!=="all"){
      axios.get(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${type}/${city}?%24format=JSON`,{
                          headers:{'authorization': `Bearer ${myToken2}`} 
    }).then(function(res){
                          changedata6(res.data)
    }).catch(function (error) {
                          console.log(error) ;
    })}
    
    else{
      axios.get(`https://tdx.transportdata.tw/api/basic/v2/Tourism/${type}?%24top=120&%24format=JSON`,{
                          headers:{'authorization': `Bearer ${myToken2}`} 
    }).then(function(res){
                          changedata6(res.data)
    }).catch(function (error) {
                          console.log(error) ;
    })
    

    }
    PubSub.publish('CHANGE U IFCLICK3',{firstclick:true})
  }
 
 
 
  return (
    <div>
        <div className={styles.header}>
            <h1>Welcome to <Link to="/"><span>Taiwan</span></Link></h1>
            <h4>旅遊台灣，留下美好回憶</h4>
            <div className={styles.selectors}>
                <select value={type} onChange={e => {setType(e.target.value)}}>
                 <option value="ScenicSpot">景點</option>
                 <option value="Activity">活動</option>
                 <option value="Restaurant">美食</option>
                </select>
                <select value={city} onChange={e => {setCity(e.target.value)}}>
                    <option value="all">不分縣市</option>
                    <option value="Taipei">臺北市</option>
                    <option value="Taichung">臺中市</option>
                    <option value="Keelung">基隆市</option>
                    <option value="Tainan">臺南市</option>
                    <option value="Kaohsiung">高雄市</option>
                    <option value="NewTaipei">新北市</option>
                    <option value="YilanCounty">宜蘭縣</option>
                    <option value="Taoyuan">桃園市</option>
                    <option value="Chiayi">嘉義市</option>
                    <option value="HsinchuCounty">新竹縣</option>
                    <option value="MiaoliCounty">苗栗縣</option>
                    <option value="NantouCounty">南投縣</option>
                    <option value="ChanghuaCounty">彰化縣</option>
                    <option value="Hsinchu">新竹市</option>
                    <option value="YunlinCounty">雲林縣</option>
                    <option value="ChiayiCounty">嘉義縣</option>
                    <option value="PingtungCounty">屏東縣</option>
                    <option value="HualienCounty">花蓮縣</option>
                    <option value="TaitungCounty">臺東縣</option>
                    <option value="KinmenCounty">金門縣</option>
                    <option value="PenghuCounty">澎湖縣</option>
                    <option value="LienchiangCounty">連江縣</option>
                </select>
                <Link to="/pages/searchdemo"><button onClick={search}></button></Link>
            </div>
        </div>
    </div>
  )
}

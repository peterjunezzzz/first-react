import React  from 'react'
import { Link } from 'react-router-dom'
import styles from './demo.module.css'
import PubSub from 'pubsub-js'


export default function index(props) {
  
  const {changeifclick,data} = props
  
  if (data===undefined){
    return <div></div>
  } // 不知道為啥，被傳進來的data動不動就是undefined，下一行程式就會報錯(不能在undefined上讀取屬性)，受不了加了這句判斷式
  const address = data.Address
  
  function givedata(){
    PubSub.publish('GIVE U DATA',data)
  }

  
  
 
  
  return (
    <div className={styles.wrap} onClick={()=>changeifclick(true)}>
      <div className={styles.wrap2} onClick={givedata}>  
            <Link to="/pages/maincontext">
              <div className={styles.header}>
              <img src={data.Picture.PictureUrl1 ? data.Picture.PictureUrl1 : [require("../demo/spotImg404.9aae9bf1.png")] } alt=''/>
              </div>
              { data.ScenicSpotName ? <div className={styles.title}>{data.ScenicSpotName}</div> :
                data.ActivityName  ?  <div className={styles.title2}>{data.ActivityName}</div>   :
                                      <div className={styles.title3}>{data.RestaurantName}</div> }
              
              
              {address === undefined ? <div></div> : 
                    
                <div className={styles.group}>    
                    <div><img src={[require("../demo/placeholder.png")]} alt=''/></div>
                    <div className={styles.area}>{address.slice(0,3)} </div>
                </div>      }
              
              <div className={styles.wrapbottom}>
              <h3>觀看更多</h3>
              </div>
            </Link>
      </div>  
    </div>
  )
}

import React from 'react'
import styles from './maincontext.module.css'


export default function maincontext(props) {
  // console.log(props)
  const {changeifclick , data} = props
  
  React.useEffect(()=>{ return ()=>{changeifclick(false)}},[]) //頁面卸載時(componentWillUnmount)，把ifclick重新改回false
  return (
    <div>   
    { data.ScenicSpotID ?    
            <div className={styles.allarea}>
                <div className={styles.main}>    
                    <div className={styles.topall}>
                        <div className={styles.topimg}>
                          <img src={data.Picture.PictureUrl1 ? data.Picture.PictureUrl1 : [require("./spotImg404.9aae9bf1.png")] } alt=''/> 
                        </div>  
                        <div className={styles.ScenicSpotName}>
                            <div><img src={[require("./pin.png")]} alt=''/></div>
                            <div>{data.ScenicSpotName}</div>
                        </div>
                        
                        <div className={styles.Address}>    
                            <div><img src={[require("./placeholder.png")]} alt=''/></div>
                            <div>{data.Address}</div>
                        </div>
                        <div className={styles.OpenTime}>    
                            <div><img src={[require("./chronometer.png")]} alt=''/></div>
                            <div>{data.OpenTime}</div>
                        </div>
                        
                        <div className={styles.TicketInfo}>    
                            <div><img src={[require("./dollar.png")]} alt=''/></div>
                            <div>{data.TicketInfo}</div>
                        </div>
                        <div className={styles.Phone}>    
                            <div><img src={[require("./call.png")]} alt=''/></div>
                            <div><a href={data.Phone}>{data.Phone}</a></div>
                        </div>
                        
                    </div>
                    <div>
                      {/* 放地圖 */}
                    </div>
                </div>
                <div>    
                        <div></div>
                        <div className={styles.TravelInfo}>{data.TravelInfo}</div>
                </div>
                <div className={styles.alldescription}>    
                      <div className={styles.Description}>{data.Description}</div>
                      <div className={styles.DescriptionDetail}>{data.DescriptionDetail}</div>
                </div>      
            </div> :
          data.ActivityID ?
            <div className={styles.allarea}>
                  <div className={styles.main}>    
                    <div className={styles.topall}>
                        <div className={styles.topimg}>
                          <img src={data.Picture.PictureUrl1 ? data.Picture.PictureUrl1 : [require("./activity404.19912b87.png")] } alt=''/> 
                        </div>  
                        <div className={styles.ActivityName}>
                            <div><img src={[require("./pin.png")]} alt=''/></div>
                            <div>{data.ActivityName}</div>
                        </div>
                        
                        <div className={styles.Location}>    
                            <div><img src={[require("./placeholder.png")]} alt=''/></div>
                            <div>{data.Location}</div>
                        </div>
                        <div className={styles.OpenTime}>    
                            <div><img src={[require("./chronometer.png")]} alt=''/></div>
                            <div>{data.StartTime}~{data.EndTime}</div>
                        </div>
                        
                        <div className={styles.Organizer}>    
                            <div><img src={[require("./dollar.png")]} alt=''/></div>
                            <div>{data.Organizer}</div>
                        </div>
                        <div className={styles.Phone}>    
                            <div><img src={[require("./call.png")]} alt=''/></div>
                            <div><a href={data.Phone}>{data.Phone}</a></div>
                        </div>
                        
                    </div>
                    <div>
                      {/* 放地圖 */}
                    </div>
                </div>
                <div>    
                        <div></div>
                        <div className={styles.TravelInfo}>{data.TravelInfo}</div>
                </div>
                <div className={styles.alldescription}>    
                      <div className={styles.Description}>{data.Description}</div>
                      <div className={styles.DescriptionDetail}>{data.DescriptionDetail}</div>
                </div> 
            </div> :
          data.RestaurantID ?  
            <div className={styles.allarea}>
                <div className={styles.main}>    
                    <div className={styles.topall}>
                        <div className={styles.topimg}>
                          <img src={data.Picture.PictureUrl1 ? data.Picture.PictureUrl1 : [require("./spotImg404.9aae9bf1.png")] } alt=''/> 
                        </div>  
                        <div className={styles.RestaurantName}>
                            <div><img src={[require("./pin.png")]} alt=''/></div>
                            <div>{data.RestaurantName}</div>
                        </div>
                        
                        <div className={styles.Address}>    
                            <div><img src={[require("./placeholder.png")]} alt=''/></div>
                            <div>{data.Address}</div>
                        </div>
                        <div className={styles.OpenTime}>    
                            <div><img src={[require("./chronometer.png")]} alt=''/></div>
                            <div>{data.OpenTime}</div>
                        </div>
                        
                        <div className={styles.Class}>    
                            <div><img src={[require("./restaurant.png")]} alt=''/></div>
                            <div>{data.Class}</div>
                        </div>
                        <div className={styles.Phone}>    
                            <div><img src={[require("./call.png")]} alt=''/></div>
                            <div><a href={data.Phone}>{data.Phone}</a></div>
                        </div>
                        
                    </div>
                    <div>
                      {/* 放地圖 */}
                    </div>
                </div>
                <div>    
                        <div></div>
                        <div className={styles.TravelInfo}>{data.TravelInfo}</div>
                </div>
                <div className={styles.alldescription}>    
                      <div className={styles.Description}>{data.Description}</div>
                      <div className={styles.DescriptionDetail}>{data.DescriptionDetail}</div>
                </div>   
            </div>:
            <div></div> }
      
    </div>  
)}

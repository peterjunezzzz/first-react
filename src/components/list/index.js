import React from 'react'
import { Link } from 'react-router-dom'
import PubSub from 'pubsub-js'
import style from './list.module.css'
import Demo  from '../demo'
import ErrorBoundary from '../errorboundary/ErrorBoundary'
export default function index(props) {
  const {title,changeifclick,changeifclick2,data} = props
  function givedata2(){
    PubSub.publish('GIVE U DATA2',data)
  }
  
  let a, b, c, d, e, f
  [a,b,c,d,e,f] = data
  
  
  

  
  return (
    <div>
        { data.length === 60 ?
        <div className={style.wrap}>
            <div className={style.title} >
               {title}
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f}/></ErrorBoundary>
            </div>
            <div className={style.lookmore} onClick={()=>{changeifclick2(true)}}>
              <Link to="/pages/moredemo">
                <div onClick={givedata2}>查看更多</div>
              </Link>  
            </div> 
        </div> : 
        <div></div>
        }
    </div>
  )
}

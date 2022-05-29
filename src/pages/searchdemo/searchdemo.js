import React , {useState} from 'react'
import style from './searchdemo.module.css'
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary'
import Demo  from '../../components/demo'


export default function searchdemo(props) {
   const{changeifclick,data,changeifclick3,changedata7} = props
   
  
  
  function cleardata7 (){changedata7([])}
   
   
   
   React.useEffect(()=>{ return ()=>{changeifclick3(false)}},[]) //頁面卸載時(componentWillUnmount)，把ifclick3重新改回false
   React.useEffect(()=>{ return cleardata7() },[])
   

   const[currentPage,changePage] = useState(1)    //第一個button現在是第幾頁
   const[buttonNumber,changeButton] = useState(1) //第幾個button


   const perpage = 12
   const totalData = data.length
   const page = Math.ceil( totalData / perpage )   //Math.ceil() 函式會回傳大於等於所給數字的最小整數。

   function plus(){
     if(currentPage+5>page){changePage(currentPage+0)}
     else{changePage(currentPage+5)}
   }

   function minus(){
    if(currentPage-5<1){changePage(currentPage+0)}
    else{changePage(currentPage-5)}
   }
   
  



  if (data.length > 0) {
  return (
    <div>
        <div className={style.wrap}>
            
            <div className={style.demos}>
            {0+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[0+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            {1+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[1+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            {2+12*currentPage-12+(buttonNumber-1)*12 > totalData ? <div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[2+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            </div>
            <div className={style.demos}>
            
            {3+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[3+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            {4+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[4+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            {5+12*currentPage-12+(buttonNumber-1)*12 > totalData ? <div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[5+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
             }

            </div>
            <div className={style.demos}>
             
             {6+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[6+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

             {7+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[7+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

             {8+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[8+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            </div>
            <div className={style.demos}>
              
              {9+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[9+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }
              
              {10+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[10+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }
              
              {11+12*currentPage-12+(buttonNumber-1)*12 > totalData ?<div></div>:
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={data[11+12*currentPage-12+(buttonNumber-1)*12]}/></ErrorBoundary>
              }

            </div>
            <div className={style.pages}>
                <div className={style.leftArrow} onClick={minus}><img src={[require("./fast-forward.png")]} alt=''/></div>

                <div className={buttonNumber===1 ? style.active : ""} onClick={()=>{changeButton(1)}} >{currentPage}  </div>
                <div className={buttonNumber===2 ? style.active : ""} onClick={()=>{changeButton(2)}}>{currentPage+1} </div>
                <div className={buttonNumber===3 ? style.active : ""} onClick={()=>{changeButton(3)}}>{currentPage+2} </div>
                <div className={buttonNumber===4 ? style.active : ""} onClick={()=>{changeButton(4)}}>{currentPage+3} </div>
                <div className={buttonNumber===5 ? style.active : ""} onClick={()=>{changeButton(5)}}>{currentPage+4} </div> 

                <div className={style.rightArrow} onClick={plus}><img src={[require("./fast-forward.png")]} alt=''/></div>
            </div>
        </div>
    </div>
  )
}}

import React ,{useState} from 'react'
import style from './moredemo.module.css'
import Demo  from '../../components/demo'
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary'


export default function moredemo(props) {
    const {data ,changeifclick,changeifclick2} = props

    let a1, b1, c1, d1, e1, f1 ,g1 ,h1 ,i1 ,j1 ,k1 ,l1, a2, b2, c2, d2, e2, f2 ,g2 ,h2 ,i2 ,j2 ,k2 ,l2,
    a3, b3, c3, d3, e3, f3 ,g3 ,h3 ,i3 ,j3 ,k3 ,l3 ,a4, b4, c4, d4, e4, f4 ,g4 ,h4 ,i4 ,j4 ,k4 ,l4 ,a5, b5, c5, d5, e5, f5 ,g5 ,h5 ,i5 ,j5 ,k5 ,l5

    [a1, b1, c1, d1, e1, f1 ,g1 ,h1 ,i1 ,j1 ,k1 ,l1, a2, b2, c2, d2, e2, f2 ,g2 ,h2 ,i2 ,j2 ,k2 ,l2, a3, b3, c3, d3, e3, f3 ,g3 ,h3 ,i3 ,j3 ,k3 ,l3 ,a4, b4, c4, d4, e4, f4 ,g4 ,h4 ,i4 ,j4 ,k4 ,l4 ,a5, b5, c5, d5, e5, f5 ,g5 ,h5 ,i5 ,j5 ,k5 ,l5] = data
    
    
    
    

    const[page,changePage] = useState("one")
    
    React.useEffect(()=>{ return ()=>{changeifclick2(false)}},[]) //頁面卸載時(componentWillUnmount)，把ifclick2重新改回false
  return (
    <div>
        {  page==="one" ?
        <div className={style.wrap}>
            
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c1}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f1}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={g1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={h1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={i1}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={j1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={k1}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={l1}/></ErrorBoundary>
            </div>
            <div className={style.pages}>
                <div className={style.active} onClick={()=>{changePage("one")}}>1</div>
                <div onClick={()=>{changePage("two")}}>2</div>
                <div onClick={()=>{changePage("three")}}>3</div>
                <div onClick={()=>{changePage("four")}}>4</div>
                <div onClick={()=>{changePage("five")}}>5</div>
            </div>
        </div>:
             
        page === "two" ?
        <div className={style.wrap}>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c2}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f2}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={g2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={h2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={i2}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={j2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={k2}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={l2}/></ErrorBoundary>
            </div>
            <div className={style.pages}>
                <div onClick={()=>{changePage("one")}}>1</div>
                <div className={style.active} onClick={()=>{changePage("two")}}>2</div>
                <div onClick={()=>{changePage("three")}}>3</div>
                <div onClick={()=>{changePage("four")}}>4</div>
                <div onClick={()=>{changePage("five")}}>5</div>
            </div>
        </div>:    
            
        page === "three" ?
        <div className={style.wrap}>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c3}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f3}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={g3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={h3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={i3}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={j3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={k3}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={l3}/></ErrorBoundary>
            </div>
            <div className={style.pages}>
                <div onClick={()=>{changePage("one")}}>1</div>
                <div onClick={()=>{changePage("two")}}>2</div>
                <div className={style.active} onClick={()=>{changePage("three")}}>3</div>
                <div onClick={()=>{changePage("four")}}>4</div>
                <div onClick={()=>{changePage("five")}}>5</div>
            </div>
        </div>:    
            
        page === "four" ?
        <div className={style.wrap}>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c4}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f4}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={g4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={h4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={i4}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={j4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={k4}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={l4}/></ErrorBoundary>
            </div>
            <div className={style.pages}>
                <div onClick={()=>{changePage("one")}}>1</div>
                <div onClick={()=>{changePage("two")}}>2</div>
                <div onClick={()=>{changePage("three")}}>3</div>
                <div className={style.active} onClick={()=>{changePage("four")}}>4</div>
                <div onClick={()=>{changePage("five")}}>5</div>
            </div>
        </div>:    
        
        <div className={style.wrap}>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={a5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={b5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={c5}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={d5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={e5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={f5}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={g5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={h5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={i5}/></ErrorBoundary>
            </div>
            <div className={style.demos}>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={j5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={k5}/></ErrorBoundary>
              <ErrorBoundary><Demo  changeifclick={changeifclick} data={l5}/></ErrorBoundary>
            </div>
            <div className={style.pages}>
                <div onClick={()=>{changePage("one")}}>1</div>
                <div onClick={()=>{changePage("two")}}>2</div>
                <div onClick={()=>{changePage("three")}}>3</div>
                <div onClick={()=>{changePage("four")}}>4</div>
                <div className={style.active} onClick={()=>{changePage("five")}}>5</div>
            </div>
        </div>
        }
        
    </div>
  )
}

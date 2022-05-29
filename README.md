ifclick變數跟changeifclick方法是從main組件透過props傳給list組件，再從list組件透過props傳給demo組件(main給list再給demo)
本來是想用pubsub直接傳遞，但遇到了以下技術問題(未解決):
   問題1:原本打算把const[ifclick,changeifclick] = useState(false)寫在main裡面，等main組件掛載後發布消息，把ifclick跟changeifclick傳給demo，但是我的demo組件有onClick事件，裡面會用到ifclick跟changeifclick，這樣寫ifclick跟changeifclick會是undefine

   問題2:後來考慮把const[ifclick,changeifclick] = useState(false)寫在demo裡面，讓demo組件掛載後發布消息給main組件，問題是我的main組件包含18個demo組件，這樣寫會發布18次...



組件初次掛載，發送ajax請求獲取數據，我想把數據從axios裡面拿出來到組件全局，我原本是想用return拿，但是一直報錯...後來是靠state才順利拿出來
在.then裡面用usestate的狀態更新方法，把想取出的數據更新到state裡


拿到data後，我想透過props向子組件傳遞，當我傳到孫組件並consolo.log(data)時，會先出現undefine，才出現data。 我想這是因為當我孫組件掛載時ajax請求的數據還沒拿到所致? 所以我在父親組件寫了個三元表達式 { data.length === 60 ?  要渲染的孫組件   :   空<div></div> } 就不會有undefine的問題了


jsSHA是一个用+实现完整系列加密算法的加密库，包括：JS TS SHA
安装:npm install --save jssha
引入:import jsSHA from 'jssha'

react中的引入圖片寫法 <img src={[require("URL")]}

原本在想回到首頁的功能要怎實現，結果用 <Link to="/">內容</Link> 就實現了，配對路徑<Route/>甚至都不用寫。神奇

如果再hooks外部寫判斷式，會出現Rendered more hooks than during the previous render的錯誤，把判斷式寫進hooks的內部就ok了
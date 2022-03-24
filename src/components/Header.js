import './Stocks.css'

function Headers({ symbol, companyName, latestPrice, change }){
  
    return(
        <div class="screen">
            <div class="display">
            <div class="leftDiv">
           <h3> {symbol}</h3>
           <h5>{companyName}</h5>
           </div>
           <div class="rightDiv">
           <h3> {latestPrice}</h3>
           <h3> <span className={change > 0 ? "changeGreen" : "changeRed"}>{change.toFixed(2)}%</span></h3>
           </div>
           </div>
        </div>
    )
}

export default Headers
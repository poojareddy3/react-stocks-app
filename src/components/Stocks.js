import './Stocks.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {CLIENT_URL, API_TOKEN} from '../services/constants'
import Headers from './Header'

function Stocks(){
   const [stocks, setStocks] = useState([])
   const symbols = ['spy', 'amzn', 'fb', 'snap', 'tsla', 'ndaq']
   
   useEffect(() => {
      //const symbols = "fb/"
       const fetchData = async () => {
           try {
            //const response = await axios.get(`${CLIENT_URL}${company}${API_TOKEN}`)  //gets data from the api
            const response = await axios.all(symbols.map((company) => {
                  return axios.get(`${CLIENT_URL}${company}${API_TOKEN}`);
            }))
            console.log(response)
            //const results = response;
            // const results = [];
            // results.push(response)
            //const { symbol, companyName, latestPrice, changePercent }  = response.data;
            //console.log("results" + results)
            // setStocks(prevState => prevState.concat(results))
            // setStocks(results)
            setStocks(response)
            // console.log(stocks)
           } catch (error) {
               console.log(error)
           }
       }
        fetchData();
       //const fetch = symbols.map(fetchData)   //it iterates through each symbol and sends it to fetchData
   },[])

    return(
       <div class="stocks">
            {
                  stocks.map((stock, index) => {
                    const { symbol, companyName, latestPrice, change } = stock.data;
                      return(
                      <Headers 
                      symbol={symbol} 
                      companyName={companyName} 
                      latestPrice={latestPrice} 
                      change={change} 
                      key={index} />
                      )
                  })
                }
         
       </div>
    )
}

export default Stocks
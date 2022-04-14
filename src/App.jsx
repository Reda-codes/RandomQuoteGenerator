import './App.css';
import {useState, useEffect} from 'react';
import Data from "./data";

function App() {


// this app is supposed to fetch the data from type.fit API but due to the api being constantly down I swithed to a local JSON file to provide all quotes

  /*  async function fetchData() {
  const response = await fetch("https://type.fit/api/quotes",
    {
        method : "GET",
        mode: 'cors',
    }
  );
  const quotes = await response.json();
  return quotes;
  } */


  // Data variables
  const [data, setData] = useState([])
  const [quote, setQuote] = useState({})
  // Data variables
  

  // useEffect to update the state once the page is loaded.
  useEffect(() => {
    // Update the sata dtate with the fetched data 
    /* fetchData().then(res=>setData([...res])) */

    
    // due to APi being down I used the local JSON file.
    setData([...Data])

    const quote = data[0 + (Math.floor(Math.random()*(1600+1)))]
    const initialQuote = quote===undefined? '' :{"text": quote.text,"author": quote.author == null ?'Unknown': quote.author }
    setQuote(initialQuote)
    setColors()
  }, []);

// this function switches the buttons and the page background color randomly whenever we generate a quote.
  const setColors = () => {
    const colors = ['#F94144','#F3722C','#F9844A','#F8961E','#F9C74F','#90BE6D','#43AA8B','#4D908E','#577590','#277DA1', '#7678ed'];
    const color= colors[0 + (Math.floor(Math.random()*(10+1)))];
    document.querySelector('#appBody').style.backgroundColor = color;
    document.querySelector('.onClickColor').style.backgroundColor = color;
    document.querySelector('#new-quote').style.backgroundColor = color;
  }


  // useEffect to update the page frontend after our state is updated and adds the first quote.
  useEffect(() => {
    const quote = data[0 + (Math.floor(Math.random()*(1600+1)))]
    setQuote(quote===undefined? '' :{"text": quote.text,"author": quote.author == null ?'Unknown': quote.author })
    setColors()
  }, [data]);

  // update the page frontend and the quote when clicking on get new quote button
  const updateQuote = () => {
    const quote = data[0 + (Math.floor(Math.random()*(1600+1)))]
    setQuote(quote===undefined? '' :{"text": quote.text,"author": quote.author == null ?'Unknown': quote.author })
    setColors()
  }

  return (
    <div className="App" id='appBody'>
      <div id="quote-box">
        <p id="text" className='quote'>"{quote.text}"</p>
        <p id="author" className='author'>{quote.author}</p>
        <div className='button-box'>
          <button className='button' id="new-quote" onClick={updateQuote}>Get New Quote</button>
          <a className="onClickColor tweetButton" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author == null ? 'Unknown': quote.author}`}>Tweet</a>
        </div>
        <a href="https://github.com/Reda-codes" className='myLink'>By Reda</a>
      </div>
      
    </div>
  );
}

export default App;

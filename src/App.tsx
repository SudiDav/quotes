import {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let listOfQuotes = [];
    try {
      const response = await axios.get("http://api.quotable.io/random");
      listOfQuotes = response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(listOfQuotes.content);
      setAuthor(listOfQuotes.author);
    } catch (error) {}
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className='main'>
      <div className='container'>
        <div className='author'>
          <div>{author}</div>
        </div>
        <div className='quote'>
          <h4>{quote}</h4>
        </div>
        <button onClick={quoteAPI} className='btn'>
          Get Quotes
        </button>
      </div>
    </div>
  );
}

export default App;

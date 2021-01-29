import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import axios from 'axios';

function App () {
  const [pages, setPages] = useState([]);

  const fetchData = async() => {
    const response = await axios.get('https://en.wikipedia.org/w/rest.php/v1/search/title?q=Foo&limit=10');
    setPages(response.data.pages);
  };
  console.log("Pages ", pages);

  return (
    <div className='App'>
      <h1> Wiki Search Results </h1>
      <div>
        <button className='fetch-button' onClick={fetchData}> Fetch Data </button>
        <br />
      </div>
      <div className='pages'>
        {pages &&
          pages.map((page, index) => {
            return (
              <div className='page' key={index}>
                <h2> {page.title}</h2>
                <div className='details'>
                  <p>Description: {page.description} </p>
                  <p>Excerpt: {page.excerpt} </p>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React, {useEffect, useState} from 'react'

function App() {

  const[backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/hello")
      .then(response => response.text()) 
      .then(data => {
        console.log(data)
        setBackendData(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  return (
    <div>
      <h1>
        {backendData}</h1>
    </div>
  );
}

export default App;

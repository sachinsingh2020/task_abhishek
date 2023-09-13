import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Axios from 'axios';

const App = () => {

  const [myData, setMyData] = useState(null);
  const [myMenData, setMyMenData] = useState(null);
  const [myWomenData, setMyWomenData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get('https://dev.v2kart.com/v2kart/service/categories/mainCategories');

        const menData = await Axios.get('http://dev.v2kart.com:8080/v2kart/service/categories/men/tree');

        const womenData = await Axios.get('http://dev.v2kart.com:8080/v2kart/service/categories/women/tree');

        setMyData(response.data);
        setMyMenData(menData.data);
        setMyWomenData(womenData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the async function
  }, []);

  // console.log(myData);

  if (!myData && !myMenData && !myWomenData) {
    return null;
  }

  return (
    <>
      <Navbar myData={myData} menData={myMenData} womenData={myWomenData} />
    </>
  )
}

export default App

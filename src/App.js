import React , {useState} from 'react';
import Background from '../src/components/background/Background';
import Search from './components/search/Search';
import Conclusion from './components/conclusion/Conclusion';
import '../src/App.scss';


function App() {

const [weatherData, setweatherData] = useState({})



  return (
    <div className="project">
    <Background  background={weatherData.weather && weatherData.weather[0].main}/>
    <div className='title'>Hava Durumu</div>
    <Search setweatherData={setweatherData} />
    <Conclusion weather={weatherData} />
    </div>
  );
}

export default App;

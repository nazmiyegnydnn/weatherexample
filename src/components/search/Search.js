import React , {useState} from 'react'
import './Search.scss'

const Search = ({setweatherData}) => {

  const api = {
    key:"915aaae645bd5aa58ad4baab64ead764",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }

 const [parameters, setParameters] = useState("");

const search = (e) =>{
  if(e.key === "Enter"){
    fetch(`${api.base}?q=${parameters}&units=metric&lang=tr&appid=${api.key}`)
    .then((data) => data.json())
    .then((conclusion) => {
      setParameters("");
      setweatherData(conclusion);
    } )
  }
}


  return (
    <div className='search'>
      <input 
      className='search-input'
      type='text' 
      placeholder='Şehir'
      onChange={(e) => setParameters(e.target.value)}
      value={parameters}
      onKeyDown={search}
      />
    </div>
  )
}

export default Search
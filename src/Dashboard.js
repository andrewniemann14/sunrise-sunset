/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import DateChanger from './components/DateChanger';
import SunTimes from './components/SunTimes';
import AirportInfo from './components/AirportInfo';
import InputLocation from './components/InputLocation';

// @andrewniemann14
const Dashboard = () => {

  const airportsJson = require('./data/airports.json');

  const [date, setDate] = useState(new Date()); // passed down to/up from DateChanger

  const stringifyDate = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
  
  const [dateString, setDateString] = useState( // passed down to SunTimes
    stringifyDate(date)
    );
  console.log(date);
  console.log(dateString);
    
  const [icao, setIcao] = useState('KOFF');

  const [airport, setAirport] = useState(
    airportsJson.filter(a => a.ICAO === icao)[0]
    );
    
  // const [coords, setCoords] = useState([ // passes down to SunTimes, comes up from InputLocation
  //   airport.latitude, airport.longitude
  // ]);
  
  // new date from DatePicker, new dateString to SunTimes
  useEffect(() => {
    setDateString(stringifyDate(date));
  }, [date]);


  return (
    <div className="h-screen p-4 bg-gray-600">
      <div className="w-1/2 mx-auto">
        <div className="max-w-2xl">
          <DateChanger date={date} setDate={setDate} />
        </div>
        <div className="max-w-2xl">
          <InputLocation setIcao={setIcao} airport={airport} setAirport={setAirport} />
        </div>
        <div className="max-w-2xl mt-4">
          <AirportInfo airport={airport} icao={icao} setIcao={setIcao} />
        </div>
        <div className="max-w-sm mt-4">
          <SunTimes date={date} dateString={dateString} airport={airport} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
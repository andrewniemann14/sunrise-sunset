/* eslint-disable react-hooks/exhaustive-deps */
// need to give attribution to sunrise-sunset.org

import {useState, useEffect} from 'react';

function SunTimes({date, dateString, airport}) {

  const [sunrise, setSunrise] = useState(null); // local state
  const [sunset, setSunset] = useState(null);   // local state

  const systemTimezoneOffset = date.getTimezoneOffset() / 60 * -1; // -6
  // console.log(systemTimezoneOffset);
  
  
  useEffect(() => {
    let locationTimezoneOffset = (airport.DST === 'A') ? airport.timeZone + 1 : airport.timeZone;
    let timezoneDifference = locationTimezoneOffset - systemTimezoneOffset;
    console.log(timezoneDifference);
    fetch(`https://api.sunrise-sunset.org/json?lat=${airport.latitude}&lng=${airport.longitude}&date=${dateString}&formatted=0`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let sunrise = new Date(data.results.sunrise);
      let sunset = new Date(data.results.sunset);
      setSunrise(((sunrise.getHours() + timezoneDifference) < 10 ? '0' : '') + (sunrise.getHours() + timezoneDifference) + ":" + 
        (sunrise.getMinutes() < 10 ? '0' : '') + sunrise.getMinutes() + ":" + 
        (sunrise.getSeconds() < 10 ? '0' : '') + sunrise.getSeconds());
      setSunset(((sunset.getHours() + timezoneDifference) < 10 ? '0' : '') + (sunset.getHours() + timezoneDifference) + ":" + 
        (sunset.getMinutes() < 10 ? '0' : '') + sunset.getMinutes() + ":" + 
        (sunset.getSeconds() < 10 ? '0' : '') + sunset.getSeconds());
    })
  },[airport, dateString]);


  return (
    <div className="flex flex-col w-96 h-36 rounded-md border-2 border-solid border-black text-center items-center bg-gradient-to-r from-yellow-500 to-pink-600">
      <div className="w-full h-full flex">
        <div className="flex-1 flex flex-col justify-center text-white">
          <div className="text-lg">
            Sunrise
          </div>
          <div className="text-2xl">
            {sunrise}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center text-white">
          <div className="text-lg">
            Sunset
          </div>
          <div className="text-2xl">
            {sunset}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunTimes;

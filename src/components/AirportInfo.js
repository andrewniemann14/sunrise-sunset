/* eslint-disable react-hooks/exhaustive-deps */
// https://stackoverflow.com/questions/38689648/react-how-to-pass-state-to-another-component

// import { useState, useEffect } from 'react'

const AirportInfo = ({airport}) => {


  // TODO: only show name/ICAO, and have a extending details pane
  return (
    <div className="rounded-md p-2 border-2 border-solid border-black items-center bg-blue-200">
      <p className="text-center"><span className="font-bold">{airport.ICAO} - {airport.airportName} - {airport.city}</span></p>
      <p>Time Zone: <span className="font-bold">{airport.timeZoneName} ({airport.timeZone})</span></p>
      <p>Current time: <span className="font-bold"></span></p>
      <p>IATA: <span className="font-bold">{airport.IATA}</span></p>
      <p>Altitude: <span className="font-bold">{airport.altitude} ft</span></p>
    </div>
  )
}

export default AirportInfo
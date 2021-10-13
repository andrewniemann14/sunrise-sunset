// https://stackoverflow.com/questions/33211672/how-to-submit-a-form-using-enter-key-in-react-js
// https://swizec.com/blog/fast-searchable-dropdown-inputs-with-react/

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'


const InputLocation = ({setIcao, setAirport}) => {
  const airportsJson = require('../data/airports.json');
  
  // const [conusOnly, setConusOnly] = useState(true) // local state
  // const [checkboxClass, setCheckboxClass] = useState('bg-blue-500 rounded-sm') // local state
  // const [conusTag, setConusTag] = useState('CONUS') // local state

  // // switches the color and text of the checkbox label to the right of the search bar
  // const toggleConus = () => {
  //   if (conusOnly) {
  //     setCheckboxClass('bg-red-500 rounded-sm')
  //     setConusTag('ALL')
  //   } else {
  //     setCheckboxClass('bg-blue-500 rounded-sm')
  //     setConusTag('CONUS')
  //   }
  //   setConusOnly(!conusOnly) // sets it to the opposite of current value
  // }

  
  let options = [];
  
  // const buildOptionsK = (array) => {
  //   airportsJson.forEach(e => {
  //     e.ICAO.startsWith('K') &&
  //     array.push({label: e.ICAO + ' ' + e.airportName + ' - ' + e.city, value: e.ICAO});
  //   })
  // }
  
  const buildOptionsAll = (array) => {
    airportsJson.forEach(e => {
      array.push({label: e.ICAO + ' ' + e.airportName + ' - ' + e.city, value: e.ICAO});
    })
  }
  // this is pulling in the empty options, and never updating
  buildOptionsAll(options);
  let filterOptions = createFilterOptions({options});

  // useEffect(() => {
  //   conusOnly && buildOptionsK(options);
  //   conusOnly || buildOptionsAll(options);
  //   filterOptions = createFilterOptions({options})
  //   console.log(options);
  // }, [conusOnly, airport]) // rebuilds the list every time checkbox is toggled, or option chosen

  useEffect(() => {
    setAirport(airportsJson.filter(a => a.ICAO === 'KLNK')[0])
  }, [])


  return (
    <div className="flex flex-row">
      
      <Select 
        options={options} 
        filterOptions={filterOptions} 
        onChange={e => {
          setIcao(e.value);
          console.log(e.value)
          setAirport(airportsJson.filter(a => a.ICAO === e.value)[0])
        }}
        className="flex-1"
      />

      {/* <div className={checkboxClass}>
        <label htmlFor="conusCheckbox" className="flex flex-row justify-center items-center h-full leading-none cursor-pointer w-20 border-2 border-white" >
          <input type="checkbox" id="conusCheckbox" checked={conusOnly} onChange={toggleConus} className="hidden" />
        {conusTag}</label>
      </div> */}
      
    </div>
  )
}

export default InputLocation

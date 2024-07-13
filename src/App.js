import React, { useState, useEffect } from 'react';
import AlarmList from './components/AlarmList';
import AlarmForm from './components/AlarmForm';
import { fetchAlarms, fetchCurrencyList, addAlarm, deleteAlarm, updateAlarm, updateConfigUrl, fetchConfigUrl } from './api';

import './App.css';
import ConfigUrl from './components/ConfigUrl';

function App() {
  const [alarms, setAlarms] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const [currencyList, setCurrencyList] = useState([])
  const [configUrl, setConfigUrl] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchAlarms().then((data) => { setAlarms(data)})
    fetchConfigUrl().then((data) => setConfigUrl(data.url));
    fetchCurrencyList().then((data) => { setCurrencyList(data); setIsLoading(false);})
  }, [])

  const handleSaveConfigUrl = (newUrl) => {
    updateConfigUrl(newUrl).then((data) => setConfigUrl(data.url));
  };


  const existedAlarms = alarms.map(({currency}) => currency);
  const availableCurrencies = currencyList.filter(item => !existedAlarms.includes(item))
  return (
    <div className="App">
      <h1 className='title'>Cryptocurrency Alarms ⏰</h1>

        <div className='content'>
          { isLoading && <div className='loader'> Пагади, не суетись &nbsp;<span className='flip-content'>☕️</span></div>}
          <ConfigUrl url={configUrl} onSave={handleSaveConfigUrl} /> {/* Pass URL and onSave handler */}
          <AlarmForm onSubmit={addAlarm} currencyList={availableCurrencies} />
          <AlarmList alarms={alarms} onUpdate={updateAlarm} onDelete={deleteAlarm} />
        </div>

    </div>
  );
}

export default App;

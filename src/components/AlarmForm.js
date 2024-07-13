import React, { useState } from 'react';

function AlarmForm({ onSubmit, currencyList = [] }) {

  const [newAlarm, setNewAlarm] = useState({ currency: currencyList[0], type: 'rising', value: 100, isActive: true});
  const [isAdding, setIsAdding] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...newAlarm, isRising: newAlarm.type === 'rising' } );
    setNewAlarm({ currency: '', type: 'rising', value: 0, });
  };

  if(!currencyList.length) {
    return <div>Вы добавили все алармы 👀</div>
  }

  if(!isAdding) {
    return <div className='add-action' onClick={() => setIsAdding(true)}>➕ Добавить</div>
  }

  return (
    <form onSubmit={handleSubmit} className='new-form'>
      <div className='item-form-controls'>
      <select
        value={newAlarm.currency}
        onChange={e => setNewAlarm({...newAlarm, currency: e.target.value})}
      >
        { currencyList.map((item) => {
          return <option value={item} key={item}>{item}</option>
        })}
      </select>
      <select
        value={newAlarm.type}
        onChange={e => setNewAlarm({...newAlarm, type: e.target.value})}
      >
        <option value="rising">Вверх</option>
        <option value="falling">Вниз</option>
      </select>
      <input
        type="number"
        placeholder="Value"
        value={newAlarm.value}
        onChange={e => setNewAlarm({...newAlarm, value: parseFloat(e.target.value)})}
      />
      </div>
      <div className='buttons-area'>
      <button type="submit" className='button'>Добавить</button>
      <button type="reset" className='button' onClick={() => setIsAdding(false)}>Отмена</button>
      </div>
    </form>
  );
}

export default AlarmForm;
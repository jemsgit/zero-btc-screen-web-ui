const authToken = 'test123';

export const fetchAlarms = async () => {
  try {
  const response = await fetch('http://localhost:5000/api/alarms', {
    headers: {
      'Authorization': `Basic ${authToken}`
    }
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Failed to fetch alarms');
  }
} catch(e) {
  console.log(e)
}
  return [];
};

export const fetchCurrencyList = async () => {  
  const response = await fetch('http://localhost:5000/api/currency-list', {
    headers: {
      'Authorization': `Basic ${authToken}`
    }
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Failed to fetch currency list');
  }
  return [];
};

export const addAlarm = async (newAlarm) => {
  const response = await fetch('http://localhost:5000/api/alarms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authToken}`
    },
    body: JSON.stringify(newAlarm),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Failed to add alarm');
  }
};

export const updateAlarm = async (id, updatedAlarm) => {
  const response = await fetch(`http://localhost:5000/api/alarms/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authToken}`
    },
    body: JSON.stringify(updatedAlarm),
  });
  if (response.ok) {
    return true;
  } else {
    console.error('Failed to update alarm');
  }
};

export const deleteAlarm = async (currency) => {
  const response = await fetch(`http://localhost:5000/api/alarms/${currency}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Basic ${authToken}`
    }
  });
  if (response.ok) {
    return 1;
  } else {
    console.error('Failed to delete alarm');
  }
};

export async function fetchConfigUrl() {
  const response = await fetch('/api/currecy-list-url', { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${authToken}`
  }});
  const data = await response.json();
  return data;
}

export async function updateConfigUrl(newUrl) {
  const response = await fetch('/api/currecy-list-url', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authToken}`
    },
    body: JSON.stringify({ url: newUrl }),
  });
  const data = await response.json();
  return data;
}
// ConfigUrl.js
import React, { useState } from 'react';

function ConfigUrl({ url, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUrl, setNewUrl] = useState(url);

  const handleEditClick = () => {
    setNewUrl(url);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(newUrl);
    setIsEditing(false);
  };

  return (
    <div className="config-url">
      <h2>Configuration URL</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <span>{url}</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ConfigUrl;

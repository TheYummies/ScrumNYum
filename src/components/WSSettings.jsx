import React from 'react';

function WSSettings({workspaces, setWorkspaces}) {
  //TO DO
  //depending on btn, create request on backend to post or delete
  //this should also cause update to our WS Selector list
  const onCreate = (event) => {
    event.preventDefault();
    const wsName = document.getElementById('ws-name').value;
    // send this to back end to post
    
  }

  const onDelete = (event) => {
    event.preventDefault();
    const wsName = document.getElementById('ws-name').value;
    // send this to backend to delete
  }
  
  return (
    // User types in ws name -> clicks create ws -> ws added to their ws/teams
    // User types in ws name -> clicks delete ws -> ws removed from their ws/teams (and db?)
    <div className='ws-settings-container'>
      <form id='ws_settings'>
        <label htmlFor='ws-name'>Workspace Name:</label>
        <input required type='text' id='ws-name' name='ws-name'></input>
        <button onClick={onCreate}>Create Workspace</button>
        <button onClick={onDelete}>Delete Workspace</button>
      </form>
    </div>
  )
}

export default WSSettings;
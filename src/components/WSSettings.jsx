import React from 'react';

function WSSettings() {
  //TO DO
  //depending on btn, create request on backend to post or delete
  //this should also cause update to our WS Selector list

  
  return (
    // User types in ws name -> clicks create ws -> ws added to their ws/teams
    // User types in ws name -> clicks delete ws -> ws removed from their ws/teams (and db?)
    <div className='ws-settings-container'>
      <form>
        <label htmlFor='ws-name'>Workspace Name:</label>
        <input type='text' id='ws-name' name='ws-name'></input>
        <button>Create Workspace</button>
        <button>Delete Workspace</button>
      </form>
    </div>
  )
}

export default WSSettings;
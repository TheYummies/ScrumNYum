import React from 'react';
import { useNavigate } from 'react-router-dom';

function WSSelector({workspaces, setWorkspaces}) {
  //TO DO - STATE MGMT FOR WS DROPDOWN (FETCH DATA FROM USER?)

  

  return (
    <div className='ws-selector-container'>

      {/* User selects a ws -> clicks enter workspace -> send them to workspace/send data */}
      <form action='#'>
        <label htmlFor='ws-select'>Where will you be scrum-ing today?</label>
        <select className="ws-dropdown" name="ws" id="ws" defaultValue='' >
          <option disabled hidden value=''>My Workspaces</option>
          {/* this needs to be populated with values from DB */}
          <option value='Example'>Example</option>
          {/* propery reference el.workspace (currently a placeholder value) */}
          {workspaces.map((el) => {
            return (
              <option value={el.workspace}>{el.workspace}</option>
            )
          })}
        </select>
        <input type='submit' value='Enter Workspace'></input>
      </form>
    </div>
  )
}

export default WSSelector;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WSSelector() {
  //TO DO - STATE MGMT FOR WS DROPDOWN (FETCH DATA FROM USER?)

  // Below fxn grabs value from dropdown and passes it to
  // scrum page so title can be set - also navigates us to scrum pg
  const navigate = useNavigate();
  const handleWsClick = (e) => {
    e.preventDefault();
    const selectedOpt = document.getElementById('ws');
    // console.log('selectedOpt', selectedOpt)
    const wsName = selectedOpt.value;
    // console.log('wsname', wsName);
    navigate('/scrum', { state: { wsName } });
  }

  return (
    <div className='ws-selector-container'>

      {/* User selects a ws -> clicks enter workspace -> send them to workspace/send data */}
      <form action='#'>
        <label htmlFor='ws-select'>Where will you be scrum-ing today?</label>
        <select name="ws" id="ws" defaultValue='' >
          <option disabled hidden value=''>My Workspaces</option>
          {/* this needs to be populated with values from DB */}
          <option value='Example'>Example</option>
        </select>
        <input onClick={handleWsClick} type='submit' value='Enter Workspace'></input>
      </form>
    </div>
  )
}

export default WSSelector;
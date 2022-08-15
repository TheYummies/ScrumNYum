import React, { useState } from 'react';
import UserSettings from '../UserSettings.jsx';
import WSSelector from '../WSSelector.jsx';
import WSSettings from '../WSSettings.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Settings() {
  // state for workspaces
  const dummyWs = {name: 'The JitHub Zone'}
  const [workspaces, setWorkspaces] = useState([dummyWs]);

  return (
    <div className='settings-container'>
      <header className='settings-header'>
        <h1>Settings</h1>
        <nav className='settings-nav'>
          <button>Logout</button>
        </nav>
      </header>
      <main className='settings-main'>
        {/* Workpsace Selector - Select a WS */}
        <WSSelector workspaces={workspaces} setWorkspaces={setWorkspaces}/>
        {/* Workspace Settings - Create a WS */}
        <WSSettings workspaces={workspaces} setWorkspaces={setWorkspaces}/>
        {/* User Settings - Join/Leave*/}
        <UserSettings />
      </main>
    </div>
  )
}

export default Settings;
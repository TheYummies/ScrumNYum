import React from 'react';
import UserSettings from '../UserSettings.jsx';
import WSSelector from '../WSSelector.jsx';
import WSSettings from '../WSSettings.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Settings() {

  // Went witih logout button for simplicity here instead of dropdown on navbar
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
        <WSSelector />
        {/* Workspace Settings - Create a WS */}
        <WSSettings />
        {/* User Settings - Join/Leave*/}
        <UserSettings />
      </main>
    </div>
  )
}

export default Settings;
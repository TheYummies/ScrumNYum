import React from 'react';
import UserSettings from '../UserSettings.jsx';
import WSSelector from '../WSSelector.jsx';
import WSSettings from '../WSSettings.jsx';

function Settings() {
  return (
    <div className='settings-container'>
      <header className='settings-header'>
        <h1>Settings</h1>
        {/* Dropdown component */}
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
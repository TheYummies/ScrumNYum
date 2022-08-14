import React from 'react';
import Board from '../Board.jsx';
import Card from '../Card.jsx';
import { useLocation } from 'react-router-dom';


function Scrum(props) {
  //TO DO
  // Do we need to refer to backend when clicking settings?
  // How to logout?
  // Associating user's stickes w/ their acct and populating them on ws entry 

  // below const allows us to grab state passed from 
  // WSSelector to populate our title
  const location = useLocation();
  
  return (
    <div className='scrum-container'>
      <header>
        <h1>{location.state.wsName + ' Workspace'}</h1>
        <nav className='scrum-nav'>
          <button>Settings</button>
          <button>Logout</button>
        </nav>
      </header>
      {/* Form element for post it creation */}
      <main className='scrum-main'>
        <form id='task-form'>
          {/* Title, description, snack */}
          <label htmlFor="task-title">Title:</label>
          <input type='text' name='task-title' id='task-title'></input>
          <label htmlFor='task-desc'>Description:</label>
          <textarea form='task-form' id='task-desc' name='task-desc' rows='10' cols='30'></textarea>
          <label htmlFor='snack'>Snack:</label>
          <input type='text' name='snack' id='snack'></input>
          <input type='submit' value='Submit'></input>
        </form>
        {/* 4 columns for our post its (w/ drag and drop ability) */}
        <Board id='board-1' className='board' title='To Start'/>
          <Card id='card-1' className='card' draggable='true'>
            <p>Card 1</p>
          </Card>
        <Board id='board-2' className='board' title='In Progress'/>
        <Board id='board-3' className='board' title='In Review'/>
        <Board id='board-4' className='board' title='Complete'/>
      </main>
    </div>
  )
}

export default Scrum;
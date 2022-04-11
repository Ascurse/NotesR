import React from 'react'

import notes from '../assets/data'
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'



 const NotePage = () => {
    const {id} = useParams();
    const note = notes.find(note => note.id===Number(id))
      return (
        <div className='note'>
            <div className='note-header'>
              <h3>
                <Link to='/' >
                  <ArrowLeft />
                </Link>
              </h3>
            </div>
          <textarea value={note?.body}>

          </textarea>
        </div>
      )
}

export default NotePage;

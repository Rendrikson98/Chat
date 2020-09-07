import React from 'react';

import './input.css';

export default function Input({message, setMessage, sendMessage}){
    return(
        <form className='form'>
            <input
                className='input'
                type='text'
                placeholder='Digite sua mesagem...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button className='sendButton' onClick={(e) => sendMessage(e)}>Enviar</button>
        </form>
    )
}
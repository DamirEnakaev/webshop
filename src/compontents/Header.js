import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Deotone</span>
            <ul className = 'nav'>
                <li>About us</li>
                <li>Contacts</li>
                <li>Log in</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
    )
}

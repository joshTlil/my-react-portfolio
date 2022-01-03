import React from 'react';


const NavBar = ({ currentPage, handlePageChange }) => {

    return (
        <div>

            <ul>

            <li className='nav-item'>
                <a 
                href='/home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li>
            <li className='nav-item'>
                <a
                href='/projects'
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                Projects
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='/contacts'
                onClick={() => handlePageChange('Contacts')}
                className={currentPage === 'Contacts' ? 'nav-link active' : 'nav-link'}
                >
                    Contacts
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='/Resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>

            </li>
            </ul>
        </div>
    )

}; 

export default NavBar;
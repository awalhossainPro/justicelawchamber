import React from 'react';
import './Module.Protected.css';

const ProtectedPage = () => {
    return (
        <div className='protected-page'>
            <h1>This is protected Page</h1>
            <p>
                With password protected pages, you can add a password to specific pages on your site that visitors will need to enter in order to view that page. Password protected pages are beneficial when certain information is designed for specific audiences; for example, to restrict access to a download page.

                <br /><br />

                Password protected pages should not be confused with user logins or account management. Password protected pages only adds an individual password for one page, not different passwords for different users.
            </p>
        </div>
    );
};

export default ProtectedPage;
// NotFound.jsx
import React from 'react';
import "../CSS/notfound.css";

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404 - Page Not Found</h1>
                <p className="not-found-message">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="not-found-message">
                    You might have mistyped the address or the page may have been moved.
                </p>
                <a href="/" className="not-found-link">Go back to homepage</a>
            </div>
        </div>
    );
};

export default PageNotFound;
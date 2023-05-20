import React from 'react'

const Footer = () => {
    var dt = new Date();
    return (
        <>
            <footer className="footer mt-10">
                <p>&copy; {dt.getFullYear()} ToguDV. All rights reserved.</p>
            </footer>

        </>
    )
}

export default Footer
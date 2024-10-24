import React from 'react'

export default function Footer() {
    return (
        <footer className="footer mt-24 footer-center bg-base-100 text-base-content p-4">
            <aside>
                <p className='max-sm:text-xs'>.Copyright © {new Date().getFullYear()} - All right reserved by Amir Barfar </p>
            </aside>
        </footer>
    )
}

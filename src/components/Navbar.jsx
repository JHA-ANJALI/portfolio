import React, { useRef, useEffect } from 'react';

export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    useEffect(() => {
        if (!lastActiveLink.current) {
            lastActiveLink.current = document.querySelector('.nav-link.active');
        }
        initActiveBox();

        // Listen for resize events
        const handleResize = () => initActiveBox();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const activeCurrentLink = (event) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove('active');
        }
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        initActiveBox();
    };

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link active' },
        { label: 'About', link: '#about', className: 'nav-link' },
        { label: 'Work', link: '#work', className: 'nav-link' },
        { label: 'Skills', link: '#skills', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
    ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({ label, link, className }, key) => (
                <a href={link} key={key} className={className} onClick={activeCurrentLink}>
                    {label}
                </a>
            ))}
            <div className='active-box' ref={activeBox}></div>
        </nav>
    );
}

import React, { useEffect, useState, useRef } from 'react';
import './styles/style.css'

function Settings() {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };

    }, []);


    return (
        <div className='space'>
        <div ref={ref} className='ui form'>
            <div className='field'>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>Platform</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        test
                    </div>
                </div>
            </div>
        </div>
                <div ref={ref} className='ui form'>
                <div className='field'>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className='dropdown icon'></i>
                        <div className='text'>Sort by Type</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            test
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
};

export default Settings;

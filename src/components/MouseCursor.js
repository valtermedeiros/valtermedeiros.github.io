import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function MouseCursor({ darkMode }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX - 5,
                y: event.clientY - 5
            });
        };

        const handleMouseLeave = (event) => {
            setPosition({
                x: -10,
                y: -10
            });
        };

        const handleMouseOver = (event) => {

            if (typeof event.target.className === 'string') {

                if (event.target.className.includes("hover:")) {
                    setCursorType('pointer');
                }
                else if(event.target.hasAttribute('href')) {
                    setCursorType('pointer');
                }
                else {
                    setCursorType('default');
                }

            }

        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const cursorStyle = {
        zIndex: '9999',
        width: `${cursorType === 'pointer' ? '30px' : '10px'}`,
        height: `${cursorType === 'pointer' ? '30px' : '10px'}`,
        marginLeft: `${cursorType === 'pointer' ? '-10px' : '0px'}`,
        marginTop: `${cursorType === 'pointer' ? '-10px' : '0px'}`,
        'mix-blend-mode': `${cursorType === 'pointer' ? 'difference' : 'normal'}`,
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        transition: 'width 300ms ease, height 300ms ease, margin 300ms ease',
        left: `${position.x}px`,
        top: `${position.y}px`,
        /* transition: 'all .3s ease-in-out' */
    };

    return (
        <>
            <Helmet>
                <style>{`* { cursor: none !important; } .cursor { opacity: 0.90; }`}</style>
            </Helmet>
            <div className={`cursor font-black text-xs ${darkMode ? 'bg-neutral-50 text-neutral-50' : 'bg-neutral-900 text-neutral-900'}`} style={cursorStyle}></div>
        </>
    )

}
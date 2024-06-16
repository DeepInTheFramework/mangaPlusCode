import { useState, useEffect, useRef } from 'react';


//Special hook created to keep track of the window width
const useDebouncedResize = (interval = 100) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const resizeTimer = useRef(null);

    /*To keep an effective track without surchaging the application, we only update the value of the windowWidth
      100ms after the moment the window have been resized by the user
    */
    useEffect(() => {

        const handleResize = () => {
            if (resizeTimer.current !== null) {
                clearTimeout(resizeTimer.current)
            }

            resizeTimer.current = setTimeout(() => {
                setWindowWidth(window.innerWidth)
            }, interval)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if (resizeTimer.current !== null) {
                clearTimeout(resizeTimer.current);

            }
            window.removeEventListener('resize', handleResize)
        }

    }, [interval])

    return windowWidth;
}

export default useDebouncedResize;
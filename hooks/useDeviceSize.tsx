import { useEffect, useState } from "react"

const useDeviceSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    return [width, height]
}

export default useDeviceSize
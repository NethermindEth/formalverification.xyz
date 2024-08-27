import React, { useEffect, useMemo, useState } from 'react'

export const useMobile = (): [boolean, number] => {

  const [deviceWidth, setDeviceWidth] = useState<number>(0)

  useEffect(() => {
    if(window) {
      setDeviceWidth(window?.innerWidth);
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window) {
        setDeviceWidth(window.innerWidth);
      }
    })
    return window.removeEventListener('resize', () => {})
    }, [setDeviceWidth])


  const isMobile = useMemo(() => {
    return deviceWidth < 768
    }, [deviceWidth])
  return [isMobile, deviceWidth] 
}

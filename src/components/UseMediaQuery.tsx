import React from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { ImageSucDesktop } from "./ImageSucDesktop"
import { ImageSucMobile } from "./ImageSucMobile"

export const UseMediaImage = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 780px)')
    return (

     
          <>
            {isLargerThan1280 ? <ImageSucDesktop/> : <ImageSucMobile/>}
          </>
        )
      }
    

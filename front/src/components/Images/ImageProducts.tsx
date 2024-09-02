import React from 'react'
import Image from 'next/image'
import { IImage } from '@/interfaces/interfaces'


  export default function ImageProduct({ src,alt,width,height }: IImage) {
    return (
      <div>
    <Image src={src}  
           alt={alt}
           width={width}
           height={height}
           className="w-full h-auto object-cover rounded" />
         </div>
      
    )
}

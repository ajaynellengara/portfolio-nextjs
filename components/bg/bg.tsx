import React from 'react'
import Me from "@/public/webp/me.webp";


const Bg =() => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
export default Bg;

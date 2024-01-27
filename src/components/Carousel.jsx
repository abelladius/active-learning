import { useState } from "react"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

export default function Carousel({videos}) {

    let [current, setCurrent] = useState(0)

    let previusSlide = () => {
        if(current === 0) setCurrent(videos.length-1)
        else setCurrent(current - 1)
    }

    let nextSlide = () => {
        if(current === videos.length-1) setCurrent(0)
        else setCurrent(current+1)
    }

  return (
    <div className="overflow-hidden relative pb-16 pt-8">
        <div className='flex gap-4 transition ease-out duration-800' style={{
            transform: `translateX(-${current * 100}%)`,
        }}>
            {videos.map((url, index) => (
            <iframe
            key={index} 
            src={url}
            width="500"
            height="100%"
            title={`Video ${index + 1}`}
            ></iframe>
        ))}
        </div>

        <div className="butoane absolute top-0 h-full w-full justify-between items-center flex text-white text-5xl">
            <button onClick={previusSlide}>
                <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
                <BsFillArrowRightCircleFill />
            </button>
        </div>
    </div>
    
  )
}

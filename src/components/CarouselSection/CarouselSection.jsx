import './CarouselSection.styles.css'
import React from 'react';
import Carousel from '../Carousel'


const CarouselSection = () => {
    const videos = [
            'https://www.youtube.com/embed/C5CnJWBpNPU',
            'https://www.youtube.com/embed/35SRic6UOlc',
            'https://www.youtube.com/embed/fdVOr2aVCUQ',
            'https://www.youtube.com/embed/rzNicU2Jp_4',
            'https://www.youtube.com/embed/VRdmV9FQEJk',
            'https://www.youtube.com/embed/a07Homq_Nds',
            'https://www.youtube.com/embed/mhsQOTFBbPI',
            'https://www.youtube.com/embed/_-9PLexo0Lo',
            'https://www.youtube.com/embed/ZXCUXcE-AfM',
            'https://www.youtube.com/embed/LYkttToZUME',
            'https://www.youtube.com/embed/5aVVM9Aw1CQ',
            'https://www.youtube.com/embed/4RSgxXUsXSY',
            'https://www.youtube.com/embed/Y6P0ziY_Zxw'
          ];
  return (
    <section className="max-w-full py-16 mt-16 px-40 max-md:px-8 mx-auto min-h-40 bg-albastru">
        <h2
      className="text-4xl font-bold lg:tracking-tight xl:tracking-tighter text-gray-100 py-4 text-center"
    >Afla cum vei putea vorbi dupa 24 de ore</h2>
    <Carousel videos={videos} />
    </section>
    
  )
}

export default CarouselSection
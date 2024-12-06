import React from 'react'

const OverviewCard = () => {
  return (

    // <div className="bg-[#4A1E1E] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left border border-white p-8 bg-[#3b1811]">
          <h2 className="text-4xl font-semibold mb-4 mx-auto text-white">OVERVIEW</h2>
          <div className="relative mx-auto my-5 w-24 h-[5px] bg-white">
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
    </div>
 
          <p className="mt-4 leading-relaxed text-white">
            Introducing the first uber-luxury project of KIADB special economic
            zone. A community of exclusive 3 & 4 BHK uber-luxury apartments.
            Thoughtfully designed units to give you higher carpet area
            efficiency.
            <br />
            <br />
            Welcome to a location designed for your every need. Live
            effortlessly, surrounded by retail therapy and daily conveniences.
          </p>
        </div>
        {/* Image Section */}
        {/* <div className="md:w-1/2 mt-8 md:mt-0 md:ml-4">
          <img
            src="https://soraandsaki.assetz-property.in/images/overview.jpg"
            alt="Luxury Apartments"
            className="w-full h-auto rounded"
          />
        </div> */}
      </div>
    // </div>
    // <div className="bg-[#3b1811] text-center">
    //   <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-[70px]">
    //     <h2 className="text-[28px] text-[#3b1811] mb-[13px]">ABOUT ASSETZ</h2>
    //     <div class="relative mx-auto my-5 w-24 h-[5px] bg-gradient-to-r bg-[#F58346]">
    //       <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#F58346] rotate-45"></div>
    //     </div>
    //     <p className='font-semibold mb-2'>Every square inch of an Assetz property reflects our “Better Design” philosophy. Here you will find homes that let in tons of natural light, where space is intelligently managed, and every amenity is of the highest quality. By nurturing the greenery all around, we create living spaces that are cherished forever. </p>
    //     <p className='font-semibold mb-2'>Our team comprises over 250 – 300 professionals who bring outstanding expertise to their respective fields. The team also has a 12-year average of rich cross-industry skills across the board. </p>
    //     <p className='font-semibold'>Our mission is to balance the need to break through the clutter of a highly competitive market where trends and fashion have a very short shelf life, with the demands of cost and investor confidence. A way to not succumb to this is to conceive architecture that expresses a sort of timelessness – responding to factors that are immutable to the site and the surrounding context and not to passing trends – in order to create something that cannot be replicated elsewhere.</p>
        
    //   </div>
    // </div>
    
  )
}

export default OverviewCard
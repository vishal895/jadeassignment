import AboutUsCard from "./AboutUsCard"


const AboutUs = () => {
  return (
    <div className="bg-[#F1F1F1] text-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-[70px]">
        <h2 className="text-[28px] text-[#3b1811] mb-[13px]">ABOUT ASSETZ</h2>
        <div class="relative mx-auto my-5 w-24 h-[5px] bg-gradient-to-r bg-[#F58346]">
          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#F58346] rotate-45"></div>
        </div>
        <p className='font-semibold mb-2'>Every square inch of an Assetz property reflects our “Better Design” philosophy. Here you will find homes that let in tons of natural light, where space is intelligently managed, and every amenity is of the highest quality. By nurturing the greenery all around, we create living spaces that are cherished forever. </p>
        <p className='font-semibold mb-2'>Our team comprises over 250 – 300 professionals who bring outstanding expertise to their respective fields. The team also has a 12-year average of rich cross-industry skills across the board. </p>
        <p className='font-semibold'>Our mission is to balance the need to break through the clutter of a highly competitive market where trends and fashion have a very short shelf life, with the demands of cost and investor confidence. A way to not succumb to this is to conceive architecture that expresses a sort of timelessness – responding to factors that are immutable to the site and the surrounding context and not to passing trends – in order to create something that cannot be replicated elsewhere.</p>
        <div className="flex justify-center items-center gap-10 pt-[60px] pb-[10px]">
          <AboutUsCard units="30+" title="RESIDENTIAL PROJECTS" />
          <AboutUsCard units="15,800+" title="residential units delivered & underway" />
          <AboutUsCard units="27 Mn+ SQFT" title="developed & ongoing" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
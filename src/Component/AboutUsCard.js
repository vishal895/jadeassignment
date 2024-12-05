
const AboutUsCard = ({units, title}) => {
    return (
      <>
        <div className="bg-white h-[161.6px] mx-[-5px] py-5 px-5 border border-[#000] shadow-[0_8px_5px_0_rgba(0,0,0,0.37)] rounded-[10px] w-[250px]">
          <h3 className="text-[24px] font-semibold my-[20px]">{units}</h3>
          <small className="text-[14px] uppercase mb-[10px]">{title}</small>
        </div>
      </>
    )
  }
  
  export default AboutUsCard
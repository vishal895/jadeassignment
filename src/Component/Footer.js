import builder from '../assets/builders.png'

const Footer = () => {
  return (
    <footer className='text-center py-[20px]'>
      <p className='font-semibold'>RERA : PRM/KA/RERA/1251/309/PR/060324/006692</p>
      <p className='font-semibold'>PRM/KA/RERA/1251/309/PR/280324/006745</p>
      <p className='font-semibold mt-3 mb-2'>IN ASSOCIATION WITH</p>
      <img src={builder} className='m-auto w-[180px]' />
      <p className='font-semibold my-3'>COPYRIGHT © 2024 ALL RIGHTS RESERVED. </p>
      <p className='font-semibold mb-2'>©️ 2024 Official Website of Assetz Property. We are committed to protecting and processing your personal data responsibly</p>
      <small className='px-[35px] '>Disclaimer: The Company does not guarantee or represent the information contained in this document, which is to be used for general information only. The Company does not guarantee or represent that the information contained within this document is correct. Any interested party should verify all the information including designs, plans, specifications, facilities, features, payment schedules, terms of sales, etc. independently with the Company prior to concluding any decision for buying in any of the projects. The user of the brochure confirms that he/she has not relied on this information alone when making any booking/purchase in any project of the Company. The information, visuals, renders and creative depictions contained herein are artistic impressions, indicative in nature and are for general information purposes only. The actual design/colour/finish/construction/landscape could undergo changes based on changes in design, layouts, materials, site conditions, etc. Any furniture, paintings, or any items of personalized nature not specifically mentioned in the contract and shown in the images are only for the purpose of illustration and does not form part of the offering. Further, the renders/visuals of the area beyond the project site are artistic in nature and may not depict the actual visuals. While every reasonable care has been taken in providing the information, under no circumstances the Company or its employees, managers or representatives shall be held liable for any loss or damage, special or consequential or otherwise, arising from the use of or reliance on information provided in the brochure without verifying the same independently with the Company. The contents provided herein are with all faults and on an “as is” and “as available” basis. No information given in this brochure creates a warranty or expand the scope of any warranty that cannot be disclaimed under the applicable laws. </small>
    </footer>
  )
}

export default Footer
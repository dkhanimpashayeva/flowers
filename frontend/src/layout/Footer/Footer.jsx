import React from 'react'
import '../Footer/Footer.scss'
const Footer = () => {
  return (
 <footer>
   <div className="container">
     <div className="row align-items-center">
       <div className="col-5">
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
        <form> <input type="email" placeholder='Your email'/><button>Send</button></form>
      
       </div>
       <div className="col-2">
         <span>About</span>
         <ul>
           <li>About Us</li>
           <li>Our Partners</li>
           <li>Our Partners</li>
         </ul>
       </div>
       <div className="col-2">
         <span>Contact</span>
         <ul>
           <li>Contact Us</li>
           <li>FAQ Page</li>
           <li>About Me</li>
         </ul>
       </div>

     </div>
   </div>

 </footer>
  )
}

export default Footer

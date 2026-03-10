import Link from "next/link";

const Cta2 = () => {
	return (
	 <div className="tj-cta-section-3">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 col-md-7">
                  <div className="tj-cta-wrapper-3 wow fadeInUp" data-wow-delay="0.1s">
                     <ul className="tj-cta-list">
                        <li>
                           <Link href="tel:+18884521505"><i className="tji-phone"></i>1-888-452-1505</Link>
                        </li>
                        <li>
                           <Link href="mailto:support@solvior.com"><i className="tji-email"></i>support@solvior.com</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 col-md-5">
                  <div className="tj-cta-wrapper-3 wow fadeInUp" data-wow-delay="0.3s">
                     <ul className="tj-cta-list style-2">
                        <li>
                           <span><i className="tji-clock"></i>Mon - Friday from 9:00 - 18:00</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
	);
};

export default Cta2;

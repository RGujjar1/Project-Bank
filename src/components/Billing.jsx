import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";

function Billing() {
  return (
    <section id="Billing" className={layout.sectionReverse}>
      <div
        className={layout.sectionImgReverse}
      >
        <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className={`${layout.sectionInfo}`}>
       <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
            <img src={google} alt="google-play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>
    </section>
  );
}

export default Billing;

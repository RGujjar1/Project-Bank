import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="CTA" className="">
    <div className="flex sm:flex-row flex-col justify-between my-20 CTA-card px-16 py-12 rounded-[20px]">
      <div>
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-center">
        <Button styles={`sm:mt-0 mt-10`}/>
      </div>
    </div>
  </section>
);

export default CTA;

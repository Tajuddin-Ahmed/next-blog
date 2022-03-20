import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/taj1.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,I'm Tajuddin</h1>
      <p>
        I blog about web developer -especially frontend framwordks like React.
      </p>
    </section>
  );
}
export default Hero;

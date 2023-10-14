import Style from './index.module.scss';

function Hero() {
  return (
    <>
      <section className={Style['hero-section']}>
        <div className={Style['container']}>
          <div className={Style['video-wrapper']}>
            <video autoPlay muted loop className={Style['video']}>
              <source src="/assets/hero.webm" type="video/webm" />
            </video>
          </div>
          <div className={Style['contents-wrapper']}>
            <div className={Style['name']}>
              <p>BAEKHAK JEON</p>
            </div>
            <div className={Style['title']}>
              <p className={Style['title__text']}>START</p>
              <p
                className={`${Style['title__text']} ${Style['title__text--secondary-color']}`}>
                FRONT
              </p>
              <p
                className={`${Style['title__text']} ${Style['title__text--secondary-color']}`}>
                DEV
              </p>
              <p className={Style['title__text']}>IN</p>
              <p className={Style['title__text']}>2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

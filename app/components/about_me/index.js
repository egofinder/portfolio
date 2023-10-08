import Style from './index.module.scss';

const AboutMe = () => {
  return (
    <>
      <section className={Style['about-me-section']}>
        <div className={Style['contents-wrapper']}>
          <div className={Style['title']}>
            <p>ABOUT ME</p>
          </div>
          <div className={Style['content']}>
            <p>
              I&apos;m an aspiring front-end developer with a passion for
              <span className={Style['content--secondary-color']}>
                &nbsp;creating intuitive,&nbsp;
              </span>
              user-friendly designs. I&apos;m expanding my skills to transform
              <span className={Style['content--secondary-color']}>
                &nbsp;creative visions&nbsp;
              </span>{' '}
              into clean, seamless digital experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

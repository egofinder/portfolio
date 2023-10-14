import Style from './index.module.scss';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase_1 = "I'm an aspiring";
const phrase_2 = 'front end developer';
const phrase_3 = 'with a passion for user friendly';
const phrase_4 = 'designs.';
const phrase_5 = "I'm expanding my skills to transform visions into";
const phrase_6 = 'clean, seamless';
const phrase_7 = 'digital experiences.';

function AboutMe() {
  let refs = useRef([]);
  const content = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: content.current,
        scrub: true,
        markers: true,
        start: 'top 70%',
        end: 'bottom 50%',
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(<span key={word + '_' + i}>{letters}&nbsp;</span>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];

    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          className={Style['letter']}
          key={letter + '_' + i}
          ref={(el) => {
            refs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <>
      <section className={Style['about-me-section']}>
        <div className={Style['contents-wrapper']}>
          <div className={Style['title']}>
            <p>ABOUT ME</p>
          </div>
          <div ref={content} className={Style['content']}>
            <p>
              <span>{splitWords(phrase_1)}</span>
              <span className={Style['font-color-red']}>
                {splitWords(phrase_2)}
              </span>
              <br />
              <span>{splitWords(phrase_3)}</span>
              <span className={Style['font-color-red']}>
                {splitWords(phrase_4)}
              </span>
              <br />
            </p>
            <br />
            <p>
              <span>{splitWords(phrase_5)}</span>
              <br />
              <span className={Style['font-color-red']}>
                {splitWords(phrase_6)}
              </span>
              <span>{splitWords(phrase_7)}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

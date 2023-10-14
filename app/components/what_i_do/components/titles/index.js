import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { useRef } from 'react';
import Style from './index.module.scss';

function index({ data, setSelectedSkill }) {
  return (
    <div className={Style['titles']}>
      {data.map((skill, i) => {
        return (
          <Title
            key={i}
            data={{ ...skill, i }}
            setSelectedSkill={setSelectedSkill}
          />
        );
      })}
    </div>
  );
}

const Title = ({ data, setSelectedSkill }) => {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      onMouseOver={() => {
        setSelectedSkill(i);
      }}
      onMouseLeave={() => {
        setSelectedSkill(null);
      }}
      ref={container}
      className={Style['title']}>
      <div className={Style['wrapper']}>
        <motion.p style={{ clipPath: clip }}>{title}</motion.p>
      </div>
    </div>
  );
};

export default index;

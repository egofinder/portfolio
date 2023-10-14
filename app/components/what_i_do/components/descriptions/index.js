import Style from './index.module.scss';

function index({ data, selectedSkill }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={Style['descriptions']}>
      {data.map((skill, i) => {
        const { title, description } = skill;

        return (
          <div
            key={i}
            className={Style['description']}
            style={{
              clipPath:
                selectedSkill === i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}>
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default index;

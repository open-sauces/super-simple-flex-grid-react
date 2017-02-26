import React, { PropTypes } from 'react';

const Props = ({ description, list }) => {
  const propsArr = Object.keys(list);

  return (
    <div className="aside__section">
      <h2 className="aside__section-title">{description}</h2>
      <ul className="aside__section-list">
        {propsArr.map((prop) => {
          const propsObjValue = list[prop];

          return (
            <li className="aside__section-list__item" key={prop}>
              <a className="aside__section-list__item__link" href={`#${propsObjValue}`}>{propsObjValue}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Props.propTypes = {
  description: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
};

Props.defaultProps = {
  description: '',
  list: {},
};

export default Props;

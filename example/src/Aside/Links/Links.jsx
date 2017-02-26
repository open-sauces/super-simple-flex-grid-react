import React, { PropTypes } from 'react';

const Links = ({ description, list }) => {
  const linksArr = Object.keys(list);

  return (
    <div className="aside__section">
      <h2 className="aside__section-title">{description}</h2>
      <ul className="aside__section-list">
        {linksArr.map((link) => {
          const linkObj = list[link];
          const linkObjKey = Object.keys(linkObj)[0];
          const linkObjValue = Object.values(linkObj)[0];

          return (
            <li className="aside__section-list__item" key={linkObjKey}>
              <a className="aside__section-list__item__link"
                href={linkObjValue}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkObjKey}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Links.propTypes = {
  description: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
};

Links.defaultProps = {
  description: '',
  list: {},
};

export default Links;

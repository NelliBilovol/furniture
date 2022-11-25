import React from 'react';
import styled from './ServiceItem.module.scss';

interface IProps {
  text: string;
  name: string;
  image: string;
}

const ServiceItem: React.FC<IProps> = ({ name, text, image }) => {
  return (
    <li className={styled.container}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{text}</p>

      <button>Read more</button>
    </li>
  );
};

export default ServiceItem;

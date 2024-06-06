import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

export default function CardComponent({ imgSrc, imgAlt, title, description, link }) {
  return (
    <Card className="max-w-sm">
      <Link to={link}>
        <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </Card>
  );
}

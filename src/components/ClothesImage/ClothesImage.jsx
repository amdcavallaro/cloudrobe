import React from 'react';
import { ClothesItem } from './ClothesImage.style';

const ClothesImage = ({ alt, src }) => {
    return <ClothesItem alt={alt} src={src} />;
};

export default ClothesImage;

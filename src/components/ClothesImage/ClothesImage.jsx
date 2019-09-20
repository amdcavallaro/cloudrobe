import React from 'react';
import { ClothesItem } from './ClothesImage.style';

const ClothesImage = ({ height, alt, width, src }) => {
    return <ClothesItem height={height} alt={alt} width={width} src={src} />;
};

export default ClothesImage;

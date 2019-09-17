import React from 'react';
import { HeaderContainer, HeaderContent } from './Header.style';
import { LABELS } from '../../constants/locale';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>{LABELS.stylist}</HeaderContent>
        </HeaderContainer>
    );
};

export default Header;

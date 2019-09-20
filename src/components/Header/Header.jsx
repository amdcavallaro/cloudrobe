import React from 'react';
import { HeaderContainer, HeaderContent, BackButton } from './Header.style';
import { LABELS } from '../../constants/locale';
import { Link } from 'react-router-dom';

const Header = ({ match }) => {
    const needsBackButton = match.url.length > 1;
    return (
        <HeaderContainer>
            <HeaderContent>{LABELS.stylist}</HeaderContent>
            {needsBackButton && (
                <Link to="/">
                    <BackButton>&lt; Back</BackButton>
                </Link>
            )}
        </HeaderContainer>
    );
};

export default Header;

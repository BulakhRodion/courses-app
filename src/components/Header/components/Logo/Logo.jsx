import React from 'react';

import LogoImg from '@assets/logo.png';

import { LogoStyles } from './Logo.styles';

function Logo() {
	return <LogoStyles src={LogoImg} alt='project logo' />;
}

export default Logo;

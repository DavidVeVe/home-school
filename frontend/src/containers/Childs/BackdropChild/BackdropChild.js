import React from 'react';

import './BackdropChild.scss';

const BackdropChild = ({ children }) => {
	return <div className='backdrop'>{children}</div>;
};

export default BackdropChild;

import React, { Component } from 'react';
import { RiseLoader } from 'react-spinners';
import './Loading.less';

const Loading = () => (
	<div className='sweet-loading'>
    <RiseLoader
      color={'#37d7b7'}
      loading
      size={30}
    />
  </div>
);

export default Loading;

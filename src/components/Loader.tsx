import React from 'react';
import { loader } from '../assets';

type Props = {
  title: string;
};

const Loader: React.FC<Props> = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold tex-2xl text-white mt-2">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Loader;

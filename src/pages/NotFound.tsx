import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {/* <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404"
        className="w-96 h-96 object-contain"
      /> */}
      <h1 className="text-white text-3xl font-bold text-center mt-5">
        Error 404: Page not found
      </h1>
    </div>
  );
};

export default NotFound;

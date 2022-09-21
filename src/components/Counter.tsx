import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ isLoading }) => {
  const { countValue } = useSelector((state) => state.count);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setLoadingMessage('Something wrong with the database');
      }
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto w-full">
        <p className="text-sm mb-2 text-center  bg-orange-500  p-1 px-2 rounded-lg">
          Counter
        </p>
      </div>
      <div className="text-4xl mb-12 border border-orange-500 p-4 rounded-xl font-bold text-center w-48 h-24 flex justify-center items-center text-orange-500">
        {!isLoading ? (
          Number.isInteger(countValue) ? (
            countValue
          ) : (
            countValue.toFixed(2)
          )
        ) : (
          <div className="flex flex-col justify-start items-center">
            <img src="/Ripple.gif" className="h-12" alt="" />
            <p className="text-xs">{loadingMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Counter;

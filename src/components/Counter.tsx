import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { firebaseAuth, firebaseDb } from '../database/firebaseClient';
import { doc, setDoc } from '@firebase/firestore';

const Counter = ({ isLoading }) => {
  const { countValue } = useSelector((state) => state.count);
  const [localCount, setLocalCount] = useState(countValue);

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
          <p className="text-xs">Getting data from firebase...</p>
        )}
      </div>
    </div>
  );
};

export default Counter;

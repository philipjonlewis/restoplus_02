import React, { useState, useEffect, Suspense } from 'react';
import Counter from '../components/Counter';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  countIncrement,
  countDecrement,
  setCounterCount,
} from '../store/countState';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { firebaseAuth, firebaseDb } from '../database/firebaseClient';
import { doc, getDoc, setDoc } from '@firebase/firestore';

const CountDisplayComponent = React.lazy(() => import('../components/Counter'));
const CounterPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { countValue } = useSelector((state) => state.count);

  useEffect(() => {
    const signIn = async () => {
      await signInAnonymously(firebaseAuth)
        .then(async (res) => {
          setUserId(res.user.uid);

          const docRef = doc(firebaseDb, 'count_database', res.user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            dispatch(setCounterCount(docSnap.data().count_value));
            setIsLoading(false);
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
    };

    signIn();
  }, []);

  useEffect(() => {
    const parseDocument = async (id) => {
      await setDoc(doc(firebaseDb, 'count_database', id), {
        count_value: countValue,
      });
    };

    if (userId) {
      parseDocument(userId);
    }
  }, [countValue]);

  const handleChange = (event: { target: { value: number } }) => {
    const value = event.target.value;
    setValue(Number(value));
  };

  const incrementCount = (e) => {
    e.preventDefault();
    dispatch(countIncrement(value));
    toast.success(`😊 Added ${value == 0 ? 1 : value}`);
    // parseDocument();
  };

  const decrementCount = (e) => {
    e.preventDefault();
    dispatch(countDecrement(value));
    toast.warning(`😥 Subtracted ${value == 0 ? 1 : value}`);
  };

  const resetCount = (e) => {
    e.preventDefault();
    setValue(0);
    dispatch(setCounterCount(0));
    toast.info('🥳 Counter and value reset to 0');
  };

  return (
    <div className="flex justify-center items-center  h-full">
      <div className="flex flex-col justify-center items-center w-96 ">
        <Suspense fallback={<p>Loading..</p>}>
          <CountDisplayComponent isLoading={isLoading} />
        </Suspense>

        <form className="w-full">
          <div className="mb-9">
            <label
              htmlFor="numberValue"
              className="text-left text-base text-gray-600"
            >
              Add Input Value
            </label>
            <input
              value={value}
              id="numberValue"
              className="w-full text-black h-12 text-center rounded-lg mt-2"
              type="number"
              onChange={handleChange}
            />
            <p className="text-xs my-1 text-gray-400">
              Without user input,0 value will default to 1{' '}
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <button className="form-btn" onClick={incrementCount}>
              Increment
            </button>
            <button className="form-btn" onClick={decrementCount}>
              Decrement
            </button>
          </div>
          <div>
            <button className="reset-btn" onClick={resetCount}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CounterPage;

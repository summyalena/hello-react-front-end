import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../redux/greetings/greeting';

function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(fetchData);
    console.log('hello');
  }, [dispatch]);

  return (
    <div>
      <h3>Hello everyone</h3>
      {greetings.message}
    </div>
  );
}

export default Greeting;

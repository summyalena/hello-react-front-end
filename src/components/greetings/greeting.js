import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchGreetings } from '../../redux/store/configStore';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  // const greetings = useSelector((state) => state.greetings);

  return (
    <div>
      {/* {greetings.map((greeting) => (
        <div key={greeting.id}>
          {greeting.message}
        </div>
      ))} */}
      <h1>hello</h1>
    </div>
  );
}

export default Greeting;

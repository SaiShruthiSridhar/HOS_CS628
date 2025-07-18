import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will be called after every render
    document.title = `Count: ${count}`;

    // Clean-up function
    return () => {
      // This function will be called before the component unmounts
      document.title = 'React App'; // Reset the document title
    };
  }, [count]); // Specify count as a dependency

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App;

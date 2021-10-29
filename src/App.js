import './App.css';
import React, {Suspense} from 'react';
import Introduction from './components/introduction/Introduction';

function App() {
  return (
    <Suspense fallback={"loading"}>
      <div>
        <Introduction/>
      </div>
  </Suspense>
  );
}

export default App;

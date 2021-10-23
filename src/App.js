import './App.css';
import React, {Suspense} from 'react';
import Introduction from './components/Introduction';

function App() {
  return (
    <Suspense fallback={"loading"}>
      <div className="App">
        <Introduction/>
      </div>
  </Suspense>
  );
}

export default App;

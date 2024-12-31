import { useState } from 'react';
import { TestComponent } from './component/test-component';
import { TestComponent2 } from './component/test-component2';

function App() {
  console.log("app이 재실행 되었습니다.");

  return (
    <div className="App">
      <TestComponent />
      <TestComponent2 />
    </div>
  );
}

export default App;

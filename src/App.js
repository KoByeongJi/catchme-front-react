import { useState } from 'react';
// import { TestComponent } from './component/test-component';
// import { TestComponent2 } from './component/test-component2';
import { MyComponent } from './component/MyComponent';

function App() {
  const [flag, setFlag] = useState(false);
  console.log("app이 재실행 되었습니다.");

  return (
    <div className="App">
      {flag && <MyComponent />}
      {/* {flag && <TestComponent />} */}
      {/* <TestComponent /> */}
      {/* <TestComponent2 /> */}
      <button type="button" onClick={() => { setFlag(true); }}> MyComponent 그리기</button>
      <button type="button" onClick={() => { setFlag(false); }}> MyComponent 지우기</button>
    </div >
  );
}

export default App;

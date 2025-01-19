// import { useState } from 'react';
// import { TestComponent } from './component/test-component';
// import { TestComponent2 } from './component/test-component2';
// import { MyComponent } from './component/MyComponent';
// import Section from './component/Section';
// import { ToastContext } from './component/ToastProvider';
// import AddToastButton from './component/AddToastButton';
import NumContextProvider from './component/root/contexts/useNumContext';
import { ParenentComponent } from './component/root/parent-component';

function App() {
  // const [flag, setFlag] = useState(false);
  // console.log("app이 재실행 되었습니다.");

  // const [toasts, setToast] = useState([]);
  // const addToast = (text) => {
  //   setToast([...toasts, { id: toasts.length, text: text }]);
  // }
  // const removeToasts = (id) => {
  //   setToast(toasts.filter(toast => toasts.id !== id));
  // }

  return (
    <div className="App">
      {/* {flag && <MyComponent />} */}
      {/* {flag && <TestComponent />} */}
      {/* <TestComponent /> */}
      {/* <TestComponent2 /> */}
      {/* <button type="button" onClick={() => { setFlag(true); }}> MyComponent 그리기</button> */}
      {/* <button type="button" onClick={() => { setFlag(false); }}> MyComponent 지우기</button> */}

      {/* <Section title="테스트 타이틀1" />
      <Section title="테스트 타이틀2" />
      <Section title="테스트 타이틀3" />
      <Section title="테스트 타이틀4" /> */}

      {/* <ToastContext.Provider value={values}>
        <AddToastButton />
      </ToastContext.Provider> */}
      <NumContextProvider>
        <ParenentComponent />
      </NumContextProvider>
    </div >
  );
}

export default App;

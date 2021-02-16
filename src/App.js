import CorebizRouter from './router';
import CorebizState from './context/CorebizState';

function App() {
  return (
    <>
      <CorebizState>
        <CorebizRouter/>
      </CorebizState>
    </>
  );
}

export default App;

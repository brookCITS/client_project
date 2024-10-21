import { Outlet } from 'react-router';
//components
import ButtonAppBar from './UI/Appbar';


function App() {
  return (
    <div className='App'>
      <ButtonAppBar/>
      <Outlet />
    </div>
  );
}

export default App;

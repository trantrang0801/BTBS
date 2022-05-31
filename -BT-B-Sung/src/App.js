import {Route,Routes,Link} from 'react-router-dom'
import New from './pages/New/New';
import Home from './pages/Home/Home';
import {DefaultLayout} from './components/Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>

          <Route path='/tintuc' element={<DefaultLayout><New/></DefaultLayout>}/>
      </Routes>
    </div>
  );
}

export default App;

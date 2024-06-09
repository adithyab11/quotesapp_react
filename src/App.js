import logo from './logo.svg';
import './App.css';
import AddQuotes from './components/AddQuotes';
import SearchQuotes from './components/SearchQuotes';
import DeleteQuotes from './components/DeleteQuotes';
import ViewQuotes from './components/ViewQuotes';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddQuotes/>}/>
      <Route path='/search' element={<SearchQuotes/>}/>
      <Route path='/delete' element={<DeleteQuotes/>}/>
      <Route path='/view' element={<ViewQuotes/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

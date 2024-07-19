import './App.css';
import Header from './components/header/Header';
import SecondHeader from './components/header/SecondHeader';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <SecondHeader />
      </div>
      <Main />
      <div className='second_container'></div>
    </>
  );
}

export default App;

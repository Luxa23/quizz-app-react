import './App.css';
import { Profile } from './Components/Profile';
import { MainHeader } from './Components/MainHeader';

function App() {
  return (
    <body className="App">
      <MainHeader />
      <main>
        <Profile />
      </main>
    </body>
  );
}

export default App;

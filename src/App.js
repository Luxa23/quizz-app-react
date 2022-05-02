import './App.css';
import { items } from './db';
import { Profile } from './Components/Profile';
import { MainHeader } from './Components/MainHeader';
import { Card } from './Components/Card';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <>
          {items.map(item => {
            return <Card question={item} />;
          })}
        </>
        <Profile />
      </main>
    </>
  );
}

export default App;

import './App.css';
import { items } from './db';
import { Profile } from './Components/Profile';
import { MainHeader } from './Components/MainHeader';

function Card({ user }) {
  return (
    <section class="card">
      <h2>{user.title}</h2>
      <p>{user.question}</p>
      <button>Show / Hide answer</button>

      <span class="card__answer--hidden">{user.answer}</span>
      <ul>
        {user.tags.map(tag => {
          return <li>{tag}</li>;
        })}
      </ul>
    </section>
  );
}

function App() {
  return (
    <body className="App">
      <MainHeader />
      <main>
        <>
          {items.map(item => {
            return <Card user={item} />;
          })}
        </>
        <Profile />
      </main>
    </body>
  );
}

export default App;

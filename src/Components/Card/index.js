import './styles.css';
import { Button } from '../Button/index';

export function Card({ user }) {
  return (
    <section class="card">
      <h2>{user.title}</h2>
      <p>{user.question}</p>
      <Button />

      <span class="secret">{user.answer}</span>
      <ul>
        {user.tags.map(tag => {
          return <li>{tag}</li>;
        })}
      </ul>
    </section>
  );
}

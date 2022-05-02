import './styles.css';

export function Bookmark({ checked, onToggle }) {
  return (
    <svg
      className={checked ? 'bookmark bookmark--active' : 'bookmark'}
      viewBox="0 0 24 24"
      onClick={onToggle}
    >
      <path
        fill="currentColor"
        d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
      />
    </svg>
  );
}

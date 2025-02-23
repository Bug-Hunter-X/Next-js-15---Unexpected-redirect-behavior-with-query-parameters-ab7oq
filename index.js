```javascript
// pages/index.js
import Link from 'next/link';

export default function Home({ name }) {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Your Name: {name || 'Guest'}</p> {/* Handle missing name gracefully */}
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Access query parameters
  const { name } = context.query;
  return {
    props: { name },
  };
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```
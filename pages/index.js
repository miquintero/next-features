import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Next.js</h1>
    <ul>
      <li><Link href="/routing"><a>Routing</a></Link></li>
      <li><Link href="/rendering"><a>Rendering</a></Link></li>
      <li><Link href="/serverless"><a>Serverless</a></Link></li>
      <li><Link href="/tooling"><a>Tooling</a></Link></li>
    </ul>
  </div>
);

export default Index;
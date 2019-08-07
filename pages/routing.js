import Link from 'next/link';

const Routing = () => (
  <div>
    <h1>Next.js</h1>
    <ul>
      <li><Link href="/"><a>Intro</a></Link></li>
      <li><Link href="/rendering"><a>Rendering</a></Link></li>
      <li><Link href="/serverless"><a>Serverless</a></Link></li>
      <li><Link href="/tooling"><a>Tooling</a></Link></li>
    </ul>
  </div>
);

export default Routing;
import Link from 'next/link';

const Serverless = () => (
  <div>
    <h1>Next.js</h1>
    <ul>
      <li><Link href="/routing"><a>Intro</a></Link></li>
      <li><Link href="/rendering"><a>Rendering</a></Link></li>
      <li><Link href="/"><a>Serverless</a></Link></li>
      <li><Link href="/tooling"><a>Tooling</a></Link></li>
    </ul>
  </div>
);

export default Serverless;
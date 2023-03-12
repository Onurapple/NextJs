
import Link from 'next/link'
export default function Home() {
  return (
    <div> 
      <Link href='/about'>Got to about</Link>
        <br/>
        <Link href='/docs/post-1'>Post-1</Link>
        <br/>
        <Link href='/docs/post-1/post-2'>Post-2</Link>
        <br/>
        <Link href={{
            pathname:'about',
            query: {
                subject:'companyabout',
                number:55}
        }}>Hakkımızda obje ile</Link>
      </div>
  )
}

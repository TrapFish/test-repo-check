import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
const router = useRouter()

  const handleClick = () => {
     console.log('Placing Your order');
     router.push('/product')

  }

  return (
    <>
      <h1>Home Page!!!!!!!!!!!!!!</h1>
      {/* <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link> */}
      <Link href="/blog" >
        Blog
      </Link>
      <Link href='/product'>
        Products
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  )
}
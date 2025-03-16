import Link from 'next/link';
import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
}
from "@clerk/nextjs";

const Header = () => {
  return (
    <div className='flex items-center justify-between shadow-md px-6 py-4'>
        <h1><Link href={'/'}>Home</Link></h1>

        <div className='flex items-center gap-4'>
            <Link href={'/about'}>About</Link>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode='modal' />
                <SignUpButton mode='modal' />
            </SignedOut>
        </div>
    </div>
  )
}

export default Header;
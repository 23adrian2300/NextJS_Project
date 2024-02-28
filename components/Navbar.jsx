"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);


    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image src='/assets/images/logo.svg'
                    alr="Tattler logo"
                    width={30}
                    height={30}
                    className='object-contain'
                    color='black'
                ></Image>
                <p className='logo_text'>Taddler</p>
            </Link>
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div class="flex gap-3 md:gap-5">
                        <Link href='create-tattle' className='black_btn'>
                            Create Tattle
                        </Link>
                        <button type='button' onClick={signOut} className='white_btn'>
                            Sign Out
                        </button>

                        <Link href='/profile'>
                            <Image src='/assets/images/logo.svg'
                                width={35}
                                height={35}
                                className='rounded-full'
                                alt='profile'></Image>
                        </Link>
                    </div>
                ) :
                    (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)} className='black_btn'>
                                    Sign In
                                </button>)
                            )}
                        </>
                    )}
            </div>
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (
                    <div className='flex'>
                        <Image src='/assets/images/logo.svg'
                            width={35}
                            height={35}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown((prevState) => (!prevState))}></Image>
                        <div />
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href='/create-tattle'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    Create Tattle
                                </Link>
                                <button
                                    type='button'
                                    className='mt-5 w-full white_btn '
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}>
                                    Sign Out
                                </button>
                            </div>
                        )}

                    </div>
                ) :
                    (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)} className='black_btn flex-center'>
                                    Sign In
                                </button>)
                            )}
                        </>
                    )}
            </div>
        </nav>
    )
}

export default Nav
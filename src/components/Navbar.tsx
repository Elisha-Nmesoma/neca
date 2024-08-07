
import CartIcon from './cartIcon'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {

    const user = false
    return (
        <div className='flex-between h-12 p-4 text-red-500 border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40  md:text-base'>


            {/* left Links */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href="/">Home</Link>
                <Link href="/">Menu</Link>
                <Link href="/">Contact</Link>
            </div>

            <div className='text-lg md:font-bold '>
                <Link href="/">Neca</Link>
            </div>


            {/* mobile menu */}
            <div className='md:hidden'>
                <Menu />
            </div>


            {/* right links */}
            <div className='hidden md:flex items-center gap-4  justify-end flex-1'>
                <div className=' flex-between gap-1 bg-orange-300 px-1 rounded-md md:absolute top-1 right-2 lg:static '>
                    <Image src='/phone.png' alt='' height={20} width={20} />
                    <span>081 6556 6722</span>
                </div>

                {!user ? (
                    <Link href="/login" > Login</Link>
                ) : (
                    <Link href="/orders">Orders</Link>
                )}
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar
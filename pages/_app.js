import '@/styles/globals.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import RegisterPage from './register';
import ConnectWallet from './connectWalet';



export default function App({ Component, pageProps }) {
  const [sideBar, setSideBar] = useState("hidden md:hidden")
  const sideBarStatus = ()=>{
    if(sideBar === "hidden md:hidden"){
      setSideBar("block md:hidden");
    }
    else if(sideBar === "block md:hidden"){
      setSideBar("hidden md:hidden");
    }
  }
  return (<>
    {/* <nav className='border-b p-6 bg-gray-800'>
      <p className='text-4xl font-bold text-white'>Marketplace</p>
      <div className='flex mt-4'>
        <Link href="/" className='mr-4 text-yellow-500'>
          home
        </Link>
      </div>
    </nav> */}
    <nav className="bg-gray-800 py-20 ">
  <div className="mx-1 px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 mx-auto">
      <div className="flex items-center">
        {/* <img width={400} height={55} src="https://i.ibb.co/GpQ6fzY/Capture-removebg-preview-removebg-preview-1.png" className='rounded-full ' /> */}
        <a href="#" className="ml-1 flex-shrink-0 text-purple-600 text-3xl">
          APG Market 
        </a>
        
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none  focus:bg-gray-700">Home</Link>

            <Link href="/create_nft" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sell NFT</Link>

            <Link href="/my-nfts" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">My NFTs</Link>
            <Link href="/dashboard" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</Link>
            <Link href="/register" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Login/Register</Link>
            <Link href="#" className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 "><ConnectWallet /> </Link>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button type="button" onClick={sideBarStatus} className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:bg-gray-500 focus:text-white">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div className={sideBar}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
       Home
    </Link>

    <Link href="/create_nft" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
        Sell NFT
    </Link>

    <Link href="/my-nfts" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
      My NFTs
    </Link>

    <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
      Dashboard 
    </Link>
    
    </div>
  </div>
</nav>
      

    
<Component {...pageProps} />
  




    <footer className="bg-gray-800 text-white ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">Ali PashmGaran</p>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/aliapg2019" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-400">Copyright &copy; {new Date().getFullYear()}
            <span className="text-gray-500 ml-1">Your Company Name</span>
            <span className="text-gray-400">| All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  

    

  </>
  )
}

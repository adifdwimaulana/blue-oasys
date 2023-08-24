import Image from "next/image"
import { Inter } from 'next/font/google'
import Link from "next/link"
import { useRouter } from "next/router"

const inter = Inter({ subsets: ['latin'] })

interface Props {
    title:string,
    children: React.ReactNode
}

const Layout = ({title, children}:Props) => {
    const router = useRouter();
    const path = router.pathname

    return(
<div
      className={`flex flex-col bg-white text-black min-h-screen ${inter.className}`}
    >
     <div className='w-full'>
      <nav className='navigation flex justify-between items-center'>
        <div className='flex items-center'>
         <Image src={'/img/logo-medifor.png'} width={'40'} height={'40'} alt={'Logo medifor'} />
         <span className='font-bold text-md  ml-4'>Advance Planning System</span>
        </div>
        <div>
          <span className='text-sm'>admin@example.com</span>
        </div>
      </nav>
     </div>
     <div className='flex '>
      <div className='w-1/5 side-nav'>
        <div className='flex items-center mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 15L7 10L12 5" stroke="#6B7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className='ml-4 text-md font-md text-gray-500'>Hide Navigation Bar</span>
        </div>
        <hr/>
        <div className='my-4 flex items-center'>
          <div className='avatar'>BJ</div>
          <div className='ml-4'>
            <div className='font-bold'>Biofarma Jakarta</div>
            <div className='text-xs text-green-700'>Admin local</div>
          </div>
        </div>
        <hr />
        <div>
          <div className=''>
            <Link className={path === '/' ?  "flex items-center my-4 cursor-pointer active-nav" : 'flex items-center my-4 cursor-pointer sub-nav'} href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10L4.16667 8.33333M4.16667 8.33333L10 2.5L15.8333 8.33333M4.16667 8.33333V16.6667C4.16667 17.1269 4.53976 17.5 5 17.5H7.5M15.8333 8.33333L17.5 10M15.8333 8.33333V16.6667C15.8333 17.1269 15.4602 17.5 15 17.5H12.5M7.5 17.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V13.3333C8.33333 12.8731 8.70643 12.5 9.16667 12.5H10.8333C11.2936 12.5 11.6667 12.8731 11.6667 13.3333V16.6667C11.6667 17.1269 12.0398 17.5 12.5 17.5M7.5 17.5H12.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ml-4'>Dashboard</span> 
            </Link>
          </div>
          <div className=''>
            <Link className={path === '/mixing-planner' ? "flex items-center my-4 cursor-pointer active-nav" : "flex items-center my-4 cursor-pointer sub-nav"} href={'/mixing-planner'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.6669 12.6154C15.4539 12.4023 15.1826 12.2572 14.8873 12.1981L13.0658 11.8338C12.0677 11.6342 11.0315 11.7729 10.1211 12.2282L9.87894 12.3492C8.9685 12.8044 7.93231 12.9432 6.93418 12.7436L5.46046 12.4488C4.96021 12.3488 4.44307 12.5054 4.08233 12.8661M6.94842 3.89685H13.0516L12.2887 4.65974V8.60511C12.2887 9.00977 12.4494 9.39786 12.7356 9.684L16.55 13.4985C17.5112 14.4597 16.8305 16.1032 15.4712 16.1032H4.52885C3.16951 16.1032 2.48876 14.4597 3.44995 13.4985L7.26442 9.684C7.55056 9.39786 7.71132 9.00977 7.71132 8.60511V4.65974L6.94842 3.89685Z" stroke="#6B7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='ml-4'>Mixing Planner</span> 
            </Link>
            
          </div>
        </div>
      </div>
      <div className='w-4/5 content'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <div className='my-4'>
          {children}
        </div>
      </div>
     </div>
    </div>
    )
}

export default Layout
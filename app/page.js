import Image from 'next/image'
import './globals.css'
import profilePic from '../public/20210327_150727(1).jpg'
import Logo from '../public/dsf-logo.svg'

export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center bg-navy px-14">
      {/* <div className='bg-lightgreen h-40 w-full'>
      </div> */}
      <section className='flex flex-col  items-center mt-10 lg:mt-16 pt-12 w-full md:w-1/2'>
        <div className='border-2'>
          <Image 
            src={Logo}
            alt= "logo of the business"
            // className='rounded-full'  
            // layout='fill'
            width='200rem'
            style={{
              objectFit:'contain',
            }}    
          />
        </div>
         <div className='z-10 bottom-10'>
         <h1 className='text-lightBlue mt-4 text-5xl'>Lishia Ellis</h1>
          <p className='text-lightBlue text-sm sm:text-lg mt-4 mb-10'>Web Design | UX/UI | Branding</p>
         </div>
          
          <div className='flex flex-col gap-5'>
            <a href='https://twitter.com/TealTernary'target='_blank' rel='noreferrer'>
            <button className='text-lg uppercase border-2 border-myTeal shadow-custom-teal shadow-myTeal/30  text-lightBlue w-80 lg:w-[30rem] h-12 flex justify-center items-center hover:bg-myTeal/30 hover:text-white'type='button' >
              Twitter
              </button>
           </a>
           <a href='https://github.com/lellis09'target='_blank' rel='noreferrer'>
            <button className='text-lg uppercase border-2 border-myindigo shadow-custom-purple shadow-myTeal text-lightBlue w-80 lg:w-[30rem] h-12 flex justify-center items-center hover:bg-myindigo/30 hover:text-white'type='button' >
              Github
              </button>
           </a>
           {/* <a href='https://twitter.com/TealTernary'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl bg-gradient-to-r from lightgreen to-myTeal w-[24rem] lg:w-[42rem] h-12 flex justify-center items-center hover:bg-lightgreen'type='button' >
              <p className='text-navy text-xl uppercase'>Work With Me</p> 
              </button>
           </a> */}
          <a href='https://www.linkedin.com/in/lishia-ellis/'target='_blank' rel='noreferrer'>
            <button className='text-lg uppercase border-2 border-hotpink shadow-custom-pink shadow-myTeal text-lightBlue w-80 lg:w-[30rem] h-12 flex justify-center items-center hover:bg-hotpink/30 hover:text-white'type='button' >
              Linkedin
              </button>
           </a>
           <a href='https://hashnode.com/@tealternary'target='_blank' rel='noreferrer'>
            <button className='text-lg uppercase border-2 border-lightgreen shadow-custom-lime shadow-myTeal text-lightBlue w-80 lg:w-[30rem] h-12 flex justify-center items-center hover:bg-lightgreen/30 hover:text-white'type='button' >
              Hashnode
              </button>
           </a>
          </div>
      </section>


      
    </main>
  )
}

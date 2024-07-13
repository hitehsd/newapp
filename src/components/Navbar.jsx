import logo from '../assets/shopping.svg'


const Navbar = () => {
  
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={logo} height={50} width={50} alt="" />
            <span className="ml-3 text-xl">XYZ shop</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href='/' className="mr-5 hover:text-white">Home</a>
            <a href='/' className="mr-5 hover:text-white">About</a>
            <a href='/' className="mr-5 hover:text-white">Contact Us</a>
          </nav>
          <a href='/'><button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">Cart
            <div className="relative scale-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </button>
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar

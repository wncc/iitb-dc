function Header() {
    return (
        <div className="flex items-center justify-between px-4 py-2 mx-auto  text-textColorAlt bg-secondary min-w-screen">
            {/* Left */}
            <div className='flex'>
                {/* Logo */}
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#f5f5f5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                </div>

                {/* Webpage Name */}
                <div>
                    IITB Diaries Confessions
                </div>
            </div>

            {/* Center */}
            <div className='flex items-center p-2 ml-2 rounded-full w-96 bg-primary'>
                {/* Search Icon */}
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>

                {/* Search Text Box */}
                    <input className="items-center ml-2 bg-transparent outline-none" type='text' placeholder="Search"></input>

            </div>

            {/* Right */}
            <div className='flex'>
                Made with ❤️ ‎ by DevCom
            </div>
        </div>
    )
}

export default Header

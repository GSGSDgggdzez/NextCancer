import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <nav className="">
                    <div className=' container text-center  bg-[#000000] text-white p-2 flex justify-center gap-3'>
                        <div>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <div className='underline font-bold '>
                            <a href="">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="container grid grid-cols-3 items-center  py-3 px-10 border-b border-[#cacaca]">
                        <div className="text-[#000000] text-3xl font-bold ">
                            Exclusive
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <a href="#" className="text-[#000000] hover:border-b-2 border-[#cacaca] px-3 rounded">Home</a>
                            <a href="#" className="text-[#000000] hover:border-b-2 border-[#cacaca] px-3  rounded">Contact</a>
                            <a href="#" className="text-[#000000] hover:border-b-2 border-[#cacaca] px-3  rounded">About</a>
                            <a href="#" className="text-[#000000] hover:border-b-2 border-[#cacaca] px-3 rounded">Sign Up</a>
                        </div>
                        <div className="flex text-center justify-center gap-4 ">
                            <div>
                                <input type="text" className='rounded-2xl bg-[#F5F5F5] px-8 py-2 border-none' placeholder='what are you looking for' />
                            </div>
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* these is the children  */}
                <div className="container mx-auto p-4">
                    {children}
                </div>
                
                    <footer className="bg-[#0F0F0F] text-white py-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                    <p className="text-sm">We are dedicated to providing the best service to our customers.</p>
                                </div>
                                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                    <ul className="text-sm">
                                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
                                        <li className="mb-2"><a href="#" className="hover:text-gray-300">About</a></li>
                                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                                    <p className="text-sm">123 Main St, City, Country</p>
                                    <p className="text-sm">Phone: (123) 456-7890</p>
                                    <p className="text-sm">Email: info@example.com</p>
                                </div>
                                <div className="w-full md:w-1/4">
                                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-white hover:text-gray-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-gray-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-gray-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
                                <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
            </body>
        </html>
    );
}

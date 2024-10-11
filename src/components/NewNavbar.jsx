import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const NewNavbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="Apple" width={14} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {
                        navLists.map((nav) => (
                            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                                <a href="#" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    {nav}
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default NewNavbar
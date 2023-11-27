import Image from "next/image"
import Logo from "../../public/mulogo.svg"

const Navbar = () => {
    return (
        <div className="w-full px-8 py-6 flex flex-row items-center gap-x-3 mobile:justify-center">
            <Image src={Logo} alt="logo" className="w-7 mobile:w-5 tabletOnly:w-6" />
            <span className="text-3xl font-semibold text-red-400 mobile:text-xl tabletOnly:text-2xl"> PREVIOUS YEAR PAPERS</span>
        </div>
    )
}
export default Navbar
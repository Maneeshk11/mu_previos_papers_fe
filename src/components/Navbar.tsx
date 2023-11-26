import Image from "next/image"
import Logo from "../../public/mulogo.svg"

const Navbar = () => {
    return (
        <div className="w-full px-8 py-6 flex flex-row items-center gap-x-3">
            <Image src={Logo} alt="logo" className="w-7" />
            <span className="text-3xl font-semibold text-red-400"> PREVIOUS YEAR PAPERS</span>
        </div>
    )
}
export default Navbar
import Image from "next/image";
import logo from "@/assets/image/logo.png";

const Logo = () => {

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="relative w-8 h-8 transition-all duration-300 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px]">
                <Image src={logo} alt="logo" fill className="object-cover w-full h-full"></Image>
            </div>
            <span className="text-2xl font-bold tracking-[-2px] transition-all duration-300 sm:text-3xl md:text-4xl">SynthGallery</span>
        </div>
    );
};

export default Logo;

import { Button } from "@/components/ui/button";
import mainImage from '@/pages/assets/images/main-image.png';

const SubpageHome = () => {
    return (
        <>
            <div className="flex flex-col gap-2 items-center justify-center mt-20 realhome" id='realhome'>
                <h1 className="text-7xl sm:text-8xl font-bold mb-1 select-none" id="main-title">Sleekord</h1>
                <p className="text-xl sm:text-2xl text-center select-none">
                    A theme made for you to experience a more consistent look and feel for Discord
                </p>
                <a href="#installation" className="z-10">
                    <Button className="my-4 shadow-lg w-36 h-10 rounded-lg relative" id="main-button">Download now</Button>
                </a>
                <div className="relative">
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 rounded-2xl z-10 flex place-content-center hover:bg-black/50">
                        <p className="text-white my-auto select-none">
                            Main page of Discord with the theme applied
                        </p>
                    </div>
                    <img src={mainImage} alt="" className="rounded-2xl" id="main-image" />
                </div>
            </div>
        </>
    );
};

export default SubpageHome
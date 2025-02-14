import { Link } from "react-router-dom";
import "./CSS/Changelogs.css";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function LatestPost({ heading = "", subheading = "", link = "" }) {
  return (
    <div className="p-8 w-fit h-fit flex-wrap flex flex-cols dark:bg-neutral-500/60 bg-slate-200 transition-all duration-300 rounded-xl select-none shadow-md" id="latest-changelogs-post">
      <div>
        <h3 className="text-2xl font-bold mb-2">{heading}</h3>
        <p className="mb-4 whitespace-pre-line">{subheading}</p>
      </div>
      <Link to={link} className="w-full">
        <Button className="w-full border-none">
          Read More
          <ChevronRight className="size-5" />
        </Button>
      </Link>
    </div>
  );
}

function Changelogs() {
  // document.getElementById('latest-changelogs')?.addEventListener('click', () => hideLatest());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [latestText, setLatestText] = useState('');

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);

    window.addEventListener('resize', () => setIsSmallScreen(window.innerWidth < 640));
    handleResize(); // Call initially to set the correct state

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    const latestChangelogsReal = document.getElementById("latest-changelogs-real");
    if (latestChangelogsReal) {
      if (isSmallScreen) {
        latestChangelogsReal.style.paddingLeft = "2.5em";
        latestChangelogsReal.style.paddingRight = "2.5em";
        setLatestText('Latest');
      } else {
        latestChangelogsReal.style.paddingLeft = "0px";
        latestChangelogsReal.style.paddingRight = "0px";
        setLatestText('Latest changelogs');
      }
    }
  }, [isSmallScreen]);

  return (
    <>
      <div className="flex flex-col gap-2 p-10 -mx-10 mt-10 rounded-3xl">
        <div className="">
          <h1 className="text-6xl font-bold text-center mt-10" id="main-title">
            Changelogs
          </h1>
          <p className="text-2xl font-medium text-center mt-4 mx-10">
            Here you can see the changelogs of the theme and website
          </p>
        </div>
      </div>

      <div className="flex flex-col place-content-center mt-12" id="latest-changelogs-real">
        <div className="flex flex-col sm:flex-row sm:gap-0 md:gap-16 lg:gap-24 place-content-center sm:mx-24 dark:bg-[#353535] bg-slate-300 rounded-lg p-4 border-zinc-500 border-2 transition-all duration-300" id="latest-changelogs">
          <div className="flex flex-col gap-1 my-auto ml-4">
              <h1 className="font-bold text-left ml-0 mx-auto leading-normal sm:m-0 m-4">{latestText}</h1>
          </div>
          <LatestPost heading="Changelog 01/17/2025" subheading="Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder" link="/thirdPost" />
        </div>

        <p className="p-8"></p>

        <div className='rounded-t-[3em] bg-neutral-600/50 py-12'>
          <h1 className="font-bold mr-4 my-auto text-center">Older changelogs</h1>
          <div className="grid sm:grid-cols-3 place-content-center gap-4 sm:mx-12 md:mx-24 mt-5">
            <div className="p-8 w-fit h-fit flex-wrap flex flex-cols dark:bg-neutral-500/50 dark:hover:bg-neutral-500/75 bg-slate-300 light:hover:bg-slate-200 transition-all duration-300 rounded-xl select-none" id="">
              <h3 className="text-2xl font-bold mb-2">Changelog 01/06/2025</h3>
              <p className="mb-4">
                The last few days have been rough with working on something
                secret, but now I can show it!
              </p>
              <Link to="/firstPost" className="w-full">
                <Button className="w-full border-none">
                  Read More
                  <ChevronRight className="size-5" />
                </Button>
              </Link>
            </div>
            <div className="p-8 w-fit h-fit flex-wrap flex flex-cols dark:bg-neutral-500/50 dark:hover:bg-neutral-500/75 bg-slate-300 light:hover:bg-slate-200 transition-all duration-300 rounded-xl select-none"id="">
              <h3 className="text-2xl font-bold mb-2">Changelog 01/10/2025</h3>
              <p className="mb-4"> Hello everyone! It's been a minute since I've updated y'all, and I think now is an excellent time to do so.</p>
              <Link to="/secondPost" className="w-full">
                <Button className="w-full border-none">
                  Read More
                  <ChevronRight className="size-5" />
                </Button>
              </Link>
            </div>
          </div>
          <p className="p-5"></p>
        </div>
      </div>
    </>
  );
}

export default Changelogs;

// function hideLatest() {
//   document.getElementById("latest-changelogs")?.classList.add("scale-y-0");
//   setTimeout(() => {
//     document.getElementById("latest-changelogs")?.classList.add("hidden");
//   }, 500);
// }

import "./CSS/App.css";
import "./CSS/Home.css";
import SubpageChangelogs from "./subpages/home/subpage-changelogs";
import SubpageInstallation from "./subpages/home/subpage-installation";
import SubpageFuture from "./subpages/home/subpage-future";
import SubpageChanges from "./subpages/home/subpage-changes";
import SubpageHome from "./subpages/home/subpage-home";

function Home() {
  return (
    <div className="flex flex-col gap-2 h-screen p-10 relative" id="home">
      <SubpageHome />
      <SubpageChanges />
      <SubpageFuture />
      <SubpageInstallation />
      <SubpageChangelogs />
    </div>
  );
}

export default Home;
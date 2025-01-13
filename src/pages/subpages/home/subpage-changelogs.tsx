import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SubpageChangelogs() {
  return (
    <section className="flex flex-col gap-2 p-10 -mx-10" id="changelogs">
      <div className="mb-3">
        <h1 className="text-4xl font-bold text-center select-none">
          Changelogs
        </h1>
        <p className="text-xl font-medium text-center select-none">
          Want to see what's new in the theme? Click the button below!
        </p>
      </div>
      <Link to="/changelogs" className="flex items-center gap-2">
        <Button className="my-4 shadow-2xl mx-auto relative transition-all duration-300" id="goto-changelogs">View Changelogs
          <ChevronRight className="w-4 h-4" id="arrow-right" />
        </Button>
      </Link>
    </section>
  );
}

export default SubpageChangelogs
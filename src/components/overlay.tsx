import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

function Overlay() {
  return (
    <Button variant="secondary" className="fixed top-[1em] h-9 shadow-md right-[17.5em] backdrop-blur-md sm:flex hidden" style={{ zIndex: 60 }} onClick={() => window.history.back()}>
      Go Back
      <ChevronRight />
    </Button>
  );
}

export default Overlay;
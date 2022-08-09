import { useState } from "react";
import Accordion from "./components/Accordion";

export default function App() {
  const [openedAccIdx, setOpenedAccIdx] = useState(null);

  return (
    <main className="">
      {[...new Array(3)].map((_, i) => (
        <Accordion setOpenedAccIdx={setOpenedAccIdx} index={i} openedAccIdx={openedAccIdx} />
      ))}
    </main>
  )
}

import React, { useState } from 'react';
import Animation from '../Animation';
import General from '../General';
import Redurect from '../Redirect';
import Scheduling from '../Scheduling';
import Thumbnail from '../Thumbnail';
import "./index.css";

const sections = ["General", "Scheduling", "Animation", "Thumbnail", "Redirect"];

export default function Accordion({index, openedAccIdx, setOpenedAccIdx}) {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  return (
    <div className='accordion'>
      <button className='accordion-btn' onClick={() => setOpenedAccIdx(index)}>Open</button>
      <div className={openedAccIdx === index ? "" : "hidden"}>
        <ul className='accordion__sections'>
          {sections.map((section, i) => (
            <li
              key={section}
              className={`accordion__section ${activeSectionIdx === i ? "active" : ""}`}
            >
              <button onClick={() => setActiveSectionIdx(i)}>{section}</button>
            </li>
          ))}
        </ul>
        <ul className='accordion__content'>
          {{
            0: <General />,
            1: <Scheduling />,
            2: <Animation />,
            3: <Thumbnail />,
            4: <Redurect />
          }[activeSectionIdx]}
        </ul>
      </div>
    </div>
  )
}

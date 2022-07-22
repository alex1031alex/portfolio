import "./Works.css";
import React, {useEffect, useState} from "react";
import {getWorks} from "../../api";
import {Work} from "../Work/Work";

export const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    (async () => {
      const worksRawData = await getWorks();
      setWorks(worksRawData);
    })();
  },[]);

  return (
    <section id="works" className="works main__works">
      <div className="container">
        <h2 className="works__title">Works</h2>
        <div className="works__container">
          {works.map((work)=> {
            return (
              <div className="works__item" key={work.id}>
                <Work work={work}  />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
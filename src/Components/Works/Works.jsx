import "./Works.css";
import React, {useEffect, useState} from "react";
import {getWorks} from "../../api";
import {Work} from "../Work/Work";
import {Loader} from "../Loader/Loader";

export const Works = () => {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const worksRawData = await getWorks();

      setIsLoading(false);
      setWorks(worksRawData);
    })();
  },[]);

  return (
    <section id="works" className="works main__works">
      <div className="container">
        <h2 className="works__title">Works</h2>
        <div className="works__container">
          {isLoading && <Loader size={60} speed={0.9} color={"#67568c"}/>}
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
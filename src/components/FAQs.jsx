import React, { useRef, useState } from "react";
import { faqs } from "../asset/data/faqs";

function FAQs() {
  const qst = useRef();

  const openFAQs = (e) => {
    const allQst = [...qst.current.querySelectorAll(".item")];
    allQst.forEach((x) => {
      if (e.target !== x) x.classList.remove("open");
    });
    e.target.classList.toggle("open");
  };

  const hideQst = (e) => e.target.parentElement.classList.remove("open");

  const [showFqs,setShowFqs] = useState(false)

  return (
    <div className="faqs" id="faqs">
      <h1>FAQs</h1>
      <div className="content" ref={qst}>
        <div>
          {faqs
            .filter((x,index) => index < (showFqs ? (faqs.length/2) : 5))
            .map((element, index) => {
              return (
                <div key={index} className="item" onClick={openFAQs}>
                  <div className="bg"></div>
                  <div className="item-content">
                    <span>{element.title}</span>
                    <div className="text">
                      <p>
                        {element.content}
                      </p>
                    </div>
                  </div>
                  <div className="btn"></div>
                </div>
              );
            })}
        </div>

        <div>
        {faqs
            .filter((x,index) => index >= (showFqs ? (faqs.length/2) : (faqs.length - 5)))
            .map((element, index) => {
              return (
                <div key={index} className="item" onClick={openFAQs}>
                  <div className="bg"></div>
                  <div className="item-content">
                    <span>{element.title}</span>
                    <div className="text">
                      <p>
                        {element.content}
                      </p>
                    </div>
                  </div>
                  <div className="btn"></div>
                </div>
              );
            })}

        </div>
      </div>
      <button onClick={() => setShowFqs(x => !x)}>{showFqs ? 'Show Less' : 'Show More'}</button>
    </div>
  );
}

export default FAQs;

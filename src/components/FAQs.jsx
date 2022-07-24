import React, { useRef } from "react";

function FAQs() {
  const qst = useRef();

  const openFAQs = (e) => {
    const allQst = [...qst.current.querySelectorAll(".item")];
    allQst.forEach((x) => {if(e.target !== x) x.classList.remove("open")});
    e.target.classList.toggle("open");
  };

  const hideQst = (e) => e.target.parentElement.classList.remove("open");

  return (
    <div className="faqs" id="faqs">
      <h1>FAQs</h1>
      <div className="content" ref={qst}>
        <div>
          <div className="item" onClick={openFAQs}>
            <div className="bg"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <div className="text">
                <p>
                  Once you have listed your tasks, you just move you
                  preferredtask to "To Do" section. We review and contact you on
                  the sameday if any questions. If not, we design your task and
                  move it to"Done" section once it's finished. You can provide
                  us with afeedback for revision or approve and request a new
                  task.
                </p>
              </div>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
        </div>

        <div>
          <div className="item" onClick={openFAQs}>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <div className="text">
                <p>
                  Once you have listed your tasks, you just move you preferred
                  task to "To Do" section. We review and contact you on the same
                  day if any questions. If not, we design your task and move it
                  to "Done" section once it's finished. You can provide us with
                  a feedback for revision or approve and request a new task.
                </p>
              </div>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
          <div className="item" onClick={openFAQs}>
            <div className="point"></div>
            <div className="item-content">
              <span>How does one task at a time work?</span>
              <p>
                Once you have listed your tasks, you just move you preferred
                task to "To Do" section. We review and contact you on the same
                day if any questions. If not, we design your task and move it to
                "Done" section once it's finished. You can provide us with a
                feedback for revision or approve and request a new task.
              </p>
            </div>
            <div className="btn" onClick={hideQst}></div>
          </div>
        </div>
      </div>
      <button>Show More</button>
    </div>
  );
}

export default FAQs;

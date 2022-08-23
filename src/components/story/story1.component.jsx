import "./story1.styles.css";
import { useState } from "react";
const Story1 = () => {
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");
  const [f7, setF7] = useState("");
  const [f8, setF8] = useState("");
  const [f9, setF9] = useState("");
  const [f10, setF10] = useState("");
  const [f11, setF11] = useState("");
  const [show, setShow] = useState(false);
  const reset = () => {
    setF1("");
    setF2("");
    setF3("");
    setF4("");
    setF5("");
    setF6("");
    setF7("");
    setF8("");
    setF9("");
    setF10("");
    setF11("");
    setShow(false);
  };
  return (
    <>
      <div className="card-container">
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"clothing"}
            onChange={(event) => {
              setF1(event.target.value);
            }}
            value={f1}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"fried food"}
            onChange={(event) => {
              setF2(event.target.value);
            }}
            value={f2}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"body part"}
            onChange={(event) => {
              setF3(event.target.value);
            }}
            value={f3}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"clothing"}
            onChange={(event) => {
              setF4(event.target.value);
            }}
            value={f4}
          />
        </div>
        <div>
          <span> ADJECTIVE: </span>
          <input
            placeholder={"room in the house"}
            onChange={(event) => {
              setF5(event.target.value);
            }}
            value={f5}
          />
        </div>
        <div>
          <span> VERB: </span>
          <input
            placeholder={"verb-ing"}
            onChange={(event) => {
              setF6(event.target.value);
            }}
            value={f6}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"bug"}
            onChange={(event) => {
              setF7(event.target.value);
            }}
            value={f7}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"verbing; noun"}
            onChange={(event) => {
              setF8(event.target.value);
            }}
            value={f8}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"animal"}
            onChange={(event) => {
              setF9(event.target.value);
            }}
            value={f9}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={"flavor"}
            onChange={(event) => {
              setF10(event.target.value);
            }}
            value={f10}
          />
        </div>
        <div>
          <span> NOUN: </span>
          <input
            placeholder={`women's clothing`}
            onChange={(event) => {
              setF11(event.target.value);
            }}
            value={f11}
          />
        </div>
        <div>
          <button
            onClick={(event) => {
              setShow(true);
            }}
          >
            {"Go Mad!"}
          </button>
          <button onClick={reset}>{"Play again!"}</button>
        </div>
      </div>
      <div className="story-body">
        {show && (
          <div>
            {`Sometimes I forget to wash my ${f1},`}
            <br />
            {`and it ends up smelling like ${f2},`}
            <br />
            {`Sometimes I forgot to clean my ${f3}, too, and then my `}
            <br />
            {`${f4} really smells like a ${f5},`}
            <br />
            {`after a long day of ${f6} and farting.`} <br />
            {`Oh man, I should really clean up better!`}
            <br />
            {`Sometimes I find a ${f7} in my shoe after playing ${f8} for too long.`}
            <br />
            {`And sometimes I find ${f9} poop under my shoe, and I get ${f10} smells all over my mom's ${f11}.`}
          </div>
        )}
      </div>
    </>
  );
};

export default Story1;

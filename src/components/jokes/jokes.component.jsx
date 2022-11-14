import "./jokes.styles.css";
import { useState } from "react";
import Output from "./jokes.output.component";
const Jokes = ({inputs, name, id}) => {
    const [fields, setFields] = useState(inputs);
    const [show, setShow] = useState(false);
    const [word, setWord] = useState('');
    const reset = () => {
      for (let index = 0; index < fields.length; index++) {
        let newArr = [...fields]; // copying the old datas array
        newArr[index].value = '';
      }
      setShow(false);
    };
    const updateFieldChanged = index => e => {
      let newArr = [...fields]; // copying the old datas array
      newArr[index].value = e.target.value; // replace e.target.value with whatever you want to change it to
      setFields(newArr);
      setWord(e.target.value);
    }
    const onSubmitHandler = () => {
      setWord(`Good job!`);
      setShow(true);
    }
  
    return (
      <>
        <div className="jokes-container">
          <h1> {name}</h1>
          {fields.map((field, index) => {
            return (
              <div className="inputForm">
                <div> {field.label} </div>
                <div>
                  <input
                    placeholder={field.placeholder}
                    onChange={updateFieldChanged(index)}
                    value={field.value}
                  />
                </div>
              </div>);
          })}
          <div className="actionButton">
            <button onClick={onSubmitHandler}>{"Joke around!"} </button>
            <button onClick={reset}>{"Play again!"}</button>
          </div>
        </div>
        <div className="story-body">
          {show && <Output fields={fields} id={id} word={word}/>}
        </div>
      </>
    );
  };
  
  export default Jokes;
  


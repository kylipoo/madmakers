import "./madlibs.styles.css";
import story from "./output";
import { useState, useEffect } from 'react';
const Output = ({ fields, id, word}) => {
  const [theRandomNumber, setTheRandomeNumber] = useState(1);
  const [group, setGroup] = useState(1);
  useEffect(() => {
    setTheRandomeNumber(Math.floor(Math.random() * 500) + 1);
    setGroup(Math.floor(Math.random() * 4) + 1);
  }, []);
  return (
    <div  className="outputContainer">
      <div dangerouslySetInnerHTML={{ __html: story(fields, id) }} />
      <div>
          <div className="word">{word}</div>
          <div className="talking">
           <img src='http://www.downloadclipart.net/medium/speech-bubble-png-file.png' alt="speech bubble" />
           <img src={`https://robohash.org/${theRandomNumber}?set=set${group}&size=180x180`}  alt="robot"/>
          </div>
        {/* <div className="robot">
          <img src={`https://robohash.org/${theRandomNumber}?set=set${group}&size=180x180`}  alt="robot"/>
        </div> */}
      </div>
    </div>
  );
};

export default Output;

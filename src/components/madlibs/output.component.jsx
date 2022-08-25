import "./madlibs.styles.css";
import story from "./output";
const Output = ({ fields, id, word}) => {
  const theRandomNumber = Math.floor(Math.random() * 500) + 1;
  return (
    <div  className="outputContainer">
      <div dangerouslySetInnerHTML={{ __html: story(fields, id) }} />
      <div>
        <div className="talking">
          <div class="word">{word}</div>
          <img src='http://www.downloadclipart.net/medium/speech-bubble-png-file.png' alt="speech bubble" />
        </div>
        <div className="robot">
          <img src={`https://robohash.org/${theRandomNumber}?set=set2&size=180x180`}  alt="robot"/>
        </div>
      </div>
    </div>
  );
};

export default Output;

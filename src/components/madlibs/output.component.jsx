import "./madlibs.styles.css";
import {story1, story2, story3, story4, story5, story6} from "./output";
const Output = ({ fields, id }) => {
  return (
    <>
      {id === 1 &&
        <div dangerouslySetInnerHTML={{ __html: story1(fields)}}/>
      }
      {id === 2 && (
         <div dangerouslySetInnerHTML={{ __html: story2(fields) }} />
      )}
      {id === 3 && (
        <div dangerouslySetInnerHTML={{ __html: story3(fields) }} />
      )}
      {id === 4 && (
        <div dangerouslySetInnerHTML={{ __html: story4(fields) }} />
      )}
      {id === 5 && (
        <div dangerouslySetInnerHTML={{ __html: story5(fields) }} />
      )}
      {id === 6 && (
        <div dangerouslySetInnerHTML={{ __html: story6(fields) }} />
      )}
    </>
  );
};

export default Output;

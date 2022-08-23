import Madlibs from '../madlibs/madlibs.component';
import { libsIn } from "./inputs";
import "./madlibs-list.styles.css";

const MadLibsList = ({ inputs }) => (
  <div className='parent'>
    {libsIn.map((inputs) => {
      return <Madlibs key={inputs.id} inputs={inputs.mad} name={inputs.name} id={inputs.id}/>;
    })}
  </div>
);

export default MadLibsList;

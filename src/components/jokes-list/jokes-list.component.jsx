import Jokes from "../jokes/jokes.component";
import { jokesIn } from "./jokeinputs";
import "./jokes-list.styles.css";

const JokesList = ({inputs}) => (
    <div className='parent'>
    {jokesIn.map((inputs) => {
        return <Jokes key = {inputs.id} inputs = {inputs.knock} name ={inputs.name} id = {inputs.id}/>;
    })}
    </div>
);
export default JokesList;
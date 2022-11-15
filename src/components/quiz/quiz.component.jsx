import "./quiz.styles.css";
import React, { useEffect, useState } from "react";
import Question from '../question/question.component';

const Quiz = () => {
    let questionNumber = 0;
    const [questionList, setQuestionList] = useState([]);
    const [current, setCurrent] = useState(1);
    const [score, setScore] = useState(0);
    const handleNext = ({num, correct}) => {
        setCurrent(num);
        if(correct) setScore(score+1);
    }
    useEffect(() => {
        const url = "https://cors-anywhere.herokuapp.com/https://quizapi.io/api/v1/questions";
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "get",
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    "Content-Type": "application/json",
                    "X-Api-Key": "2J1f4TNsnEGM4Z0grnwrgHRlLhLXVu24zNVo1ISG",
                    "category": "Linux"
                    }
                });
                const json = await response.json();
                console.log(json);
                setQuestionList(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <div>
            <h1>Your Quiz</h1>
            {questionList.map((item) => {
                questionNumber++;
                if(current === questionNumber)
                    return <Question questionNumber={questionNumber} key={item.id} item={item} onNext={handleNext} score={score} />;
                else 
                    return <></>
             })}
        </div>
      </div>
    );
};

export default Quiz;

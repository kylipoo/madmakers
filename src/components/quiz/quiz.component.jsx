import "./quiz.styles.css";
import React, { useEffect, useState } from "react";


const Quiz = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://quizapi.io/api/v1/questions";
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "get",
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": "2J1f4TNsnEGM4Z0grnwrgHRlLhLXVu24zNVo1ISG",
                    }
                });
                const json = await response.json();
                console.log(json);
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {advice}
        </div>
    );
};

export default Quiz;

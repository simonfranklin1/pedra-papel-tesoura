import { createContext, useReducer } from "react";

const stages = ["Start", "Playing"];
const options = ["Rock", "Paper", "Scissors"];

const randomNumber = (array) => {
    const random = Math.floor(Math.random() * array.length);   
    return random
}

const initialState = {
    stage: stages[0],
    score: 0,
    rules: false,
    player: false,
    home: undefined,
    result: undefined
}

const gameReducer = (state, action) => {
    switch(action.type) {
        case "play":
            const playerOption = action.player;
            const homeOption = options[randomNumber(options)];

            let resultGame

            if(playerOption === "Rock" && homeOption === "Scissors") {
                resultGame = "win";
            } else if (playerOption === "Scissors" && homeOption === "Paper") {
                resultGame = "win"
            } else if (playerOption === "Paper" && homeOption === "Rock") {
                resultGame = "win"
            } else if (playerOption === homeOption) {
                resultGame = "tie"
            } else {
                resultGame = "lose";
            }
            return {...state, stage: stages[1], player: playerOption, result: resultGame, home: homeOption};
        case "update_score": 
            
            return {...state, score: state.score += 1};
        case "restart" :
            return {...state, stage: stages[0], player: false, home: undefined, result: undefined};
        case "open_rules":
            return {...state, rules: true};
        case "close_rules":
            return {...state, rules: false};
    }
}

export const gameContext = createContext();

export const GameContextProvider = ({children}) => {
    const value = useReducer(gameReducer, initialState);

    return (
        <gameContext.Provider value={value}>
            {children}
        </gameContext.Provider>
    )
}
import { createStore } from "redux";

const initialState = {
    player1Health: 20,
    player2Health: 20
};

export const DAMAGE_PLAYER_1 = "DAMAGE_PLAYER_1";
export const DAMAGE_PLAYER_2 = "DAMAGE_PLAYER_2";
export const HEAL_PLAYER_1 = "HEAL_PLAYER_1";
export const HEAL_PLAYER_2 = "HEAL_PLAYER_2";

// Action creator
export const damagePlayer1 = (healthAmount = 1) => {
    return { type: DAMAGE_PLAYER_1, amount: healthAmount };
};

const reducer = (currentState = initialState, action) => {

    let newState = currentState;

    switch (action.type) {
        case DAMAGE_PLAYER_1:
            newState = {
                player1Health: currentState.player1Health - action.amount,
                player2Health: currentState.player2Health
            };
            break;
        case DAMAGE_PLAYER_2:
            newState = {
                player1Health: currentState.player1Health,
                player2Health: currentState.player2Health - 1
            };
            break;
        case HEAL_PLAYER_1:
            newState = {
                player1Health: currentState.player1Health + 1,
                player2Health: currentState.player2Health
            };
            break;
        case HEAL_PLAYER_2:
            newState = {
                player1Health: currentState.player1Health,
                player2Health: currentState.player2Health + 1
            };
            break;
        default:
            console.log("Unknown action type", action.type);
    }

    if (newState.player1Health < 0) newState.player1Health = 0;
    if (newState.player2Health < 0) newState.player2Health = 0;

    return newState;

};

const store = createStore(reducer);

export default store;
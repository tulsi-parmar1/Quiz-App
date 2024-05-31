import { createSlice } from "@reduxjs/toolkit"

const quizQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2 // Paris
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: 0 // Harper Lee
    },
    {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        correctAnswer: 1 // 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: 2 // Mars
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3 // Pacific Ocean
    }
];

const itemslice = createSlice({

    name: 'item',
    initialState: {
        question: quizQuestions,
        incorrectquestion: [],
        correctquestion: [],
        skippedquestion: 0,
        currentindex: 0,
    }
    ,
    reducers: {
        nextmcq: (store, action) => {
            store.currentindex += 1;
        },
        currectItem: (store, action) => {
            store.correctquestion.push(action.payload);

        },
        incorrectItem: (store, action) => {
            store.incorrectquestion.push(action.payload);
        }
    }
})
export default itemslice;
export const itemaction = itemslice.actions;


import { writable } from "svelte/store";

export const items = writable([
    {
        id: 1,
        text: "Learn Svelte",
        completed: true
    },
    {
        id: 2,
        text: "Time to Sleep",
        completed: true
    },
]);
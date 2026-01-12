// think.js

function think()
{
    // current date and time with seconds
    let dateTime = new Date().toLocaleString();

    //-//

    // THOUGHT

    hungerStatus();

    let currentThought = 
    {
        a: A,
        b: B,
        timeCode: dateTime
    };

    // add currentThought to thought array
    thought.unshift(currentThought);

    // show current thought
    ge('thoughtOutput').textContent = JSON.stringify(thought[0]);

    //-//

    // MEMORY

    // add current thought to memory
    memory.unshift(thought[0]);

    // show all memories
    ge('memoryOutput').textContent = JSON.stringify(memory);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


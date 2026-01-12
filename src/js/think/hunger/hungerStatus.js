// hungerStatus.js

function hungerStatus()
{
    // AND 0001
    // if i am hungry 1
    // and there is food 1
    if (hunger == true && food == true)
    {
        // thought: i am hungry 1 and there is food 1
        cl('I am Hungry 1 AND Food is available 1');

        // increase hungry level each time thought about
        hungry += 1;

        decisionToEat = true;

        //food = 1;
    }

    // OR
    if (hunger == true || food == true)
    {
        cl('I am Hungry OR Food is available');
        return true;
    }

    // TAUTOLOGY
    if ((hunger == 0 && food == 0) ||
        (hunger == 0 && food == 1) ||
        (hunger == 1 && food == 0) ||
        (hunger == 1 && food == 1))
    {
        cl('I always want candy, even when not hungry');
        return true;
    }

    // CONTRADICTION
    if ((hunger == 0 && food == 0) ||
        (hunger == 0 && food == 1) ||
        (hunger == 1 && food == 0) ||
        (hunger == 1 && food == 1))
    {
        cl('I always REFUSE pizza, even when hungry, because there is no fiber in pizza');
        return false;
    }

    // XOR
    // 0110
    // Activate if - A True or B True
    // Wont Activate if - Both False or Both True
    // xor(a, b)
    if ((hunger == 1 && food == 0) ||
        (hunger == 0 && food == 1))
    {
        cl('I am hungry and then there is no food.');
        cl('I am not hungry, but there is food');
        return true;
    }

    //-//

    // XNOR
    // 1001
    // Activates if - Both False or Both True
    // Won't Activate if - Only A True or Only B True
    // xnor(a, b)
    if ((hunger == 0 && food == 0) ||
        (hunger == 1 && food == 1))
    {
        cl('I am not hungry 0 and there is no food 0');
        cl('I am hungry 1 and there is food 1');
        return true;
    }

    //-//

    // NAND
    // 1110
    // Activates if - Both False or A True or B True
    // Won't Activate if Both are True
    function nand(a, b)
{
    if (a == 0 || b == 0)
    {
        return 1
    }
    else
    {
        return 0;
    }
}

/*
A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: AND
*/
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


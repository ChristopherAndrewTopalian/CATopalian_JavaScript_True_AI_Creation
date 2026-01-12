// logicGates.js

function tautology(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 1;
    }
}

/*
TAUTOLOGY
1111
One or Both False or True

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: CONTRADICTION
*/

//----//

function contradiction(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 0;
    }
    else
    {
        return 0;
    }
}

/*
CONTRADICTION
0000
One or Both False or True.

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

function xor(a, b)
{
    if ((a == 1 && b == 0) ||
        (a == 0 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
XOR
0110
A True or B True

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: XNOR
*/

//----//

function xnor(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
XNOR
1001
Both False or Both True

A  B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: XOR
*/

//----//

function and(a, b)
{
    if (a == 1 && b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
AND
0001
Both True

A  B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  1

Opposite: NAND
*/

//----//

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
NAND
1110
Both False or A True or B True

A  B
0  0  =  1
0  1  =  1
1  0  =  1
1  1  =  0

Opposite: AND
*/

//----//

function or(a, b)
{
    if (a == 1 || b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
OR
0111
One or Both True

A B
0  0  =  0
0  1  =  1
1  0  =  1
1  1  =  1

Opposite: NOR
*/

//----//

function nor(a, b)
{
    if (a == 0 && b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
NOR
1000
Both False

A B
0  0  =  1
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: OR
*/

//----//

function mi(a, b)
{
    if (a == 0 || b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
MI
1101
Both False or B True or Both True

A  B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: MNI
*/

//----//

function mni(a, b)
{
    if (a == 1 && b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
MNI
0010
A True

A B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: MI
*/

//----//

function ci(a, b)
{
    if (a == 1 || b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
CI
1011
Both False or A True or Both True

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: CNI
*/

//----//

function cni(a, b)
{
    if (a == 0 && b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
CNI
0100
B True

A B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: CI
*/

//----//

function lp(a, b)
{
    if (a == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
LP
0011
A True or Both True

A  B
0  0  =  0
0  1  =  0
1  0  =  1
1  1  =  1

Opposite: LC
*/

//----//

function lc(a, b)
{
    if (a == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
LC
1100
Both False or B True

A B
0  0  =  1
0  1  =  1
1  0  =  0
1  1  =  0

Opposite: LP
*/

//----//

function rp(a, b)
{
    if (b == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
RP
0101
B True or Both True

A  B
0  0  =  0
0  1  =  1
1  0  =  0
1  1  =  1

Opposite: RC
*/

//----//

function rc(a, b)
{
    if (b == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

/*
RC
1010
Both False or A True

A B
0  0  =  1
0  1  =  0
1  0  =  1
1  1  =  0

Opposite: RP
*/


//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


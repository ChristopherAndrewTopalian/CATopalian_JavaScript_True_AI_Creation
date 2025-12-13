// updateGates.js

function updateGates()
{
    ge('output_tautology').textContent = 'tautology: ' + tautology(A, B);

    ge('output_contradiction').textContent = 'contradiction: ' + contradiction(A, B);

    //-//

    ge('output_xor').textContent = 'xor: ' + xor(A, B);

    ge('output_xnor').textContent = 'xnor: ' + xnor(A, B);

    //-//

    ge('output_and').textContent = 'and: ' + and(A, B);

    ge('output_nand').textContent = 'nand: ' + nand(A, B);

    //-//

    ge('output_or').textContent = 'or: ' + or(A, B);

    ge('output_nor').textContent = 'nor: ' + nor(A, B);

    //-//

    ge('output_mi').textContent = 'mi: ' + mi(A, B);

    ge('output_mni').textContent = 'mni: ' + mni(A, B);

    //-//

    ge('output_ci').textContent = 'ci: ' + ci(A, B);

    ge('output_cni').textContent = 'cni: ' + cni(A, B);

    //-//

    ge('output_lp').textContent = 'lp: ' + lp(A, B);

    ge('output_lc').textContent = 'lc: ' + lc(A, B);

    //-//

    ge('output_rp').textContent = 'rp: ' + rp(A, B);

    ge('output_rc').textContent = 'rc: ' + rc(A, B);

    //-//

    cl(tautology(A, B));
    cl(contradiction(A, B));

    cl(xor(A, B));
    cl(xnor(A, B));

    //-//

    cl(and(A, B));
    cl(nand(A, B));

    cl(or(A, B));
    cl(nor(A, B));

    //-//

    cl(mi(A, B));
    cl(mni(A, B));

    cl(ci(A, B));
    cl(cni(A, B));

    //-//

    cl(lp(A, B));
    cl(lc(A, B));

    cl(rp(A, B));
    cl(rc(A, B));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


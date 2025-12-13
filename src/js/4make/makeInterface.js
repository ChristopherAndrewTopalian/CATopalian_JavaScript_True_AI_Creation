// makeInterface.js

function makeInterface()
{
    let diagram = ce('img');
    diagram.src = 'src/media/textures/diagrams/CATopalian_True_AI_Centered_with_Conditional_Labels.png';
    diagram.style.position = 'fixed';
    diagram.style.top = '0';
    diagram.style.left = '0';
    diagram.style.width = '100vw'; // 100% of viewport width
    diagram.style.height = '100vh'; // 100% of viewport height
    
    // 'contain' shows whole image, might have black/white bars on sides
    // 'cover' fills entire screen, parts of image will be cropped/cut off
    diagram.style.objectFit = 'contain'; 
    // center the content if using 'contain'
    diagram.style.backgroundColor = 'black'; // or 'white' depending on diagram background
    ba(diagram);

    //-//

    let menuContainer = ce('div');
    menuContainer.style.display = 'flex';menuContainer.style.flexDirection = 'row';
    menuContainer.style.position = 'fixed';
    menuContainer.style.left = '0px';
    menuContainer.style.top = '0px';
    ba(menuContainer);

    //-//

    let gatesContainer = ce('div');
    gatesContainer.id = 'gatesContainer';
    gatesContainer.style.display = 'flex';
    gatesContainer.style.flexDirection = 'column';
    gatesContainer.style.gap = '0px';
    gatesContainer.style.overflowY = 'scroll'
    gatesContainer.style.height = '375px';
    gatesContainer.style.padding = '2px 6px';
    gatesContainer.style.fontWeight = 'bold';
    menuContainer.append(gatesContainer);

    //-//

    let inputsContainer = ce('div');
    inputsContainer.style.gap = '1px';
    inputsContainer.style.margin = '8px 2px';
    menuContainer.append(inputsContainer);

    //-//

    let ALabel = ce('div');
    ALabel.textContent = 'A';
    inputsContainer.append(ALabel);

    let Ainput = ce('input');
    Ainput.type = 'number';
    Ainput.id = 'Ainput';
    Ainput.min = 0;
    Ainput.max = 1;
    Ainput.step = 1;
    Ainput.value = A;
    Ainput.style.width = '50px';
    Ainput.oninput = function()
    {
        inputSound();
        A = Ainput.value;
        think();
        updateGates();
    };
    inputsContainer.append(Ainput);

    //-//

    let BLabel = ce('div');
    BLabel.textContent = 'B';
    inputsContainer.append(BLabel);

    let Binput = ce('input');
    Binput.type = 'number';
    Binput.min = 0;
    Binput.max = 1;
    Binput.step = 1;
    Binput.id = 'Binput';
    Binput.value = B;
    Binput.style.width = '50px';
    Binput.oninput = function()
    {
        inputSound();
        B = Binput.value;
        think();
        updateGates();
    };
    inputsContainer.append(Binput);

    //-//

    let output_tautology = ce('div');
    output_tautology.id = 'output_tautology';
    output_tautology.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(output_tautology);

    //-//

    let output_contradiction = ce('div');
    output_contradiction.id = 'output_contradiction';
    output_contradiction.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(output_contradiction);

    //-//

    let output_xor = ce('div');
    output_xor.id = 'output_xor';
    output_xor.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(output_xor);

    //-//

    let output_xnor = ce('div');
    output_xnor.id = 'output_xnor';
    output_xnor.style.color = 'rgb(0, 255, 255)';
    gatesContainer.append(output_xnor);

    let output_and = ce('div');
    output_and.id = 'output_and';
    output_and.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(output_and);

    //-//

    let output_nand = ce('div');
    output_nand.id = 'output_nand';
    output_nand.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(output_nand);

    //-//

    let output_or = ce('div');
    output_or.id = 'output_or';
    output_or.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(output_or);

    //-//

    let output_nor = ce('div');
    output_nor.id = 'output_nor';
    output_nor.style.color = 'rgb(0, 255, 0)';
    gatesContainer.append(output_nor);

    //-//

    let output_mi = ce('div');
    output_mi.id = 'output_mi';
    output_mi.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(output_mi);

    //-//

    let output_mni = ce('div');
    output_mni.id = 'output_mni';
    output_mni.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(output_mni);

    //-//

    let output_ci = ce('div');
    output_ci.id = 'output_ci';
    output_ci.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(output_ci);

    //-//

    let output_cni = ce('div');
    output_cni.id = 'output_cni';
    output_cni.style.color = 'rgba(243, 182, 247, 1)';
    gatesContainer.append(output_cni);

    //-//

    let output_lp = ce('div');
    output_lp.id = 'output_lp';
    output_lp.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(output_lp);

    //-//

    let output_lc = ce('div');
    output_lc.id = 'output_lc';
    output_lc.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(output_lc);

    //-//

    let output_rp = ce('div');
    output_rp.id = 'output_rp';
    output_rp.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(output_rp);

    //-//

    let output_rc = ce('div');
    output_rc.id = 'output_rc';
    output_rc.style.color = 'rgba(255, 181, 53, 1)';
    gatesContainer.append(output_rc);

    //-//

    let thoughtContainer = ce('div');
    thoughtContainer.style.display = 'flex';
    thoughtContainer.style.flexDirection = 'column';
    thoughtContainer.style.position = 'absolute';
    thoughtContainer.style.right = '0px';
    thoughtContainer.style.top = '70px';
    thoughtContainer.style.fontWeight = 'bold';
    ba(thoughtContainer);

    //-//

    let thoughtLabel = ce('div');
    thoughtLabel.textContent = 'Thought';
    thoughtContainer.append(thoughtLabel);

    //-//

    let thoughtOutput = ce('div');
    thoughtOutput.textContent = 'Thought';
    thoughtOutput.id = 'thoughtOutput';
    thoughtOutput.style.width = '180px';
    thoughtOutput.style.height = '100px';
    thoughtOutput.style.border = 'solid 1px rgb(255, 255, 255)';
    thoughtOutput.style.borderRadius = '5px';
    thoughtOutput.style.zIndex = 10000;
    thoughtOutput.style.overflowY = 'scroll';
    thoughtOutput.style.padding = '2px 6px';
    thoughtContainer.append(thoughtOutput);

    //-//

    let memoryContainer = ce('div');
    memoryContainer.style.display = 'flex';
    memoryContainer.style.flexDirection = 'column';
    memoryContainer.style.position = 'absolute';
    memoryContainer.style.right = '0px';
    memoryContainer.style.top = '210px';
    memoryContainer.style.fontWeight = 'bold';
    ba(memoryContainer);

    //-//

    let memoryLabel = ce('div');
    memoryLabel.textContent = 'Memory';
    memoryContainer.append(memoryLabel);

    //-//

    let memoryOutput = ce('div');
    memoryOutput.textContent = 'Memory';
    memoryOutput.id = 'memoryOutput';
    memoryOutput.style.width = '180px';
    memoryOutput.style.height = '100px';
    memoryOutput.style.border = 'solid 1px rgb(255, 255, 255)';
    memoryOutput.style.borderRadius = '5px';
    memoryOutput.style.zIndex = 10000;
    memoryOutput.style.overflowY = 'scroll';
    memoryOutput.style.padding = '2px 6px';
    memoryContainer.append(memoryOutput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


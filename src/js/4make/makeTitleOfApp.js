// makeTitleOfApp.js

function makeTitleOfApp()
{
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '2px';
    titleContainer.style.top = '4px';
    titleContainer.style.width = '90px';
    titleContainer.style.zIndex = 1;
    titleContainer.style.lineHeight = '13px';
    ba(titleContainer);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'CATopalian JavaScript True AI Creation';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_True_AI_Creation';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '14px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.fontFamily = 'Arial';
    titleOfApp.style.color = 'rgb(130, 130, 130)';
    titleContainer.append(titleOfApp);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


import inquirer from 'inquirer';
import { Toinquire, getRandomNumber } from './inquiry.js';
const levels = 
[
    'Easy',
    'Medium',
    'Hard'
];

const selectLevelPrompt = 
[
    {
        type: 'list',
        name: 'LvlOfDiff',
        message: 'Select the level difficulty you prefer\n',
        choices: levels 
    }
];

inquirer.prompt(selectLevelPrompt).then(answers => 
  {
    const criteria = answers.LvlOfDiff;
    console.log('Selected Level:', criteria); 
    if(criteria==levels[0])
    {
      const ToGuess = getRandomNumber(1,10);
      console.log(ToGuess);
      Toinquire("1-10",ToGuess);
    }
    else if (criteria == levels[1])
    {
      const ToGuess = getRandomNumber(1,100);
      console.log(ToGuess);
      Toinquire("1-100",ToGuess);
    }
    else 
    {
      const ToGuess = getRandomNumber(1,1000);
      console.log(ToGuess);
      Toinquire("1-1000",ToGuess);
    }
});

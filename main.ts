/*You are developing a simple program to help a user determine their eligibility for a
 driving license based on their age and whether they have completed a driver education 
 course. The eligibility criteria are as follows:

The minimum age to apply for a driving license is 16.
If the applicant is 16 or older and has completed a driver education course, they are 
eligible for a license.
If the applicant is 18 or older and has not completed a driver education course, they
are eligible for a license.
If the applicant does not meet any of the above criteria, they are not eligible for a 
license.
Write a program that prompts the user to enter their age and whether they have completed
a driver education course (yes or no). Based on the input, the program should output whether
the user is eligible for a driving license or not.
Your program should use if-else conditions to implement the eligibility criteria and handle
different cases appropriately. Ensure proper input validation and provide clear messages
indicating the user's eligibility status.*/

import inquirer from "inquirer";
import chalk from "chalk";
do{
let answer = await inquirer.prompt(
    {name:"select",
    message:"What do you want to do?",
    type:"list",
    choices:["Lisence Office:","Exit Program:"]
    }
)
if(answer.select === "Lisence Office:"){
    let answer1 = await inquirer.prompt(
        { name:"User name",
          type:"input",
          message:chalk.bold.italic.yellowBright("Please Enter your name?")
        }
    )
    console.log(answer1);
    
    let answer2 = await inquirer.prompt(
        { name:"age",
        type:"number",
        message:chalk.bold.italic.yellowBright("Please Enter your age?")
        }
    )
    console.log(answer2);
    
    if (answer2.age >= 18){
        let ans = await inquirer.prompt(
            { name:"select",
            type:"list",
            message:chalk.bold.italic.yellowBright("Do you complete your driving education course"),
            choices:["Yes","No"]
            }
        )
        console.log(ans);
        if (ans.select === "Yes"){
         console.log(chalk.bold.italic.greenBright("Congratulation! You are eligible for license"));    
    }else if (ans.select === "No")
    {
        console.log(chalk.bold.italic.redBright("Please complete your driving education course then try again."));
        
    }
    }else if (answer2.age <= 17)
        {
            console.log(chalk.bold.italic.redBright("Sorry you are not eligible for license!!!!"));
            
        }
}else if(answer.select === "Exit Program:"){
    console.log("Process.Exit(0)");
    
}}while(true)
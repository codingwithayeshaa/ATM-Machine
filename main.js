#! /usr/bin/env node
import inquirer from "inquirer";
// Initialize user balance and pin code.
let myBalance = 10000;
let myPin = 1234;
// Print Welcome message.
console.log("\n \tWelcome to Codingwithayesha- ATM Machine\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operatinAnswers = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select an operation:",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operatinAnswers.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawl method",
                choices: ["Enter Amount", "Fast Cash"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw",
                    type: "number"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                console.log("Please collect your cash");
            }
        }
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Select an amount to withdraw",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000", "20000", "50000"]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw Successfully!`);
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
    }
    else if (operatinAnswers.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
;

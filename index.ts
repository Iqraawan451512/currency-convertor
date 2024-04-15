#!/usr/bin/env node
 import inquirer from "inquirer"
const currency :any =
{
    USD :1, //base value
    EURO :0.91,
    IND :74.53,
    LIRA : 32,
    DIRHUM : 3.69,
    DINAR :3.11 ,
    RIYAL :3.75,
    POUND :0.80,
    YUN :158.32,
    PKR:280,
};
 let user_anser = await inquirer.prompt(
 [ 
    {
    
    name :'from',
    message:"enter from currency",
    type :'list',
    choices:['USD','EURO',,'PKR','INR','DIRHUM','LIRA',
    'DINAR','RIYAL' ,'POUND','Yun']
},
{
    name :'to',
    message:"enter TO currency",
    type :'list',
    choices:['USD','EURO', 'PKR','INR','DIRHUM','DINAR','LIRA','RIYAL',
    'POUND','YUN']
},
{
    name :'amount',
    type:"number",
    message:"enter your amount",

},
]
)
let fromAmount  = currency[user_anser . from]
let toAmount = currency[user_anser . to]
let amount = user_anser.amount
let baseAmount = amount / fromAmount 
let convertedAmount = baseAmount * toAmount
let roundAmount =Math.round(convertedAmount)// for round off the amount
console.log(` Your amount is :${roundAmount}`);
console.log(`\n Thank You For Using our Services`);
// wasy to yahan converted amount anan tha mage 
//hum round off kr wa ans chaty hy is le a  hum roundAmount lekh rahy hen

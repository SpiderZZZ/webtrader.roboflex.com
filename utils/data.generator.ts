const cryptoRandomString = require('crypto-random-string');

export function generateEmail()
{
    
    return `${cryptoRandomString({length: 15})}@mail.cy`;
}

export function generatePassword()
{
    
    return `${cryptoRandomString({length: 10, charachters: 'alphanumeric'})}${cryptoRandomString({length:6,type : 'numeric'})}`;
}

export function generateNameString(charachters : string, length : number)
{
    
    return cryptoRandomString({length: length, characters : charachters});
}

export function generatePhone()
{
    
    return cryptoRandomString({length: 10, type: 'numeric'})
}

export function generateCountryWithPhone()
{
//Несколько стран где номера телефона будут десятизначные
const countriesWithPhone = 
[
'Albania: AL +355',
'Haiti: HT +509',
'Argentina: AR +54',
'Belarus: BY +375',
'Ukraine: UA +380',
'Russia: RU +7'
]

const random = Math.floor(Math.random() * countriesWithPhone.length);
return countriesWithPhone[random];
}
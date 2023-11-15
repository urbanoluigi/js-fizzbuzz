//se il numero è un multiplo di 3 'fizz' invece del numero
//se il numero è un multiplo di 5 'buzz' invece del numero
//se il numero è un multiplo di 3 e 5 'fizzbuzz' invece del numero

//dobbiamo stampare ogni numero da 1 a 100
for (let i = 0; i <= 100; i++) {
    //uso il modulo 3 e 5 per sono multipli di 3 e 5, poi inserisco l'operatore AND se entrambi gli operandi sono veri
    if (i % 3 == 0 && i % 5 == 0)
        //console log con fizzbuzz per farlo comparire al terminale
        console.log("FizzBuzz");
    //uso il modulo 3 se il numero è un multiplo di 3
    else if (i % 3 == 0)
        console.log("Fizz");
    //uso il modulo 5 se il numero è un multiplo di 5
    else if (i % 5 == 0)
        console.log("Buzz");

    else
        console.log(i);
}

function relocate_home()
{
     location.href = "https://www.youtube.com/watch?v=hvL1339luv0&ab_channel=RapidLiquid";
} 
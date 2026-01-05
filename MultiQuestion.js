// Multi Questioner with the new way : ASYNC/AWAIT1!

const readliner = require("readline"); // راه اندازی ماژول نود جی اس برای ورودی ها


const questioner = readliner.createInterface({
    input : process.stdin,
    output : process.stdout
});


// سوال پرس اصلی با مقادیر کاستوم سوال و جواب
function askQuestion(question){
    return new Promise((resolve) => {
        questioner.question(question , (ans) => {
            resolve(ans); // ذخیره ans در شی Promise
        })
    })
}

async function mainPart() {
    const name = await askQuestion("What's your name:"); // await برای انتظار رسپانس به کار میره
    const age = parseInt(await askQuestion("How old are you:"));
    console.log(`your name is: ${name}`);

    if (age == 1){
		console.log(`and you're ${age} year old`);
    }
    else{
        console.log(`and you're ${age} years old`);
    }
    
}

mainPart(); // صدا زنی و شروع کار
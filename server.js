

const express = require('express')
const app = express()

//#region GREETINGS
app.get('/greeting/:name', (req,res)=> {
    res.send("hey " + req.params.name + '! Whats up?')
})

//#endregion

//#region TIP CALCULATOR

app.get('/tip/:total/:tipPercentage', (req,res)=>{

    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tipPercentageCalc = tipPercentage/100
    let calculate = total + (total * tipPercentageCalc)

    res.send("Your bill total is "+total+ ". If you add a "+tipPercentage + "% tip, your new total will be " + calculate)

})




//#endregion

//#region Magic 

const responseArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

let randomArr = responseArr[Math.floor(Math.random() * responseArr.length)];

app.get('/magic/:phrase',(req,res)=>{
    let question = req.params.phrase

    if (req.params.phrase = question) {
    res.send(`<h1>${randomArr}</h1>`)
}
    

})

app.get('/magic',(req,res)=>{
    res.send(`<h1>Please ask a question!</h1>`)
})



//#endregion


//#region pass it around




app.get('/:bottles', (req, res) => {

    let bottles = parseInt(req.params.bottles)
    let startOvr = (`<a href="/99" >NO MORE BOTTLES OF BEER</a>`)
    let nextBtn = (`<a href="/${bottles - 1}" >Take one down, pass it around </a>`)

    if (bottles > 1) {
        res.send(`<h1>${bottles} bottles of beer on the wall, ${bottles} bottles of beer, ${nextBtn}</h1>`)
    }
    
    else if (bottles === 1) {
        res.send(`<h1>${bottles} bottle of beer on the wall, ${bottles} bottle of beer, ${nextBtn}</h1>`)
    }

    else {
        res.send(`<H1>${startOvr}</H1>`)
    }

})

//#endregion

app.listen(3000, ()=> {
    console.log("im listning to port 3000")
})


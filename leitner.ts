
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});



export class Counting {
    private _units: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    private _tens: string[] = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eightty", "ninty"];
    private _hundred: string = "hundred";
    private _teens: string[] = ["zero", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];


    public convertNum(num: number): string {
        if (num >= 1 && num <= 9) {
            return this._units[num];
        }
        else if ((num >= 20 && num <= 99) || num == 10) {
            let unit: number = num % 10;
            let tens: number = (num / 10) % 10;
            if (unit == 0) {
                return this._tens[tens];
            }
            else {
                return this._tens[tens] + " " + this._units[unit];
            }

        }
        else                             //if(num>=100 && num<=999)
        {
            let unit = num % 10;
            let tens = (num / 10) % 10;
            let hundred = (num / 100) % 10;
            if (unit == 0 && tens == 0) {
                return this._units[hundred] + " " + this._hundred;
            }
            else
                return this._units[hundred] + " " + this._hundred + " " + this.convertNum(num % 100);
        }
    }
}

let _red: number[] = new Array<number>();
let _blue: number[] = new Array<number>();
let _green: number[] = new Array<number>();
let _noOfCount: number;
let _count = new Counting();


let question = function (que: string): Promise<string> {
    return new Promise<any>((res, rej) => {
        rl.question(que, answer => {
            res(answer);
        })
    });
};

async function ask(start: boolean, num?: number): Promise<string> {
    let answer;
    if (start === true) {
        answer = await question('how many numbers? ::');
        _noOfCount = Number(answer);
    }
    else {
        answer = await question(`${num} is ${_count.convertNum(num)} :: `);
    }
    return answer;
}
async function initialFill() {
    for (let num = 1; num <= _noOfCount; num++) {
        let answer = await ask(false, num);
        if (answer === 'n') {
            _red.push(num);
        }
        else {
            _green.push(num);
        }
    }

}

async function learn() {
    while (_noOfCount > 0) {
        let times = _noOfCount;
        
        let isDone = new Array<number>();
        let _dupred: number[] = new Array<number>();
        let _dupblue: number[] = new Array<number>();
        let _dupgreen: number[] = new Array<number>();
        for(var index = 0; index<times; )
        {
            let rand = randomNum(1, 3);
            let vis: boolean = false; 
            if (rand === 1 && _red.length > 0) {
                await answer(_red, isDone).then((res)=>{
                    if(res[0] === 'y'){
                        _dupblue.push(_red.splice(res[1], 1)[0]);
                    }else{
                        _dupred.push(_red.splice(res[1], 1)[0]);
                    }
                })
                vis = true;
            }

            else if (rand === 2 && _blue.length > 0) {
                await answer(_blue, isDone).then((res)=>{
                    if (res[0] === 'y') {
                        _dupgreen.push(_blue.splice(res[1], 1)[0]);
                    }
                    else {
                        _dupred.push(_blue.splice(res[1], 1)[0])
                    }
                })
                vis = true;
            }

            else if (rand === 3 && _green.length > 0) {
                await answer(_green, isDone).then((res)=>{
                    if (res[0] === 'y') {
                        _green.splice(res[1], 1);
                        _noOfCount--;
                    }
                    else {
                        _dupblue.push(_green.splice(res[1], 1)[0])
                    }
                })
                vis = true;
            }
            if(vis === true)
                index++;
        }
        _red = _dupred;
        _blue = _dupblue;
        _green = _dupgreen;
        display();
    }
    rl.close();
}

async function answer(arr, isDone:number[]) :Promise<Array<any>>{
    let answer;
    let rand = randomNum(0, arr.length - 1); 
    while(isDone.includes(arr[rand])){
        rand = randomNum(0, arr.length - 1); 
    }
    isDone.push(arr[rand]);
    await ask(false, arr[rand])
        .then(res => answer = res)
        .catch(err => console.log(err));
    return [answer,rand];
}

async function start() {
    await ask(true);
    await initialFill();
    display();
    learn();
}

function display() {
    console.log('-------------------------------------------------------------');
    console.log(`size of red box is ${_red.length} and contains ${_red}`);
    console.log(`size of blue box is ${_blue.length} and contains ${_blue}`);
    console.log(`size of green box is ${_green.length} and contains ${_green}`);
    console.log('-------------------------------------------------------------');
}

function randomNum(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

start();














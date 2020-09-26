"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Counting = void 0;
var readline_1 = require("readline");
var rl = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Counting = /** @class */ (function () {
    function Counting() {
        this._units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        this._tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eightty", "ninty"];
        this._hundred = "hundred";
        this._teens = ["zero", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    }
    Counting.prototype.convertNum = function (num) {
        if (num >= 1 && num <= 9) {
            return this._units[num];
        }
        else if ((num >= 20 && num <= 99) || num == 10) {
            var unit = num % 10;
            var tens = (num / 10) % 10;
            if (unit == 0) {
                return this._tens[tens];
            }
            else {
                return this._tens[tens] + " " + this._units[unit];
            }
        }
        else //if(num>=100 && num<=999)
         {
            var unit = num % 10;
            var tens = (num / 10) % 10;
            var hundred = (num / 100) % 10;
            if (unit == 0 && tens == 0) {
                return this._units[hundred] + " " + this._hundred;
            }
            else
                return this._units[hundred] + " " + this._hundred + " " + this.convertNum(num % 100);
        }
    };
    return Counting;
}());
exports.Counting = Counting;
var _red = new Array();
var _blue = new Array();
var _green = new Array();
var _noOfCount;
var _count = new Counting();
var question = function (que) {
    return new Promise(function (res, rej) {
        rl.question(que, function (answer) {
            res(answer);
        });
    });
};
function ask(start, num) {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(start === true)) return [3 /*break*/, 2];
                    return [4 /*yield*/, question('how many numbers? ::')];
                case 1:
                    answer = _a.sent();
                    _noOfCount = Number(answer);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, question(num + " is " + _count.convertNum(num) + " :: ")];
                case 3:
                    answer = _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, answer];
            }
        });
    });
}
function initialFill() {
    return __awaiter(this, void 0, void 0, function () {
        var num, answer_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    num = 1;
                    _a.label = 1;
                case 1:
                    if (!(num <= _noOfCount)) return [3 /*break*/, 4];
                    return [4 /*yield*/, ask(false, num)];
                case 2:
                    answer_1 = _a.sent();
                    if (answer_1 === 'n') {
                        _red.push(num);
                    }
                    else {
                        _green.push(num);
                    }
                    _a.label = 3;
                case 3:
                    num++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function learn() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var times, isDone, _dupred, _dupblue, _dupgreen, index, rand, vis;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    times = _noOfCount;
                                    isDone = new Array();
                                    _dupred = new Array();
                                    _dupblue = new Array();
                                    _dupgreen = new Array();
                                    index = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(index < times)) return [3 /*break*/, 9];
                                    rand = randomNum(1, 3);
                                    vis = false;
                                    if (!(rand === 1 && _red.length > 0)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, answer(_red, isDone).then(function (res) {
                                            if (res[0] === 'y') {
                                                _dupblue.push(_red.splice(res[1], 1)[0]);
                                            }
                                            else {
                                                _dupred.push(_red.splice(res[1], 1)[0]);
                                            }
                                        })];
                                case 2:
                                    _a.sent();
                                    vis = true;
                                    return [3 /*break*/, 7];
                                case 3:
                                    if (!(rand === 2 && _blue.length > 0)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, answer(_blue, isDone).then(function (res) {
                                            if (res[0] === 'y') {
                                                _dupgreen.push(_blue.splice(res[1], 1)[0]);
                                            }
                                            else {
                                                _dupred.push(_blue.splice(res[1], 1)[0]);
                                            }
                                        })];
                                case 4:
                                    _a.sent();
                                    vis = true;
                                    return [3 /*break*/, 7];
                                case 5:
                                    if (!(rand === 3 && _green.length > 0)) return [3 /*break*/, 7];
                                    return [4 /*yield*/, answer(_green, isDone).then(function (res) {
                                            if (res[0] === 'y') {
                                                _green.splice(res[1], 1);
                                                _noOfCount--;
                                            }
                                            else {
                                                _dupblue.push(_green.splice(res[1], 1)[0]);
                                            }
                                        })];
                                case 6:
                                    _a.sent();
                                    vis = true;
                                    _a.label = 7;
                                case 7:
                                    if (vis === true)
                                        index++;
                                    _a.label = 8;
                                case 8: return [3 /*break*/, 1];
                                case 9:
                                    _red = _dupred;
                                    _blue = _dupblue;
                                    _green = _dupgreen;
                                    display();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!(_noOfCount > 0)) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function answer(arr, isDone) {
    return __awaiter(this, void 0, void 0, function () {
        var answer, rand;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rand = randomNum(0, arr.length - 1);
                    while (isDone.includes(arr[rand])) {
                        rand = randomNum(0, arr.length - 1);
                    }
                    isDone.push(arr[rand]);
                    return [4 /*yield*/, ask(false, arr[rand])
                            .then(function (res) { return answer = res; })["catch"](function (err) { return console.log(err); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, [answer, rand]];
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ask(true)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, initialFill()];
                case 2:
                    _a.sent();
                    display();
                    learn();
                    return [2 /*return*/];
            }
        });
    });
}
function display() {
    console.log('-------------------------------------------------------------');
    console.log("size of red box is " + _red.length + " and contains " + _red);
    console.log("size of blue box is " + _blue.length + " and contains " + _blue);
    console.log("size of green box is " + _green.length + " and contains " + _green);
    console.log('-------------------------------------------------------------');
}
function randomNum(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
start();

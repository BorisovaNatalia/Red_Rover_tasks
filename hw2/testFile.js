function getBorder(stats) {

    const sortedArray = [...stats.entries()].sort((a, b) => a[0] - b[0]);
    let i = 0;
    let k = 9;
    while (sortedArray[i][1] <= sortedArray[i + 1][1] + k) { i++; }
    while ((sortedArray[i][1] + k >= sortedArray[i + 1][1]) && (sortedArray[i][0] === (sortedArray[i + 1][0] - 1))) { i++; }
    return sortedArray[i][0];
}

let bits = "1110110100111000001100000011111101001111100111111000000000001110111111110111110111110000001011000111111000001111100111011000001";
bits = bits.slice(bits.indexOf("1"), bits.lastIndexOf("1") + 1);
console.log(bits);

let maxOfZerosLong = 0;
let minOfZerosLong = bits.length;
let mgitaxOfOnesLong = 1;
let minOfOnesLong = bits.length;
const zerosMap = new Map();
const onesMap = new Map();

let currentSymb = "1";
let currentCount = 1;
if (bits.length === 1) { onesMap.set(1, 1); }
for (let i = 1; i < bits.length; i++) {
    if (bits[i] === currentSymb && (i < bits.length - 1)) {
        currentCount++;
    }
    else {
        if (currentSymb === "1") {
            if (i === bits.length - 1) { currentCount++; }
            maxOfOnesLong = maxOfOnesLong < currentCount ? currentCount : maxOfOnesLong;
            minOfOnesLong = minOfOnesLong > currentCount ? currentCount : minOfOnesLong;
            onesMap.set(currentCount, (onesMap.get(currentCount) || 0) + 1);
        }
        else {
            maxOfZerosLong = maxOfZerosLong < currentCount ? currentCount : maxOfZerosLong;
            minOfZerosLong = minOfZerosLong > currentCount ? currentCount : minOfZerosLong;
            zerosMap.set(currentCount, (zerosMap.get(currentCount) || 0) + 1);

        }
        currentSymb = bits[i];
        currentCount = 1;
    }
}
let dotSize = minOfOnesLong;
let dushSizeBorder = getBorder(onesMap);
let spaceSize = maxOfZerosLong;

if (maxOfZerosLong < dushSizeBorder) {
    spaceSize = -1;
}
if (onesMap.size === 1) {
    dotSize = Math.min(minOfZerosLong, minOfOnesLong);
    if (dotSize < dushSizeBorder) { dushSizeBorder--; }
    if ((dotSize === dushSizeBorder) && (dushSizeBorder < maxOfZerosLong)) {
        if (maxOfZerosLong < dotSize * 5) {
            spaceSize = -1;
            dushSizeBorder = maxOfOnesLong;
        }
    }
}



let result = "";
currentSymb = "1";
currentCount = 1;
if (!bits.includes("0")) { return "." }

for (let i = 1; i < bits.length; i++) {
    if (bits[i] === currentSymb && (i < bits.length - 1)) {
        currentCount++;
    }
    else {
        if (currentSymb === "1") {
            if (i === bits.length - 1) { currentCount++; }
            result += currentCount <= dushSizeBorder ? "." : "-";
        }
        else {
            if (((spaceSize - currentCount) < Math.abs(dushSizeBorder - currentCount))
                && (spaceSize > 0)) {
                result += "   ";
            }
            else {
                if (currentCount > dushSizeBorder) {
                    result += " ";
                }
            }
            if (i === bits.length - 1) { result += "."; }
        }
        currentSymb = bits[i];
        currentCount = 1;
    }
}
console.log(result);

// 1(7) 0(6) 11010001110111 0(8) 111 0(10) 1111111011111100001101111100000111100111100011111100000001011100000011111110010001111100110000011111100101111100000000000000111111100001111010110000011000111110010000011111110001111110011111110000010001111110001111111100000001111111101110000000000000010110000111111110111100000111110111110011111110000000011111001011011111000000000000111011111011111011111000000010001001111100000111110111111110000001110011111100011111010000001100001001000000000000000000111111110011111011111100000010001001000011111000000100000000101111101000000000000011111100000011110100001001100000000001110000000000000001101111101111000100000100001111111110000000001111110011111100011101100000111111000011011111000111111000000000000000001111110000100110000011111101111111011111111100000001111110001111100001
// - .... .   --....- .. -...-..   -......---.-- -.   ..-...- .... .... ....- .-.. ...   -.- .... . ... - .... .   .....- --..-..-   -..--- -..
// - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-
// - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --

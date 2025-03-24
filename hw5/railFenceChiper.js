function encodeRailFenceCipher(string, numberRails) {
    if (string.length <= numberRails) { return string }
    const railArr = Array(numberRails).fill("");
    for (let i = 0; i < string.length; i += 2 * (numberRails - 1)) {
        railArr[0] += string[i];
        railArr[numberRails - 1] += ((i + numberRails - 1) < string.length) ? string[i + numberRails - 1] : "";
    }
    for (let i = 1; i < numberRails - 1; i++) {
        for (let j = i; j < string.length; j += 2 * (numberRails - 1)) {
            railArr[i] += string[j];
            railArr[i] += ((j + 2 * (numberRails - i - 1)) < string.length) ? string[j + 2 * (numberRails - i - 1)] : "";
        }
    }
    return railArr.reduce((sum, s) => sum += s, "");
}

function decodeRailFenceCipher(string, numberRails) {
    if (string.length <= numberRails) { return string; }
    let baseCountOfSegments = Math.floor((string.length) / (2 * (numberRails - 1)))
    const lenOfRailArr = Array(numberRails).fill(baseCountOfSegments);
    for (let i = 1; i < numberRails - 1; i++) {
        lenOfRailArr[i] *= 2;
    }

    let outOfSegment = (string.length) % (2 * (numberRails - 1));

    for (let i = 0; i < outOfSegment; i++) {
        if (i < numberRails) {
            lenOfRailArr[i]++;
        }
        else {
            lenOfRailArr[2 * numberRails - i - 2]++;
        }
    }

    const railArr = Array(numberRails).fill("");
    let maxRailLen = lenOfRailArr.reduce((max, n) => n > max ? n : max, 0);

    for (let i = 0; i < numberRails; i++) {
        railArr[i] = string.slice(0, lenOfRailArr[i]);
        string = string.slice(lenOfRailArr[i]);
    }

    let result = "";
    for (let i = 0; i < maxRailLen; i += 2) {
        for (let j = 0; j < 2 * (numberRails - 1); j++) {
            let curentRail = (j < numberRails) ? j : (2 * numberRails - j - 2);
            if (railArr[curentRail].length > 0) {
                result += railArr[curentRail][0];
                railArr[curentRail] = railArr[curentRail].slice(1)
            }
        }
    }
    if (railArr[0] != "") { result += railArr[0][0] }

    return result;
}
//WEAREDISCOVEREDFLEEATONCE
//WEAREDISCOVEREDFLEEATONC

//a//rVl tuqirepodpescero ,mctije ni a    fdnaen inpelss  eii  teneaepqess  ioutnatuoersaoi r aiiaaosoeegpnaPuitocesac eA,e usvsxatsi!me !aitn ddetutti rcntauimf i omea kiDsimmo itu isrtr  xe tieesu !rraibo  pir  euem rvn i et.ul it fvurmiuairiem d
//e//rVl tuqirepodpescero ,ectije ni a    fdnaen inpelss  eii  teneaepqsss  ioutnatuoersaoi r aiiaaosoeegpnaPuitocemac eA,e usvsxatsi!me !aitn ddetutti rcntauiif i omea kiDsimmo itu isrtr  xe tieesu !rradbo  pir  euem rvn i et.ul it fvurmiuairiem fm
//s//ri ! t
// V nra auie.
// lnp ieits u
//  eeiimtiril
// taloa!n t  
// unsaai orni
// qdssosdm vt
// if rstdm r 
// r  eoaeix f
// e eoextsemv
// p iuesuD eu
// o itgvtitur
// da apstkiem
// p  nnui e i
// eitta  ae u
// sneuPeresra
// c nou,cmuii
// eeeiiAno pr
// rja tet ! i
// oie o air e
//  tpsccu rom
// ,cqseaifab m
// esmidf
//console.log(decodeRailFenceCipher("ri ! tV nra auie.lnp ieits u eeiimtiriltaloa!n t  unsaai orniqdssosdm vtif rstdm r r  eoaeix fe eoextsemvp iuesuD euo itgvtiturda apstkiemp  nnui e ieitta  ae usneuPeresrac nou,cmuiieeeiiAno prrja tet ! ioie o air e tpsccu rom,cqseaifab mesmidf",
//    23));
console.log(decodeRailFenceCipher("1928a37b46ce5d", 5));

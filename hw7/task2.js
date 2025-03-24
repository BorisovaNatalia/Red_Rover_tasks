let room = {
    height: 3,
    tv: "sumsung",
    big: true
}

for (let prop in room) {
    console.log(prop, " : ", room[prop]);
}

console.log(typeof room.big);
console.log(room.tv.length - 1);
room.tv = "LG";//room.tv.toLocaleUpperCase();
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);
delete room.big;
for (let prop in room) {
    console.log(prop, " : ", room[prop]);
}


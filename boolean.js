// 通過課程：分數(score)及格(pass)且出席率(attend)大於80%
// 補交作業：分數及格 或 出席率大於80%
// 不通過：分數不及格並出席率小於80%

let score = 80;
let pass = 60;
let attend = 0.7;

if (score >= 80 && attend >= 0.8) {
  console.log("恭喜你通過");
} else if (score >= pass || attend >= 0.8) {
  console.log("請補交作業");
} else {
  console.log("不通過");
}

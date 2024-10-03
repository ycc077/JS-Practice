// 陣列位置由0開始
let score = [85, 90, 75, 60, 95, 99];

// for loop 變數為i
//變數.length 表示自動判斷陣列的長度
// i++ 表示每執行一次程式碼，i的數值就會自動加1
for (let i = 0; i < score.length; i++) {
  console.log(`第${i + 1}同學的分數是${score[i]}`);
}

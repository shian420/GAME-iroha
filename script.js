
/*function id(id){
  return document.getElementById(id);
}

  const array=[1,2,3,4,5];
  const array2=[1,2,3,4,5];
  var count=0;

  for(var i=0;i<5;i++){
//ランダムなインデックス番号を代入している
  const rand=Math.floor(Math.random()*array.length);
  const rand2=Math.floor(Math.random()*array2.length);

//ランダムに取り出した配列の値を代入している
  const newArray=array[rand];
  const newArray2=array2[rand2];
  array.splice(rand,1);
  array2.splice(rand2,1);
  console.log(newArray2);
}

const cardBox=document.getElementById('cardBox');
for(var j=1;j<11;j++){
  const div=document.createElement('div');
  div.id="card" + j;
  div.className="cards";
  cardBox.appendChild(div);
}
const cards=document.getElementsByClassName('cards');
cards.addEventListener('click',()=>{//クリックしたら発生
  //最終的に処理を入れる
});


if(count === 1){
  if(2===2 && 1===1){
    console.log("正解！");
    count=0;
  }else if(1 === 1){
    console.log("違います");
    count=0;
  }

}else{
    //カードを引いたのが1回目なら
    count=1;
  }
}//ただの囲み
*/
{//ここから神経衰弱
var cardCase=[];
var countf=true;
var cardss;
var time;
var sound;
var soundArr=[
  'voice/iroha1.wav',
  'voice/iroha2.wav',
  'voice/iroha3.wav',
  'voice/iroha4.wav',
  'voice/iroha5.wav',
  'voice/iroha6.wav',
  'voice/iroha7.wav',
  'voice/iroha8.wav',
  'voice/iroha9.wav',
  'voice/iroha10.wav'
];

window.onload=function(){

var arr=[];
  for(var i=0;i<10;i++){
    //2組の数値を同じ配列に代入
    arr.push(i);
    arr.push(i);
    //0~9が2つずつある状態計20個
  }
  shufflSound(soundArr);//効果音シャッフル
  shuffl(arr);//ナンバーシャッフル
//div生成
const cardBox=document.getElementById('cardBox');

for(var i=0;i<20;i++){
  const div=document.createElement('div');
  div.className="card defaulut";//最初は裏
  div.index=i;
  div.number=arr[i];
  //soundとdiv.numberは対応している
  div.innerHTML="";
  div.onclick=turn;
  cardBox.appendChild(div);
  cardCase.push(div);
}
}//ここまで作成


  //配列シャッフル
//20が入る
function shufflSound(soundArr){
  var s=soundArr.length;
var k,temps;

while(s){//20回繰り返す
  k=Math.floor(Math.random()*s--);//sを1減らす
temps=soundArr[s];//元の19～0番目の値が順にtempsに入る。
soundArr[s]=soundArr[k];//元の配列0～19番目(ランダム)の値を順に代入
  soundArr[k]=temps;
}
return soundArr;
}

function shuffl(arr){
  var n=arr.length;
  var j,temp
  while(n){//20回繰り返す

  j=Math.floor(Math.random()*n--);//nを1減らす
temp=arr[n];//元の19～0番目の値が順にtempに入る。
arr[n]=arr[j];//元の配列0～19番目(ランダム)の値を順に代入
  arr[j]=temp;//元の0番目、1番目...をランダムj位置に代入
}
return arr;//元の値がランダムに入っている。
}//シャッフル終了

//ここからクリック時の操作
function turn(e){
var div=e.target;

if(time) return;

if(div.innerHTML == ""){//もし裏なら
div.className="card";
div.innerHTML=div.number;
sound=new Audio(soundArr[div.number]);

sound.play();
//その数字になる
  }else{
    return;
  }
  //1回目とか関係なくあくまで裏かどうかのみ

  if(countf){ //初めて引いた
    cardss=div; //1回目に引いたカード(numberやindexは.を付ける)
    countf=false;

  }else{ //2回目

    if(cardss.number == div.number){
        time=setTimeout(function(){//これを書かないと一瞬でカードが消える
          div.className="card close";
          cardss.className="card close";
          time=NaN;
        },5000)

    }else{ //2回目で外れ 裏に戻す作業
time=setTimeout(function(){
      div.className="card defaulut";
      div.innerHTML="";
      cardss.className="card defaulut";
      cardss.innerHTML="";
      cardss=null;
      time=NaN;
    },5000);
  }
  countf=true;
}


}//turn()の終了

}//ここまで神経衰弱

//どっとインストール
const num=10;
let array=[1,2,3,4,5,6,7,8,9,10];
array.unshift(0,11);


for(let i=0;i<array.length;i++){

const div=document.createElement("div");
div.classList.add("box");
div.textContent=i+1;

const winner=array[Math.floor(Math.random() * array.length)];

div.addEventListener('click',()=>{

switch(winner){
  case 1:
  case 2:
  div.innerHTML="当たり！";
  div.classList.add("win");
  break;
  case 3:
  case 4:
    div.innerHTML="はずれ";
  div.classList.add("lose");
break;
case 5:
case 6:
  div.innerHTML="はずれ5,6";
div.classList.add("lose");
break;
case 7:
case 8:
  div.innerHTML="はずれ7,8";
div.classList.add("lose");
break;
case 9:
case 10:
  div.innerHTML="はずれ9,10";
div.classList.add("lose");
break;
}
});
const container=document.getElementById('container');
container.appendChild(div);
}

{
  const a = x => x + 3;
console.log(a(3));


//BGM
{
  var count=0;
  const btns=document.getElementById('btns');
  const audio=new Audio('backmusic.wav');
  audio.load();

  function off(){
    audio.pause();
  btns.innerHTML="OFF";
    count=0;
  }

function plays(){
btns.classList.toggle("btnb");

if(count === 1){
  off();
}else{

if(audio.readyState === 4){

audio.loop=true;
  audio.play();
  btns.innerHTML="ON";
  count=1;
}else{
  audio.addEventListener('canplaythrough',(e)=>{
    audio.removeEventListener('canplaythrough',arguments.callee);
    audio.loop=true;
    audio.play();
    btns.innerHTML="ON";
    count=1;
  });
}
}
}
}
{

const scores=[10,20,30,40,50];

console.log(scores[0]);
scores.shift();
console.log(scores);
scores.pop();
console.log(scores);
scores.unshift(10,15);
console.log(scores);
scores.push(60,70);
console.log(scores);
scores.splice(3,3);
console.log(scores);
scores.splice(3,0,30,40,50,60);
console.log(scores);

//分割代入
const [z,b,c,d,...other]=scores;
console.log(other);

const summary=(e,f,g,h)=>{
  console.log(e+f+g+h);
}
summary(...other);

console.log(scores);
//scoresから渡される引数↓
scores.forEach((test,index)=>{
  console.log(index);
  console.log(test);
});

//const newScores=scores.map(x => x *2);
//console.log(newScores);

const newScores=scores.filter(x =>{
  if(x >30){
    return true;
  }else{
    return false;
  }
});
console.log(newScores);
}
//ここまで配列



const mario={
  color:"red",
  game:"kart",
  brother:"luigi",
}

const points={
  x:20,
  y:30,
  ...mario,
}
console.log(points.color);

const {x:z,y:b,game,name="shian",...others}=points;
console.log(name + "," + game + ","  + z + "," + b);
console.log(others);

const newKey=Object.keys(points);
newKey.forEach(key =>{
  console.log("key=>"+ key + ":" + points[key]);
});
}

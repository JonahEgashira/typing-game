/*

Startボタンを押したらゲームスタートをする
ボタンを何個か2個くらい設置して、それを押すとモードを選べるようにする

通常の単語をたくさん打ちまくるゲーム
と
ランダムに文字をアルファベットを200文字程度並べて、速さWPMを出すゲーム

*/

//配列---------------------------------------------------------------------------------------

//問題のリストは、https://randomwordgenerator.com/で生成しました

/**
 * author: Jonah Egashira
 * created: 2019/07
 */

var question_list =
["JONAH",
"USE",
"BUS",
"FEW",
"SEE",
"FAT",
"MUD",
"MAN",
"BAT",
"PAN",
"PUT",
"BED",
"FAR",
"LID",
"EAR",
"BET",
"HIT",
"CUP",
"TIP",
"BAN",
"JOB",
"RUB",
"OLD",
"AGE",
"END",
"LOW",
"ROB",
"TOP",
"LEAD",
"SOFT",
"YARD",
"HALF",
"COPE",
"JOKE",
"FAST",
"DECK",
"SOFA",
"BLUE",
"DUCK",
"BILL",
"FAME",
"SINK",
"DRUG",
"FALL",
"MISS",
"BANK",
"CAMP",
"TALK",
"BALD",
"GROW",
"DEAD",
"FEAR",
"BITE",
"UNIT",
"MONK",
"DASH",
"GENE",
"TAPE",
"MARK",
"FACE",
"DENY",
"DAMN",
"BEEF",
"TANK",
"CLUB",
"BASE",
"DARE",
"TOLL",
"PILL",
"FEED",
"PEEL",
"BALL",
"FILE",
"BOMB",
"SOLO",
"KNIT",
"CHIN",
"THAW",
"SNUB",
"SICK",
"LIKE",
"BIRD",
"PALM",
"ECHO",
"MOLD",
"GATE",
"FOOD",
"HANG",
"LACE",
"TUBE",
"CAKE",
"BOOK",
"BEAN",
"DISH",
"MILL",
"TELL",
"SHOT",
"CASE",
"WALL",
"ROOT",
"SCAN",
"TERM",
"RANK",
"BODY",
"SEED",
"WOOD",
"TILE",
"IDEA",
"BIND",
"WHIP",
"LOST",
"DROP",
"MOON",
"DEER",
"DUMP",
"CLUE",
"PAIN",
"PILE",
"HOVER",
"LIGHT",
"TABLE",
"LEVEL",
"REIGN",
"PIANO",
"LUNCH",
"EVOKE",
"PLANE",
"OTHER",
"READY",
"CHEST",
"RIGHT",
"DETER",
"AISLE",
"MODEL",
"STING",
"PLEAD",
"SPRAY",
"CHAOS",
"SMOKE",
"SUITE",
"THEME",
"FAITH",
"JUDGE",
"PEACE",
"CHEAP",
"FIRST",
"ADMIT",
"ALOOF",
"COUNT",
"TRACT",
"LEASH",
"GLASS",
"DRAFT",
"BRAKE",
"STYLE",
"CURVE",
"RIDGE",
"NERVE",
"THROW",
"SPEND",
"GRANT",
"BOARD",
"TOOTH",
"EXACT",
"FALSE",
"SHOOT",
"CHEEK",
"VALUE",
"ELECT",
"STRAW",
"BUILD",
"MARCH",
"SMILE",
"AGILE",
"SALON",
"OBESE",
"FLOCK",
"CHALK",
"KORAN",
"PLAIN",
"CHECK",
"THUMB",
"WOUND",
"STAGE",
"EJECT",
"EQUIP",
"TRICK",
"DEATH",
"TORCH",
"MATCH",
"HUMOR",
"CRUEL",
"CYCLE",
"AWARD",
"SPLIT",
"BRIDE",
"BASIC",
"OFFER",
"BIBLE",
"YEARN",
"DROWN",
"CHART",
"STUFF",
"BLAME",
"FLAWED",
"PERIOD",
"DESERT",
"CATTLE",
"DEFEAT",
"MUTTER",
"OUTFIT",
"CEREAL",
"MIDDLE",
"BRANCH",
"FLAVOR",
"SENIOR",
"UNFAIR",
"SCRIPT",
"MEADOW",
"INSURE",
"MANNER",
"ENDURE",
"BEHEAD",
"EFFECT",
"BOTTOM",
"LOCATE",
"ASPECT",
"BORDER",
"CINEMA",
"REVOKE",
"PREACH",
"SPRING",
"STABLE",
"TRANCE",
"DECIDE",
"SPHERE",
"FLOWER",
"FOSSIL",
"EXOTIC",
"SLOGAN",
"REFORM",
"BEHAVE",
"STICKY",
"ROTTEN",
"BANNER",
"PREFER",
"DIRECT",
"PERSON",
"CLIQUE",
"JUNGLE",
"WANDER",
"FREEZE",
"BOTTLE",
"REWARD",
"IGNITE",
"DEALER",
"SMOOTH",
"MUSEUM",
"QUAINT",
"RETURN",
"BUCKET",
"UNIQUE",
"ESCAPE",
"GOSSIP",
"GARAGE",
"NOTICE",
"MUSCLE",
"VIRTUE",
"WINNER",
"STREAM",
"SECOND",
"SETTLE",
"MOSAIC",
"INSIST",
"BELIEF",
"STRAIN",
"SPECIES",
"ELEMENT",
"PAINTER",
"EXPLODE",
"WITNESS",
"REPTILE",
"PORTION",
"PREVENT",
"PROSPER",
"DEFICIT",
"DECLINE",
"VARIANT",
"PROMISE",
"PICTURE",
"COSTUME",
"APPROVE",
"WARRANT",
"AUCTION",
"QUARTER",
"CONTACT",
"PYRAMID",
"DESPAIR",
"DIGNITY",
"NUCLEAR",
"RAINBOW",
"PLASTER",
"HARVEST",
"PATTERN",
"ACCOUNT",
"PAYMENT",
"PARKING",
"PASSIVE",
"OBSCURE",
"SESSION",
"EXTRACT",
"QUALIFY",
"PURPOSE",
"ADVANCE",
"NETWORK",
"EYEBROW",
"CONFUSE",
"OPINION",
"PARADOX",
"MIRACLE",
"SOLDIER",
"HARMFUL",
"DELIVER",
"TRIBUTE",
"STRANGE",
"RELIEVE",
"JUSTICE",
"FICTION",
"VICTORY",
"BARRIER",
"INQUIRY",
"HOSTILE",
"CENTURY",
"BANQUET",
"GLACIER",
"SOPRANO",
"GRADUAL",
"SURGEON",
"THOUGHT",
"PROVOKE",
"OUTSIDE",
"GRAVITY",
"BREATHE",
"SCANDAL",
"ABOLISH",
"FAMILIAR",
"OFFENDER",
"PERCEIVE",
"STRENGTH",
"CIVILIAN",
"ILLUSION",
"ECONOMIC",
"DISCREET",
"DRESSING",
"CALENDAR",
"IMPLICIT",
"MULTIPLY",
"MARATHON",
"ABORTION",
"PRESENCE",
"RELATION",
"MOUNTAIN",
"PROCLAIM",
"OBSERVER",
"FRAGRANT",
"MOVEMENT",
"MUSHROOM",
"MISPLACE",
"EXPLICIT",
"RESTLESS",
"COMPOSER",
"WEAKNESS",
"PHYSICAL",
"VIGOROUS",
"BREAK IN",
"INVASION",
"DISTINCT",
"SUPERIOR",
"TALENTED",
"PLEASANT",
"TOLERANT",
"UNLAWFUL",
"CREATION",
"REMEMBER",
"BASEBALL",
"ASSEMBLY",
"ADVOCATE",
"INTEREST",
"DISGRACE",
"ORGANIZE",
"COMPLETE",
"SANDWICH",
"EXCHANGE",
"PRESTIGE",
"SHORTAGE",
"SURROUND",
"MEDIEVAL",
"CLASSIFY",
"RELIANCE",
"BROCCOLI",
"INFINITE",
"POSSIBLE",
"SICKNESS",
"OVERLOOK",
"EXECUTION",
"INTRODUCE",
"POLLUTION",
"CRAFTSMAN",
"CHOCOLATE",
"COALITION",
"INFECTION",
"FIREPLACE",
"CLASSROOM",
"CRITICISM",
"INTERRUPT",
"EXECUTIVE",
"CIRCULATE",
"PROSECUTE",
"INFLUENCE",
"SPECULATE",
"DEFENDANT",
"COMMUNIST",
"RECORDING",
"TECHNIQUE",
"FINANCIAL",
"CONSCIOUS",
"DETECTIVE",
"BREAKDOWN",
"INSURANCE",
"SECRETION",
"OFFSPRING",
"PERFORATE",
"WATERFALL",
"BIOGRAPHY",
"CATHEDRAL",
"COMMUNITY",
"SOCIALIST",
"LIFESTYLE",
"INCAPABLE",
"ADVANTAGE",
"FAVOURITE",
"COOPERATE",
"EXPERTISE",
"GUARANTEE",
"FREIGHTER",
"ALLOCATION",
"REGULATION",
"ATTACHMENT",
"BACKGROUND",
"CORRESPOND",
"COMPLIANCE",
"REMUNERATE",
"APPRECIATE",
"OBLIGATION",
"DEMOCRATIC",
"ACCEPTANCE",
"ENGAGEMENT",
"CONCESSION",
"MANAGEMENT",
"ASSESSMENT",
"TECHNOLOGY",
"PRODUCTION",
"DICTIONARY",
"RELAXATION",
"CONCLUSION",
"TELEVISION",
"ARTIFICIAL",
"MOTIVATION",
"PROGRESSIVE",
"ASTONISHING",
"FASHIONABLE",
"SALESPERSON",
"NATIONALISM",
"DISTURBANCE",
"RESPECTABLE",
"PERFORMANCE",
"FLUCTUATION",
"GRANDFATHER",
"POSSIBILITY",
"PARTNERSHIP",
"UNCERTAINTY",
"EXPENDITURE",
"CONCENTRATE",
"DESTRUCTION",
"CONTRACTION",
"ARRANGEMENT",
"CONTEMPORARY",
"ACCUMULATION",
"ANTICIPATION",
"CIRCUMSTANCE",
"NEIGHBORHOOD",
"CONVERSATION",
"ACQUAINTANCE",
"CONSERVATION",
"UNDERSTANDING",
"STRIKEBREAKER",
"REHABILITATION",
"DISAPPOINTMENT",
"CORRESPONDENCE",
"ADMINISTRATION"
];
var random_letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//変数-------------------------------------------------------------------------------------------

var question; //Math.floorで整数に切り上げ Math.randomで0-1の小数ランダムで出して、question_listの問題数を掛ける　
var question_area;  //question_areaにquestionを表示 question自体はquestion_listからランダムに選ばれる
var type_area;
var word_area;
var random_question=[""];
var countdown_area;
var countdown_msg;
var count=0;
var random_count=0;
var first_key=0;
var score=0;
var time = 60;
var time_ready = 4;
var timerId;
var countId;
var randomId;
var random_time;
var wpm;
var time_msg;
var result_msg;
var normal_selected;
var random_selected;
var result_image;
var miss_typed;
var miss_typed_area;

//表示----------------------------------------------------------------------------------------------------

//問題とタイプした文字を表示するエリアを変数に格納

word_area = document.getElementById("question_area");
type_area = document.getElementById("typing_area");
score_area = document.getElementById("score_area");
timer_area = document.getElementById("timer_area");
countdown_area = document.getElementById("countdown_area");
normal_selected = document.getElementById("radio1");
random_selected = document.getElementById("radio2");
result_msg = document.getElementById("result_area");
result_image = document.getElementById("result_image");
miss_typed_area = document.getElementById("miss_typed");

//関数---------------------------------------------------------------------------------------------------------


//normal gameのcount down
function count_down(){
  time=time-1;
  time_msg = time +"seconds left";
  timer_area.textContent = time_msg;

  if(time == 0){  //終わったときの処理
    end_game();
  }
}

//タイマーの開始
function start_timer(){
  time = 60;
  time_msg = time +"seconds left";
  word_area.textContent = question;
  score_area.textContent = "SCORE: "+score;
  timer_area.textContent = time_msg;
  countdown_area.textContent = countdown_msg;
  timerId = setInterval(count_down, 1000); //1秒ごとにshow_timeを動かす

}

//ランダムゲームの時間測定
function count_up(){
  random_time = random_time +1;
  time_msg = random_time+"seconds";
  timer_area.textContent = time_msg;
}

//ランダムゲームのタイマー開始
function random_timer_start(){
  random_time = 0;
  time_msg = random_time+"seconds";
  randomId = setInterval(count_up, 1000);

}


//ゲームが始まるまで、ボタンを押してから3秒間
function count_ready(){
  time_ready = time_ready - 1;
  countdown_area.textContent = time_ready;

  if(time_ready == 0){
    clearInterval(countId);
    countdown_area.textContent = "";
    time_ready = 4;
  }
}

//startを押したときのゲームの処理
function start_game(){
  //開始時にresultを消す
  result_area.textContent = "";
  result_image.innerHTML = "";
  if (normal_selected.checked){
    set_normal();
    document.getElementById("radio1").disabled = "true";
    document.getElementById("radio2").disabled = "true";
    // random_timer_startは最初の文字があっていたときに呼ばれる
  } else if (random_selected.checked) {
    random_time = 0;
    set_random();
    document.getElementById("radio1").disabled = "true";
    document.getElementById("radio2").disabled = "true";
  } else {
    alert("Select game mode");
  }

}

//random_gameのおわり
function random_end_game(){

  first_key = 0;
  clearInterval(randomId);
  wpm = random_count / random_time * 60;
  Math.floor(wpm);
  show_result();
  random_count = 0;
  random_time = 0;
  time_msg = "";
  reset();

}


//タイマーが終わったときnormalgame
function end_game(){
  question = "";
  count = -1;
  type_area.textContent = "";
  time = 60;
  first_key = 0;
  time_msg = time +"seconds left";
  clearInterval(timerId); //制限時間のタイマーを止める
  show_result();
  score = 0;
  reset();

}

//文字をリセット
function reset(){

  type_area.textContent = "";
  word_area.textContent = "";
  score_area.textContent = "";
  timer_area.textContent = "";
  countdown_area.textContent = "";
  document.getElementById("start_button").disabled = "";
  document.getElementById("radio1").disabled = "";
  document.getElementById("radio2").disabled = "";

}


//モードがノーマルを選択
function set_normal(){
  question = question_list[Math.floor(Math.random()*question_list.length)];
  count = 0;
  time = 60;
  document.getElementById("start_button").disabled = "true";
  timerId = setTimeout(start_timer, 4000);//4秒後にstart_timerが呼ばれてゲームが始まる
  countId = setInterval(count_ready,1000);

}

//ランダムを設定
function set_random(){
  var random_question="";
  for(var i=0;i<35;i++){

    var rand = Math.floor(Math.random()*random_letters.length);
    random_question = random_question + random_letters[rand]

  }
  //これを押したらquesitionがrandom_questionに書き換わる
  question = random_question;
  count = 0;
  time_msg = random_time+"seconds";
  word_area.textContent = question;
  timer_area.textContent = time_msg;
  document.getElementById("start_button").disabled="true";

}

//次の問題
function next_question(){
  count=0;
  question = question_list[Math.floor(Math.random()*question_list.length)];
  word_area.textContent = question;
  type_area.textContent = "";
  score_area.textContent = "SCORE: "+score;
}

//結果発表
function show_result(){

  if(random_selected.checked){
    var wpm_show;
    wpm_show = Math.floor(wpm);
    if (wpm <=50){
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Turtle";
      result_image.innerHTML = '<img src = "result_images/turtle.png" alt="Turtle">';
    } else if (wpm <= 75) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Tricycle";
      result_image.innerHTML = '<img src = "result_images/sanrinsha.png" alt="Tricycle">';
    } else if (wpm <= 100) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Car";
      result_image.innerHTML = '<img src = "result_images/car_slow.png" alt="Car">';
    } else if (wpm <= 125) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Sports Car";
      result_image.innerHTML = '<img src = "result_images/car_fast.png" alt="Sports Car">';
    } else if (wpm <= 150) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Shinkansen";
      result_image.innerHTML = '<img src = "result_images/shinkansen.png" alt="shinkansen">';
    } else if (wpm <= 200) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Airplane";
      result_image.innerHTML = '<img src = "result_images/airplane.png" alt="airplane">';
    } else if (wpm <= 250) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Rocket";
      result_image.innerHTML = '<img src = "result_images/rocket.png" alt="rocket">';
    } else if (wpm <= 300) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Alien";
      result_image.innerHTML = '<img src = "result_images/ufo.png" alt="Alien">';
    } else if (301 < wpm) {
      result_msg = "Your speed is " + wpm_show + "wpm  Level:Yoshiki";
      result_image.innerHTML = '<img src = "result_images/yoshiki.png" alt="yoshikidayo">';
    }
    result_area.textContent = result_msg;
  }

  if(normal_selected.checked){

    if (score <=3000){
      result_msg = "Your score is " + score + " Level:Turtle";
      result_image.innerHTML = '<img src = "result_images/turtle.png" alt="Turtle">';
    } else if (score <= 6000) {
      result_msg = "Your score is " + score + " Level:Tricycle";
      result_image.innerHTML = '<img src = "result_images/sanrinsha.png" alt="Tricycle">';
    } else if (score <= 9000) {
      result_msg = "Your score is " + score + " Level:Car";
      result_image.innerHTML = '<img src = "result_images/car_slow.png" alt="Car">';
    } else if (score <= 12000) {
      result_msg = "Your score is " + score + " Level:Sports Car";
      result_image.innerHTML = '<img src = "result_images/car_fast.png" alt="Sports Car">';
    } else if (score <= 15000) {
      result_msg = "Your score is " + score + " Level:Shinkansen";
      result_image.innerHTML = '<img src = "result_images/shinkansen.png" alt="shinkansen">';
    } else if (score <= 20000) {
      result_msg = "Your score is " + score + " Level:Airplane";
      result_image.innerHTML = '<img src = "result_images/airplane.png" alt="airplane">';
    } else if (score <= 25000) {
      result_msg = "Your score is " + score + " Level:Rocket";
      result_image.innerHTML = '<img src = "result_images/rocket.png" alt="rocket">';
    } else if (score <= 30000) {
      result_msg = "Your score is " + score + " Level:Alien";
      result_image.innerHTML = '<img src = "result_images/ufo.png" alt="Alien">';
    } else if (30001 < score) {
      result_msg = "Your score is " + score + " Level:Yoshiki";
      result_image.innerHTML = '<img src = "result_images/yoshiki.png" alt="yoshikidayo">';
    }
    result_area.textContent= result_msg;
  }
}



//間違っていたときの音
function wrong(){


  var soundid = "sound_file";
    //currenttimeを認識しているとき
  if(typeof(document.getElementById(soundid).currentTime)!= 'undefined'){
    //再生位置を0秒に設定する
    document.getElementById(soundid).currentTime = 0;
  }

  if(normal_selected.disabled == true || random_selected.disabled == true){
    document.getElementById(soundid).play();
  }


}


//キーを押したときの処理
document.onkeydown = function(e){
  var key_pushed;
  key_pushed = String.fromCharCode(e.keyCode);

  if(key_pushed != question[count]){
    wrong();
    if(normal_selected.disabled == true){
      if(normal_selected.checked){
        score-=100;
      }
    }
  }

  if(key_pushed == question[count]){
    count++;
    if(random_selected.checked){
      random_count++;
    }
    type_area.textContent = type_area.textContent + key_pushed;
  }


  if(question.length == count){
    count = 0;
    score += question.length*100;


    if(random_selected.checked){
      random_end_game();
    }

    if(normal_selected.checked){
      next_question();
    }
  }

  if(random_selected.checked){
    if(key_pushed == question[first_key]){
      first_key = first_key - 1;
      random_timer_start();
    }
  }
}
/*

改善点
タイプしたときにあっていたら問題が灰色になったりするような工夫
randomのときに文字が横並びで非常に見にくい

*/

/*クレジット


https://otologic.jp/free/se/quiz01.html
https://syncer.jp/html5-javascript-hello-button
https://randomwordgenerator.com/
https://www.irasutoya.com/


*/

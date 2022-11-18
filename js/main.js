'use strict'
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const resultCommentary = document.getElementById('resultCommentary');
  
  btn.addEventListener('click',()=>{
    
    const results = [      
      'img/00Fool.png',
      'img/01Magician.png',
      'img/02HighPriestess.png',
      'img/03Empress.png',
      'img/04Emperor.png',
      'img/05Hierophant.png',
      'img/06Lovers.png',
      'img/07Chariot.png',
      'img/08Justice.png',
      'img/09Hermit.png',
      'img/10WheelOf Fortune.png',
      'img/11Strength.png',
      'img/12HungedMan.png',
      'img/13Death.png',
      'img/14Temperance.png',
      'img/15Devil.png',
      'img/16Tower.png',
      'img/17Star.png',
      'img/18Moon.png',
      'img/19Sun.png',
      'img/20Judgement.png',
      'img/21World.png',
         ];
    const resultsTexts = [
      '0番 愚者【THE FOOL】',
      '1番 魔術師【THE MAGICIAN】',
      '2番 女教皇【THE HIGH PRIESTESS】',
      '3番 女帝【THE EMPRESS】',
      '4番 皇帝【THE EMPEROR】',
      '5番 教皇【THE HIEROPHANT】',
      '6番 恋人【THE LOVERS】',
      '7番 戦車【THE CHARIOT】',
      '8番 正義【THE JUSTICE】',
      '9番 隠者【THE HERMIT】',
      '10番 運命の輪【THE WHEEL OF FORTUNE】',
      '11番 力【THE STRENGTH】',
      '12番 吊られた男【THE HUNGED MAN】',
      '13番 死神【THE DEATH】',
      '14番 節制【THE TEMPERANCE】',
      '15番 悪魔【THE DEVIL】',
      '16番 塔【THE TOWER】',
      '17番 星【THE STAR】',
      '18番 月【THE MOON】',
      '19番 太陽【THE SUN】',
      '20番 審判【THE JUDGEMENT】',
      '21番 世界【THE WORLD】',
    ];
    const resultCommentarys = [
      '0番 愚者【THE FOOL】',
      '1番 魔術師【THE MAGICIAN】',
      '2番 女教皇【THE HIGH PRIESTESS】',
      '3番 女帝【THE EMPRESS】',
      '4番 皇帝【THE EMPEROR】',
      '5番 教皇【THE HIEROPHANT】',
      '6番 恋人【THE LOVERS】',
      '7番 戦車【THE CHARIOT】',
      '8番 正義【THE JUSTICE】',
      '9番 隠者【THE HERMIT】',
      '10番 運命の輪【THE WHEEL OF FORTUNE】',
      '11番 力【THE STRENGTH】',
      '12番 吊られた男【THE HUNGED MAN】',
      '13番 死神【THE DEATH】',
      '14番 節制【THE TEMPERANCE】',
      '15番 悪魔【THE DEVIL】',
      '16番 塔【THE TOWER】',
      '17番 星【THE STAR】',
      '18番 月【THE MOON】',
      '19番 太陽【THE SUN】',
      '20番 審判【THE JUDGEMENT】',
      '21番 世界【THE WORLD】',
    ];
    const n = Math.floor( Math.random() * results.length);

    result.src = results[n];
    resultText.textContent = resultsTexts[n];
    resultCommentary.textContent = resultCommentarys[n];

    if(btn.classList.contains('active')){
      return;
    }
    btn.classList.add('active');
  });
}
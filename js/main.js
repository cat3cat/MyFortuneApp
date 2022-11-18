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
      '　　　　　0番 愚者【THE FOOL】　　　　　　キーワード 　自由、未確定、純粋無垢、無計画　　　　　　意味　欲求に忠実に行動し、未知の世界にも飛び込む無謀さと勇敢さを持つことを示します。',
      '　　　　　1番 魔術師【THE MAGICIAN】　　　キーワード：創造、自信、優柔不断、中途半端　　　　自分を信じて動いたり、何かを始めたりすることで良い結果を引き寄せます。若い積極的な男性を意味する場合も',
      '　　　　2番 女教皇【THE HIGH PRIESTESS】　　　キーワード：知力、冷静、無慈悲、神経質　　　知性の高さや冷静さが、プラスに働くことを示します。勉強関係の質問で出ると幸運です。',
      '　　　　3番 女帝【THE EMPRESS】　　　　　キーワード：真実、豊か、贅沢、嫉妬心　　　　すべてにおいて、満たされた満足感と幸福感を味わえる状況が訪れることを示します。',
      '　　　　4番 皇帝【THE EMPEROR】　　　　　キーワード：安定、責任感、威圧的、自分勝手　　　　　強い責任感と自信を持ち、的確な判断力を通して行動を起こす様子を示します。父親を示す場合もあります。',
      '　　　　5番 教皇【THE HIEROPHANT】　　　　キーワード：慈愛心、寛大な精神、出し惜しみ、偏狭　　　　寛大な精神を持ち、暖かさや安心を感じる状況の訪れを示します。援助の手や良い助言を得られるでしょう。',
      '　　　　6番 恋人【THE LOVERS】　　　　　　キーワード：楽しい、無邪気、遊び気分、軽い　　　　始まったばかりの心がときめく状態の恋愛状況を示します。恋愛以外では楽しい状況を暗示します。',
      '　　　　7番 戦車【THE CHARIOT】　　　　　キーワード：情熱、開拓、暴走、混乱　　　　　物事が思い通りにスピーディーに進展します。最終的に成功するかは、別のカードを参考にする必要があります。',
      '　　　　　8番 正義【THE JUSTICE】　　　　キーワード：平等、客観的、義務感、バランス　平等性が確立されていることを示し、感情に振り回されることなく合理的に取り組み、物事が秩序正しく進んでいきます。',
      '　　　　　9番 隠者【THE HERMIT】　　　　　キーワード：模索、静寂、閉鎖的、孤立　　　　思考を重ねることで精神的な悟りを得たり、気分が落ち着いたりするでしょう。特に目立つ行動を起こさなくても、内面は充実しています。',
      '　10番 運命の輪【THE WHEEL OF FORTUNE】　キーワード：幸運、運命的、大きな変化、落ち込み　　　　　大きな幸福感を味わう姿を示し、競争であればトップに立った状態です。しかし次の瞬間、輪は降下し一瞬の喜びとなります。',
      '　　　　　11番 力【THE STRENGTH】　　　　キーワード：強固、意志、困難、失敗　　　　　大きな困難や計画でも強い意志の力を持ってやり遂げることができることを示します。物怖じせず、全力で体当たりできます。',
      '　　　12番 吊られた男【THE HUNGED MAN】　キーワード：試練、忍耐、わがまま、葛藤　　　苦しみを通して悟りなど精神的な満足感を得られることを示し、苦労が報われ実りを得られることを意味します。',
      '　　　　　13番 死神【THE DEATH】　　　　　キーワード：別れ、転換期、再生、運命　　　　生命の死だけではなく計画の中止や人との別れなど、何かが終わることを示しています。次の段階が見えていない状態です。',
      '　　　　14番 節制【THE TEMPERANCE】　　　キーワード：バランス、穏やか、マンネリ、不摂生　　　　淀みがなく純粋で、状況にも精神状態にも無理や無駄がないことを示します。バランスが取れてリラックスできる穏やかな状態です。',
      '　　　　　15番 悪魔【THE DEVIL】　　　　　キーワード：欲望、依存、恐怖、破壊　　　　　悪事であることを理解している罪悪感を持ちながら、得られる快楽に依存してしまい、それに浸っている状態を意味しています。',
      '　　　　　16番 塔【THE TOWER】　　　　　　キーワード：災難、崩壊、トラブル、不安　　　積み上げてきた物事や精神状態を示し、それに稲妻という大打撃が降り落ちて、崩壊する状態です。',
      '　　　　　17番 星【THE STAR】　　　　　　キーワード：高揚、憧れ、幻滅、ギャップ　　　憧れの感情を抱え、心ときめく様子を示します。ただし、幻想的で現実をかけ離れている場合が多いのです。',
      '　　　　　18番 月【THE MOON】　　　　　　キーワード：疑心暗鬼、誤解、クリア、解消　　暗闇の中で先が見えず、迷いや不安を抱えています。白黒はっきりしない状況や誤解を受けることや、三角関係を示します。',
      '　　　　　19番 太陽【THE SUN】　　　　　　キーワード：幸福、純粋、満足、暗黒　　　　　微塵の不安や苦しみも感じない楽しく希望に満ちた状況が訪れることを示します。純粋で単純な、全く疑う必要のない状態を意味します。',
      '　　　　20番 審判【THE JUDGEMENT】　　　　キーワード：復活、許し、自然消滅、不幸　　　善い行いが功を奏して望んでいたことが復活したり、物事が良い方向へ流れたりします。神に認められる状態を示します。',
      '　　　　　21番 世界【THE WORLD】　　　　　キーワード：幸福感、成長、マンネリ、不完全　心から納得できる結果が訪れることを意味します。深い満足感を味わい、心から幸福感を得られること表します。',
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
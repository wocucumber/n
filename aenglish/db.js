const db = {
    "英語月": [
        "month@月",
        "January@1月",
        "February@2月",
        "March@3月",
        "April@4月",
        "May@5月",
        "June@6月",
        "July@7月",
        "August@8月",
        "September@9月",
        "October@10月",
        "November@11月",
        "December@12月"
    ],
    "英語曜日": [
        "Sunday@日曜日",
        "Monday@月曜日",
        "Tuesday@火曜日",
        "Wednesday@水曜日",
        "Thursday@木曜日",
        "Friday@金曜日",
        "Saturday@土曜日"
    ],
    "英語日": [
        "date@日付",
        "1st@1日",
        "2nd@2日",
        "3rd@3日",
        "4th@4日",
        "5th@5日",
        "6th@6日",
        "7th@7日",
        "8th@8日",
        "9th@9日",
        "10th@10日",
        "11th@11日",
        "12th@12日",
        "13th@13日",
        "14th@14日",
        "15th@15日",
        "16th@16日",
        "17th@17日",
        "18th@18日",
        "19th@19日",
        "20th@20日",
        "21st@21日",
        "22nd@22日",
        "23rd@23日",
        "24th@24日",
        "25th@25日",
        "26th@26日",
        "27th@27日",
        "28th@28日",
        "29th@29日",
        "30th@30日",
        "31st@31日"
    ],
    "英語天気": [
        "weather@天気",
        "sunny@晴れ",
        "cloudy@曇り",
        "rainy@雨",
        "snowy@雪"
    ],

    // 一年・（２）学期・１中間　（２）期末
    "1-2-2-english-1": [
        "age@年齢",
        "level@水準",
        "low@低い",
        "evening@夕方",
        "talk@話す",
        "phone@電話",
        "mobile@移動可能な",
        "during@〜じゅうずっと",

        "birthday@誕生日",
        "book@本",
        "morning@朝、午前"
    ],
    "1-2-2-english-2": 
`start@始める
plan@予定
later@あとで
o'clock@〜時
today@今日は・今日
which@どれを・どちらを

hard@かたい
soft@やわらかい
strong@匂い・味が、濃い

creamy@クリームのような
crisp@ぱりぱり・さくさくした
fresh@出来立て・新鮮な
juicy@水分がたっぷりの
mild@おだやかな・まろやかな
rare@肉が）生焼けの・レアの
salty@塩気のある・塩辛い
sticky@ねばねば・べとべとする
sweet@甘い
weak@弱い・（液体などか）薄い
well-done@肉が）よく焼けた`,
    "1-2-2-english-3":
`carry@持っている・運ぶ
choose@選ぶ
sleep@眠る
class@授業
life@生活・暮らし
different@異なる・別の
own@[所有を強調して]自分の
bring@持ってくる・連れてくる
radio@ラジオ

popular@大衆的な・一般的な
famous@有名な・名高い

case@ケース・箱・〜入れ
girl@女子・女の子
buy@買う`,
    "1-2-2-english-4":
`throw@投げる
work@働く
child@子供
children@子供の複数形
e-mail@Eメール
team@チーム
thing@もの・こと
lovely@かわいい・美しい
next@次の・今度の
after@〜の後に・〜以降に
everyone@だれでも・みんな
help@助ける・手伝う
power@力
problem@問題・やっかいなこと
together@いっしょに

sprint@短距離走

fall@秋
field@（陸上競技場の内側の）フィールド
spring@春
track and field@陸上競技
please@どうぞ・お願いいたします
special@特別な`,
    "1-2-2-english-5":
`suggest@提案する
then@それなら・その場合には
may@[許可]〜してもよい
mine@自分のもの
whose@だれの
bottle@びん
ours@私たちのもの

white@白の
but@しかし・だが・けれども
water@水`,
    "1-2-2-english-6":
`drop@落とす・落ちる
join@参加する
bought@買うの過去形
had@持っているの過去形
event@重要な）出来事・行事
experience@体験・経験
lot@たくさん・とても
view@景色・ながめ
last@この前の・最近の

cross@渡る
visit@訪れる
ate@食べるの過去形
saw@見るの過去形
went@行くの過去形
night@夜・晩
year@年・一年（間
beautiful@美しい
delicious@とても）おいしい`,


    "1-2-2-english-difficult":
`cross@渡る
experience@体験・経験
drop@落とす・落ちる
may@[許可]〜してもいよい
sprint@短距離走
suggest@提案する
carry@持っている・運ぶ
different@異なる・別の
weak@弱い・（液体などか）薄い
juicy@水分がたっぷりの
problem@問題・やっかいなこと
together@いっしょに
during@〜じゅうずっと`,

    "1-2-2-english-four":
    [
        'eat@たべる', 'eats@たべるの三単元', 'eating@たべるの現在進行形', 'ate@たべるの過去形',
        'study@勉強する', 'studies@勉強するの三単元', 'studying@勉強するの現在進行形', 'studied@勉強するの過去形',
        'go@行く', 'goes@行くの三単元', 'going@行くの現在進行形', 'went@行くの過去形',
        'have@持つ', 'has@持つの三単元', 'having@持つの現在進行形', 'had@持つの過去形',
        'run@走る', 'runs@走るの三単元', 'running@走るの現在進行形', 'ran@走るの過去形',
        'cut@切る', 'cuts@切るの三単元', 'cutting@切るの現在進行形', 'cut@切るの過去形',
        'walk@歩く', 'walks@歩くの三単元', 'walking@歩くの現在進行形', 'walked@歩くの過去形',
        'watch@見る', 'watches@watchの三単元', 'watching@watchの現在進行形', 'saw@seeの過去形',
        "does@doの三単元", 'doing@doの現在進行形', 'did@doの過去形'
    ],

    "1-2-2-english-be":
`am@I
are@you
is@he
is@she
are@they
is@Tom
are@students
is@everyone(みんな)
is@this computer
is@a apple
are@three bananas`
}

const joinTable = [
    {
        id: "1-2-2-english-all",
        join: [
            "1-2-2-english-1",
            "1-2-2-english-2",
            "1-2-2-english-3",
            "1-2-2-english-4",
            "1-2-2-english-5",
            "1-2-2-english-6"
        ]
    }
];
const choiceTable = [
    {
        before: "1-2-2-english-all",
        id: "1-2-2-english-all-choice-10",
        amount: 10
    }
]

for(const k in db){
    if(typeof db[k] == "string"){
        db[k] = db[k].split("\n").filter(e=>(e?true:false)&&e!="");
    }
}
for(const i of joinTable){
    const arr = [];
    for(const j of i.join){
        arr.push(...db[j]);
    }

    const after = [];

    while(arr.length != 0){
        after.push(...arr.splice(Math.floor(Math.random()*arr.length), 1));
    }

    db[i.id] = after;
}


function choice(){
    for(const j of choiceTable){
        const bef = db[j.before].concat();
        const arr = [];
        for(let i = 0; i < j.amount; i++){
            arr.push(...bef.splice(Math.floor(Math.random() * bef.length), 1));
        }
        db[j.id] = arr;
    }
}

choice();

const list = [
    ["２学期期末++1--", "1-2-2-english-1", "日本語→英単語"],
    ["２学期期末++2--", "1-2-2-english-2", "日本語→英単語"],
    ["２学期期末++3--", "1-2-2-english-3", "日本語→英単語"],
    ["２学期期末++4--", "1-2-2-english-4", "日本語→英単語"],
    ["２学期期末++5--", "1-2-2-english-5", "日本語→英単語"],
    ["２学期期末++6--", "1-2-2-english-6", "日本語→英単語"],
    ["２学期期末++1--〜++6--", "1-2-2-english-all", "日本語→英単語"],
    ["２学期期末++1--〜++6--から１０個", "1-2-2-english-all-choice-10", "日本語→英単語"],

    ["be動詞", "1-2-2-english-be", "主語→正しいbe動詞"],

    // ["２学期期末の難しいもの", "1-2-2-english-difficult"],
]
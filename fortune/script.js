window.onload = ()=>{
    // ページロード時

    // 占いボタンクリック時のイベント
    $("#run").on("click", ()=>{
        
        // 名前・生年月日を取得
        const name = $("#name").val();
        const birthday = $("#birthday").val();
        
        // 入力チェック
        if(name.length == 0) return alert("名前を入力してください");
        if(birthday.length == 0) return alert("生年月日を入力してください");

        // ボタンをクリックできないようにする
        $("#run").addClass("disabled");
        
        // 占い
        const code = run(name, birthday);
        const res = resList[code % resList.length];

        // テキストを書き込み
        $("#res-body").text(name+"さんの"+(new Date().getFullYear())+"年の運勢は...")
        $("#res-body2").text("「"+res+"」です！");
        $("#res-body2").hide();

        // 占い結果を順番に表示する
        $("#close-res").hide();
        $("#res").hide();

        // 1秒かけてリザルト表示
        $("#res").fadeIn(1000, ()=>{

            // 1秒後に0.5秒がけて、占いの結果を表示
            setTimeout(() => {
                
                $("#res-body2").fadeIn(500);
    
                // 1.5秒後に占いボタン、閉じるボタンをクリックできるようにする
                setTimeout(() => {
                    $("#run").removeClass("disabled");
                    $("#close-res").show();
                }, 1500);

            }, 1000);
        });

    });

    // 閉じるボタンクリック時にリザルトを閉じる
    $("#close-res").on("click", ()=>{
        $("#res").fadeOut(500);
    });


    // 占い結果のリスト　要素の数で重みをつけている
    const resList = [
        "小吉", "小吉", "小吉", "小吉", "小吉",
        "小吉", "小吉", "小吉", "小吉", "小吉",

        "中吉", "中吉","中吉", "中吉",

        "大吉", "大吉",
        
        "超★大吉"
    ];

    // 名前から数値を生成する
    function genNameCode(name){
        let nameCode = 0;
        for(let i=0; i<name.length; i++){
            const code = name.charCodeAt(i);
            nameCode = nameCode ^ code + code ^ nameCode;
        }
        return nameCode;
    }

    // 生年月日から数値を生成する
    function genBirthdayCode(birthday){
        const dt = new Date(birthday);

        const y = dt.getFullYear();
        const m = dt.getMonth() + 1;
        const d = dt.getDate();

        const birthdayCode = (y ** 4) + (m * d ** 3) + (d * y ** 2);

        return birthdayCode;
    }

    // 年から数値を生成する
    function genYearCode(){ 
        const dt = new Date();
        const y = dt.getFullYear();

        const yearCode = (y ** 4) + (y ** 3) + (y ** 2) + y;

        return yearCode;
    }
    window.n = genBirthdayCode;

    function run(name, birthday="2024-01-01"){
        // コードを取得
        const nameCode = genNameCode(name);
        const birthdayCode = genBirthdayCode(birthday);
        const yearCode = genYearCode();
        
        // 占い結果を返す
        const res = nameCode * birthdayCode + yearCode;
        return res;
    }
}
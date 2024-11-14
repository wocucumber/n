$("#start").on("click", async ()=>{
    $("#start").fadeOut(500);

    await wait(500);

    run();
});
function convert(e){
    return e.split("++").join("<span class=\"maru\">").split("--").join("</span>");
}
$("#list ul").html(
    list.map(e=>`<li data-id="${e[1]}" data-title="${e[2]}"><button class="btn-primary btn">Study</button>${convert(e[0])}</li>`)
);
$("*[data-id] > button").on("click", async function(){
    const id = $(this).parent().data("id");

    $(this).parent().parent().parent().fadeOut(500);
    
    await wait(500);

    run(id, $(this).parent().data("title"));
});
let isRunning = false;
async function run(questionid, title){
    
    choice();

    await wait(100);
    
    location.hash = "#"+Math.random();

    if(isRunning) return;
    isRunning = true;
    
    if(!questionid) throw alert("Error.");

    const questionId = questionid;
    const d = db[questionId];

    if(d == undefined) throw alert("Error.");

    $("#questions").hide().html(d.map(e=>{
        const namib = e.split("@");
        return `<div class="question" data-answer="${namib[0]}"><h3>${namib[1]}</h3><input class="form-control inputer"></div>`;
    })).fadeIn(500);
    
    $("#title").hide().text(title).fadeIn(500);

    await wait(500);

    const ok = new Audio("sounds/correct.wav");
    const ng = new Audio("sounds/bad.mp3");
    
    await wait(3000);

    $("#okay").fadeIn(1000).on("click", async ()=>{
        $("#okay").fadeOut(500);

        await wait(500);

        $(".inputer").addClass("disabled");
        let okay = 0;

        const questions = $("#questions .question");
        for (let i = 0; i < questions.length; i++) {
            const question = $(questions[i]);

            const answer = question.data("answer");
            const value  = question.children(".inputer").val();

            const status = answer == value;

            const img = $("<img>").attr("src", "imgs/"+(status ? "ok" : "ng")+".png").hide();
            question.append(img);
            img.fadeIn(500);

            if(!status){
                const text = $("<p>").text("正しくは「"+answer+"」").hide();
                question.append(text);
                text.fadeIn(500);
            }else okay++;

            const audio = (status ? ok : ng);
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            
            question.attr("id", "q"+(i+1));
            location.hash = "#q"+(i+1);

            await wait(250+Math.floor(Math.random()*300));
        }

        await wait(500);
        $("#score").text(Math.floor(okay/d.length*100)+"点").fadeIn(500);
        let runed = false;
        
        
        $("#replay").fadeIn(500).on("click", async ()=>{
            if(runed) return;
            runed = true;
            
            $("#home").fadeOut(500);
            $("#replay").fadeOut(500);
            $("#questions").fadeOut(500);
            $("#score").fadeOut(500);
            $("#title").fadeOut(500);
            await wait(500);
            
            $("#okay").off("click");
            $("#home").off("click");
            $("#replay").off("click");
            
            isRunning = false;
            run(questionId);
            
        });

        $("#home").fadeIn(500).on("click", async ()=>{
            if(runed) return;
            runed = true;

            $("#home").fadeOut(500);
            $("#replay").fadeOut(500);
            $("#questions").fadeOut(500);
            $("#score").fadeOut(500);
            $("#title").fadeOut(500);
            await wait(500);

            $("#okay").off("click");
            $("#home").off("click");
            $("#replay").off("click");

            isRunning = false;

            $("#list").fadeIn(500);
        })

        setTimeout(() => {
            location.hash = "#score";    
        }, 10);

    });
}


function wait(time=1000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, time);
    });
}
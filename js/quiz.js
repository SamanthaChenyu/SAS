var question = [
{
    "question":"01.數位浪潮來襲，高達72%的企業首要想提升哪方面能力？",
    "option":["優化客戶體驗","招募數位人才",""],
    "correct":["優化客戶體驗"],
    "description":"根據Forrester在2016年釋出調查，「改善客戶體驗」將為企業首要之務。資訊長與行銷長在整個行銷過程中，必需齊力連結科技與顧客。",
},
{
    "question":"02.體驗至上，截至2018年，有多少企業顯著投資在打造「創新客戶體驗」？",
    "option":["30%","超過50%",""],
    "correct":["超過50%"],
    "description":"根據Gartner在2015報告中預測，在2018年底前，超過50%企業將會投資在創新客戶體驗。",
},
{
    "question":"03.沒辦法驅動企業轉型？有多少行銷長得因此離開？",
    "option":["10%","30%",""],
    "correct":["30%"],
    "description":"Forrester2017報告中指出，將有30%的行銷長面臨被執行長辭退的窘境，因為，其無法以創新力驅動數位轉型、設計更卓越的客戶體驗、進而推動企業成長。",
},
{
    "question":"04.客戶爭奪戰開始，截至2020年，有多少企業會增設客戶長(CCO)一職？",
    "option":["25%","10%",""],
    "correct":["25%"],
    "description":"根據IDC2017年報告，截至2020年，將有25%的企業會增設客戶長(Chief Customers Officer)一職，確保企業是以客戶需求為中心的執行各項作業，推出相關產品服務。",
},
{
    "question":"05.下述哪種定義較能體現全通路行銷的核心價值？",
	"option":["同時提供<br>線上線下服務","客戶為中心，提供跨通路一致體驗",""],
	"correct":["客戶為中心，提供跨通路一致體驗"],
	"description":"全通路的核心思維是，緊密整合各個通路，藉此即時掌握客戶在不同時間點的接觸動機，提供一致且切合需求的即時服務。",
}
]
var marketing = [
{
    "question":"06.您現在透過何種方式了解客戶需求？",
    "option":["參考新聞與研究報告等外部資訊","結合大數據分析了解客戶以預測需求",""],
    "correct":["結合大數據分析了解客戶以預測需求"],
    "description":"整合客戶基本資料、數位軌跡及通路互動歷程等數據，有助於定義出更精準的客戶行為、偏好與需求，並可藉此預測潛在相似族群樣貌。",
},
{
    "question":"07.您認為何是數位浪潮之成功行銷術？",
    "option":["促銷至上，<br>下單才是王道","體驗至上，<br>建立長久客戶經營",""],
    "correct":["體驗至上，建立長久客戶經營"],
    "description":"即時掌握客戶需求、在全通路建置統一共享的記錄與積分，並納入客戶性格與人生階段等維度以制定個人化內容行銷策略，實現在對的時機提供對的服務，增加體驗滿意度。",
}
]
var analytical = [
{
    "question":"08.您覺得應該如何透過客戶資料強化互動關係？",
    "option":["分析客戶資料，制定差異化經營策略","依資料屬性挑選TA舉辦促銷活動",""],
    "correct":["分析客戶資料，制定差異化經營策略"],
    "description":"資訊蒐集後，需妥善進行結構與非結構化的資料彙整，並輔以自動化與個人化科技，將深掘的洞察納入營運作業中，使客戶資料有效發揮價值！",
},
{
    "question":"09.取得行銷活動的成效報告後，下一步何者最佳？",
    "option":["提供報告給主管邀功","執行深度分析，<br>實現行銷優化",""],
    "correct":["執行深度分析，實現行銷優化"],
    "description":"隨資料爆炸性增長，單純透過經驗判讀報表已難滿足市場需求。應藉助分析平台協助資料整理、分析與追蹤業務營運，作為行銷策略制訂的利基。",
},
{
    "question":"10.當人工智慧技術遇上企業行銷，您認為將產生什麼不一樣的火花？",
    "option":["企業擁有更即時的智慧決策能力","企業可以<br>取得客戶洞見",""],
    "correct":["企業擁有更即時的智慧決策能力"],
    "description":"AI技術可更即時偵測客戶需求，讓客戶在查找、購買或流失後再回頭等購買週期的各接觸點中，獲得最佳體驗，為您帶來更高的行銷回應。",
}
]
var result = [
{
    "tittle":"還在恐龍時代的你，目前看不到未來",
    "years":"",
    "description":"什麼？沒有知識、不懂行銷，更別提分析了，身為行銷新手，這怎麼行？！快來看看快問快答的解析！"
},
{
    "tittle":"當上行銷長，你還需：",
    "years":"5年",    
    "cotittle":"做人不能只靠天份。",
    "description":"看你還有些天份，好好做事~用功擷取新知！再過5年，你也可以在AI世代站穩腳步!"
},
{
    "tittle":"當上行銷長，你還需：",
    "years":"3年",
    "cotittle":"已是行銷高手，但還不夠狂。",
    "description":"領域的知識完全得心應手，只要再補強"
},
{
    "tittle":"你已經是行銷長了吧？！",
    "years":"",
    "description":"今天的你，沒有極限！知識、行銷、分析，專業技能樣樣難不倒你，台灣下一個經濟奇蹟就靠你了！"
},
]

$(document).ready(function() {
    $('#start').click(function() {
        $(".intro").remove();
        $(".Bar-box").css('display','flex');
        quiz();
    });

function quiz () {
    var i = 0;
    var correctCount = 0;
    var que = 0;
    var str = '';
    for (i = 0; i < question.length; i++) {
        str += "<div class='Bar-box' id='Bar-box"+i+"'><p class='knowledge'>知識力專區</p><div class='myProgress'><div class='myBar'></div></div></div>"
        str += "<div><div id='q"+i+"' class='slide'><div class='imgContent zoomIn animated'></div><div class='quiz-text'>" + question[i]["question"] + "</div>";
        str += "<ul class='selection'><li class='choice'><p>" + question[i]["option"][0] + "</p></li><li class='choice'><p>" + question[i]["option"][1] + "</p></li><li class='choice'><p>" + question[i]["option"][2] + "</p></li></div></div>";
        str += "<div id='a" + i + "' class='slide'><div class='answer'><div id='answerImg"+ i +"' class='imgIconA'></div><p class='ans' id='ans"+ i + "'></p><div><p class='detail' id='answer" + i + "'></p></div></div>";
        str += "<div class='next'><div id='next" + i + "'href='javascript:void(0)'>下一題</dvi></div></div></div>";
        document.getElementById('quiz').innerHTML = str;
    } 

    choiceScore();
    $("#q1, #q2, #q3, #q4").hide();
    $("#Bar-box1, #Bar-box2, #Bar-box3, #Bar-box4").hide();
    $("#a0, #a1, #a2, #a3, #a4").hide();
    showTime();


    function choiceScore() {
        $(".choice").bind("click", function () {
            var answer = $(this).text();
            checkanswer(que, answer);
        });
        $("#q0 li.choice").click(function() {
            $("#Bar-box0").remove();
            clearTimeout(myVar);
        })
        $("#q1 li.choice").click(function() {
            $("#Bar-box1").remove();
            clearTimeout(myVar0);
        })
        $("#q2 li.choice").click(function() {
            $("#Bar-box2").remove();
            clearTimeout(myVar1);
        })
        $("#q3 li.choice").click(function() {
            $("#Bar-box3").remove();
            clearTimeout(myVar2);
        })
        $("#q4 li.choice").click(function() {
            $("#Bar-box4").remove();
            clearTimeout(myVar3);
        })
    }
    function checkanswer(i, a) {
        $("#q" + i).hide();
        $("#a" + i).show();
        que = que + 1;
        bar = i + 2;
        if (a == question[i]['correct']) {
            correctCount = correctCount + 1;
            $("#answerImg"+i).append("<img src='img/ture.svg' />");
            $("#ans"+i).append("答案就是："+ question[i]['correct'] + "！");
            $("#answer"+i).append(question[i]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        } else {
            $("#answerImg" + i).append("<img src='img/false.svg' />");
            $("#ans"+i).append("答案就是："+ question[i]['correct'] + "！");
            $("#answer" + i).append(question[i]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        }     
       console.log(correctCount);       
    };


    $("#next0").click(function() {
        showTime0();
        $("#q0").remove();
    });
    $("#next1").click(function() {
        showTime1();
        $("#q1").remove();
    });
    $("#next2").click(function() {
        showTime2();
        $("#q2").remove();
    });
    $("#next3").click(function() {
        showTime3();
        $("#q3").remove();
    });
    $("#next4").click(function() {
        quiz2();
        $("#q4").remove();       
    });


function quiz2() {

    var q = 0;
    var Count = 0;
    var que = 5;
    var str = '';

    for (q = 0; q < marketing.length; q++) {
        str += "<div class='Bar-box' id='Bar-box"+ (q+5) +"'><p class='knowledge'>行銷力專區</p><div class='myProgress'><div class='myBar'></div></div></div>"
        str += "<div><div id='q"+ (q+5) +"' class='slide'><div class='imgContent zoomIn animated'></div><div class='quiz-text'>" + marketing[q]["question"] + "</div>";
        str += "<ul class='selection'><li class='choice'><p>" + marketing[q]["option"][0] + "</p></li><li class='choice'><p>" + marketing[q]["option"][1] + "</p></li><li class='choice'><p>" + marketing[q]["option"][2] + "</p></li></div></div>";
        str += "<div id='a" + (q+5) + "' class='slide'><div class='answer'><div id='answerImg"+ (q+5) +"' class='imgIconA'></div><p class='ans' id='ans"+ (q+5) + "'></p><div><p class='detail' id='answer" + (q+5) + "'></p></div></div>";
        str += "<div class='next'><div id='next" + (q+5) + "'href='javascript:void(0)'>下一題</dvi></div></div></div>";
        document.getElementById('quiz').innerHTML = str;
        }      

        $("#q5, #q6").hide();
        $("#Bar-box5, #Bar-box6").hide();
        $("#a5, #a6").hide();
        choiceScore();
        showTime4();

    function choiceScore() {
        $(".choice").bind("click", function () {
            var answer = $(this).text();
            checkanswer(que, answer);
        });
        $("#q5 li.choice").click(function() {
            $("#Bar-box5").remove();
            clearTimeout(myVar4);
        })
        $("#q6 li.choice").click(function() {
            $("#Bar-box6").remove();
            clearTimeout(myVar5);
        })
    }
    function checkanswer(i, a, q) {
        $("#q" + i).hide();
        $("#a" + i).show();
        que = que + 1;
        q = i - 5;
        bar = i + 2;
        if (a == marketing[q]['correct']) {
            Count = Count + 1;
            $("#answerImg"+i).append("<img src='img/ture.svg' />");
            $("#ans"+i).append("答案就是："+ marketing[q]['correct'] + "！");
            $("#answer"+i).append(marketing[q]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        } else {
            $("#answerImg" + i).append("<img src='img/false.svg' />");
            $("#ans"+i).append("答案就是："+ marketing[q]['correct'] + "！");
            $("#answer" + i).append(marketing[q]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        }     
       console.log(Count);       
    };
    function countDown(i, callback) {
        callback = callback || function(){};
        var int = setInterval(function() {
        var d = document.getElementById('Bar-box0');
        d.setAttribute('data-text',i);
        i-- || (clearInterval(int), callback());
        }, 1000);
    }
    $("#next5").click(function() {
        showTime5();
        $("#q5").remove();
    });
    $("#next6").click(function() {
        quiz3();
        $("#q6").remove();
    });        

function quiz3() {
    var z = 0;
    var Counts = 0;
    var que = 7;
    var str = '';
    for (z = 0; z < analytical.length; z++) {
        str += "<div class='Bar-box' id='Bar-box"+ (z+7) +"'><p class='knowledge'>分析力專區</p><div class='myProgress'><div class='myBar'></div></div></div>"
        str += "<div><div id='q"+ (z+7) +"' class='slide'><div class='imgContent zoomIn animated'></div><div class='quiz-text'>" + analytical[z]["question"] + "</div>";
        str += "<ul class='selection'><li class='choice'><p>" + analytical[z]["option"][0] + "</p></li><li class='choice'><p>" + analytical[z]["option"][1] + "</p></li><li class='choice'><p>" + analytical[z]["option"][2] + "</p></li></div></div>";
        str += "<div id='a" + (z+7) + "' class='slide'><div class='answer'><div id='answerImg"+ (z+7) +"' class='imgIconA'></div><p class='ans' id='ans"+ (z+7) + "'></p><div><p class='detail' id='answer" + (z+7) + "'></p></div></div>";
        str += "<div class='next'><div id='next" + (z+7) + "'href='javascript:void(0)'>下一題</dvi></div></div></div>";
        document.getElementById('quiz').innerHTML = str;
    }  
    $("#q8, #q9").hide();
    $("#Bar-box8, #Bar-box9").hide();
    $("#a7, #a8, #a9").hide();
    choiceScore();
    showTime6();
    function choiceScore() {
        $(".choice").bind("click", function () {
            var answer = $(this).text();
            checkanswer(que, answer);
        });
        $("#q7 li.choice").click(function() {
            $("#Bar-box7").remove();
            clearTimeout(myVar6);
        })
        $("#q8 li.choice").click(function() {
            $("#Bar-box8").remove();
            clearTimeout(myVar7);
        })
        $("#q9 li.choice").click(function() {
            $("#Bar-box9").remove();
            clearTimeout(myVar8);
        })
    }
    function checkanswer(i, a, z) {
        $("#q" + i).hide();
        $("#a" + i).show();
        que = que + 1;
        z = i - 7;
        bar = i + 2;
        if (a == analytical[z]['correct']) {
            Counts = Counts + 1;
            $("#answerImg"+i).append("<img src='img/ture.svg' />");
            $("#ans"+i).append("答案就是："+ analytical[z]['correct'] + "！");
            $("#answer"+i).append(analytical[z]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        } else {
            $("#answerImg" + i).append("<img src='img/false.svg' />");
            $("#ans"+i).append("答案就是："+ analytical[z]['correct'] + "！");
            $("#answer" + i).append(analytical[z]["description"]);
            $("#Bar-box" + i).hide();
            $(".q" + i + " li.choice").unbind("click");
            $("#next" + i).on("click", function () {
                $("#a" + i).hide();
                $("#Bar-box" + que).show();
                $("#q" + que).show();
                $(".myBar").css("width",bar*10+"%");
            });
        }     
       console.log(Counts);       
    };
    $("#next7").click(function() {
        showTime7();
        $("#q7").remove();
    });
    $("#next8").click(function() {
        showTime8();
        $("#q8").remove();
    });     
    $("#next9").text("看結果");
    var element0 = $("#next9").eq(0);
    $("#next9").on("click", function () {
        $("#q9").remove();
        $("#quiz").hide();
        finalresult(correctCount, Count, Counts);
    });

        function finalresult(correctCount, Count, Counts) { 
            var items = [
                { name: '分析力', value: Counts },
                { name: '行銷力', value: Count },
                { name: '知識力', value: correctCount }
            ];
                items.sort(function (a, b) {
                    return a.value - b.value;
                });
            console.log(items);
            var point = items[2]['name'];
            var small = items[0]['name'];
            score = correctCount + Count + Counts;
            switch(true) {
            case (score == 0):
            Ranking = 0;
            $("#result").css('background-image','url(img/result1.svg)');
            $("#result").append("<div class='centers'><span class='resultTittle'>" + result[Ranking]['tittle'] + "</span><div class='resultDescription'>" + result[Ranking]['description'] +
               "</div><a href='survey/content.html' target='_blank' class='Sign_up'><img class='gtmEvent' gtm-name='2017SAS_write' src='img/Sign_up.svg'></a><div class='share'>分享給朋友<div class='fb-sahre-icon1 gtmEvent' gtm-name='2017SAS_FB'></div><a href='https://line.naver.jp/R/msg/text/?測測你幾年可以當上行銷長？%0D%0Ahttps%3a%2f%2ftopic.cw.com.tw%2fevent%2f2017sas%2findex.html' class='line-sahre-icon gtmEvent' target='_blank' gtm-name='2017SAS_Line'></a></div><p class='result-include'>本測驗所預測年份僅為參考值，不具調查依據。</p></div>"); 
            $("#result").show();          
            break;
            case (score <= 5):
            Ranking = 1;
            $("#result").css('background-image','url(img/result2.svg)');
            $("#result").append("<div class='centers'><span class='resultTittle'>" + result[Ranking]['tittle'] + "</span><span class='years'>" + result[Ranking]['years'] + "</span><p class='resultTittle'>" + result[Ranking]['cotittle'] + "</p><div class='resultDescription'>" + result[Ranking]['description'] +
               "</div><a href='survey/content.html' target='_blank' class='Sign_up'><img class='gtmEvent' gtm-name='2017SAS_write' src='img/Sign_up.svg'></a><div class='share'>分享給朋友<div class='fb-sahre-icon2 gtmEvent' gtm-name='2017SAS_FB'></div><a href='https://line.naver.jp/R/msg/text/?測測你幾年可以當上行銷長？%0D%0Ahttps%3a%2f%2ftopic.cw.com.tw%2fevent%2f2017sas%2findex.html' class='line-sahre-icon gtmEvent' target='_blank' gtm-name='2017SAS_Line'></a></div><p class='result-include'>本測驗所預測年份僅為參考值，不具調查依據。</p></div>"); 
            $("#result").show();          
            break;
            case (score <= 8):
            Ranking = 2;
            $("#result").css('background-image','url(img/result3.svg)');
            $("#result").append("<div class='centers'><span class='resultTittle'>" + result[Ranking]['tittle'] + "</span><span class='years'>" + result[Ranking]['years'] + "</span><p class='resultTittle'>" + result[Ranking]['cotittle'] + "</p><div class='resultDescription'>你對" + point + result[Ranking]['description'] + small +
               "領域的知識，一定能大放異彩!</div><a href='survey/content.html' target='_blank' class='Sign_up'><img class='gtmEvent' gtm-name='2017SAS_write' src='img/Sign_up.svg'></a><div class='share'>分享給朋友<div class='fb-sahre-icon3 gtmEvent' gtm-name='2017SAS_FB'></div><a href='https://line.naver.jp/R/msg/text/?測測你幾年可以當上行銷長？%0D%0Ahttps%3a%2f%2ftopic.cw.com.tw%2fevent%2f2017sas%2findex.html' class='line-sahre-icon gtmEvent' target='_blank' gtm-name='2017SAS_Line'></a></div><p class='result-include'>本測驗所預測年份僅為參考值，不具調查依據。</p></div>"); 
            $("#result").show();                
            break;
            case (score >= 9):
            Ranking = 3;
            $("#result").css('background-image','url(img/result4.svg)');
            $("#result").append("<div class='centers'><span class='resultTittle'>" + result[Ranking]['tittle'] + "</span><div class='resultDescription'>" + result[Ranking]['description'] +
               "</div><a href='survey/content.html' target='_blank' class='Sign_up'><img class='gtmEvent' gtm-name='2017SAS_write' src='img/Sign_up.svg'></a><div class='share'>分享給朋友<div class='fb-sahre-icon4 gtmEvent' gtm-name='2017SAS_FB'></div><a href='https://line.naver.jp/R/msg/text/?測測你幾年可以當上行銷長？%0D%0Ahttps%3a%2f%2ftopic.cw.com.tw%2fevent%2f2017sas%2findex.html' class='line-sahre-icon gtmEvent' target='_blank' gtm-name='2017SAS_Line'></a></div><p class='result-include'>本測驗所預測年份僅為參考值，不具調查依據。</p></div>"); 
            $("#result").show();                                   
            break;
            default:
            Ranking = 0;
            $("#result").css('background-image','url(img/result1.svg)');
            $("#result").append("<div class='centers'><span class='resultTittle'>" + result[Ranking]['tittle'] + "</span><div class='resultDescription'>" + result[Ranking]['description'] +
               "</div><a href='survey/content.html' target='_blank' class='Sign_up'><img class='gtmEvent' gtm-name='2017SAS_write' src='img/Sign_up.svg'></a><div class='share'>分享給朋友<div class='fb-sahre-icon1 gtmEvent' gtm-name='2017SAS_FB'></div><a href='https://line.naver.jp/R/msg/text/?測測你幾年可以當上行銷長？%0D%0Ahttps%3a%2f%2ftopic.cw.com.tw%2fevent%2f2017sas%2findex.html' class='line-sahre-icon gtmEvent' target='_blank' gtm-name='2017SAS_Line'></a></div><p class='result-include'>本測驗所預測年份僅為參考值，不具調查依據。</p></div>"); 
            $("#result").show();   
            break;
            }
                $(".fb-sahre-icon1").on("click", function(e) {
                        e.preventDefault(),
                        FB.ui({
                            method: "share",
                            action_type: "og.shares",
                            display: "popup",
                            href: 'http://topic.cw.com.tw/event/2017SAS/index.html',
                            action_properties: JSON.stringify({
                                object: {
                                    "og:url": "https://topic.cw.com.tw/event/2017SAS/index.html",
                                    "og:title": "還在恐龍時代的你，目前看不到未來",
                                    "og:description": "什麼？沒有知識、不懂行銷，更別提分析了，身為行銷新手，這怎麼行？！快來看看快問快答的解析！",
                                    "og:image": "https://topic.cw.com.tw/event/2017sas/img/share.jpg"
                                }
                            })
                        })
                    });
                $(".fb-sahre-icon2").on("click", function(e) {
                        e.preventDefault(),
                        FB.ui({
                            method: "share",
                            action_type: "og.shares",
                            display: "popup",
                            href: 'http://topic.cw.com.tw/event/2017SAS/index.html',
                            action_properties: JSON.stringify({
                                object: {
                                    "og:url": "https://topic.cw.com.tw/event/2017SAS/index.html",
                                    "og:title": "做人不能只靠天份，當上行銷長：你還需5年",
                                    "og:description": "看你還有些天份，好好做事~用功擷取新知！再過5年，你也可以在AI世代站穩腳步！",
                                    "og:image": "https://topic.cw.com.tw/event/2017sas/img/share1.jpg"
                                }
                            })
                        })
                    });
                $(".fb-sahre-icon3").on("click", function(e) {
                        e.preventDefault(),
                        FB.ui({
                            method: "share",
                            action_type: "og.shares",
                            display: "popup",
                            href: 'http://topic.cw.com.tw/event/2017SAS/index.html',
                            action_properties: JSON.stringify({
                                object: {
                                    "og:url": "https://topic.cw.com.tw/event/2017SAS/index.html",
                                    "og:title": "已是行銷高手，但還不夠狂；當上行銷長，你還需3年",
                                    "og:description": "你對" + point + "領域的知識完全得心應手，只要再補強" + small + "領域的知識，一定能大放異彩!",
                                    "og:image": "https://topic.cw.com.tw/event/2017sas/img/share2.jpg"
                                }
                            })
                        })
                    });
                $(".fb-sahre-icon4").on("click", function(e) {
                        e.preventDefault(),
                        FB.ui({
                            method: "share",
                            action_type: "og.shares",
                            display: "popup",
                            href: 'http://topic.cw.com.tw/event/2017SAS/index.html',
                            action_properties: JSON.stringify({
                                object: {
                                    "og:url": "https://topic.cw.com.tw/event/2017SAS/index.html",
                                    "og:title": "你已經是行銷長了吧？！",
                                    "og:description": "今天的你，沒有極限！知識、行銷、分析，專業技能樣樣難不倒你，台灣下一個經濟奇蹟就靠你了！",
                                    "og:image": "https://topic.cw.com.tw/event/2017sas/img/share3.jpg"
                                }
                            })
                        })
                    });
        }



        }
    }
}




    $("#again").click(function(){
        reset();
        quiz();
        $("#quiz").show();
    }); 

    function reset() {
        $("#result").hide();
        que = 0;
        correctCount = 0;
        $("#quiz div").remove();
        $("#result div").remove();
        $("#result p").remove();
    }
});



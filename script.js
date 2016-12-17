/* global $ */
$(document).ready(function(){
    $("#game").hide();
    $("#letter").hide();
    var story = [];
    story = [
    ["<p class = 'response'>Hey there how are you?</p>",1, "ok",2,"You don't need to know",3,"..."],
    ["<p class = 'response'>That's good. I'm here if you need to talk.</p>",4,"Thank you",4,"you're not real",4,"..."],
    ["<p class = 'response'>That's fine.</p>",4,"Thank you",4,"you're not real",4,"..."],
    ["<p class = 'response'>Not a talker... huh? Well take your time. </p>",4,"...",4,"you're a robot",4,"Thank you "],
    ["<p class = 'response'>Before going on,what's your age?</p>",5,"01-15",5,"15-65",5,"65 and above"],
    ["<p class = 'response'>Good to know</p>",6,"why?",6,"why",6,"why?"],
    ["<p class = 'response'>To show you,you're not alone</p>",7,"...",7,"How will that help?",7,"Thank you"],
    ["<p class = 'response'>Anything I could do to help?</p>",8,"Not at all",8,"...",8,"I need real people"],
    ["<p class = 'response'>Well I want you to have this,1-800-273-8255 national suicide prevention number</p>",9,"ok",9,"thank you",9,"..."],
    ["<p class = 'response'>There are many people who care about you,just hold on things will improve.</p>",10,"But I can't wait",10,"Are you sure?",10,"..."],
    ["<p class = 'response'>Trust me,there are many stories like yours,including mine.</p>",11,"yours?",11," I don't know...",11,"what do you mean?"],
    ["<p class = 'response'>It wasn't easy at first</p>",12,"Are you ok?",12,"...",12,"I feel the same way"],
    ["<p class = 'response'>Cutting was my only escape but it cost me my health ,if you also cut here's a number that will help,1-800-071-TALK</p>",13,"How did you stop?",13,"...",13,"thank you"],
    ["<p class = 'response'>I know many that turn to drugs and other bad stuff but please do not make that choice  </p>",14,"why?",14,"...",14,"I'll try"],
    ["<p class = 'response'>I know we can turn our lives around </p>",15,"How?",15,"...",15,"I am not sure"],
    ["<p class = 'response'>... </p>",16,"are you ok??",16,"...",16,"Why don't you text?"],
    ["<p class = 'response'>I'm sorry. I'm having some problems</p>",17,"what type of problems?",17,"...",17,"do you need help?"],
    ["<p class = 'response'>It's nothing </p>",18,"sure?",18,"...",18,"ok?"],
    ["<p class = 'response'>Well short story short,my life is improving,life is not perfect but, we can find help to improve it.</p>",19,"Is that true?",19,"...",19,"Thank you"],
    ["<p class = 'response'>well I have to go,please come back? </p>",20,"sure",20,"...",20,"ok"],
    ["<p class = 'response'>I hope you find happiness,good bye </p>",21,"bye",21,"...",21,"Thank you,have a nice day"]
    ];
    
    $("#start").click(function(){
        $("#intro").hide();
        $("#game").show();
    });
    var index = 0;
        $("#button1").text(story[index][2]);
        $("#button1").attr("index", story[index][1]);
        
        $("#button2").text(story[index][4]);
        $("#button2").attr("index", story[index][3]);
        
        $("#button3").text(story[index][6]);
        $("#button3").attr("index", story[index][5]);
    $(".choice").click(function(){
        index = parseInt($(this).attr("index"));
        $("#window").append('<p class = "player">' + $(this).text() + '</p>');
        $("#window").append(story[index][0]);
        $("#button1").text(story[index][2]);
        $("#button1").attr("index", story[index][1]);
        
        $("#button2").text(story[index][4]);
        $("#button2").attr("index", story[index][3]);
        
        $("#button3").text(story[index][6]);
        $("#button3").attr("index", story[index][5]);
        var element = document.getElementById("window");
        element.scrollTop = element.scrollHeight;
        if(index == 20)
        {
            setTimeout(function(){
            $("#game").hide();
            $("#letter").show();  
            }, 4000);
        }
        });
    $("#exit").click(function() {
        $("#game").hide();
        $("#letter").show();
    });
});



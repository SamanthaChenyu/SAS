	var a = 11;
	var b = 11;
	var c = 11;
	var d = 11;
	var e = 11;
	var f = 11;
	var g = 11;
	var h = 11;	
	var j = 11;
	var k = 11;
	function showTime(){
		myVar = setTimeout("showTime()",1000);
		a -= 1;
    	$("#Bar-box0").attr('data-text',a);
    	if(a === 0) {
    		$("#q0 .choice:nth-child(3)").click();
    		$("#Bar-box0").remove();
        	clearTimeout(myVar);
    	}
    	myVar;
	}

	function showTime0(){
		myVar0 = setTimeout("showTime0()",1000);
		b -= 1;
    	$("#Bar-box1").attr('data-text',b);
    	if(b === 0){
    		$("#q1 .choice:nth-child(3)").click();
    		$("#Bar-box1").remove();
        	clearTimeout(myVar0);
    	}
    	myVar0;
	}	
	function showTime1(){
		myVar1 = setTimeout("showTime1()",1000);
		c -= 1;
    	$("#Bar-box2").attr('data-text',c);
    	if(c === 0){
    		$("#q2 .choice:nth-child(3)").click();
    			$("#Bar-box2").remove();
        	clearTimeout(myVar1);
    	}  	
    	myVar1;
	}
	function showTime2(){
		myVar2 = setTimeout("showTime2()",1000);
		d -= 1;
    	$("#Bar-box3").attr('data-text',d);
    	if(d === 0){
    		$("#q3 .choice:nth-child(3)").click();
    		$("#Bar-box3").remove();
        	clearTimeout(myVar2);
    	}  	
    	myVar2;
	}
	function showTime3(){
		myVar3 = setTimeout("showTime3()",1000);
		e -= 1;
    	$("#Bar-box4").attr('data-text',e);
    	if(e === 0){
    		$("#q4 .choice:nth-child(3)").click();
    		$("#Bar-box4").remove();
        	clearTimeout(myVar3);
    	}  	
    	myVar3;
	}
	function showTime4(){
		myVar4 = setTimeout("showTime4()",1000);
		f -= 1;
    	$("#Bar-box5").attr('data-text',f);
    	if(f === 0){
    		$("#q5 .choice:nth-child(3)").click();
    		$("#Bar-box5").remove();
        	clearTimeout(myVar4);
    	}  	
    	myVar4;
	}
	function showTime5(){
		myVar5 = setTimeout("showTime5()",1000);
		g -= 1;
    	$("#Bar-box6").attr('data-text',g);
    	if(g === 0){
    		$("#q6 .choice:nth-child(3)").click();
    		$("#Bar-box6").remove();
        	clearTimeout(myVar5);
    	}  	
    	myVar5;
	}
	function showTime6(){
		myVar6 = setTimeout("showTime6()",1000);
		h -= 1;
    	$("#Bar-box7").attr('data-text',h);
    	if(h === 0){
    		$("#q7 .choice:nth-child(3)").click();
    		$("#Bar-box7").remove();
        	clearTimeout(myVar6);
    	}  	
    	myVar6;
	}
	function showTime7(){
		myVar7 = setTimeout("showTime7()",1000);
		j -= 1;
    	$("#Bar-box8").attr('data-text',j);
    	if(j === 0){
    		$("#q8 .choice:nth-child(3)").click();
    		$("#Bar-box8").remove();
        	clearTimeout(myVar7);
    	}  	
    	myVar7;
	}
	function showTime8(){
		myVar8 = setTimeout("showTime8()",1000);
		k -= 1;
    	$("#Bar-box9").attr('data-text',k);
    	if(k === 0){
    		$("#q9 .choice:nth-child(3)").click();
    		$("#Bar-box9").remove();
        	clearTimeout(myVar8);
    	}  	
    	myVar8;
	}
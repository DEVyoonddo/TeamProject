//로그인 했을때만 페이지로 넘어가도록 하는 함수
function loginOK() {
	var loginVal = confirm('로그인시 이용이 가능합니다. 로그인 페이지로 이동하시겠습니까?');
	if (loginVal) {
		location.replace('loginForm.jsp');
	}
	else {
		location.replace('mainPage.jsp');
	}
}

//매장 찾기에서 선택되는 시/도에 따라 시/군/구 값이 다르게 출력되도록 하는 함수
function sidoCheck(e) {
	var sido_01 = ["시/구/군","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구"]
	var sido_02 = ["시/구/군","계양구","미추홀구","부평구"]
	var sido_03 = ["시/구/군","고양시", "광명시","구리시","남양주시","성남시","의정부시","하남시"]
	
	var target = document.getElementById("sigugun");
	
	if(e.value == "01"){
		var sigugun = sido_01;
	}else if(e.value == "02"){
		var sigugun = sido_02;
	}else if(e.value == "03"){
		var sigugun = sido_03;
	}
	
	target.options.length = 0;
	
	for (x in sigugun) {
		var opt = document.createElement("option");
		opt.value = sigugun[x];
		opt.innerHTML = sigugun[x];
		target.appendChild(opt);
	}
}
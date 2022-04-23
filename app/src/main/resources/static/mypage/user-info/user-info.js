 // 템플릿 엔진에서 사용할 HTML 조각을 가져오기
  var trTemplate = document.querySelector("#tr-template");
  
  //템플릿 엔진 준비
  var htmlGenerator = Handlebars.compile(trTemplate.innerHTML);

	userNo=23;

  fetch(`/myMain/myGoingLecture?no=${userNo}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log("AAA");
      console.log(result);
     
      $("#ongoing-lecture").html(htmlGenerator(result));
    });




/*

  var cThumbNail = document.querySelector("#thumbnail");
  var cThumbNailFile = document.querySelector("#thumbnail-file");
  var cFileName = document.querySelector("#file-name");
  var cName = document.querySelector("input[name=name]");
  var cNickName = document.querySelector("input[name=nickName]");
  var cEmail = document.querySelector("input[name=email]");
  var cPassword = document.querySelector("input[name=password]");
  var cPasswordCheck = document.querySelector("#passwordCheck");
  var cPhone = document.querySelector("input[name=phone]");

  var TBtn = document.querySelector("#thumbnail-file-button");
  var CBtn = document.querySelector("#check-btn");
  var UBtn = document.querySelector("#update-btn");
  var DBtn = document.querySelector("#delete-btn");

	userNo = 35;
	
	var nickCheck=false;
	
  fetch(`/userChange/getUser?no=${userNo}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
	console.log(result);
      cName.placeholder = result.name;
      cNickName.placeholder = result.nickName;
      cEmail.placeholder = result.email;
      cPhone.placeholder = result.phone;
      
      if (result.image != null) {
    	  cThumbNail.src = "/userChange/image?filename=" + result.image;
      } else if (result.image == null){
				cThumbNail.src = "/userChange/image?filename=default.jpg";
			}
    });

	cThumbNailFile.addEventListener("change", function(){
		cFileName.innerHTML = cThumbNailFile.value.substr(12);
	})
	
	CBtn.onclick = function() {  
		fetch(`/userChange/checkNickname?nickname=${cNickName.value}`)
		.then(function(response) {
      return response.json();
    })
    .then(function(result) {
		  if (cNickName.value ==""){
			window.alert("중복확인을 하려면 닉네임을 입력해주세요");
      return;
		  } else if(result == 0){
			window.alert("사용가능한 닉네임입니다");
			nickCheck=true;
			cNickName.readOnly = true;
			return;
		  } else if (result == 1){
			window.alert("이미 사용중인 닉네임입니다");
			nickCheck=false;
			return;
		  }
    });
	}

  UBtn.onclick = function() {
		
		if (cNickName.value !="" && nickCheck==false){
			window.alert("닉네임 중복 체크를 해주세요");
      return;
		} else if (cPassword.value != cPasswordCheck.value ) {
      window.alert("비밀번호와 비밀번호 확인 값이 같지 않습니다.");
      return;
    };
	  
	  var fd = new FormData(document.forms.namedItem("form1"));
	    
    //if (xReadDate.value == "") { // 독서일을 지정하지 않았으면 서버에 보내지 않는다.
     // fd.delete("readDate");
    //}
    
    // 변경할 독서록 데이터의 PK 값을 FormData에 추가한다.
    fd.append("no", userNo);
    
    fetch("/userChange/updateUser", { 
        method: "POST",
        body: fd
      }) 
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        console.log(text);
				window.location.reload();
      });
  };

  DBtn.onclick = function() {
	    window.location.href = "user-delete.html";
}

*/
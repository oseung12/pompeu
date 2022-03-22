document.addEventListener("DOMContentLoaded", function(){
   fetch("/member/findCount")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
      for (var rst of result) {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${rst.total}</td>
        <td>${rst.creator}</a></td>
        <td>${rst.user}</td>`;
        document.querySelector("#tbody1").appendChild(tr);
      }
    });
});


  var btn = document.getElementById("srchBtn");

btn.addEventListener('click', function() {
	
	var nickName = document.querySelector("#nick_name").value;
  var phone = document.querySelector("#phone").value;
  var email = document.querySelector("#email").value;
  var memberTypeNo = document.querySelector("#member_type_no").value;

  console.log("nickName : " + nickName);
  console.log("phone : " + phone);
  console.log("email : " + email);
  console.log("memberTypeNo : " + memberTypeNo);
  
  var tbody2 = document.querySelector("#tbody2");


    while (tbody2.hasChildNodes()) {
        tbody2.removeChild(tbody2.firstChild);
    }
  
  fetch(`/member/srchMember?memberTypeNo=${memberTypeNo}&nickName=${nickName}&phone=${phone}&email=${email}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log("AAA");
      console.log(result);
      var count = 0;
      
      for (var rst of result) {
        count = count + 1;

        var tr = document.createElement("tr");
        tr.innerHTML = `<td>`+count+`</td>
        <td>${rst.member_type_no_name}</a></td>
        <td>${rst.nickname}</td>
        <td>${rst.name}</td>
        <td>${rst.email}</td>
        <td>${rst.phone}</td>`;
        tbody2.appendChild(tr);
        
      }
    });
});

function hihi() {
	
	document.querySelector("#nick_name").value = '';
  document.querySelector("#phone").value = '';
  document.querySelector("#email").value = '';
  document.querySelector("#member_type_no").value = 0;
	
}

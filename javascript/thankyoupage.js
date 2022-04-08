//Math.floor function for print 4 digit random no to the console 
var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
document.getElementById("name").innerHTML = sessionStorage.getItem("name").split(" ")[0];
document.getElementById("mobile").innerHTML = sessionStorage.getItem("mobile");
//set count to three
count=3;
    //For redirect page 

    function validateData() {
        //decrement count
        --count;
        document.getElementById("attempt").innerHTML =count+" attempts left";
        if (count==0){
            //disebled the button after 3 attempts and go to page not found
            document.getElementById("validate_btn").disabled=true;
            //location.href="pagenotfound.html";
                 window.open("http://pixel6.co/pagenotfound", "_self");
            //window.location.replace("pagenotfound.html");
        }else{
            if (document.getElementById("otp").value == val) {
                document.getElementById("validate_btn").disabled=true;
                window.open("http://pixel6.co/", "_self");
            }
            // else {
            //     //location.href="pagenotfound.html";
            //     window.open("http://pixel6.co/pagenotfound", "_self");
            //     //window.location.replace("pagenotfound.html");
            // }
        }
        
    }
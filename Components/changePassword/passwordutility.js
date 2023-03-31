function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
function validation(currentPassword,newPassword,confirmPassword){
    let emailCheck = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    // let emailCheck = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let userCheck = /^[a-zA-Z0-9]{5,}$/;

    if(isEmptyOrSpaces(currentPassword) || isEmptyOrSpaces(newPassword) || isEmptyOrSpaces(confirmPassword)){
        alert("You cannot left any field empty");
        return false;
    }

    if(!emailCheck.test(currentPassword)){
        alert("enter a valid email");
        return false;
    }

    if(!userCheck.test(newPassword)){
        alert("-username can only be alphanumeric \n -usernamemust be atleast 5 characters")
        return false;
    }
    if(newPassword !== confirmPassword){
        alert("Please enter the correct Newpassword and Confirmpassword ");
        return false
    }
    if(confirmPassword.length < 10){
        alert("please Enter the correct number");
        return false;
    }

    return true;
 }

function Solve(e){
    e.preventDefault();
//  const data = new FormData(e.target);
const data = new FormData(e.target);
 const currentPassword = data.get('currentPassword');
 const newPassword= data.get('newPassword');
 const confirmPassword= data.get('confirmPassword');
//  const userGender = data.get('profileGender');
 console.log(currentPassword,newPassword,confirmPassword);

  if(!validation(currentPassword,newPassword,confirmPassword)){

  }else{
 const obj = JSON.parse(localStorage.getItem('user'));
 obj.password = confirmPassword;
//  localStorage.clear();
//  const item = {
//     email: userEmail,
//     name : userName,
//     contact : userNumber,
//     gender : userGender,
//     password : pass,
//  }

 localStorage.setItem('user',JSON.stringify(obj));

 data.set('profileName',"");
 data.set('profileEmail',"");
 data.set('profileNumber',"");
 data.set('profileGender',"");
  }}

  export default Solve;
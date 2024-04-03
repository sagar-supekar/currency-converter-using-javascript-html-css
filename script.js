let btn;

btn=document.getElementById("btn1");
btn.style.backgroundColor="green";
btn.style.width= "80px";
btn.style.marginTop="20px";
btn.style.height="30px";
btn.style.borderRadius = '10%'; 
btn.style.cursor="pointer";
// btn.addEventListener("click",()=>{
//     alert("make sure you enter all correct details");
// });

// when mouse poinetr is on a button it will highlighted

btn.addEventListener("mouseover",()=>{
    btn.style.backgroundColor="pink";
});

let first_name;

first_name=document.getElementById("first-name");
console.log(first_name);

let form=document.getElementById("form");
console.log(form);

let fm=document.getElementById("form");

// try to add validation on input fields
// btn.addEventListener("click",(e)=>{
//     let fn=document.getElementById("first-name");
//     let em=document.getElementById("email");
//     e.preventDefault();
//     if(!fn.value.trim())
//     {
//         alert("please enter your name");
//     }
// })

// btn.addEventListener("click",()=>{
//     let em=document.getElementById("email");
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!em.value.trim())
//     {
//         alert("please enetr a email");
//         return false;
//     }
//     else if(!emailPattern.test(em)) {
//     alert("Invalid email");
//     return false;
//     }
// })
// test function require a statement between the /...../
// let regex = /hello/;
// let str = "hello world";
// let result = regex.test(str);
// console.log(result); // Output: true

btn.addEventListener("click",(e)=>{
    // access the input field
    let fname=document.getElementById("first-name");
    let lname=document.getElementById("last-name");
    let em=document.getElementById("email");
    let pw=document.getElementById("password")
    let rePassword=document.getElementById("re-password")

    // access error msg nodes
    let ferror=document.getElementById("errorFirstName");
    let lerror=document.getElementById("errorLastName");
    let eerror=document.getElementById("errorEmail");
    let epassword=document.getElementById("errorPassword");
    let reErrorPassword=document.getElementById("e-Password");
    e.preventDefault();

    // check valid name and  display error message if invalid
    if(!fname.value.trim())
    {
        ferror.textContent="please enter a  first name!!";
    }
    else if(/\d/.test(fname.value))
    {
        ferror.textContent="numbers are not allowed in first name!!";
    }
    // check for last name

    if(!lname.value.trim())
    {
        lerror.textContent="please enter a  last name!!";
    }
    else if(/\d/.test(lname.value))
    {
        lerror.textContent="numbers are not allowed in last name!!";
    }

    // check for email

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!em.value.trim())
    {
       eerror.textContent="please enter email!!";
    }
    else if(emailPattern.test(em)) {
        eerror.textContent="invalid email";
    return false;
    }

    // check for password
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if(!passwordPattern.test(pw.value))
    {
        epassword.textContent="invalid password";
        return false;
    }

    // check for re password
    if (pw.value.trim() !== rePassword.value.trim()) {
        rePasswordError.textContent = "Passwords do not match";
    }
})
 // remember to write down this process in notebook shortly for the purpose of future
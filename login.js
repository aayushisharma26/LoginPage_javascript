var fs=require('fs');
console.log("Well come to login /signup page")
const readline=require("readline-sync");
var user=readline.question("if you want login or signup")
if (user=="signup"){
    var user_name=readline.question("enter the user name")
    var password1=readline.question("enter the password")
    var password2=readline.question("enter the conform password")
    if (password1==password2){
        if(password1.includes("@")||password1.includes("#")){
            if (password1==password2){
                var description=readline.question("enter the desceiption")
                var Birth_date=readline.question("enter the birth date")
                var Hobbies=readline.question("enter the hobbies")
                var Gender=readline.question("enter the Gender")
                console.log("congratulations,user_name,your signup successfuly")
                user_details={user:{"username":user_name,"password":password1},"profillo":{"description":description,"birth_date":Birth_date,"Hobbise":Hobbies,"Gender":Gender}}
                let file=JSON.stringify(user_details,null,4)
                fs.writeFileSync(user_name+".json",file)

            }
            else{
            console.log("your password is incorrect")
            }
        }
        else{
            console.log("at least password should be contain one special charcter or number")
        }
    }
    else{
        console.log("sign up is not succesfully")
    }
}
else if(user=="login"){
    var user_name1=readline.question("enter the user name")
    var password3=readline.question("enter the password")
    var data=fs.readFileSync("details.json")
  //  with(open("user_details.JSON","r"))
    var data1=JSON.parse(data)
    console.log(data1)
    if (user_name1==data1["user"]["username"]){
        if (password3==data1["user"]["password"]){
           console.log(data1)
        }else{
            console.log("data1")
        }
    }else{
        console.log("username is incorrect")
    }
}



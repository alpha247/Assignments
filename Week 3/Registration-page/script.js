1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
▼
    //Data storing into localstorage
    function storeData() {

        let data = localStorage.getItem('usersData') ? JSON.parse(localStorage.getItem('usersData')) : [];
        let formData = {
            //Form data in key value pair
            "name": document.getElementById("uName").value,
            "email": document.getElementById("uEmail").value,
            "contactno": document.getElementById("uContactno").value,
            "password": document.getElementById("uPassword").value,
            "confirmpassword": document.getElementById("confirmPassword").value
        }
        data.push(formData);//pushing formdata into the data obj
        if (localStorage) {
            localStorage.setItem("usersData", JSON.stringify(data));//storing data into the usersData
        }
    }
    //Check if password is matching or not
    function verifyPassword(input) {
        if (input.value != document.getElementById("uPassword").value) {
            input.setCustomValidity("Password Must be Matching");
        } else {
            input.setCustomValidity("");
        }
    }
    //check already registered users
    function emailExist(input) {
        let existemail = JSON.parse(localStorage.getItem("usersData"));
        let emailid = existemail.map((email,i, existemail) => {
            console.log()
            return existemail[i].email;
        });
        let getexistemail = emailid.filter((email) => {
            if (email == input.value) {
                input.setCustomValidity('This Email Exists. Try With Another one');

            } else {
                input.setCustomValidity("");
            }
        });
    }
    //To Display Thank you form window 
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display = "block";
        form.style.display = "none";
    });
    console.log(localStorage.getItem('usersData'))

    function showHide(show, hide) {
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display = "block";
        hideEle.style.display = "none";
    }

    //login here
    function loginUser() {
        let loginEmail = document.getElementById("uemailId").value;
        let loginPass = document.getElementById("ePassword").value;
        let matchEmail = JSON.parse(localStorage.getItem("usersData"));
        let emailArray = [];
        let passArray = [];
        let result = matchEmail.map((email, i, matchEmail) => {

            emailArray.push(matchEmail[i].email);
            passArray.push(matchEmail[i].password);
        });
        // console.log(emailArray);
        
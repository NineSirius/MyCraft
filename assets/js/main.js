// $("#form-login").on("click", function () {
//     const userEmailorName = $(".form-username").val();
//     const userPassword = $(".form-password").val();
//     console.log("clicked");

//     $.ajax({
//         method: "GET",
//         url: "../../data.json",
//     }).done((resp) => {
//         if (userEmailorName == resp.username || userEmailorName == resp.email) {
//             if (userPassword === resp.password) {
//                 alert("Вход успешный! Добро пожаловать " + resp.username);
//             } else {
//                 alert("Неверный пароль");
//             }
//         } else {
//             alert("Неверный логин");
//         }
//     });
// });

const ajax = (url, type) => {
    return $.ajax({
        method: type,
        url: url,
    });
};

$("#theme").on("click", function () {
    $("body").toggleClass("dark");

    if (localStorage.getItem("theme") !== "dark") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const init = () => {
    const theme = localStorage.getItem("theme");

    if (theme == "dark") {
        $("body").addClass("dark");
    } else {
        $("body").removeClass("dark");
    }
};

init();

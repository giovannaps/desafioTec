//Simulação de um nó code do n8n 

var User = {
    id: 1042,
    username: "dev_candidate",
    email: "candidato@email.com",
    created_at: "2026-03-30T10:00:00Z"
};

function welcome(user) {
    if (user.email.includes("@empresa.com")) {
        user.welcome_message = ("Bem-vindo(a) ao time, @" + user.username + "!");
    }
    else {
        user.welcome_message = ("Seja muito bem-vindo(a) à nossa comunidade, @" + user.username + "!");
    }
    return user;
}

welcome(User);
console.log(welcome(User).welcome_message);
document.getElementById('username').textContent = User.username
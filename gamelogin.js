function adduser(){
    user1 = document.getElementById("player1login").value;
    user2 = document.getElementById("player2login").value;
    localStorage.setItem("player1name", user1);
    localStorage.setItem("player2name", user2);
    window.location = "gameplay.html";
}
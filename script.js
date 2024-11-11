// Hàm giả lập đăng nhập cơ bản
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("loginMessage");

    // Kiểm tra thông tin đăng nhập (giả lập)
    if (username === "admin" && password === "1234") {
        messageElement.textContent = "Đăng nhập thành công!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
        messageElement.style.color = "red";
    }
}

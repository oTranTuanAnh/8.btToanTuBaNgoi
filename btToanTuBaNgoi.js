// Bai 1
function ketQua() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    result = (a + b < 4) ? 'Below' : 'Over';
    document.getElementById('kq').innerHTML = result;
}

// Bai 2
function checkMess() {
    let mess = document.getElementById('message').value;
    ktra = (mess === 'Employee') ? 'Hello' :
        (mess === 'Director')? 'Greetings':
            (mess === "")? 'No login' : '';
    document.getElementById('kqCheck').innerHTML = ktra;

}
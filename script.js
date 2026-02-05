let button = document.getElementById("vk")
button.addEventListener('click', function() {
    alert('пока что пусто');
});

let button2 = document.getElementById("email")
button2.addEventListener('click', function() {
    alert('пока что пусто');
});

document.getElementById('skroll').addEventListener('click', function() {
    document.querySelector('#block2').scrollIntoView({ behavior: 'smooth' });
});
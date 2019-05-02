document.getElementById('portret').onmouseover = function(){
    document.getElementById('concert').style.color = '#0000';
    document.getElementById('eveniment').style.color = '#0000';
}
document.getElementById('portret').onmouseout = function(){
    document.getElementById('concert').style.color = '#fff';
    document.getElementById('eveniment').style.color = '#fff';
}

document.getElementById('concert').onmouseover = function(){
    document.getElementById('portret').style.color = '#0000';
    document.getElementById('eveniment').style.color = '#0000';
}
document.getElementById('concert').onmouseout = function(){
    document.getElementById('portret').style.color = '#fff';
    document.getElementById('eveniment').style.color = '#fff';
}

document.getElementById('eveniment').onmouseover = function(){
    document.getElementById('portret').style.color = '#0000';
    document.getElementById('concert').style.color = '#0000';
}
document.getElementById('eveniment').onmouseout = function(){
    document.getElementById('portret').style.color = '#fff';
    document.getElementById('concert').style.color = '#fff';
}
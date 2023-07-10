const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');




toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background= '#F5F5F5'
        body.style.transition = '1.5s'
        body.style.color = "#000000"
        document.getElementById('email').style.color = "#000000"
        document.getElementById('github').style.color = "#000000"
        document.getElementById('facebook').style.color = "#000000"
        document.getElementById('instagram').style.color = "#000000"
        document.getElementById('dribbble').style.color = "#000000"
        document.getElementById('behance').style.color = "#000000"
        document.getElementById('instagram_f').style.color = "#000000"
        document.getElementById('facebook_f').style.color = "#000000"
        document.getElementById('phone').style.color = "#000000"
        document.getElementById('modeBrakedown').style.backgroundColor = "#000000"
        document.getElementById('modeBrakedownn').style.backgroundColor = "#000000"
        document.getElementById('linkedin').style.color = "#000000"
        document.getElementById('modeBreakWha').style.backgroundColor = "#000000"
    }else{
        body.style.background= '#001C30'
        body.style.color= '#F5F5F5'
        body.style.transition = '1.5s'
        document.getElementById('email').style.color = "#F5F5F5"
        document.getElementById('github').style.color = "#F5F5F5"
        document.getElementById('facebook').style.color = "#F5F5F5"
        document.getElementById('instagram').style.color = "#F5F5F5"
        document.getElementById('dribbble').style.color = "#F5F5F5"
        document.getElementById('behance').style.color = "#F5F5F5"
        document.getElementById('instagram_f').style.color = "#F5F5F5"
        document.getElementById('facebook_f').style.color = "#F5F5F5"
        document.getElementById('phone').style.color = "#F5F5F5"
        document.getElementById('modeBrakedown').style.backgroundColor = "#F5F5F5"
        document.getElementById('modeBrakedownn').style.backgroundColor = "#F5F5F5"
        document.getElementById('linkedin').style.color = "#F5F5F5"
        document.getElementById('modeBreakWha').style.backgroundColor = "#F5F5F5"
    }
})


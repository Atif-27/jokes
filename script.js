


function generateJoke(){
    const xhr=new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            const div=JSON.parse(this.responseText).value;
            document.querySelector('#jokes').innerText=div;
        }
        else
        {
            document.querySelector('#jokes').innerText='Something Went Wrong (NOT FUNNY!)';
        }
    }
    xhr.send();
}
document.addEventListener('DOMContentLoaded',generateJoke)
document.querySelector('.btn').addEventListener('click', generateJoke);

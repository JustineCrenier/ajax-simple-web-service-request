const quote = document.getElementById('quote');
const author = document.getElementById('author');
const photo = document.getElementById('photo');
let object = {};
let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    object = JSON.parse(this.responseText);
                    quote.innerHTML = object.quote;
                    author.innerHTML = object.author;

                    //photo
                    if(object["photo"] !== ""){
                    	photo.setAttribute('src', object.photo);	
                    }else{
                    	photo.setAttribute('src', 'img/authornotdefined.jpg');
                    }
                }
            }
    //call send
    xhr.send();
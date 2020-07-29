const link = document.querySelector("#link"),
      topText = document.querySelector("input#top"),
      bottomText = document.querySelector("input#bottom"),
      div = document.querySelector(".meme_box"),
      form = document.querySelector("#meme_form");


form.addEventListener('submit',handleButtonClick);

//DELEGATION OF ELEMENTS
div.addEventListener('click', function(e){
    if(e.target.classList.value === 'icon'){
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

function handleButtonClick(event){

    event.preventDefault();
    const wrapper = document.createElement('div'),
          img = document.createElement("img"),
          text1 = document.createElement("p"),
          text2 = document.createElement("p"),
          btnRemove = document.createElement('button'),
          box = document.createElement('div');
          a = document.createElement("a"),
          icon = document.createElement('img');

          
    box.classList.add("box");
    wrapper.classList.add("wrapper");
    img.src = link.value;
    img.alt = "Oh No!!! Broken Link!!! Try One More...";
    img.classList.add("image");
    text1.classList.add('topIm');
    text2.classList.add('bottomIm');
    text1.innerText = topText.value;
    text2.innerHTML = bottomText.value;
    btnRemove.classList.add("removeButton");
    btnRemove.innerHTML = "Remove Image";
    a.classList.add("remImage");
    icon.src = "https://image.flaticon.com/icons/svg/261/261935.svg";
    icon.classList.add("icon");
    a.append(icon);
    wrapper.append(img,text1,text2,a);
    box.appendChild(wrapper);
    div.appendChild(box);
    form.reset();

}




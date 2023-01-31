const vkBtn = document.getElementById("id");
const instBtn = document.getElementById("inst");
const vkPage = document.getElementById("vk_groups");
const instPage = document.getElementById("inst_widget");

function openInst() {
    vkPage.style.display = "none";
    instPage.style.display = "block";
    
}

function openVk() {   
    instPage.style.display = "none";
    vkPage.style.display = "block"; 
   
}



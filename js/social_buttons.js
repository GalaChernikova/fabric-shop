const vkPage = document.getElementById("vk_groups");
const instPage = document.getElementById("inst_widget");

function openInst() {
  vkPage.style.display = "none";
  instPage.style.display = "block";
}

function openVk() {
  vkPage.style.display = "block";
  instPage.style.display = "none";
  vkPageMob.style.display = "none";
}

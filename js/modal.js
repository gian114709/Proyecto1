const botonaviso = document.getElementById("cerrar-ventana");
const modalventana = document.getElementById("modal-ventana");
const modalfondo = document.getElementById("modal-fondo");


if(!sessionStorage.getItem("modal-ventana-visto")){
    modalventana.classList.add("activo")
    modalfondo.classList.add("activo")
}
botonaviso.addEventListener("click",() =>{
modalventana.classList.remove("activo");
modalfondo.classList.remove("activo");
sessionStorage.setItem("modal-ventana-visto",true)
})
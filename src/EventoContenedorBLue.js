import  { useEffect } from "react";

function EventoContenedorBlue(){

    useEffect(()=>{
    const contenedor = document.getElementById('contenedorBlue');
    
    function cursorArriba(){
          contenedor.style.transform = 'scale(1.1)';
        contenedor.style.transition = 'all 0.5s ease';
        
    };
    function cursorAfuera(){
        contenedor.style.transform = 'scale(1)';
        contenedor.style.backgroundColor = '';
    }   
    
    if(contenedor){
            contenedor.addEventListener('mouseover', cursorArriba)
            contenedor.addEventListener('mouseout', cursorAfuera)}  
    
    return () => {
            if(contenedor){
                    contenedor.removeEventListener('mouseover', cursorArriba)
                    contenedor.removeEventListener('mouseout', cursorAfuera)} 
                }
            }, []);
}

export default EventoContenedorBlue;


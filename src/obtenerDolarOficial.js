import React, { useEffect } from 'react';
import loading from './loading.gif'

function ObtenerDolarOficial(){
    let [cargando,setCargando] = React.useState(true);
    let [cotizacionDolarOficial,setCotizacionDolarOficial] = React.useState('');

    useEffect (()=> {
        setCargando(true);

        async function obtenerOficial(){
                //DOLAR OFICIAL
        let respuestaDolarOficial = await fetch('https://dolarapi.com/v1/dolares/oficial')

        let datosOficial = await respuestaDolarOficial.json();

        setCotizacionDolarOficial(datosOficial.venta);

        console.log(datosOficial.venta);

        setCargando(false);
}

obtenerOficial();
   }, []);

            return(

                <div>
                        {cargando ?(
                        <img src={loading} alt='cargando..' style={{width: '30px', height: '30px'}}></img>
                        ):(<p >${cotizacionDolarOficial}</p>)}
                        </div>
            )

}

export default ObtenerDolarOficial;
import React, { useEffect } from 'react';
import loading from './loading.gif'

 function ObtenerCotizaciones(){
    let [cargando,setCargando] = React.useState(true);
    
    let [cotizacionDolarBlueCompra,setCotizacionDolarBlueCompra] = React.useState(0);
    let [cotizacionDolarBlueVenta,setCotizacionDolarBlueVenta] = React.useState(0);

 useEffect (()=> {
    setCargando(true);
       
    async function obtener(){
         
             
    //DOLAR BLUE
        let respuestaBlue = await fetch('https://dolarapi.com/v1/dolares/blue')

        let datosBlue = await respuestaBlue.json();

        setCotizacionDolarBlueCompra(datosBlue.compra);
        setCotizacionDolarBlueVenta(datosBlue.venta);
        console.log(datosBlue.compra);
        console.log(datosBlue.venta);

        setCargando(false);
       
    }


   obtener();
   }, []);
            return(
                <div>
                                     

                        <div>
                        {cargando ?(
                        <img src={loading} alt='cargando..' style={{width: '30px', height: '30px'}}></img>
                        ):(<p>Compra : ${cotizacionDolarBlueCompra}</p>)}
                        </div>

                        <div>
                        {cargando ?(
                        <img src={loading} alt='cargando..' style={{width: '30px', height: '30px'}}></img>
                        ):(<p>Venta : ${cotizacionDolarBlueVenta}</p>)}
                        </div>

                        
                        


                </div>
            )
    

}

export default ObtenerCotizaciones;
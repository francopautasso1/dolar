import React from 'react';
import './App.css';
import ObtenerCotizaciones from './obtenerCotizaciones';
import ObtenerDolarOficial from './obtenerDolarOficial';
import EventoContenedorOficial from './EventoContenedorOficial';
import EventoContenedorBlue from './EventoContenedorBLue';

function App() {
  return (
    
    <><div className="App">

      <div class="container text-center" id='contenedor'>
        <div class="row">
          <div class="col">
            <div id='cotizaciones'>
              <h1 class="shadow p-3 mb-5 rounded" id='hola'>Cotizaciones</h1>

              
              <div id='contenedor-cotizaciones'>

            <div>
              <EventoContenedorOficial/>
                    <div class="card text-bg-dark mb-3 shadow-lg p-3 mb-5  rounded"  id='contenedorOficial'>
                      <div class="card-body ">
                        <h3 class="card-title">Cotizacion Dolar Oficial</h3>
                        <p class="card-text"><ObtenerDolarOficial /></p>
                      </div>
                    </div>
            </div>

                 
                <div>
                <EventoContenedorBlue/>
                  <div class="card text-bg-dark mb-3 shadow-lg p-3 mb-5  rounded" id='contenedorBlue'>
                    <div class="card-body  ">
                      <h3 class="card-title">Cotizacion Dolar Blue</h3>
                      <p class="card-text"><ObtenerCotizaciones /></p>
                  
                    </div>
                  </div>
                </div>


              </div>

              
            </div>
          </div>
          

        </div>
      </div>
    </div>
    
  </>
    




                      
  );
 

}

export default App;

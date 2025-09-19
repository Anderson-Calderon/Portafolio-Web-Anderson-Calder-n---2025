import React from 'react';

//COMPONENETE QUE CONTIENE MIS HÁBILIDADES
import TextShpere from './TextShpere';

//REACT
import {useEffect} from 'react';


const Habilidades = ({textoTitulo})=>{

	

	const arregloLetras = textoTitulo.split("");

	let i = 0;




  useEffect(()=>{

  	 let  titulo2 = document.querySelector(".habilidades h2 ");


       


    let letrasTitulo2 = document.querySelectorAll(".habilidades h2 span");
  

    //BIEN CARGA LA PÁGINA ANIMAMOS LAS LETRAS DEL TITULO , SIEMPRE Y CUANDO ESTEMOS VISUALIZANDO
    //ESTE TÍTULO.
    animarLetras(letrasTitulo2);




    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }



  },[]);



	return(

			<>
				 <div className="md:w-1/2">
              
		              <h2>

		                  {

		                  	arregloLetras.map((letra)=>{

		                  		
		                  		i++;

		                  		return(

		                  					<span   
		                  							
		                  						key={i} 
		                  						className=""
		                  					>
		                  						{letra}

		                  					</span>


		                  				)

		                  				
		                  				


		                  	})

		                  }
		               


		              </h2>

		              <p className="text-justify">

					  		Soy desarrollador web con experiencia en la creación de sitios y soluciones digitales adaptadas a distintas necesidades. Poseo sólidos conocimientos en Shopify, WordPress, Elementor, WooCommerce, Wix, HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React.js, Node.js y PHP. Además, manejo herramientas como CRM Kommo, Google Workspace, Make Scenarios, Google Tag Manager, Clarity, Google Search Console y plataformas de pauta digital. Me apasiona la programación y disfruto creando soluciones innovadoras a través de mis líneas de código.
		              
					  
					  </p>


		          </div>

		         

         	 	 <TextShpere />

         	</>


		   )

}

export default Habilidades;
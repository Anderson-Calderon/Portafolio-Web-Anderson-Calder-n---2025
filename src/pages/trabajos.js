// COMPONENTES
import Layout from '../../layout/Layout';
import Proyecto from '../../components/Proyecto';


//HOOK
import {useEffect} from 'react';

import UseContext from '../../hooks/useContext';




const Trabajos = ()=>{

	const {clickEnLinkContacto, setClickEnLinkContacto} = UseContext();

	//console.log(proyectos);

  //ANIMAR LETRAS DEL TEXTO
  useEffect(()=>{

    const letrasTitulo3 = document.querySelectorAll("h2 span");

    animarLetras(letrasTitulo3);

  },[]);

    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }


	//ARREGLO EL CUAL CONTIENE DATOS DE TODOS MIS PROYECTOS

	const arregloProyectos = [ 

							
							
								{

									numero : 1 ,
									titulo:"Greta Market",
									descripcion:"Ecommerce de productos saludables" ,
									urlImagen:"/imagenes/Portada Greta Market.jpg",
									urlProyecto:"https://www.gretamarket.com/"

							   },

							   {

									numero : 2 ,
									titulo:"Hidrogel",
									descripcion:"Ecommerce de protectores de pantalla" ,
									urlImagen:"/imagenes/Banner hidrogel.webp",
									urlProyecto:"https://hidrogel.pe/"

							   },

							   {

								numero : 3 ,
								titulo:"Pollivoro",
								descripcion:"LP Pollos a la brasa" ,
								urlImagen:"https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/pollivoro.jpg",
								urlProyecto:"https://pollivorodarkkitchen.com/"

						   		},

								{

									numero : 4 ,
									titulo:"Natur Bliss",
									descripcion:"LP Frutos Secos" ,
									urlImagen:"https://www.instacart.com/company/wp-content/uploads/2024/02/types-of-nuts-hero.webp",
									urlProyecto:"https://naturbliss.andersoncalderoncampos.com/"

							   },

							    {

								numero : 5 ,
								titulo:"One Data",
								descripcion:"Web Análisis de Datos" ,
								urlImagen:"https://images.pexels.com/photos/5831511/pexels-photo-5831511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
								urlProyecto:"https://onedata.pe/"

						   		},


								{

									numero : 6 ,
									titulo:"Quiro Innova",
									descripcion:"Web Quiropráctica" ,
									urlImagen:"https://quiroinnova.pe/wp-content/uploads/2024/05/banner-quiroinnova-04.png",
									urlProyecto:"https://quiroinnova.pe"

							   },


							  
							

							   {

									numero : 7 ,
									titulo:"ASCIENDE",
									descripcion:"Landing Page" ,
									urlImagen:"https://images.pexels.com/photos/9489074/pexels-photo-9489074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
									urlProyecto:"https://asciende.pe/"
	
								},

								{

									numero : 8 ,
									titulo:"Psicoterapia BE",
									descripcion:"LP Psicoterapia Breve" ,
									urlImagen:"/imagenes/Banner centro de Psicoterapia Breve.jpg",
									urlProyecto:"https://centrodepsicoterapiabrevestrategica.andersoncalderoncampos.com/"

							   },


							   {

									numero : 9 ,
									titulo:"Autocentro MVL",
									descripcion:"Landing Page" ,
									urlImagen:"https://www.quicklane.com/content/dam/quicklane-global/mx/images/blog/home/que-tipos-servicio-mecanico-existen/quick-lane-quicklane-mexico-servicio-automotriz-tipos-menor-mayor.jpg",
									urlProyecto:"https://www.autocentromvl.com/"
	
								},

								

								
								




							 ];






	return(

			<Layout

		        title="Anderson | Mis Trabajos"
		        description="Hola , soy Anderson , desarrollador web . Estos son mis trabajos."
		       

		      >


		        <main className="md:pl-16 pb-5">

		        	<h2 className="text-center  mb-10 text-white mt-10">
		        		
						
		        		<span>M</span>
		        		<span>i</span>
		        		<span>s</span>
		        		<span>T</span>
		        		<span>r</span>
		        		<span>a</span>
		        		<span>b</span>
		        		<span>a</span>
		        		<span>j</span>
		        		<span>o</span>
		        		<span>s</span>

		        	</h2>

		        	{

		        		//proyectos.map(({attributes : proyecto})=>{

		        			arregloProyectos.map((proyecto)=>{
		        				
		        		
		        				

		        				return(


		        							<Proyecto  	

		        								key={proyecto.numero}
		        								proyecto={proyecto}


		        							 />


		        						)

		        		})		


		        	}	        

		        </main>


		     </Layout>


			)

}

export default Trabajos;


// export async function getStaticProps(){


// 	const respuesta = await fetch("http://127.0.0.1:8082/api/proyectos?populate=imagen&sort[0]=id%3Aasc");

// 	const {data} = await  respuesta.json();

// 	console.log(data);

// 	return{


// 			props:{


// 						data

// 				   }



// 		}



// }
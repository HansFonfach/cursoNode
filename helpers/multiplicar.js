
const fs = require('fs');

const crearArchivo = async(numeroMultiplicado = 5, listar = false, hasta = 10) =>{

    try{

       
       

        let salida = "";
    
        for (i = 1; i <= hasta ; i ++){
        
        salida += `${numeroMultiplicado} x ${i} = ${numeroMultiplicado * i } \n`;
        
        
        
        }

      
        if(listar)
        {

        console.log(`----- TABLA DEL ${ numeroMultiplicado } -----`)        
        console.log(salida); 
        
        }

   
        
        fs.writeFileSync( `./salida/tabla-${numeroMultiplicado}.txt`, salida);
        
        return`tabla-${numeroMultiplicado}.txt creado`;
        
        



    } catch (err){

        throw err;


    }

  

}


module.exports = {

crearArchivo

}
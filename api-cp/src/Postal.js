import React  from "react";
import axios from "axios";
import react, { useState } from "react";
import Select from 'react-select'

function getDatos(){
    const [cp, setCp] = useState()

    const colonia = []
    const estado = []
    const municipio = []

    const getCP = async () =>{
        
        try {
            let formData = new FormData();
            formData.append("cp", cp);
            const url = "http://api.masksoftco.mx/direcciones/codigo-postal";

            let result = await axios({
                url,
                method: 'POST',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            if(result.data){
                let objectRes = result.data;
                for(let i=0; i<objectRes.length; i++){
                    console.log(objectRes[i].colonia); 
                    colonia [i]= {value:objectRes[i].colonia, label:objectRes[i].colonia}
                } 
                estado[0] = {value: objectRes[0].estado, label: objectRes[0].estado}
                municipio[0] = {value: objectRes[0].municipio, label: objectRes[0].municipio}

            }else{
                console.log("hay un error");
            }


            console.log(result);
            console.log(result.data);
            


           // return (res.data ? res.data : false);
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <label>Cp: </label>
            <input type='number' maxLength="5" value={cp} onChange={(e) => setCp(e.target.value)}/>
            
            <label>estado:</label>
            <Select options = {estado}/>
            <label>colonia:</label>
            <Select options = {colonia}/>
            <label>municipio:</label>
            <Select options = {municipio}/>
       
            <button onClick={getCP}>Obtener</button>
            
        </div>
    );
}

export default getDatos;
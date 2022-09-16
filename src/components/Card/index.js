import './style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
// import  'bootstrap/dist/css/bootstrap.min.css' ;


export default function Card(props){
    const[icon, setIcon] = useState();
    const[nome, setNome] = useState();
    const[cidade, setCidade] = useState();
    const[temperatura, setTemperatura] = useState();
    const[tempMax,setTempMax]= useState();
    const[tempMin,setTempMin]= useState();
    const[termica, setTermica] = useState();
    const[uv, setUv] = useState();
    const[umidade, setUmidade] = useState();
    // const[icon, setIcon] = useState();
    

useEffect(()=>{
    async function carregar(){
        const response = await api.get(`forecast.json?key=22b84110e1bb46b4a65130541220809&q=${props.nome}&days=1&aqi=no&alerts=no`);
        setIcon(response.data.current.condition.icon);
        setNome(response.data.current.condition.text);
        setCidade(response.data.location.name)
        setTemperatura(response.data.current.temp_c)
        setTempMax(response.data.forecast.forecastday[0].day.maxtemp_c)
        setTempMin(response.data.forecast.forecastday[0].day.mintemp_c)
        setTermica(response.data.current.feelslike_c)
        setUmidade(response.data.current.humidity)
        setUv(response.data.current.uv)
    }
    carregar();
},[]);


    return(
       
            
        <div className='container'>
            <div className='cidade'>
                <h2> {cidade}</h2> 
            </div>
            <div className='imagem'>
                <img src={icon} alt="imagem"></img>
            </div>
            <div className='nome'>
                <p>{nome}</p>
            </div>
            <div className='temperatura'>
                <p>{temperatura}°C</p>
            </div>
            <div className='temps'>
            <div className='tempmax'>
                <p>Máxima: {tempMax}°C</p>
            </div>
            <div className='tempmin'>
                <p>Mínima: {tempMin}°C</p>
            </div>
            </div>
            <div className='infosadd'>
                <div className='sensacaoter'>
                    <p>Sensação Térmica: </p>{termica}
                </div>
                <div className='umidadear'>
                    <p>Umidade: </p>{umidade}%
                </div>
                <div className='indiceuv'>
                    <p>Índice UV: </p>{uv}
                </div>
            </div>
        </div>
            
    )
  }
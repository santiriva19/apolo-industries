import React, { useState } from 'react';
import '../assets/style.css'
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ResulTrefi from './ResulTrefi';

    const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '40%',
    },
  }));

export default function Trefi()
{    
        
        let epsi;
        let y;
        let j;
        let l;
        let teta;
        let sigma;
        let fuerzaSend;
        let potenciaSend;


        

        const [showInputs, setShowInputs] = useState(true);
        const [showResults, setShowResults] = useState(false);

        const [fuerza, setFuerza] = useState(0);
        const [potencia, setPotencia] = useState(0);

        const ponerFuerza = valor =>
        {
            setFuerza( valor );
        }
        const ponerPotencia = (valor) =>
        {
            setPotencia( valor );
        }

        const cambiarDeInputsAResultados = () =>
        {
            setShowInputs(false);
            setShowResults(true);
        }
        const cambiarDeResultadosAInputs = () =>
        {
            setShowInputs(true);
            setShowResults(false);
        }
        const calcular = () =>
        {
            epsi = 0;
            y = 0;
            j = 0;
            l = 0;
            teta = 0;
            sigma = 0;
            fuerzaSend = 0;
            potenciaSend = 0;


            let texta = document.getElementById('a').value;
            let textb = document.getElementById('b').value;
            let textc = document.getElementById('c').value;
            let textd = document.getElementById('d').value;
            let texte = document.getElementById('e').value;
            let textf = document.getElementById('f').value;
            let textg = document.getElementById('g').value;

            if(texta === "" || textb === "" || textc === "" || textd === "" || texte === "" || textf === "" || textg === "")
            {
                alert("Existen espacios en blanco o letras en los inputs")
            }
            else
            {
                
                var a = parseFloat(texta)
                var b = parseFloat(textb)
                var c = parseFloat(textc)
                var d = parseFloat(textd)
                var e = parseFloat(texte)
                var f = parseFloat(textf)
                var g = parseFloat(textg)

                epsi = Math.log(Math.pow(a,2) / Math.pow(b,2));
                y =  ( c * (Math.pow(epsi,e)) )/( 1 + e );
                j = (a+b)/2;
                l = (a-b) /(2 * (Math.sin(12 * ((Math.PI)/180 ))));
                teta = 0.88 + ( 0.12 * (j / l) );
                sigma = ( y * (1 + ( d/(Math.tan(f * (Math.PI)/180 )) )) * teta * epsi );

                fuerzaSend = ( ( Math.PI/4 ) * ( Math.pow(b,2)) ) * sigma ;
                potenciaSend = fuerzaSend * g;

                ponerFuerza(fuerzaSend);
                ponerPotencia(potenciaSend);



                console.log(epsi.toFixed(4) + " epsi");
                console.log(y.toFixed(4) + " y");
                console.log(j.toFixed(4) + " j");
                console.log(l.toFixed(4) + " l");
                console.log(teta.toFixed(4) + " teta");
                console.log(sigma.toFixed(4) + " sigma");

                console.log(fuerza.toFixed(4) + " fuerza");
                console.log(potencia.toFixed(4) + " potencia");



                cambiarDeInputsAResultados();
            }

        }
        const classes = useStyles();
        
        if(showInputs)
        {
            return(
                <div className = "contenedorGrande">
                    <div className = "contenedorInicio">

                        <p className="textoGrandeInputs">TREFILADO</p>
                        <TextField
                        label="Diámetro inicial"
                        id="a"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        
                        <TextField
                        label="Diámetro final"
                        id="b"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Coeficiente de resistencia"
                        id="c"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">MPa</InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Coeficiente de fricción"
                        id="d"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Exponente de endurecimiento"
                        id="e"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Ángulo de entrada"
                        id="f"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">Grados</InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Velocidad de trabajo"
                        id="g"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">m/s</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        <div className = "row">
                            <a><button onClick= {calcular} className="customButtonDatos">Calcular</button></a>
                        </div>

                    </div>
                    <a href="/home"><button className="customButtonDatosRegresar">Regresar</button></a>



                </div>
            );
        }
        else if(showResults)
        {
            return(
            <div className="container">
                <div className = "contenedorResultados">
                <p className = "textoGrandeResult">RESULTADOS</p>
                <div className="row">
                    <ResulTrefi titulo = {"Fuerza"} resultado = {fuerza.toFixed(3)} medida = {"N"} />
                    <ResulTrefi titulo = {"Potencia"} resultado = {potencia.toFixed(3)} medida = {"W"}/>
                </div>
                
                </div>
                <a href="/trefilado"><button className="customButtonDatosRegresar">Regresar</button></a>

            </div>
               
            );
        }
    
}


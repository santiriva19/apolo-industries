import React, { useState } from 'react';
import '../assets/style.css'
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ResulExtru from './ResulExtru';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      width: '31%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '20%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

export default function Extru()
{    

        let texta;
        let textb;
        let textc;
        let textd;
        let texte;
        let textf;
        let texth;
        let texti;
        let textj;
        let textk;
        let textl;

        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var h = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;

        let pathDirecta = '../assets/img/directa.png';
        let pathIndirecta = '../assets/img/indirecta.png';

        let rx;
        let y;
        let epsi;
        let z;
        let fuerzaSendI;
        let fuerzaSendD;
        let presionSendI;
        let presionSendD;
        let potenciaSendI;
        let potenciaSendD;
        
        

        const [showInputs, setShowInputs] = useState(true);
        const [showResults, setShowResults] = useState(false);


        const [showIndirecta, setShowIndirecta] = useState(false);
        const [showDirecta, setShowDirecta] = useState(false);

        const [fuerzaI, setFuerzaI] = useState(0);
        const [fuerzaD, setFuerzaD] = useState(0);
        const [potenciaI, setPotenciaI] = useState(0);
        const [potenciaD, setPotenciaD] = useState(0);
        const [presionI, setPresionI] = useState(0);
        const [presionD, setPresionD] = useState(0);

        const ponerFuerzaI = valor =>
        {
            setFuerzaI( valor );
        }
        const ponerPotenciaI = (valor) =>
        {
            setPotenciaI( valor );
        }
        const ponerFuerzaD = valor =>
        {
            setFuerzaD( valor );
        }
        const ponerPotenciaD = (valor) =>
        {
            setPotenciaD( valor );
        }
        const ponerPresionI = (valor) =>
        {
            setPresionI( valor );
        }
        const ponerPresionD = (valor) =>
        {
            setPresionD( valor );
        }

        const manejarCambio = event =>
        {
            
            if(event.target.value == 1) //Indirecta
            {
                setShowIndirecta(true);
                setShowDirecta(false);
                
            }
            if(event.target.value == 2) //Directa
            {
                setShowIndirecta(false);
                setShowDirecta(true); 

                
    
            }
            
        }


        const cambiarDeInputsAResultados = () =>
        {
            
                setShowInputs(false);
                setShowResults(true);
                calcular();
            }
        const comprobacion = () =>
        {

            texta = document.getElementById('a').value;
            textb = document.getElementById('b').value;
            textc = document.getElementById('c').value;
            textd = document.getElementById('d').value;
            texte = document.getElementById('e').value;
            textf = document.getElementById('f').value;
            texth = document.getElementById('h').value;
            texti = document.getElementById('i').value;
            textj = document.getElementById('j').value;
            textk = document.getElementById('k').value;
            textl = document.getElementById('l').value;

            if(texta === "" || textb === "" || textc === "" || textd === "" || texte === "" || textf === ""  || texth === "" || texti === "" || textj ===  "" || textk === "" || textl === "" )
            {
                alert("Existen espacios en blanco o letras en los inputs")
            }
            else if(!showDirecta && !showIndirecta)
            {
                alert("Seleccione el tipo de extrusión")
            }
            else
            {
                guardarValores();
            }
        }
        const guardarValores = () =>
        {
           cambiarDeInputsAResultados();
        }
        
        const calcular = () =>
        {
            
            var a = parseFloat(texta)
            var b = parseFloat(textb)
            var c = parseFloat(textc)
            var d = parseFloat(textd)
            var e = parseFloat(texte)
            var f = parseFloat(textf)
            var h = parseFloat(texth)
            var i = parseFloat(texti)
            var j = parseFloat(textj)
            var k = parseFloat(textk)
            var l = parseFloat(textl)
            
            rx = 0;
            y =  0;
            epsi = 0;
            z = 0;

            rx = Math.log(a/b);
            y = (f * (Math.pow(rx, h))) / (1+h);
            epsi = d + (e * rx);
            z = 0.98 + 0.02 * Math.pow(k/l , 2.25);

            presionSendI = z * y * epsi;
        
            presionSendD = z * y * (epsi + ( (2 * i) / c ));
            
            fuerzaSendI = presionSendI * a;

            fuerzaSendD = presionSendD * a;

            potenciaSendI = fuerzaSendI * j;

            potenciaSendD = fuerzaSendD * j;

            console.log(rx.toFixed(3) + " rx");
            console.log(y.toFixed(3) + " y");
            console.log(epsi.toFixed(3) + " epsi");
            console.log(z.toFixed(3) + " z");
            console.log(fuerzaSendI.toFixed(3) + " fuerzaSendI");
            console.log(fuerzaSendD.toFixed(3) + " fuerzaSendD");
            console.log(potenciaSendI.toFixed(3)+ " potenciaSendI");
            console.log(potenciaSendD.toFixed(3) + " potenciaSendD");
            console.log(presionSendI.toFixed(3) + " presionSendI");
            console.log(presionSendD.toFixed(3) + " presionSendD");

            ponerFuerzaI(fuerzaSendI);
            ponerFuerzaD(fuerzaSendD);
            ponerPotenciaI(potenciaSendI);
            ponerPotenciaD(potenciaSendD);
            ponerPresionI(presionSendI);
            ponerPresionD(presionSendD);
            

        }
        const classes = useStyles();
        
        if(showInputs)
        {
            return(
                <div className = "contenedorGrande">
                    <div className = "contenedorExtru">

                        <p className="textoGrandeInputs">EXTRUSIÓN</p>

                        <TextField
                        label="Área inicial"
                        id="a"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">mm^2</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        
                        <TextField
                        label="Área final"
                        id="b"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">mm^2</InputAdornment>,
                        }}
                        variant="outlined"
                        />

                        <TextField
                        label="Diámetro inicial"
                        id="c"
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
                        label="Constante (a) fórmula de Jhonson"
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
                        label="Constante (b) fórmula de Jhonson"
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
                        label="Coeficiente de resistencia"
                        id="f"
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
                        label="Exponente de endurecimiento"
                        id="h"
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
                        label="Longitud del tocho"
                        id="i"
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
                        label="Velocidad de trabajo"
                        id="j"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">m/s</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        <TextField
                        label="Cx"
                        id="k"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">Perímetro sección extruida</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        <TextField
                        label="Cc"
                        id="l"
                        type="number" 
                        step="any"
                        inputMode = 'numeric'
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                        }}
                        variant="outlined"
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Tipo de extrusión</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="seleccion"
                            onChange={manejarCambio}
                            
                            >
                            <MenuItem value={1}>Indirecta</MenuItem>
                            <MenuItem value={2}>Directa</MenuItem>

                            </Select>
                        </FormControl>
                        <p className = "textoNormalExtru">
                            Nota: Recuerde que, si la pieza final también es un cilindro, los valores de Cx y Cc son iguales; de ser así diligencia las casillas para Cx y Cc con un valor de 1
                       </p>
                        <div className = "row">
                            <a><button onClick= {comprobacion} className="customButtonExtru">Calcular</button></a>
                        </div>

                    </div>
                    <a href="/home"><button className="customButtonDatosRegresar">Regresar</button></a>



                </div>
            );
        }
        else if(showResults)
        {
            
            if(showDirecta && !showIndirecta)
            {
                return(
                    <div className="container">
                        <div className = "contenedorResultadosExtru">
                        <p className = "textoGrandeResult">RESULTADOS</p>
                        
                        <img className="imageIndirecta" ></img>

                        <div className="row">
                            <div className = "col">
                                <ResulExtru titulo = {"Fuerza"} resultado = {fuerzaD.toFixed(3)} medida = {"N"} />

                            </div>
                            <div className = "col">
                                <ResulExtru titulo = {"Potencia"} resultado = {potenciaD.toFixed(3)} medida = {"W"}/>

                            </div>
                            <div className = "col">
                                <ResulExtru titulo = {"Presión"} resultado = {presionD.toFixed(3)} medida = {"MPa"}/>

                            </div>
                        </div>
                    
                    </div>
                    <a href="/extrusion"><button className="customButtonDatosRegresar">Regresar</button></a>

                </div>
                )
            }
            else if(!showDirecta && showIndirecta)
            {
                return(
                    <div className="container">
                        <div className = "contenedorResultadosExtru">
                            <p className = "textoGrandeResult">RESULTADOS</p>
                            
                            <img className="imageDirecta" ></img>

                            <div className="row">
                                <div className = "col">
                                <ResulExtru titulo = {"Fuerza"} resultado = {fuerzaI.toFixed(3)} medida = {"N"} />

                                </div>
                                <div className = "col">
                                <ResulExtru titulo = {"Potencia"} resultado = {potenciaI.toFixed(3)} medida = {"W"}/>

                                </div>
                                <div className = "col">
                                <ResulExtru titulo = {"Presión"} resultado = {presionI.toFixed(3)} medida = {"MPa"}/>

                                </div>
                            </div>
                        </div>
                        <a href="/extrusion"><button className="customButtonDatosRegresar">Regresar</button></a>

                    </div>
                );
            }
        }
    
}


 
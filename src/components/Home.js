import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import logoU from '../assets/img/logousabana.png'
import logoApp from '../assets/img/logoapp.png'
import trefiImg from '../assets/img/trefi.png'
import extruImg from '../assets/img/extru.png'
import '../assets/style.css'


const images = [
  {
    url: trefiImg,
    title: 'TREFILADO',
    width: '45%',
    href : '/trefilado'
  },
  {
    url: extruImg,
    title: 'EXTRUSIÓN',
    width: '45%',
    href : '/extrusion'

  },
  
];

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginTop : '5%',
        justifyContent : 'space-around'
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,

        },
        '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
            opacity: 0.15,
        },
        '& $imageMarked': {
            opacity: 0,
        },
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,

    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius : 40
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
        borderRadius: 35,


    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function Home() {

  const classes = useStyles();

  return (
    <div className="">
        <div className="row">
            <div className="col contenedorGrande">
                <div className="contenedorInicio">
                    <div className="row">
                        <div className="col">
                        <img className="logoU" src={logoU}></img>
                        </div>
                        <div className="col">
                            <p className="textoGrandeInicio">BIENVENIDO</p>
                        </div>
                        <div className="col">
                            <img className="logoApp" src={logoApp}></img>
                        </div>
                    </div>
                    
                    <hr></hr>
                    
                    <div className={classes.root}>
                    {images.map((image) => (
                      <ButtonBase
                        href = {image.href}
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                          width: image.width,
                        }}
                      >
                        <span
                          className={classes.imageSrc}
                          style={{
                            backgroundImage: `url(${image.url})`,
                          }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                          <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                          >
                            {image.title}
                            <span className={classes.imageMarked} />
                          </Typography>
                        </span>
                      </ButtonBase>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
   
  );
}

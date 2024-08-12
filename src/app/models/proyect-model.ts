export interface Proyect {
  name: string;
  description: string;
  img: string;
  link: string;
  estado:string;
  tecnologias: string[];
  plataformas: string[];
}

export interface ProyectInfo {
  sub_title: string;
  description: string;
  icon: string;
  imgs: string[];
  botonera:Enlace[];
  objetivos: string[];
  funciones: Funcion[];
}

export interface Funcion {
  title: string;
  icon: string;
  tipo: string;
  puntos: { title: string, text: string }[];
}

export interface Enlace {
  icon: string;
  href: string;
}


export function EmptyProyectInfo(): ProyectInfo {
  return {
    sub_title: '',
    description: '',
    icon: '',
    botonera:[],
    imgs: [],
    objetivos: [],
    funciones: []
  };
}

export function EmptyProyect(): Proyect {
  return {
    name: '',
    description: '',
    img: '',
    link: '',
    estado:'',
    tecnologias: [],
    plataformas: []
  };
}
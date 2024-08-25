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
  imagen: string;
  tipo: string;
  subtitle?:string;
  items?: { icon?: string, title: string, text: string }[];
  message:string;
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
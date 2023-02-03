export type FechtData = {
    id: string,
    articulo: string,
    audio: boolean,
    audioFile: any,
    categoriaPrueba: CategoriaRevista,
    imagen: boolean,
    magazineImage: imagenRevista,
    position: number,
    urlVideo: any,
    video: boolean
}

export type CategoriaRevista = {
    categoriaNombre: String
}

export type imagenRevista = {
    url: string
}

export type ArticleProps = {
    id:string, 
    articleName: string, 
    audio: Boolean, 
    audioFile: any, 
    categoria:String, 
    imagen:Boolean, 
    imageFile: any, 
    posicion: Number, 
    video: Boolean, 
    videoFile:string
}
export type YoutubeEmededProps = {
    Url: string
}

export type categoriaProps = {
    categoria: String;
}

export type AudioProps = {
    Source: string,
    Name: string
}
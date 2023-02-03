import Image from "next/image";
import { HeaderRevista } from "./Header";
import { AudioTag } from "./Audio";
import { YoutubeEmeded } from "./Video";
import {ArticleProps} from '../types/types';



export const ArticleRevista = ({id, articleName, audio, audioFile, categoria, imagen, imageFile, posicion, video, videoFile}: ArticleProps) => {
    return (
        <>
            {categoria.includes('UNDEFINED') || categoria.includes('ANUNCIO') ? null : 
                <HeaderRevista categoria={categoria}/>
            }
            {
              audio ? <AudioTag Source={audioFile.url} Name={audioFile.id}/> : null
            }
            {
                imagen ?
                <Image src={imageFile} width={3000} height={0} className={`${audio ? 'md:mt-[-6.2%]': ''} w-full bg-white`} alt={articleName}/>
                :null
            }{
                video ? <YoutubeEmeded Url={videoFile} /> : null
            }
        </>
    )
}
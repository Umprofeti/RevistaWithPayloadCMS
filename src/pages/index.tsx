import Head from 'next/head'
import { getAllArticle } from '@/querys/getAllArticle'
import { ArticleRevista } from '@/components/Article';
import {FechtData} from '../types/types';

export async function getStaticProps(){
  await fetch("http://localhost:3000/api/Usuarios", {
    headers: {
      Authorization: `Usuarios API-Key ${process.env.NEXT_API_KEY}`,
    },
  });

  const {data: DataArticle, loading: LoadingArticle} = await getAllArticle

  return{
    props:{
      ArticleData: {
        DataArticle,
        LoadingArticle
      }
    },
    revalidate: 10,
  }
};

export default function Home({ArticleData}:any) {

  let DataRevista = ArticleData.DataArticle.RevistaContents.docs
  let DataRevistaReverse = [...DataRevista].reverse()
  
  
  return (
    <>
      <Head>
        <title>RENDEZVOUS VOL.2</title>
        <meta
          name="description"
          content="Revista RendezVous Segunda Edicion 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://revista.rendezvouscorp.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RENDEZVOUS VOL.2" />
        <meta
          property="og:description"
          content="Revista RendezVous Segunda Edicion 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center flex-col justify-center bg-cover bg-fixed bg-white md:bg-logo-pattern'>
        <div className='w-full xl:w-[75%]'>
          { 
              DataRevistaReverse.map((element:FechtData, id:Number)=> {
                return (
                  <div key={element.id} className="shadow-xl my-2">
                    <ArticleRevista 
                      id={element.id} 
                      articleName={element.articulo}
                      audio= {element.audio}
                      audioFile = {element?.audioFile}
                      categoria = {element.categoriaPrueba.categoriaNombre}
                      imagen = {element.imagen}
                      imageFile = {element?.magazineImage?.url}
                      posicion = {element.position}
                      video ={element.video}
                      videoFile = {element?.urlVideo}
                    />
                  </div>
                )
              })
          }
        </div>
      </main>
    </>
  )
}

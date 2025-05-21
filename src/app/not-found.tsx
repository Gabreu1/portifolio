import Link from "next/link"


export default function NotFound(){
    return(
        <div className ='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-center font-bold mt-9 text-6xl'>Pagina não encontrada</h1>
            <p>A pagina que você tentou acessar não existe</p>
            <Link className="font-bold" href="/">
            Voltar para home
            </Link>
        </div>
    )
}
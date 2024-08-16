import Link from "next/link";

export default function Page(){

    return <div>
        <h1 className="bg-red-300 text-blue-900 rounded-sm border-border">Hola mundo</h1>
        <Link href="/base/welcome">Descubre todo sobre nosotros</Link>

    </div>
}
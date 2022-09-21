import { Router, useRouter } from "next/router"

export default function Product(){
    const route = useRouter()
    const {id} = route.query

    return <h1>Produtos {JSON.stringify(id)} d</h1>
}
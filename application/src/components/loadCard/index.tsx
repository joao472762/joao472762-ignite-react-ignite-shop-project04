import Image from "next/future/image"
import { LoadingCotainer } from "./styles"
import loadCardImg from '../../assets/loadCard.svg'

export function LoadCard(){
    return(
        <LoadingCotainer>
            <Image width={554} height={619} src={loadCardImg} alt=''/>
        </LoadingCotainer>
    )
}
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'

const Miprimerblog = () =>{
    return(
        <Layout>
            <h1>gwp</h1>
            <Link href={'/'}>
            <a>volver al inicio</a>
            </Link>
            <Image
            src={'/img/milan.jpg'}
            width={710}
            height={444}
            alt='mi imagen del milano'
            />
        </Layout>
    )
}

export default Miprimerblog
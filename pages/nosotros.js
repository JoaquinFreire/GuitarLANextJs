import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/nosotros.module.css';
export default function Nosotros() {
    return (
        <Layout title={'Nosotros'} description={'Sobre Nosotros, guitarLA, tienda de música'}>
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros' />

                    <div>
                        <p>Non eligendi eius ipsam omnis nesciunt laborum qui blanditiis ex, sequi repellendus quaerat laudantium maxime voluptatibus, officia atque cumque et illo saepe?
                            Molestias dicta neque eum soluta quasi! Sit aut iste recusandae quaera, quia optio veniam eveniet at nihil placeat perspiciatis. Distinctio sequi praesentium atque dolores.</p>
                        <p>Ipsum dolor sit amet consectetur adipisicing elit. Non eligendi eius ipsam omnis nesciunt laborum qui blanditiis ex, sequi repellendus quaerat laudantium maxime voluptatibus, officia atque cumque et illo saepe?
                            Molestias Incidunt non, error iure est tenetur nemo voluptas perferendis sapiente ad impedit quia optio veniam perspiciatis. Distinctio sequi praesentium atque dolores.</p>
                    </div>
                </div>
            </main>
        </Layout>

    )
}

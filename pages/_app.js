import '../styles/Styles.scss'
import Head from 'next/head'
import { Movies } from '../Context/MoviesContext'
import { Genres } from '../Context/GenresContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MoviesPage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta charSet="utf-8"/>
        <meta name="description" content="Sitio web de Rosé Aromas, emprendimiento de Zárate. Dedicado a la venta de velas, homesprays, difusores y bombones aromatizados."/>
	      <meta name="keywords" content="aromas, vela, difusor, bombon, homespray, perfume, decoracion, emprendimiento, rose"/>
        <meta name="theme-color" content="#084444"/>
      </Head>

      <Movies>
        <Genres>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>

          <Component {...pageProps} />
        </Genres>
      </Movies>

    </>
  )
}

export default MyApp

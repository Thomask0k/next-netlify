import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulProducts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Product from '@components/Product'

export default function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Cool Clothes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="products">
          {products.map((p) => {
            return <Product product={p} key={`prod-${p.id}`} />
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .products {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const products = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      products,
    },
  }
}

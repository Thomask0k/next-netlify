import React from 'react';
import { fetchEntries } from '../../utils/contentfulProducts';
import Product from '../../components/Product';

const Pid = ({ product }) => {
  return (
    <div>
      <Product product={product} />
    </div>
  )
}

export default Pid;

export async function getStaticPaths() {
  const res = await fetchEntries();

  const paths = res.map(product => {
    return { params: { pid: product.fields.id.toString() } }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetchEntries();
  const product = res.find(p => p.fields.id == params.pid)

  return {
    props: {
      product: product.fields,
    },
  }
}



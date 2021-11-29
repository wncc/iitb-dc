import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
	const res = await fetch('https://api.quotable.io/quotes?page=1')
  const data = await res.json()
	return {
		props: {confessions : data}
	}
}

export default function Home({confessions}) {
  const { results: quotes = [], ...pageInfo } = confessions
  // console.log(confessions)
  return (
    <div>
      <h1>HomePage</h1>
      <div>
      {
        quotes.map(conf => (
          <div key={conf._id}>
          <div>
          <h3>{conf.content}</h3>
          </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

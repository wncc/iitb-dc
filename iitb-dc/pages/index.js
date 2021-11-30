import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ConfessionCard from '../components/ConfessionCard'
import Widget from '../components/Widget'

export const getStaticProps = async () => {
	// const res = await fetch('https://api.quotable.io/quotes?page=1')
  // const data = await res.json()

  const res = [
    {
      _id:"#18683",
      content:"One thing I've learnt so far, The no. of credits of a course is inversely proportional to the amount of efforts we need to bear with it. \n (WRT, the great 207) [RG nahi, fact hai]"
    },
    {
      _id:"#18710",
      content:'I recently came across a "letter to myself" written during extremely tough COVID times and I realized my brain had blurred all those memories and even made them better. Dissociative amnesia. Reading that letter made me feel better, even laugh about present trivial obstacles. It explains so much about my situation. My depressive episodes are triggered by lack of sleep and exercise. I have good months when I\'m overall productive, extraverted and outgoing and bad months when I suffer from low confidence, anxiety and social withdrawal. This is even apparent from my spi which has a cyclical pattern. But it is exercise that pulls me out every time. Cannot stress the importance of it more. Another line i quote from the letter- "IIT has made my mental health and life a lot harder". It did but I also grew. Please reach out to your friends. Be kind and do not, I repeat do not "compete" with people. Everyone is forging their own path. Everyone is working towards their own goals. Let\'s create a positive peer community that helps everyone grow.'
    },
    {
      _id:"#18697",
      content:"These days I don't feel any interest or enthusiasm in my life. I don't have any siblings.  I don't have friends close to heart. Poor parents whose world is me and I just can't tell them that I'm willing to be a bekar. Besides all this, I wanna know something.\
      WHY DO WE WORK ??\n \
      Just for money ?? If so, Why do women work if they have a husband earning for her ??"
    },
    {
      _id:"#18681",
      content:"I saw this really hot senior walking to H18. He has blue hair and this amazing vibe. Mr Blue hair, if you're reading this, please meet me at Gulmohar at 9pm this Sunday. I think we would vibe. Xoxo"
    }
  ]

  const data = await JSON.stringify(res);


	return {
		props: {confessions : data}
	}
}


export default function Home({confessions}) {
  // const { results: quotes = [], ...pageInfo } = confessions
  console.log(confessions)
  const confList = JSON.parse(confessions)

  return (
    <div className="bg-primary">
      <Head>
        <title>IITB Diaries Confessions</title>
      </Head>

      {/* Header */}
      <Header/>


      <main className="flex mt-2 space-x-5">
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <div className="mt-6 space-y-3 w-full">
        {
        confList.map(conf => (
          <div key={conf._id}>
            <ConfessionCard confession={conf}/>
          </div>
        ))
        }
        </div>
        {/* Widgets */}
        <div className="flex-col space-y-3 w-64">
        <Widget/>
        <Widget/>
        </div>

      </main>

    </div>
  )
}

// import Image from 'next/image'
// import { Box, Text, VStack} from '@chakra-ui/react'

// export const getStaticProps = async () => {
  // 	const res = await fetch('https://api.quotable.io/quotes?page=1')
  //   const data = await res.json()
  // 	return {
  // 		props: {confessions : data}
  // 	}
  // }
// return (
//   <div>
//     <h1>HomePage</h1>
//     <div>
//     {
//       quotes.map(conf => (
//         <div key={conf._id}>
//         <div>
//         <div>{conf.content}</div>
//         </div>
//         </div>
//       ))
//     }
//     </div>
//   </div>
// )
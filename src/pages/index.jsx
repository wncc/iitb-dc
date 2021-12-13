import axios from 'axios';
import Head from 'next/head';
import React from 'react';

import ConfessionCard from 'components/ConfessionCard';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Widget from 'components/Widget';

export const getStaticProps = async () => {
  let confessions = [];

  try {
    const response = await axios.get('/confessions');
    confessions = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      confessions,
    },
  };
};

const Home = ({ confessions }) => {
  // const [confessions, setConfessions] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getConfessions = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get("/confessions");
  //       setConfessions(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getConfessions();
  // }, []);

  // if (loading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Diaries Confessions</title>
      </Head>

      <div className="bg-primary">
        {/* Header */}
        <Header />

        <main className="flex mt-2 space-x-5">
          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <div className="w-full mt-6 space-y-3 overscroll-auto">
            {confessions?.map((conf) => {
              return (
                <div key={conf.id}>
                  <ConfessionCard confession={conf} />
                </div>
              );
            })}
          </div>

          {/* Widgets */}
          <div className="flex-col w-64 space-y-3">
            <Widget />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

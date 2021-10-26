
import Image from 'next/image'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout title="Home">
      <div className="fs-grid m-grid-col-2 fs-wscreen">
        <div className="fs-outer fs-mwfull fs-wscreen ">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-w400  fs-smx20 fs-mmx30 fs-xlmx40 fs-xxlmx60">

          </div>
        </div>
        <div className="fs-outer fs-mwfull fs-wscreen">
          <div className="fs-inner fs-aspectHD-vert fs-sh300 fs-mh400 fs-h230 bg-darkviolet fs-mx60 fs-my30 fs-mmy40 fs-smy30">

          </div>
        </div>
      </div>
      <div className="fs-outer">
        <div className="fs-inner">
          <h1>アクセスランキング</h1>
        </div>
      </div>
    </Layout>
  )
}


import Image from 'next/image'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout title="Home">
      <div className="fs-grid m-grid-col-2 fs-wscreen">
        <div className="fs-outer fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-wfull fs-smx20 fs-mmx30 fs-xlmx40 fs-xxlmx60">

          </div>
        </div>
        <div className="fs-outer fs-wfull">
          <div className="fs-inner fs-aspectHD-vert fs-sh400 fs-mh400 fs-h350 bg-darkviolet fs-mx60 fs-my30 fs-mmy40 fs-smy30">

          </div>
        </div>
      </div>
    </Layout>
  )
}


import Image from 'next/image'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout title="Home">
      <div className="fs-grid m-grid-col-2 fs-wscreen">
        <div className="fs-outer fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-wfull fs-mx80">

          </div>
        </div>
        <div className="fs-outer fs-wfull">
          <div className="fs-inner fs-aspectHD-vert fs-h450 bg-darkviolet fs-mx60">

          </div>
        </div>
      </div>
    </Layout>
  )
}

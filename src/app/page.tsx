import { Banner } from "@/../src/app/components/banner"
import { Features } from "@/../src/app/components/features"
import { Testimonials } from "@/../src/app/components/testimonials"
import { Footer } from "@/../src/app/components/footer"

export default function Home() {
  return (
    <>
      <Banner />
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
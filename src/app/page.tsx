import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import KitchenTypes from '@/components/KitchenTypes'
import FeaturedProjects from '@/components/FeaturedProjects'
import BeforeAfter from '@/components/BeforeAfter'
import MaterialsSection from '@/components/MaterialsSection'
import HardwareStorage from '@/components/HardwareStorage'
import IndianKitchen from '@/components/IndianKitchen'
import ProcessTimeline from '@/components/ProcessTimeline'
import WhyChooseUs from '@/components/WhyChooseUs'
import TrustStats from '@/components/TrustStats'
import Testimonials from '@/components/Testimonials'
import KitchenConfigurator from '@/components/KitchenConfigurator'
import ContactForm from '@/components/ContactForm'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <KitchenTypes />
        <FeaturedProjects />
        <BeforeAfter />
        <MaterialsSection />
        <HardwareStorage />
        <IndianKitchen />
        <ProcessTimeline />
        <WhyChooseUs />
        <TrustStats />
        <Testimonials />
        <KitchenConfigurator />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

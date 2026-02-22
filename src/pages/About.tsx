import { Shield, Users, Wrench, ChevronRight } from 'lucide-react';
import { PageHead } from '../components/ui/PageHead';

const About = () => {
  return (
    <article className="bg-white min-h-screen text-slate-900">
      <PageHead
        title="About Us"
        description="AA2000 Security - 25 years of excellence in CCTV, Fire Detection, and Burglar Alarm systems. Trusted security solutions."
      />
      <section className="py-20 px-4 text-center bg-white-light/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-aa-blue/5 skew-y-1 transform origin-top-left -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">
            AA2000 Security & <span className="text-aa-blue">Technology Solutions</span> Inc.
          </h1>
          <p className="text-xl md:text-2xl text-aa-cyan font-semibold mb-8">
            25 Years of Excellence in Security & Engineering Solutions
          </p>
          <div className="h-1 w-24 bg-aa-blue mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Journey</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              From a humble beginning in the year 2000, AA2000 started as a pioneering provider of CCTV surveillance systems—at a time when security technology was still in its infancy. With a deep commitment to innovation, reliability, and excellence, we have evolved into a premier system integrator, trusted by industry leaders across the country.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Now, in our 25th year, AA2000 has expanded beyond CCTV, offering a comprehensive suite of security and safety solutions.
            </p>
          </div>
          <div className="bg-aa-navy text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-aa-blue/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">Comprehensive Security</h3>
            <ul className="space-y-3 relative z-10">
              {[
                "Fire Detection & Alarm Systems (FDAS)",
                "Access Control & Biometrics",
                "Intrusion Alarm Systems",
                "Paging & Voice Evacuation Systems",
                "Wireless Alarm & Smart Security Solutions"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-aa-cyan flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <Wrench className="h-16 w-16 text-aa-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Engineering & Technical Services</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-10">
              Recognizing the ever-growing needs of modern businesses, we have further diversified our expertise to provide top-tier engineering solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Engineering Solutions", "Fit-out & Structural Works"].map((service, index) => (
                <div key={index} className="bg-white px-8 py-4 rounded-xl shadow-md border border-slate-200 font-bold text-slate-800 flex items-center">
                  <ChevronRight className="h-5 w-5 text-aa-cyan mr-2" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-aa-navy to-aa-blue-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-aa-slate mb-6 leading-relaxed">
                AA2000 is the specialist in Security and Safety Systems Engineering. Designing the perfect technology-based solutions, that complies with the highest standards in the industry.
              </p>
              <p className="text-aa-slate leading-relaxed">
                We provide excellent pre-sales and post-sales support services to our corporate clients thus providing products at highly competitive prices.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <Users className="h-10 w-10 text-aa-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4">Customer-Centric Teams</h3>
              <p className="text-slate-200">
                Our sales representatives aren't just order-takers; they are trained to assist our customers in evaluating and consolidating their system requirements to be able to recommend the most effective solution at the best price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;

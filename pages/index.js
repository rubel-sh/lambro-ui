import Hero from "@/components/Index/Hero";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";

export default function Home() {
  return (
    <main>
      <div className="relative h-full">
        <Container>
          <Header />
          <Hero />
        </Container>
        <img
          src="/assets/img/hero-btm-bg.png"
          alt=""
          className="absolute top-0 z-[9]"
        />
      </div>

      <div className="w-full h-[1205px] bg-gradient-to-b from-gray-950 to-gray-950/0 relative z-10">
        <div className="w-[1417px] h-[567px] relative">
          <div className="w-[610px] left-[62px] top-[46px] absolute text-violet-300 text-[44px] font-bold leading-[52.80px]">
            Check here our KYC and Audit
          </div>
          <div className="w-[759px] left-[62px] top-[182px] absolute text-purple-300 text-opacity-80 text-xl font-normal leading-[30px]">
            KYC and audits ensure compliance, accountability, and trust through
            identity verification, risk mitigation, and independent evaluations.
          </div>
          <div className="w-[1417px] h-[567px] left-0 top-0 absolute">
            <div className="w-[560px] octagonWrap h-[287px] left-0 top-[280px] absolute">
              <div className="left-[88px] top-[154px] absolute text-violet-300 text-xl font-medium leading-tight">
                In Coinscope
              </div>
              <div className="w-[356px] left-[88px] top-[184px] absolute text-purple-300 text-opacity-60 text-base font-normal leading-relaxed">
                Platform for tracking and analyzing cryptocurrencies in
                real-time.
              </div>
              <div className="w-[35px] h-[35px] left-[111px] top-[67px] absolute">
                <div className="w-[32.94px] h-[35px] left-[1.03px] top-[-0px] absolute">
                  <div className="w-[32.94px] h-[35px] left-0 top-0 absolute"></div>
                  <div className="w-[16.72px] h-[16.72px] left-[8.11px] top-[16.71px] absolute"></div>
                  <div className="w-[13.21px] h-[3.09px] left-[9.87px] top-[9.35px] absolute"></div>
                </div>
              </div>
            </div>
            <div className="w-[560px] h-[287px] left-[439px] top-[280px] absolute">
              <div className="left-[84px] top-[154px] absolute text-violet-300 text-xl font-medium leading-tight">
                In Cyberscope
              </div>
              <div className="w-[356px] left-[84px] top-[184px] absolute text-purple-300 text-opacity-60 text-base font-normal leading-relaxed">
                Comprehensive system for monitoring and managing cybersecurity
                risks.
              </div>
              <div className="w-[35px] h-[35px] left-[107px] top-[68px] absolute">
                <div className="w-[35px] h-[35px] left-0 top-0 absolute">
                  <div className="w-[35px] h-[35px] left-0 top-0 absolute"></div>
                </div>
              </div>
            </div>
            <div className="w-[560px] h-[287px] left-[856px] top-[280px] absolute">
              <div className="left-[102px] top-[154px] absolute text-violet-300 text-xl font-medium leading-tight">
                In Checkdot
              </div>
              <div className="w-[356px] left-[102px] top-[184px] absolute text-purple-300 text-opacity-60 text-base font-normal leading-relaxed">
                Insufficient information available to provide a concise
                description.
              </div>
              <div className="w-[35px] h-[35px] left-[125px] top-[68px] absolute">
                <div className="w-[31.35px] h-[31.35px] left-[1.82px] top-[1.83px] absolute"></div>
              </div>
            </div>
            <div className="w-[560px] h-[287px] left-[857px] top-0 absolute">
              <div className="left-[101px] top-[154px] absolute text-violet-300 text-xl font-medium leading-tight">
                KYC Certification
              </div>
              <div className="w-[356px] left-[101px] top-[184px] absolute text-purple-300 text-opacity-60 text-base font-normal leading-relaxed">
                Verification of customer identities to comply with regulations
                and prevent fraud.
              </div>
              <div className="w-[35px] h-[35px] left-[124px] top-[68px] absolute">
                <div className="w-[33.10px] h-[27.77px] left-[0.95px] top-[3.62px] absolute"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="octagonWrap">
        </div>
      </div>
    </main>
  );
}

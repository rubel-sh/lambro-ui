import Hero from "@/components/Index/Hero";
import KycAndAuditCards from "@/components/Index/KycAndAuditCards";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";

export default function Home() {
    return (
        <main className="text-[#af9ec7]">
            {/* HERO SECTION */}
            <div className="relative h-full overflow-hidden">
                <Container>
                    <Header />
                    <Hero />
                </Container>
                <img
                    src="/assets/img/hero-btm-bg.png"
                    alt=""
                    className="absolute top-0 bottom-0 h-screen object-cover z-[9]"
                />
            </div>

            {/* KYC AND AUDIT SECTION */}
            <KycAndAuditCards />

            {/* THINGS ABOUT LAMBRO SECTION*/}

            {/* KEY FEATURES OF LAMBRO SECTION*/}

            {/* TOKEN - LAMBRO SECTION*/}

            {/* TOKENOMICS LAMBRO CHART SECTION*/}

            {/* LAMBRO TEAM SECTION*/}

            {/* LAMBRO ROADMAP SECTION*/}

            {/* FOOTER SECTION*/}
        </main>
    );
}

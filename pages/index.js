import Hero from "@/components/UI/Index/Hero";
import KycAndAuditCardsSection from "@/components/UI/Index/KycAndAuditCardsSection";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import ThingsAboutLambroSection from "@/components/UI/Index/ThingsAboutLambroSection";

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
                    src="/assets/img/hero-btm-bg-cropped.png"
                    alt=""
                    className="absolute top-0 bottom-0 h-screen object-cover z-[9]"
                />
            </div>

            {/* KYC AND AUDIT SECTION */}
            <KycAndAuditCardsSection />

            {/* THINGS ABOUT LAMBRO SECTION*/}
            <ThingsAboutLambroSection />

            {/* KEY FEATURES OF LAMBRO SECTION*/}

            {/* TOKEN - LAMBRO SECTION*/}

            {/* TOKENOMICS LAMBRO CHART SECTION*/}

            {/* LAMBRO TEAM SECTION*/}

            {/* LAMBRO ROADMAP SECTION*/}

            {/* FOOTER SECTION*/}
        </main>
    );
}

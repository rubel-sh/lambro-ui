import Hero from "@/components/UI/Index/Hero";
import KycAndAuditCardsSection from "@/components/UI/Index/KycAndAuditCardsSection";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import ThingsAboutLambroSection from "@/components/UI/Index/ThingsAboutLambroSection";
import KeyFeaturesSection from "@/components/UI/Index/KeyFeaturesSection";
import LambroTokenSection from "@/components/UI/Index/LambroTokenSection";
import LambroTokenomics from "@/components/UI/Index/LambroTokenomics";
import LambroTeamSection from "@/components/UI/Index/LambroTeamSection";
import LambroRoadmapSection from "@/components/UI/Index/LambroRoadmapSection";
import LambroFooter from "@/components/UI/Index/LambroFooter";
import TeamModal from "@/components/UI/Index/TeamModal";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/img/favicon.png" />
                <title>Lambro.io</title>
                <meta name="description" content="Lambro.io" />
                <meta name="keywords" content="Lambro.io" />
                <meta name="author" content="Lambro.io" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="/assets/img/favicon.png" />
                <meta name="msapplication-config" content="/assets/img/favicon.png" />
                <meta name="apple-mobile-web-app-title" content="Lambro.io" />
                <meta name="application-name" content="Lambro.io" />
                <meta name="msapplication-tooltip" content="Lambro.io" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
                <meta name="apple-mobile-web-app-title" content="Lambro.io" />
                <meta name="format-detection" content="telephone=no" />
                <meta property="og:title" content="Lambro.io" />
            </Head>
            <main className="text-[#af9ec7] ">
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
                <KeyFeaturesSection />

                {/* TOKEN - LAMBRO SECTION*/}
                <LambroTokenSection />

                {/* TOKENOMICS LAMBRO CHART SECTION*/}
                <LambroTokenomics />

                {/* LAMBRO TEAM SECTION*/}
                <LambroTeamSection />

                {/* LAMBRO ROADMAP SECTION*/}
                <LambroRoadmapSection />

                {/* FOOTER SECTION*/}
                <LambroFooter />

                {/* MODAL */}

                <TeamModal />
            </main>
        </>
    );
}

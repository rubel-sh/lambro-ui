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
                    className="absolute top-0 bottom-0 h-screen object-cover z-[9]"
                />
            </div>
        </main>
    );
}

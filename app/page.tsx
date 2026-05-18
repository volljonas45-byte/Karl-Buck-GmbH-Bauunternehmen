import HeroVideo from '@/components/home/HeroVideo';
import ScrollingTicker from '@/components/home/ScrollingTicker';
import StatsBar from '@/components/home/StatsBar';
import LeistungenGrid from '@/components/home/LeistungenGrid';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import AboutTeaser from '@/components/home/AboutTeaser';
import LocationMap from '@/components/home/LocationMap';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <ScrollingTicker />
      <StatsBar />
      <LeistungenGrid />
      <GalleryTeaser />
      <AboutTeaser />
      <LocationMap />
      <CtaBanner />
    </>
  );
}

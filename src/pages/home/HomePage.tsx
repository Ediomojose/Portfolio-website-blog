import PageTemplate from '@/widget/PageTemplate'
import HeroSection from './HeroSection';
import GridContainer from './GridContainer';
import StackBanner from './StackBanner';
import PortfolioContainer from './PortfolioContainer';
import Project from './project/Project';
import ReviewContainer from './ReviewContainer';

const HomePage = () => {
  return (
    <PageTemplate>
        <HeroSection/>
        <GridContainer/>
        <StackBanner/>
        <Project/>
        <ReviewContainer/>
    </PageTemplate>
  )
}

export default HomePage
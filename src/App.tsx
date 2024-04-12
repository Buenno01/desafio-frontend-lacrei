import { useRef } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTopBtn from './components/ScrollToTopBtn';

function App() {
  const topRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div ref={ topRef } id="top">
      <Header />
      <Content />
      <Footer />
      <ScrollToTopBtn onClick={ handleScrollToTop } data-testid="scroll-btn">
        <IoIosArrowUp />
      </ScrollToTopBtn>
    </div>
  );
}

export default App;

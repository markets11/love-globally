import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [loveTexts, setLoveTexts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating "I love you ❤️" texts
    const texts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setLoveTexts(texts);
  }, []);

  return (
    <div className="love-float">
      {/* Floating Love Texts */}
      {loveTexts.map((text) => (
        <div
          key={text.id}
          className="love-text"
          style={{
            left: `${text.left}%`,
            animationDelay: `${text.delay}s`
          }}
        >
          I love you ❤️
        </div>
      ))}

    </div>
  );
};

export default BackgroundAnimation;
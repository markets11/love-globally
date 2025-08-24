import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const poems = [
  {
    title: "Your Special Day",
    content: "Like flowers bloom in spring's embrace,\nYour smile lights up this special place.\nWith joy and laughter all around,\nA birthday wish that knows no bound."
  },
  {
    title: "Another Year of Wonder",
    content: "Each candle on your cake today,\nRepresents a memory on display.\nOf moments shared and dreams come true,\nAnd all the love that flows to you."
  },
  {
    title: "Birthday Magic",
    content: "Stars align on this perfect night,\nTo celebrate your inner light.\nMay wishes made with heart so pure,\nBring happiness that will endure."
  },
  {
    title: "Celebration of You",
    content: "In gardens where the roses grow,\nYour beauty makes the flowers glow.\nA birthday song, a sweet refrain,\nFor one who brings sunshine through rain."
  },
  {
    title: "Golden Moments",
    content: "Time may pass like flowing streams,\nBut you remain the stuff of dreams.\nOn this day of birth so bright,\nYou fill our world with pure delight."
  },
  {
    title: "Sweet Symphony",
    content: "Like music dancing in the air,\nYour presence makes life beyond compare.\nWith birthday bells that softly chime,\nCelebrating you for all time."
  },
  {
    title: "Radiant Soul",
    content: "In morning dew and evening's glow,\nYour kindness helps our spirits grow.\nA birthday wish wrapped up in gold,\nFor a heart that's beautiful to behold."
  },
  {
    title: "Dancing Through Years",
    content: "Through seasons that have come and gone,\nYour spirit shines from dusk till dawn.\nMay this birthday bring you cheer,\nAnd blessings throughout the coming year."
  },
  {
    title: "Precious Gift",
    content: "You are a gift beyond compare,\nWith gentle heart and spirit fair.\nOn this day of celebration,\nYou bring us pure elation."
  },
  {
    title: "Butterfly Dreams",
    content: "Like butterflies that grace the sky,\nYour dreams were always meant to fly.\nMay this birthday set you free,\nTo be all you're meant to be."
  },
  {
    title: "Ocean of Love",
    content: "Deeper than the ocean blue,\nIs all the love we have for you.\nWith birthday waves that gently flow,\nMay happiness around you grow."
  },
  {
    title: "Starlight Birthday",
    content: "Count the stars up in the night,\nEach one reflects your inner light.\nA birthday wish on shooting star,\nYou're beautiful just as you are."
  },
  {
    title: "Garden of Joy",
    content: "In life's garden, you're the rose,\nThe sweetest flower that ever grows.\nMay your birthday garden bloom,\nWith love that fills up every room."
  },
  {
    title: "Forever Young",
    content: "Though years may add their gentle touch,\nYour heart stays young and means so much.\nWith birthday candles burning bright,\nYou make our world a pure delight."
  }
];

const Poems = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-love-pink via-heart-red to-gold-accent bg-clip-text text-transparent">
            💝 Beautiful Birthday Poems 💝
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Verses written with love and care, just for you! 🌹
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {poems.map((poem, index) => (
            <Card key={index} className="poem-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                  {poem.title}
                </h3>
                <div className="text-center">
                  <p className="text-foreground leading-relaxed whitespace-pre-line italic text-lg">
                    {poem.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/message">
            <Button className="btn-love text-lg px-8 py-6 rounded-full">
              Read My Heart's Message 💌
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Poems;
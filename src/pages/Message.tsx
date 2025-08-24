import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Message = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-love-pink via-heart-red to-gold-accent bg-clip-text text-transparent">
            💌 A Message From The Heart 💌
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="poem-card">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                  Today marks another beautiful year of your existence, and I want you to know how incredibly special you are. 
                  Your smile has the power to light up entire rooms, your laughter is music to everyone's ears, and your 
                  kindness touches the hearts of all who know you.
                </p>
                
                <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                  As you celebrate this wonderful day, remember that you are loved beyond measure. Your presence in this 
                  world makes it a more beautiful place. Every moment shared with you is a treasure, every memory created 
                  is a gift that will be cherished forever.
                </p>
                
                <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                  May this new year of your life be filled with endless joy, boundless adventures, dreams that come true, 
                  and love that grows stronger each day. You deserve all the happiness in the world and so much more.
                </p>
                
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-semibold">
                  Happy Birthday, beautiful soul. May your day be as amazing as you are! 🎂✨💖
                </p>
                
                <div className="text-3xl mt-8">
                  🎉🎂🌟💝🌹🎈✨💖
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="btn-romantic text-lg px-8 py-6 rounded-full">
              Start Over 🔄
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
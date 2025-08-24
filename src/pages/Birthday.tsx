import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const languages = [
  { language: 'English', greeting: 'Happy Birthday to you' },
  { language: 'Spanish', greeting: 'Feliz cumpleaños a ti' },
  { language: 'French', greeting: 'Joyeux anniversaire à toi' },
  { language: 'German', greeting: 'Alles Gute zum Geburtstag' },
  { language: 'Italian', greeting: 'Buon compleanno a te' },
  { language: 'Portuguese', greeting: 'Feliz aniversário a você' },
  { language: 'Chinese (Mandarin)', greeting: '生日快乐 (shēng rì kuài lè)' },
  { language: 'Japanese', greeting: 'お誕生日おめでとう (otanjoubi omedetou)' },
  { language: 'Korean', greeting: '생일 축하해요 (saeng-il chukha haeyo)' },
  { language: 'Arabic', greeting: 'كل سنة وانت طيب (kull sana wa anta tayyib)' },
  { language: 'Russian', greeting: 'С днем рождения тебя (s dnyom rozhdeniya tebya)' },
  { language: 'Hindi', greeting: 'जन्मदिन मुबारक हो (janmadin mubarak ho)' },
  { language: 'Swedish', greeting: 'Grattis på födelsedagen' },
  { language: 'Polish', greeting: 'Wszystkiego najlepszego z okazji urodzin' },
  { language: 'Dutch', greeting: 'Gefeliciteerd met je verjaardag' },
  { language: 'Turkish', greeting: 'Doğum günün kutlu olsun' },
  { language: 'Thai', greeting: 'สุขสันต์วันเกิด (suk san wan geuad)' },
  { language: 'Vietnamese', greeting: 'Chúc mừng sinh nhật' },
  { language: 'Indonesian', greeting: 'Selamat ulang tahun' },
  { language: 'Malay', greeting: 'Selamat hari jadi' },
  { language: 'Hebrew', greeting: 'יום הולדת שמח (yom huledet sameach)' },
  { language: 'Greek', greeting: 'Χρόνια πολλά (chronia polla)' },
  { language: 'Hungarian', greeting: 'Boldog születésnapot' },
  { language: 'Finnish', greeting: 'Hyvää syntymäpäivää' },
  { language: 'Danish', greeting: 'Tillykke med fødselsdagen' },
  { language: 'Norwegian', greeting: 'Gratulerer med bursdagen' },
  { language: 'Czech', greeting: 'Všechno nejlepší k narozeninám' },
  { language: 'Romanian', greeting: 'La mulți ani' },
  { language: 'Bengali', greeting: 'শুভ জন্মদিন (shubho jonmodin)' },
  { language: 'Filipino', greeting: 'Maligayang kaarawan' }
];

const Birthday = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-love-pink via-heart-red to-gold-accent bg-clip-text text-transparent animate-pulse">
            🎉 Happy Birthday! 🎂
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Birthday wishes from around the world! 🌍✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {languages.map((lang, index) => (
            <Card key={index} className="language-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">{lang.language}</h3>
                <p className="text-lg text-foreground">{lang.greeting}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/poems">
            <Button className="btn-romantic text-lg px-8 py-6 rounded-full">
              Read Beautiful Poems 💝
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
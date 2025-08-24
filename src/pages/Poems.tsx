import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const poems = [
  {
    title: "1.",
    content: `مجھ کو ایک پھل بھی نہ توڑنے دیتا تھا کبھی 
اور کہتا تھا کہ اس باغ کی مالک تو ہے
دل کے شیشے میں مجھے اس نے اتارا تو کہا
اس کی پہلی تو نہیں اخری مالک تو ہے`
  },
  {
    title: "2.",
    content: `ات ٹھہری جو عدل پر تو یہ منت یہ التجا کیا ہے
چاند سا کہا تو کہنے لگی, چاند کہیے نا یہ چاند سا کیا ہے`
  },
  {
    title: "3.",
    content: `عجیب شخص ہے کہ ہر بات جھوٹ لگتی ہے 
وہ چھو کے دیکھ رہا ہے کہ گلاب اصلی ہے 
میں کیوں دکھاوے کی خاطر اجاڑ لوں خود کو 

یہ پھیکا رنگ یہ حالت خراب اصلی ہے`
  },
  {
    title: "4.",
    content: `کسی گلی میں کرائے پہ گھر لیا اس نے 
پھر اس گلی میں گھروں کے کرائے بڑھنے لگے`
  },
  {
    title: "5.",
    content: `اتر بھی اؤ کبھی اسماں کے زینے سے 
تمہیں خدا نے ہمارے لیے بنایا ہے 
مہک رہی ہے زمین چاندنی کے پھولوں سے 
خدا کسی کی محبت پہ مسکرایا ہے`
  },
  {
    title: "6.",
    content: `اپنی حالت کا مجھے دھیان نہیں ہوتا ہے
عشق سچا ہو تو اسان نہیں ہوتا ہے 
پہلے سے بڑھ کے محبت ہے مجھے تجھ سے اب
کیوں یقین تجھ کو میری جان نہیں ہوتا ہے`
  },
  {
    title: "7.",
    content: `اتنا پیارا ہے وہ چہرہ کے نظر پڑتے ہی 
لوگ ہاتھوں کی لکیروں کی طرف دیکھتے ہیں
اور جن کو اسانی سے میسر ہو دیدار تیرا 
وہ کہاں باغ میں پھولوں کی طرف دیکھتے ہیں`
  },
  {
    title: "8.",
    content: `میں زندگی میں فقط تجھے دیکھ پایا ہوں 
خدائے خواب میرا دیکھنا قبول کرے`
  },
  {
    title: "9.",
    content: `آپ کا حکم تھا ۔۔ سرکار!! نہیں ہونے دیا 

خود کو دنیا کا طلبگار نہیں ہونے دیا 

ایرے غیرے کو ٹھہرنے کی اجازت نہیں دی 

دل کو دل رکھا ہے بازار نہیں ہونے دیا۔۔`
  },
  {
    title: "10.",
    content: `آپ تو آپ ہیں۔۔۔ آپ تو سب کچھ ہیں۔

اور تو اور ہیں۔۔۔ اور تو کچھ بھی نہیں۔`
  },
  {
    title: "11.",
    content: `لوگ دو آنکھوں سے دیکھتے ہیں دنیا 

میں نے دو آنکھوں میں دنیا دیکھی ہے۔۔`
  },
  {
    title: "12.",
    content: `اس کی آنکھوں نے مجھ سے میری خودداری چھینی ورنہ 

پاؤں کی ٹھوکر سے میں کر دیتا تھا دنیا ایک طرف۔۔۔`
  },
  {
    title: "13.",
    content: `پھلوں بھری وہ ٹوکری سے پھل نہیں نکالتی 
میرے لیے وہ زندگی کا پل نہیں نکالتی 
ہزار بل نکالتی ہے اپنے بالوں سے مگر 
ہمارے ایک مسئلے کا حل نہیں نکالتی 
مجھے نکالنے کا اپنے دل سے ہنس کے کہتی ہے 
مجھے رلا کے کہتی ہے کہ چل نہیں نکالتے`
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
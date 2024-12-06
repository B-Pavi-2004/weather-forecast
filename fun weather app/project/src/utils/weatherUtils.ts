import { weatherCodes } from './weatherCodes';

export const getWeatherPrediction = (weatherCode: number): string => {
  switch (true) {
    case weatherCode === 0:
      return "Expect clear skies all day long! Perfect for outdoor activities! ☀️\n தாராளமாக குடும்பத்தோட வெளியா போங்க, இன்றைக்கு கன்பார்ம் மழை வராது \nआज पूरे दिन एकदम साफ आसमान रहेगा! बाहर घूमने-फिरने का एकदम शानदार मौसम है!";
    case weatherCode >= 1 && weatherCode <= 3:
      return "Clouds will be playing peek-a-boo with the sun today! 🌤️\n இன்னைக்கு மேகமும் சூரியனும் டாம் & ஜெர்ரி ஷோ போட்றாங்க! 🌤️ சூரியன் தலைய காட்டி காட்டி ஓடுது, மேகம் துரத்தி துரத்தி பிடிக்குது! இந்த காமெடி நடக்கும் போதே வெளிய கிளம்பி சுத்திட்டு வாங்க! \nआज बादल और सूरज आंख-मिचौली खेल रहे हैं!";
    case weatherCode >= 45 && weatherCode <= 48:
      return "Foggy conditions will persist throughout the day, drive carefully! 🌫️ இன்னைக்கு கொஞ்சம் பனி மூட்டமா இருக்கும் அதுனால அர்ஜுனர் வில்லு மாதிரி வண்டி ஓட்டாம கொஞ்சம் நிதானமா ஓட்டினா எல்லாருக்கும் நல்லது.दिन भर कोहरा छाया रहेगा, गाड़ी सावधानी से चलाएं!";
    case weatherCode >= 51 && weatherCode <= 55:
  return "Light drizzles in the forecast! \nதூரல் மழை தான்னு நினைச்சு குடை எடுக்காம போனா, டீக்கடைல கரைஞ்ச சக்கரை மாதிரி நனைஞ்சு போயிடுவீங்க! 🌦️ கை குடையாவது கொண்டு போங்க! \nहल्की बूंदा-बांदी होने की संभावना है!";

case weatherCode >= 61 && weatherCode <= 65:
  return "Rain showers incoming!\n மழை வர போகுது! ரெயின்கோட் இல்லாம போனா வீட்டுக்கு திரும்பும் போது சோப்பு போட்டு குளிச்ச நாய் மாதிரி ஆயிடுவீங்க! 🌧️ முன்னாடியே ரெடியா இருங்க! \nबारिश आने वाली है!";

case weatherCode >= 71 && weatherCode <= 77:
  return "Snowy conditions ahead!\n பனி பொழிவு வரப்போகுது! ஃப்ரிட்ஜ்ல வச்ச ஐஸ்க்ரீம் மாதிரி உறைஞ்சு போயிடாதீங்க! சால்வை போட்டுக்கிட்டு, பனி மனிதன் கூட செல்ஃபி எடுக்கலாம் வாங்க! ❄️ \nबर्फबारी की स्थिति आने वाली है!";

case weatherCode >= 80 && weatherCode <= 82:
  return "Scattered rain showers expected!\n இங்க ஒரு சொட்டு, அங்க ஒரு சொட்டுன்னு விளையாட போகுது மழை! குடை இல்லாம வெளிய போனா நனைஞ்ச கோழி மாதிரி திரும்ப வீட்டுக்கு ஓட வேண்டியிருக்கும்! 🌦️ \nछींटे-फुहार पड़ने की संभावना है!";

case weatherCode >= 95:
  return "Thunderstorms on the horizon!\n இடி மின்னலோட வர போகுது பெரிய மழை! வெளிய போனா இந்திரன் கூட சண்டைக்கு வர சான்ஸ் இருக்கு! வீட்ல இருந்து பஜ்ஜி செஞ்சி சாப்பிடுங்க! ⛈️ \nआंधी-तूफान आने की संभावना है!";

default:
  return "Weather is stable and nice! \nவானம் சூப்பரா இருக்கு! சும்மா வீட்ல முழிக்காம வெளிய வாங்க! 😎 பொழுத கழிக்கலாம்!  \nमौसम एकदम बढ़िया और सुहावना है!";
  }
};

export const getFunnyMessage = (weatherCode: number, temp: number): string => {
  const weather = weatherCodes[weatherCode];
  const messages: Record<string, string[]> = {
    "Clear sky": [
      "Perfect day to work on your suntan! ☀️",
      "Even the clouds took a day off! 😎",
    ],
    "Mainly clear": [
      "Just a few clouds playing hide and seek! 🌤️",
      "The sun is winning today! 🌞",
    ],
    "Partly cloudy": [
      "Grab a book and find a cozy spot! ⛅",
      "Perfect weather for cloud watching! 🎨",
    ],
    "Overcast": [
      "The clouds are having a party up there! ☁️",
      "Cozy indoor weather alert! 🏠",
    ],
    "Foggy": [
      "Someone left their cloud machine on! 🌫️",
      "Playing hide and seek with the horizon! 👻",
    ],
    "Light drizzle": [
      "Nature's way of spritzing your plants! 💦",
      "Time for a gentle rain dance! 🌧️",
    ],
    "Heavy rain": [
      "Perfect weather for ducks! 🦆",
      "Time to test those rain boots! 🌧️",
    ],
    "Thunderstorm": [
      "Thor's having a bowling party! ⚡",
      "Nature's light show in progress! 🌩️",
    ],
  };

  // Temperature messages based on actual temperature ranges
  const getTempMessage = (temp: number): string => {
    if (temp > 30) return "🔥 It's a scorcher out there!";
    if (temp > 25) return "☀️ Perfect beach weather!";
    if (temp > 20) return "😎 T-shirt weather!";
    if (temp > 15) return "👌 Perfect temperature for outdoor activities!";
    if (temp > 10) return "🍂 Light jacket weather!";
    if (temp > 5) return "🧥 Better grab a coat!";
    return "🥶 Bundle up, it's chilly out there!";
  };

  const weatherType = weather?.label || "Unknown";
  const defaultMessages = ["Weather's doing its own thing today! 🎲"];
  const weatherMessages = messages[weatherType] || defaultMessages;
  
  return `${weatherMessages[Math.floor(Math.random() * weatherMessages.length)]} ${getTempMessage(temp)}`;
};

export const formatTemperature = (temp: number): number => {
  return Math.round(temp);
};

export const getWeatherInfo = (code: number) => {
  return weatherCodes[code] || { label: "Unknown", icon: "❓" };
};
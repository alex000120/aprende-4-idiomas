export type Phrase = {
  id: string;
  category: string;
  emoji: string;
  level: number;
  tip: string;
  spanish: string;
  english: string;
  chinese: string;
  japanese: string;
  chinesePinyin?: string;
  japaneseRomaji?: string;
};

export const categories = [
  'Saludos',
  'Viajes',
  'Comida',
  'Familia',
  'Trabajo'
] as const;

export const vocabulary = [
  { es: 'hola', en: 'hello', zh: '你好', ja: 'こんにちは' },
  { es: 'gracias', en: 'thank you', zh: '谢谢', ja: 'ありがとうございます' },
  { es: 'agua', en: 'water', zh: '水', ja: '水' },
  { es: 'familia', en: 'family', zh: '家人', ja: '家族' },
  { es: 'trabajo', en: 'work', zh: '工作', ja: '仕事' },
  { es: 'viaje', en: 'trip', zh: '旅行', ja: '旅行' }
] as const;

export const phrases: Phrase[] = [
  {
    id: 'hola-como-estas',
    category: 'Saludos',
    emoji: '👋',
    level: 1,
    tip: 'Se usa para saludar de forma natural y cordial.',
    spanish: 'Hola, ¿cómo estás?',
    english: 'Hi, how are you?',
    chinese: '你好，你好吗？',
    japanese: 'こんにちは、元気ですか？',
    chinesePinyin: 'Nǐ hǎo, nǐ hǎo ma?',
    japaneseRomaji: 'Konnichiwa, genki desu ka?'
  },
  {
    id: 'muchas-gracias',
    category: 'Saludos',
    emoji: '🙏',
    level: 1,
    tip: 'Muy útil para mostrar agradecimiento.',
    spanish: 'Muchas gracias por tu ayuda.',
    english: 'Thank you very much for your help.',
    chinese: '非常感谢你的帮助。',
    japanese: 'ご協力ありがとうございます。',
    chinesePinyin: 'Fēicháng xièxie nǐ de bāngzhù.',
    japaneseRomaji: 'Gōkyōryoku arigatō gozaimasu.'
  },
  {
    id: 'quiero-agua',
    category: 'Comida',
    emoji: '💧',
    level: 2,
    tip: 'Una frase práctica para pedir bebida.',
    spanish: 'Quiero agua, por favor.',
    english: 'I want water, please.',
    chinese: '我想要水，谢谢。',
    japanese: '水をお願いします。',
    chinesePinyin: 'Wǒ xiǎng yào shuǐ, xièxie.',
    japaneseRomaji: 'Mizu o onegaishimasu.'
  },
  {
    id: 'vamos-de-viaje',
    category: 'Viajes',
    emoji: '✈️',
    level: 2,
    tip: 'Perfecta para hablar de desplazamientos.',
    spanish: 'Vamos de viaje este fin de semana.',
    english: 'We are going on a trip this weekend.',
    chinese: '这个周末我们去旅行。',
    japanese: '今週末に旅行に行きます。',
    chinesePinyin: 'Zhège zhōumò wǒmen qù lǚxíng.',
    japaneseRomaji: 'Konshūmatsu ni ryokō ni ikimasu.'
  },
  {
    id: 'mi-familia',
    category: 'Familia',
    emoji: '👨‍👩‍👧',
    level: 2,
    tip: 'Útil para hablar de tus seres queridos.',
    spanish: 'Mi familia es muy unida.',
    english: 'My family is very close.',
    chinese: '我的家人非常团结。',
    japanese: '私の家族はとても仲が良いです。',
    chinesePinyin: 'Wǒ de jiārén fēicháng tuánjié.',
    japaneseRomaji: 'Watashi no kazoku wa totemo nakagaī desu.'
  },
  {
    id: 'trabajo-hoy',
    category: 'Trabajo',
    emoji: '💼',
    level: 3,
    tip: 'Muy útil en contextos profesionales.',
    spanish: 'Hoy tengo mucho trabajo.',
    english: 'I have a lot of work today.',
    chinese: '我今天有很多工作要做。',
    japanese: '今日は仕事がたくさんあります。',
    chinesePinyin: 'Wǒ jīntiān yǒu hěnduō gōngzuò yào zuò.',
    japaneseRomaji: 'Kyō wa shigoto ga takusan arimasu.'
  }
];

export const lessonCards = [
  {
    tag: 'Básico',
    title: 'Saludos y presentaciones',
    description: 'Domina las frases más útiles para empezar conversaciones.',
    points: ['Saludar', 'Presentarte', 'Preguntar cómo está alguien']
  },
  {
    tag: 'Práctica',
    title: 'Viajar con confianza',
    description: 'Aprende vocabulario para transporte, hoteles y direcciones.',
    points: ['Solicitar ayuda', 'Pedir direcciones', 'Hablar de horarios']
  },
  {
    tag: 'Daily',
    title: 'Comida y café',
    description: 'Frases necesarias para pedir y describir comidas.',
    points: ['Pedir comida', 'Hacer preguntas', 'Expresar preferencias']
  },
  {
    tag: 'Avanzado',
    title: 'Trabajo y reuniones',
    description: 'Habla con claridad en contextos profesionales.',
    points: ['Presentar ideas', 'Darse la bienvenida', 'Hablar de tareas']
  }
] as const;

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

// ========== MASTER ANNIE AVATAR COMPONENT ==========
const MasterAvatar = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="avatarClip"><circle cx="60" cy="60" r="58"/></clipPath>
      <radialGradient id="skinGrad" cx="50%" cy="40%"><stop offset="0%" stopColor="#E8C9A0"/><stop offset="100%" stopColor="#D4A574"/></radialGradient>
      <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8B6914"/><stop offset="30%" stopColor="#6B4E12"/><stop offset="70%" stopColor="#7A5A15"/><stop offset="100%" stopColor="#5C4410"/></linearGradient>
      <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2A2018"/><stop offset="100%" stopColor="#1A1410"/></linearGradient>
    </defs>
    <g clipPath="url(#avatarClip)">
      {/* Background */}
      <rect width="120" height="120" fill="#F0EBE3"/>
      {/* Jacket / Body */}
      <path d="M20,88 Q25,78 40,74 Q50,71 60,72 Q70,71 80,74 Q95,78 100,88 L100,120 L20,120 Z" fill="url(#jacketGrad)"/>
      {/* Jacket details - collar */}
      <path d="M45,74 L52,82 L48,86 L40,78 Z" fill="#5C4410" opacity="0.7"/>
      <path d="M75,74 L68,82 L72,86 L80,78 Z" fill="#5C4410" opacity="0.7"/>
      {/* Jacket stitch lines */}
      <line x1="38" y1="90" x2="38" y2="105" stroke="#4A3A0E" strokeWidth="0.5" opacity="0.5"/>
      <line x1="82" y1="90" x2="82" y2="105" stroke="#4A3A0E" strokeWidth="0.5" opacity="0.5"/>
      {/* Pockets */}
      <rect x="30" y="92" width="16" height="10" rx="1" fill="#5C4410" opacity="0.6"/>
      <rect x="74" y="92" width="16" height="10" rx="1" fill="#5C4410" opacity="0.6"/>
      <line x1="30" y1="95" x2="46" y2="95" stroke="#4A3A0E" strokeWidth="0.5"/>
      <line x1="74" y1="95" x2="90" y2="95" stroke="#4A3A0E" strokeWidth="0.5"/>
      {/* Pocket snaps */}
      <circle cx="38" cy="95" r="1" fill="#C0A060"/>
      <circle cx="82" cy="95" r="1" fill="#C0A060"/>
      {/* "CRAZY HORSE" text on jacket */}
      <text x="36" y="89" fill="#D4C4A0" fontSize="5.5" fontFamily="serif" fontWeight="bold" letterSpacing="0.5" opacity="0.85">CRAZY</text>
      <text x="70" y="89" fill="#D4C4A0" fontSize="5.5" fontFamily="serif" fontWeight="bold" letterSpacing="0.5" opacity="0.85">HORSE</text>
      {/* Neck */}
      <path d="M50,72 Q52,68 55,66 Q58,65 60,65 Q62,65 65,66 Q68,68 70,72" fill="url(#skinGrad)"/>
      {/* Head / Face */}
      <ellipse cx="60" cy="45" rx="22" ry="26" fill="url(#skinGrad)"/>
      {/* Hair - slicked back with long ponytail */}
      <path d="M38,42 Q38,20 60,18 Q82,20 82,42 Q80,30 60,28 Q40,30 38,42 Z" fill="url(#hairGrad)"/>
      {/* Side hair */}
      <path d="M38,42 Q36,38 37,32 Q38,26 42,22 L38,35 Z" fill="#1A1410"/>
      <path d="M82,42 Q84,38 83,32 Q82,26 78,22 L82,35 Z" fill="#1A1410"/>
      {/* Ponytail going behind */}
      <path d="M82,35 Q86,40 87,50 Q88,60 85,70 Q84,74 82,75" fill="none" stroke="#1A1410" strokeWidth="5" strokeLinecap="round"/>
      {/* Eyebrows - slightly raised, confident */}
      <path d="M44,38 Q48,35 54,37" fill="none" stroke="#2A2018" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M66,37 Q72,35 76,38" fill="none" stroke="#2A2018" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Eyes - narrow, confident squint */}
      <path d="M46,42 Q50,40 54,42 Q50,43.5 46,42 Z" fill="#1A1410"/>
      <path d="M66,42 Q70,40 74,42 Q70,43.5 66,42 Z" fill="#1A1410"/>
      {/* Eye shine */}
      <circle cx="50" cy="41.5" r="0.8" fill="white" opacity="0.6"/>
      <circle cx="70" cy="41.5" r="0.8" fill="white" opacity="0.6"/>
      {/* Nose */}
      <path d="M58,45 Q60,52 62,45" fill="none" stroke="#C4956A" strokeWidth="1" strokeLinecap="round"/>
      {/* Confident slight smile */}
      <path d="M50,55 Q55,59 60,58 Q65,59 70,55" fill="none" stroke="#9A7050" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Mustache */}
      <path d="M50,52 Q55,54 60,53 Q65,54 70,52" fill="#2A2018" opacity="0.7"/>
      {/* Goatee */}
      <path d="M54,60 Q57,65 60,66 Q63,65 66,60" fill="#2A2018" opacity="0.5"/>
      {/* Jaw lines / wrinkles for character */}
      <path d="M42,50 Q40,55 42,60" fill="none" stroke="#C4956A" strokeWidth="0.5" opacity="0.4"/>
      <path d="M78,50 Q80,55 78,60" fill="none" stroke="#C4956A" strokeWidth="0.5" opacity="0.4"/>
      {/* Smile lines */}
      <path d="M47,48 Q46,52 48,55" fill="none" stroke="#C4956A" strokeWidth="0.5" opacity="0.3"/>
      <path d="M73,48 Q74,52 72,55" fill="none" stroke="#C4956A" strokeWidth="0.5" opacity="0.3"/>
    </g>
    {/* Border ring */}
    <circle cx="60" cy="60" r="58" fill="none" stroke="#92400E" strokeWidth="3" opacity="0.6"/>
  </svg>
);

// ========== DRINK DATABASE ==========
const drinkDatabase = {
  whisky: {
    scotchBlended: [
      { id: 'ballantine-finest', name: 'Ballantine Finest', nameJa: 'バランタイン ファイネスト', price: 500, beginner: true, taste: { sweet: 4, smoky: 1, fruity: 3, dry: 2, strong: 2 }, profile: { en: 'Vanilla, honey, smooth and easy to drink', ja: 'バニラ・はちみつの甘い香り、まろやかで飲みやすい', zh: '香草蜂蜜香气，顺滑易饮', ko: '바닐라, 꿀 향, 부드럽고 마시기 쉬움', fr: 'Vanille, miel, doux et facile à boire', es: 'Vainilla, miel, suave y fácil de beber', it: 'Vaniglia, miele, morbido e facile da bere' }, category: 'whisky', subcat: 'Scotch Blended' },
      { id: 'ballantine-7', name: 'Ballantine 7 Year', nameJa: 'バランタイン 7年', price: 600, beginner: false, taste: { sweet: 3, smoky: 2, fruity: 4, dry: 2, strong: 3 }, profile: { en: 'Apple, pear fruity notes with oak', ja: 'りんご・洋梨のフルーティーさ、オーク樽の風味', zh: '苹果梨果香，橡木风味', ko: '사과, 배 과일향, 오크 풍미', fr: 'Pomme, poire fruité avec chêne', es: 'Manzana, pera afrutado con roble', it: 'Mela, pera fruttato con quercia' }, category: 'whisky', subcat: 'Scotch Blended' },
      { id: 'johnnie-black', name: 'Johnnie Walker Black', nameJa: 'ジョニーウォーカー 黒', price: 700, beginner: false, taste: { sweet: 2, smoky: 4, fruity: 2, dry: 4, strong: 4 }, profile: { en: 'Smoky, dried fruit, rich body', ja: 'スモーキー、ドライフルーツ、重厚感', zh: '烟熏，干果，厚重', ko: '스모키, 드라이프루츠, 깊은 바디', fr: 'Fumé, fruits secs, corps riche', es: 'Ahumado, fruta seca, cuerpo rico', it: 'Affumicato, frutta secca, corpo ricco' }, category: 'whisky', subcat: 'Scotch Blended' },
      { id: 'dewars-white', name: "Dewar's White Label", nameJa: 'デュワーズ ホワイトラベル', price: 500, beginner: true, taste: { sweet: 3, smoky: 1, fruity: 3, dry: 2, strong: 2 }, profile: { en: 'Honey, heather, light, great for highball', ja: 'はちみつ・ヘザーの花、軽やか、ハイボール向き', zh: '蜂蜜石楠花香，轻盈，适合高杯', ko: '꿀, 헤더 향, 가벼움, 하이볼용', fr: 'Miel, bruyère, léger, idéal pour highball', es: 'Miel, brezo, ligero, ideal para highball', it: 'Miele, erica, leggero, ottimo per highball' }, category: 'whisky', subcat: 'Scotch Blended' },
    ],
    scotchSingleMalt: [
      { id: 'glenlivet-12', name: 'Glenlivet 12 Year', nameJa: 'グレンリベット 12年', price: 700, beginner: true, taste: { sweet: 4, smoky: 1, fruity: 5, dry: 1, strong: 3 }, profile: { en: 'Green apple, pear, vanilla, floral and elegant', ja: '青りんご・洋梨、バニラ、華やかでフルーティー', zh: '青苹果，梨，香草，花香优雅', ko: '청사과, 배, 바닐라, 플로럴하고 우아함', fr: 'Pomme verte, poire, vanille, floral et élégant', es: 'Manzana verde, pera, vainilla, floral y elegante', it: 'Mela verde, pera, vaniglia, floreale ed elegante' }, category: 'whisky', subcat: 'Scotch Single Malt' },
      { id: 'glenfiddich-12', name: 'Glenfiddich 12 Year', nameJa: 'グレンフィディック 12年', price: 700, beginner: true, taste: { sweet: 3, smoky: 1, fruity: 5, dry: 2, strong: 3 }, profile: { en: 'Fresh pear, light and clean finish', ja: 'フレッシュな洋梨、軽やか、クリーン', zh: '新鲜梨香，轻盈干净', ko: '신선한 배, 가볍고 깔끔', fr: 'Poire fraîche, léger et pur', es: 'Pera fresca, ligero y limpio', it: 'Pera fresca, leggero e pulito' }, category: 'whisky', subcat: 'Scotch Single Malt' },
      { id: 'macallan-12', name: 'The Macallan 12 Year', nameJa: 'ザ マッカラン 12年', price: 1500, beginner: false, taste: { sweet: 4, smoky: 1, fruity: 3, dry: 3, strong: 4 }, profile: { en: 'Sherry cask, dried fruit, rich luxury experience', ja: 'シェリー樽由来のドライフルーツ、リッチ、高級感', zh: '雪莉桶，干果，奢华体验', ko: '셰리 캐스크, 드라이프루츠, 럭셔리한 경험', fr: 'Fût de xérès, fruits secs, expérience luxueuse', es: 'Barril de jerez, fruta seca, experiencia lujosa', it: 'Botte di sherry, frutta secca, esperienza lussuosa' }, category: 'whisky', subcat: 'Scotch Single Malt' },
      { id: 'talisker-10', name: 'Talisker 10 Year', nameJa: 'タリスカー 10年', price: 800, beginner: false, taste: { sweet: 2, smoky: 4, fruity: 2, dry: 4, strong: 4 }, profile: { en: 'Sea breeze, black pepper, powerful and memorable', ja: '海の潮風、黒胡椒のスパイス、力強い', zh: '海风，黑胡椒，强劲难忘', ko: '바다 바람, 흑후추, 파워풀하고 인상적', fr: 'Brise marine, poivre noir, puissant et mémorable', es: 'Brisa marina, pimienta negra, poderoso y memorable', it: 'Brezza marina, pepe nero, potente e memorabile' }, category: 'whisky', subcat: 'Scotch Single Malt' },
      { id: 'laphroaig-12', name: 'Laphroaig 12 Year', nameJa: 'ラフロイグ 12年', price: 1000, beginner: false, taste: { sweet: 1, smoky: 5, fruity: 1, dry: 5, strong: 5 }, profile: { en: 'Intense medicinal smoke, iodine, for true connoisseurs', ja: '薬品的スモーク、ヨード香、独特、上級者向け', zh: '浓烈药味烟熏，碘香，真正鉴赏家之选', ko: '강렬한 약품 스모크, 요오드, 진정한 감정가용', fr: 'Fumée médicinale intense, iode, pour vrais connaisseurs', es: 'Humo medicinal intenso, yodo, para verdaderos conocedores', it: 'Fumo medicinale intenso, iodio, per veri intenditori' }, category: 'whisky', subcat: 'Scotch Single Malt' },
      { id: 'bowmore-12', name: 'Bowmore 12 Year', nameJa: 'ボウモア 12年', price: 800, beginner: false, taste: { sweet: 3, smoky: 4, fruity: 3, dry: 3, strong: 4 }, profile: { en: 'Balanced smoke with sherry sweetness, complex', ja: 'スモーキー、シェリーの甘み、複雑', zh: '烟熏与雪莉甜味平衡，复杂', ko: '스모키와 셰리 단맛의 균형, 복잡함', fr: 'Fumée équilibrée avec douceur de xérès, complexe', es: 'Humo equilibrado con dulzura de jerez, complejo', it: 'Fumo equilibrato con dolcezza di sherry, complesso' }, category: 'whisky', subcat: 'Scotch Single Malt' },
    ],
    japanese: [
      { id: 'black-nikka', name: 'Black Nikka', nameJa: 'ブラックニッカ', price: 500, beginner: true, taste: { sweet: 3, smoky: 1, fruity: 3, dry: 2, strong: 2 }, profile: { en: 'Clean, vanilla, perfect for highball', ja: 'すっきり、バニラ、ハイボール向き', zh: '清爽，香草，完美高杯', ko: '깔끔, 바닐라, 하이볼에 완벽', fr: 'Pur, vanille, parfait pour highball', es: 'Limpio, vainilla, perfecto para highball', it: 'Pulito, vaniglia, perfetto per highball' }, category: 'whisky', subcat: 'Japanese' },
      { id: 'kakubin', name: 'Suntory Kaku', nameJa: '角', price: 500, beginner: true, taste: { sweet: 2, smoky: 1, fruity: 2, dry: 4, strong: 2 }, profile: { en: 'Dry, crisp, THE Japanese highball standard', ja: 'ドライ、キレ、ハイボールの定番', zh: '干爽，清脆，日本高杯经典', ko: '드라이, 상쾌, 일본 하이볼의 정석', fr: 'Sec, vif, LE standard du highball japonais', es: 'Seco, crujiente, EL estándar del highball japonés', it: 'Secco, frizzante, LO standard giapponese dell\'highball' }, category: 'whisky', subcat: 'Japanese' },
      { id: 'suntory-old', name: 'Suntory Old', nameJa: 'サントリーオールド', price: 600, beginner: true, taste: { sweet: 4, smoky: 2, fruity: 3, dry: 2, strong: 3 }, profile: { en: 'Classic Japanese whisky, oak and sweet finish', ja: '樽香、甘い余韻、昔ながらの味', zh: '经典日本威士忌，橡木甜香', ko: '클래식 일본 위스키, 오크와 달콤한 피니시', fr: 'Whisky japonais classique, chêne et finale douce', es: 'Whisky japonés clásico, roble y final dulce', it: 'Whisky giapponese classico, quercia e finale dolce' }, category: 'whisky', subcat: 'Japanese' },
      { id: 'nikka-thenikka', name: 'The Nikka', nameJa: 'ザ ニッカ', price: 1200, beginner: false, taste: { sweet: 3, smoky: 2, fruity: 4, dry: 3, strong: 4 }, profile: { en: 'Delicate, complex, long elegant finish', ja: '繊細、複雑、長い余韻', zh: '细腻，复杂，优雅悠长', ko: '섬세함, 복잡함, 긴 여운', fr: 'Délicat, complexe, longue finale élégante', es: 'Delicado, complejo, largo final elegante', it: 'Delicato, complesso, lungo finale elegante' }, category: 'whisky', subcat: 'Japanese' },
    ],
    bourbon: [
      { id: 'jack-daniels', name: "Jack Daniel's", nameJa: 'ジャックダニエル', price: 600, beginner: true, taste: { sweet: 4, smoky: 2, fruity: 2, dry: 2, strong: 3 }, profile: { en: 'Vanilla, caramel, smooth American classic', ja: 'バニラ、キャラメル、まろやか', zh: '香草，焦糖，顺滑美式经典', ko: '바닐라, 카라멜, 스무스한 미국 클래식', fr: 'Vanille, caramel, classique américain doux', es: 'Vainilla, caramelo, clásico americano suave', it: 'Vaniglia, caramello, classico americano morbido' }, category: 'whisky', subcat: 'Bourbon' },
      { id: 'jim-beam', name: 'Jim Beam', nameJa: 'ジムビーム', price: 500, beginner: true, taste: { sweet: 4, smoky: 1, fruity: 2, dry: 2, strong: 2 }, profile: { en: 'Vanilla, corn sweetness, great mixer', ja: 'バニラ、コーン、甘口、ハイボール向き', zh: '香草，玉米甜，极佳调酒基酒', ko: '바닐라, 콘, 달콤, 믹서로 좋음', fr: 'Vanille, douceur de maïs, excellent pour cocktails', es: 'Vainilla, dulzura de maíz, excelente para mezclar', it: 'Vaniglia, dolcezza di mais, ottimo per cocktail' }, category: 'whisky', subcat: 'Bourbon' },
      { id: 'makers-mark', name: "Maker's Mark", nameJa: 'メーカーズマーク', price: 700, beginner: false, taste: { sweet: 5, smoky: 1, fruity: 3, dry: 1, strong: 3 }, profile: { en: 'Wheat softness, honey, caramel richness', ja: '小麦由来のまろやかさ、甘口', zh: '小麦柔和，蜂蜜，焦糖丰富', ko: '밀의 부드러움, 꿀, 카라멜', fr: 'Douceur de blé, miel, richesse de caramel', es: 'Suavidad de trigo, miel, riqueza de caramelo', it: 'Morbidezza del grano, miele, ricchezza di caramello' }, category: 'whisky', subcat: 'Bourbon' },
      { id: 'wild-turkey', name: 'Wild Turkey 8 Year', nameJa: 'ワイルドターキー 8年', price: 800, beginner: false, taste: { sweet: 3, smoky: 2, fruity: 2, dry: 4, strong: 5 }, profile: { en: 'Bold, spicy, oak-forward, high proof kick', ja: 'スパイシー、オーク、力強い', zh: '大胆，辛辣，橡木突出，高度冲击', ko: '대담, 스파이시, 오크 풍부, 높은 도수', fr: 'Audacieux, épicé, chêne dominant, fort en alcool', es: 'Audaz, picante, roble dominante, alto grado', it: 'Audace, speziato, quercia dominante, alto grado' }, category: 'whisky', subcat: 'Bourbon' },
    ],
    irish: [
      { id: 'jameson', name: 'Jameson', nameJa: 'ジェムソン', price: 600, beginner: true, taste: { sweet: 4, smoky: 0, fruity: 3, dry: 2, strong: 2 }, profile: { en: 'Triple distilled smoothness, nutty, approachable', ja: 'スムース、ナッティ、まろやか', zh: '三次蒸馏顺滑，坚果香，平易近人', ko: '트리플 증류 스무스, 너티, 친근함', fr: 'Douceur triple distillation, noisette, accessible', es: 'Suavidad triple destilación, a nueces, accesible', it: 'Morbidezza tripla distillazione, nocciolato, accessibile' }, category: 'whisky', subcat: 'Irish' },
      { id: 'bushmills', name: 'Bushmills', nameJa: 'ブッシュミルズ', price: 600, beginner: true, taste: { sweet: 4, smoky: 0, fruity: 3, dry: 2, strong: 2 }, profile: { en: 'Light, honey, vanilla, most approachable whisky', ja: '軽やか、はちみつ、バニラ、飲みやすい', zh: '轻盈，蜂蜜，香草，最易饮威士忌', ko: '가벼움, 꿀, 바닐라, 가장 마시기 쉬운 위스키', fr: 'Léger, miel, vanille, whisky le plus accessible', es: 'Ligero, miel, vainilla, whisky más accesible', it: 'Leggero, miele, vaniglia, whisky più accessibile' }, category: 'whisky', subcat: 'Irish' },
    ]
  },
  shochu: {
    imo: [
      { id: 'satsuma-shimabijin', name: 'Satsuma Shimabijin', nameJa: 'さつま島美人', price: 500, beginner: true, taste: { sweet: 4, rich: 3, clean: 4, earthy: 3 }, profile: { en: 'Soft sweetness, mellow, easy drinking sweet potato', ja: 'やわらかい甘み、まろやか、飲みやすい', zh: '柔和甜味，醇厚，易饮红薯烧酒', ko: '부드러운 단맛, 순함, 마시기 쉬운 고구마 소주', fr: 'Douceur douce, moelleux, patate douce facile', es: 'Dulzura suave, suave, batata fácil de beber', it: 'Dolcezza morbida, mellow, patata dolce facile' }, category: 'shochu', subcat: 'Imo (Sweet Potato)' },
      { id: 'kuro-kirishima', name: 'Kuro Kirishima', nameJa: '黒霧島', price: 500, beginner: true, taste: { sweet: 3, rich: 3, clean: 4, earthy: 3 }, profile: { en: 'Clean, mellow, Japan\'s most popular shochu', ja: 'すっきり、まろやか、定番', zh: '清爽，醇厚，日本最受欢迎的烧酒', ko: '깔끔, 부드러움, 일본에서 가장 인기 있는 소주', fr: 'Pur, moelleux, shochu le plus populaire du Japon', es: 'Limpio, suave, shochu más popular de Japón', it: 'Pulito, mellow, shochu più popolare del Giappone' }, category: 'shochu', subcat: 'Imo (Sweet Potato)' },
      { id: 'tomi-no-houzan', name: 'Tomi no Houzan', nameJa: '富乃宝山', price: 500, beginner: true, taste: { sweet: 4, rich: 2, clean: 4, earthy: 2 }, profile: { en: 'Fruity, fragrant, modern style shochu', ja: 'フルーティー、華やか、飲みやすい', zh: '果香，芬芳，现代风格烧酒', ko: '프루티, 화사함, 모던 스타일 소주', fr: 'Fruité, parfumé, style shochu moderne', es: 'Afrutado, fragante, estilo shochu moderno', it: 'Fruttato, profumato, stile shochu moderno' }, category: 'shochu', subcat: 'Imo (Sweet Potato)' },
      { id: 'sato-shiro', name: 'Sato (White Koji)', nameJa: '佐藤（白麹）', price: 500, beginner: true, taste: { sweet: 3, rich: 2, clean: 5, earthy: 2 }, profile: { en: 'Elegant, clean, refined sweet potato character', ja: '上品、すっきり、飲みやすい', zh: '优雅，干净，精致红薯风味', ko: '우아함, 깔끔, 세련된 고구마 캐릭터', fr: 'Élégant, pur, caractère de patate douce raffiné', es: 'Elegante, limpio, carácter refinado de batata', it: 'Elegante, pulito, carattere raffinato di patata dolce' }, category: 'shochu', subcat: 'Imo (Sweet Potato)' },
      { id: 'aka-kirishima', name: 'Aka Kirishima', nameJa: '赤霧島', price: 500, beginner: true, taste: { sweet: 4, rich: 3, clean: 3, earthy: 2 }, profile: { en: 'Fruity, sweet aroma, orange sweet potato variety', ja: 'フルーティー、甘い香り、華やか', zh: '果香，甜香，橙色红薯品种', ko: '프루티, 달콤한 향, 오렌지색 고구마 품종', fr: 'Fruité, arôme doux, variété de patate douce orange', es: 'Afrutado, aroma dulce, variedad de batata naranja', it: 'Fruttato, aroma dolce, varietà di patata dolce arancione' }, category: 'shochu', subcat: 'Imo (Sweet Potato)' },
    ],
    kokuto: [
      { id: 'asahi', name: 'Asahi', nameJa: '朝日', price: 500, beginner: true, taste: { sweet: 5, rich: 3, clean: 3, earthy: 1 }, profile: { en: 'Brown sugar sweetness, gentle, island flavor', ja: '黒糖のやさしい甘み、まろやか', zh: '黑糖甜味，温和，岛屿风味', ko: '흑설탕 단맛, 부드러움, 섬 풍미', fr: 'Douceur de sucre brun, doux, saveur d\'île', es: 'Dulzura de azúcar moreno, suave, sabor de isla', it: 'Dolcezza di zucchero bruno, dolce, sapore di isola' }, category: 'shochu', subcat: 'Kokuto (Brown Sugar)' },
      { id: 'rento', name: 'Rento', nameJa: 'れんと', price: 500, beginner: true, taste: { sweet: 3, rich: 1, clean: 5, earthy: 1 }, profile: { en: 'Light, refreshing, no quirks, easy for anyone', ja: '軽やか、爽やか、クセなし', zh: '轻盈，清爽，无杂味，人人易饮', ko: '가벼움, 상쾌, 잡맛 없음, 누구나 쉽게', fr: 'Léger, rafraîchissant, sans particularité', es: 'Ligero, refrescante, sin peculiaridades', it: 'Leggero, rinfrescante, senza particolarità' }, category: 'shochu', subcat: 'Kokuto (Brown Sugar)' },
    ],
    mugi: [
      { id: 'nikaido', name: 'Nikaido', nameJa: '二階堂', price: 500, beginner: true, taste: { sweet: 2, rich: 2, clean: 5, earthy: 2 }, profile: { en: 'Clean, roasted barley aroma, universal appeal', ja: 'すっきり、麦の香ばしさ、飲みやすい', zh: '清爽，烤麦香，普遍受欢迎', ko: '깔끔, 구운 보리 향, 보편적 매력', fr: 'Pur, arôme d\'orge torréfié, attrait universel', es: 'Limpio, aroma de cebada tostada, atractivo universal', it: 'Pulito, aroma di orzo tostato, appeal universale' }, category: 'shochu', subcat: 'Mugi (Barley)' },
    ]
  },
  cocktails: {
    sweet: [
      { id: 'cassis-orange', name: 'Cassis Orange', nameJa: 'カシスオレンジ', price: 500, beginner: true, taste: { sweet: 5, sour: 2, fruity: 5, refreshing: 3, strong: 1 }, profile: { en: 'Sweet berry meets citrus, the most popular ladies\' choice', ja: 'フルーティー、甘め、女性人気No.1', zh: '甜美莓果遇上柑橘，最受女性欢迎', ko: '달콤한 베리와 시트러스, 여성 인기 1위', fr: 'Baies sucrées et agrumes, choix préféré des dames', es: 'Bayas dulces y cítricos, favorito de las damas', it: 'Bacche dolci e agrumi, scelta preferita delle signore' }, category: 'cocktail', subcat: 'Sweet' },
      { id: 'fuzzy-navel', name: 'Fuzzy Navel', nameJa: 'ファジーネーブル', price: 500, beginner: true, taste: { sweet: 5, sour: 1, fruity: 5, refreshing: 3, strong: 1 }, profile: { en: 'Peach and orange, like drinking summer sunshine', ja: 'ピーチ×オレンジ、甘い、フルーティー', zh: '桃子和橙子，像喝下夏日阳光', ko: '피치와 오렌지, 여름 햇살을 마시는 듯', fr: 'Pêche et orange, comme boire du soleil d\'été', es: 'Durazno y naranja, como beber sol de verano', it: 'Pesca e arancia, come bere sole estivo' }, category: 'cocktail', subcat: 'Sweet' },
      { id: 'kahlua-milk', name: 'Kahlúa Milk', nameJa: 'カルーアミルク', price: 500, beginner: true, taste: { sweet: 5, sour: 0, fruity: 1, refreshing: 1, strong: 1, creamy: 5, coffee: 4 }, profile: { en: 'Coffee meets cream, dessert in a glass', ja: 'コーヒー牛乳風、甘い、デザート感覚', zh: '咖啡遇上奶油，杯中甜点', ko: '커피와 크림의 만남, 잔 속의 디저트', fr: 'Café et crème, dessert dans un verre', es: 'Café y crema, postre en un vaso', it: 'Caffè e crema, dessert in un bicchiere' }, category: 'cocktail', subcat: 'Sweet' },
      { id: 'baileys-milk', name: "Bailey's Milk", nameJa: 'ベイリーズミルク', price: 500, beginner: true, taste: { sweet: 5, sour: 0, fruity: 1, refreshing: 1, strong: 1, creamy: 5 }, profile: { en: 'Irish cream indulgence, rich and velvety', ja: 'クリーミー、甘い、濃厚', zh: '爱尔兰奶油放纵，丰富丝滑', ko: '아이리시 크림의 탐닉, 리치하고 벨벳 같음', fr: 'Indulgence à la crème irlandaise, riche et veloutée', es: 'Indulgencia de crema irlandesa, rica y aterciopelada', it: 'Indulgenza di crema irlandese, ricca e vellutata' }, category: 'cocktail', subcat: 'Sweet' },
      { id: 'malibu-milk', name: 'Malibu Milk', nameJa: 'マリブミルク', price: 500, beginner: true, taste: { sweet: 4, sour: 0, fruity: 2, refreshing: 2, strong: 1, creamy: 4, tropical: 4 }, profile: { en: 'Coconut paradise, tropical beach in a glass', ja: 'ココナッツ、まろやか、トロピカル', zh: '椰子天堂，杯中热带海滩', ko: '코코넛 파라다이스, 잔 속의 트로피컬 비치', fr: 'Paradis de noix de coco, plage tropicale dans un verre', es: 'Paraíso de coco, playa tropical en un vaso', it: 'Paradiso di cocco, spiaggia tropicale in un bicchiere' }, category: 'cocktail', subcat: 'Sweet' },
    ],
    refreshing: [
      { id: 'gin-tonic', name: 'Gin & Tonic', nameJa: 'ジントニック', price: 500, beginner: true, taste: { sweet: 1, sour: 1, fruity: 2, refreshing: 5, strong: 2, bitter: 3 }, profile: { en: 'The timeless classic, botanical refreshment', ja: '定番、ほろ苦、爽やか、万人向け', zh: '永恒经典，草本清爽', ko: '영원한 클래식, 보태니컬 리프레시먼트', fr: 'Le classique intemporel, rafraîchissement botanique', es: 'El clásico atemporal, refrescante botánico', it: 'Il classico senza tempo, ristoro botanico' }, category: 'cocktail', subcat: 'Refreshing' },
      { id: 'moscow-mule', name: 'Moscow Mule', nameJa: 'モスコミュール', price: 500, beginner: true, taste: { sweet: 2, sour: 3, fruity: 1, refreshing: 5, strong: 2, spicy: 3 }, profile: { en: 'Ginger kick with lime, refreshingly spicy', ja: 'ジンジャー×ライム、爽やか、スパイシー', zh: '姜味冲击配青柠，清爽微辣', ko: '진저 킥과 라임, 상쾌하게 스파이시', fr: 'Coup de gingembre avec citron vert, rafraîchissant épicé', es: 'Golpe de jengibre con lima, refrescantemente picante', it: 'Colpo di zenzero con lime, rinfrescante speziato' }, category: 'cocktail', subcat: 'Refreshing' },
      { id: 'screwdriver', name: 'Screwdriver', nameJa: 'スクリュードライバー', price: 500, beginner: true, taste: { sweet: 4, sour: 2, fruity: 4, refreshing: 4, strong: 2 }, profile: { en: 'Vodka and OJ, morning sunshine in a glass', ja: 'オレンジジュース、甘い、飲みやすい', zh: '伏特加和橙汁，杯中晨曦', ko: '보드카와 오렌지주스, 잔 속의 아침 햇살', fr: 'Vodka et jus d\'orange, soleil du matin dans un verre', es: 'Vodka y jugo de naranja, sol matutino en un vaso', it: 'Vodka e succo d\'arancia, sole mattutino in un bicchiere' }, category: 'cocktail', subcat: 'Refreshing' },
      { id: 'cassis-soda', name: 'Cassis Soda', nameJa: 'カシスソーダ', price: 500, beginner: true, taste: { sweet: 4, sour: 2, fruity: 4, refreshing: 5, strong: 1 }, profile: { en: 'Berry bubbles, light and effervescent', ja: '甘酸っぱい、爽やか、軽やか', zh: '莓果气泡，轻盈起泡', ko: '베리 버블, 가볍고 청량', fr: 'Bulles de baies, légères et effervescentes', es: 'Burbujas de bayas, ligeras y efervescentes', it: 'Bollicine di bacche, leggere ed effervescenti' }, category: 'cocktail', subcat: 'Refreshing' },
      { id: 'kaku-highball', name: 'Kaku Highball', nameJa: '角ハイボール', price: 500, beginner: true, taste: { sweet: 1, sour: 0, fruity: 1, refreshing: 5, strong: 2 }, profile: { en: 'Japan\'s favorite, crisp whisky and soda', ja: '定番、キレ、爽快、食事に最適', zh: '日本最爱，清爽威士忌苏打', ko: '일본의 최애, 상쾌한 위스키 소다', fr: 'Favori du Japon, whisky et soda vif', es: 'Favorito de Japón, whisky y soda fresco', it: 'Preferito del Giappone, whisky e soda frizzante' }, category: 'cocktail', subcat: 'Refreshing' },
    ],
    strong: [
      { id: 'black-russian', name: 'Black Russian', nameJa: 'ブラックルシアン', price: 500, beginner: false, taste: { sweet: 3, sour: 0, fruity: 0, refreshing: 1, strong: 4, coffee: 4 }, profile: { en: 'Vodka and coffee liqueur, dark and mysterious', ja: 'コーヒー系、甘苦い、大人の味', zh: '伏特加和咖啡利口酒，深邃神秘', ko: '보드카와 커피 리큐르, 어둡고 미스터리', fr: 'Vodka et liqueur de café, sombre et mystérieux', es: 'Vodka y licor de café, oscuro y misterioso', it: 'Vodka e liquore al caffè, scuro e misterioso' }, category: 'cocktail', subcat: 'Strong' },
      { id: 'godfather', name: 'Godfather', nameJa: 'ゴッドファーザー', price: 600, beginner: false, taste: { sweet: 3, sour: 0, fruity: 1, refreshing: 0, strong: 5 }, profile: { en: 'Whisky and amaretto, an offer you can\'t refuse', ja: 'ウイスキー×アマレット、甘く力強い', zh: '威士忌和杏仁利口酒，无法拒绝的提议', ko: '위스키와 아마레토, 거절할 수 없는 제안', fr: 'Whisky et amaretto, une offre irrésistible', es: 'Whisky y amaretto, una oferta irrechazable', it: 'Whisky e amaretto, un\'offerta che non puoi rifiutare' }, category: 'cocktail', subcat: 'Strong' },
      { id: 'rusty-nail', name: 'Rusty Nail', nameJa: 'ラスティネイル', price: 600, beginner: false, taste: { sweet: 3, sour: 0, fruity: 1, refreshing: 0, strong: 5 }, profile: { en: 'Scotch and Drambuie, honey-touched power', ja: 'スコッチ×ドランブイ、蜂蜜の甘さと力強さ', zh: '苏格兰威士忌和蜂蜜利口酒，蜂蜜般的力量', ko: '스카치와 드람부이, 꿀터치 파워', fr: 'Scotch et Drambuie, puissance touchée de miel', es: 'Scotch y Drambuie, poder con toque de miel', it: 'Scotch e Drambuie, potenza con tocco di miele' }, category: 'cocktail', subcat: 'Strong' },
    ],
    classic: [
      { id: 'martini', name: 'Martini', nameJa: 'マティーニ', price: 700, beginner: false, taste: { sweet: 0, sour: 0, fruity: 0, refreshing: 2, strong: 5, dry: 5 }, profile: { en: 'The king of cocktails, pure elegance', ja: 'カクテルの王様、純粋なエレガンス', zh: '鸡尾酒之王，纯粹优雅', ko: '칵테일의 왕, 순수한 우아함', fr: 'Le roi des cocktails, pure élégance', es: 'El rey de los cócteles, pura elegancia', it: 'Il re dei cocktail, pura eleganza' }, category: 'cocktail', subcat: 'Classic' },
      { id: 'manhattan', name: 'Manhattan', nameJa: 'マンハッタン', price: 700, beginner: false, taste: { sweet: 3, sour: 0, fruity: 2, refreshing: 0, strong: 5 }, profile: { en: 'Rye, vermouth, bitters - New York sophistication', ja: 'ライ、ベルモット、ビターズ - NYの洗練', zh: '黑麦、苦艾酒、苦精 - 纽约的精致', ko: '라이, 베르무트, 비터스 - 뉴욕의 세련됨', fr: 'Seigle, vermouth, amers - sophistication new-yorkaise', es: 'Centeno, vermut, amargos - sofisticación neoyorquina', it: 'Segale, vermouth, bitter - sofisticazione newyorkese' }, category: 'cocktail', subcat: 'Classic' },
      { id: 'old-fashioned', name: 'Old Fashioned', nameJa: 'オールドファッションド', price: 700, beginner: false, taste: { sweet: 2, sour: 0, fruity: 1, refreshing: 0, strong: 5 }, profile: { en: 'Bourbon, sugar, bitters - where it all began', ja: 'バーボン、砂糖、ビターズ - 全ての始まり', zh: '波本、糖、苦精 - 一切的起源', ko: '버번, 설탕, 비터스 - 모든 것의 시작', fr: 'Bourbon, sucre, amers - là où tout a commencé', es: 'Bourbon, azúcar, amargos - donde todo empezó', it: 'Bourbon, zucchero, bitter - dove tutto è iniziato' }, category: 'cocktail', subcat: 'Classic' },
    ],
    tropical: [
      { id: 'tequila-sunrise', name: 'Tequila Sunrise', nameJa: 'テキーラサンライズ', price: 500, beginner: true, taste: { sweet: 4, sour: 2, fruity: 4, refreshing: 4, strong: 2, tropical: 3 }, profile: { en: 'Orange, grenadine, tequila - a sunrise in your glass', ja: 'オレンジ×グレナデン、甘い、見た目◎', zh: '橙汁、石榴糖浆、龙舌兰 - 杯中日出', ko: '오렌지, 그레나딘, 데킬라 - 잔 속의 일출', fr: 'Orange, grenadine, tequila - un lever de soleil dans votre verre', es: 'Naranja, granadina, tequila - un amanecer en tu vaso', it: 'Arancia, granatina, tequila - un\'alba nel tuo bicchiere' }, category: 'cocktail', subcat: 'Tropical' },
      { id: 'rum-coke', name: 'Rum & Coke', nameJa: 'ラムコーク', price: 500, beginner: true, taste: { sweet: 4, sour: 0, fruity: 1, refreshing: 4, strong: 2, tropical: 2 }, profile: { en: 'Cuba Libre spirit, rum and cola simplicity', ja: 'コーラ、甘い、飲みやすい', zh: '自由古巴精神，朗姆和可乐的简单', ko: '쿠바 리브레 정신, 럼과 콜라의 심플함', fr: 'Esprit Cuba Libre, simplicité rhum et cola', es: 'Espíritu Cuba Libre, simplicidad de ron y cola', it: 'Spirito Cuba Libre, semplicità rum e cola' }, category: 'cocktail', subcat: 'Tropical' },
    ],
    wine: [
      { id: 'kir', name: 'Kir', nameJa: 'キール', price: 500, beginner: true, taste: { sweet: 4, sour: 2, fruity: 4, refreshing: 3, strong: 1 }, profile: { en: 'White wine and cassis, French aperitif elegance', ja: '白ワイン×カシス、甘酸っぱく華やか', zh: '白葡萄酒和黑醋栗，法式餐前酒优雅', ko: '화이트와인과 카시스, 프렌치 아페리티프 우아함', fr: 'Vin blanc et cassis, élégance de l\'apéritif français', es: 'Vino blanco y cassis, elegancia del aperitivo francés', it: 'Vino bianco e cassis, eleganza dell\'aperitivo francese' }, category: 'cocktail', subcat: 'Wine Based' },
      { id: 'kitty', name: 'Kitty', nameJa: 'キティ', price: 500, beginner: true, taste: { sweet: 4, sour: 1, fruity: 3, refreshing: 4, strong: 1 }, profile: { en: 'Red wine and ginger ale, playful and light', ja: '赤ワイン×ジンジャー、甘酸っぱい、軽やか', zh: '红葡萄酒和姜汁汽水，俏皮轻盈', ko: '레드와인과 진저에일, 장난스럽고 가벼움', fr: 'Vin rouge et ginger ale, ludique et léger', es: 'Vino tinto y ginger ale, juguetón y ligero', it: 'Vino rosso e ginger ale, giocoso e leggero' }, category: 'cocktail', subcat: 'Wine Based' },
      { id: 'spritzer', name: 'Spritzer', nameJa: 'スプリッツァー', price: 500, beginner: true, taste: { sweet: 2, sour: 2, fruity: 3, refreshing: 5, strong: 1 }, profile: { en: 'White wine and soda, summer afternoon perfection', ja: '白ワイン×ソーダ、爽やか、飲みやすい', zh: '白葡萄酒和苏打水，完美的夏日午后', ko: '화이트와인과 소다, 여름 오후의 완벽함', fr: 'Vin blanc et soda, perfection d\'après-midi d\'été', es: 'Vino blanco y soda, perfección de tarde de verano', it: 'Vino bianco e soda, perfezione del pomeriggio estivo' }, category: 'cocktail', subcat: 'Wine Based' },
    ]
  },
  beer: [
    { id: 'sapporo-black', name: 'Sapporo Black Label', nameJa: 'サッポロ黒ラベル', price: 500, beginner: true, taste: { bitter: 3, malty: 2, refreshing: 5, strong: 2 }, profile: { en: 'Crisp Japanese lager, clean finish, goes with everything', ja: 'ピルスナー、すっきり、キレ、のどごし良好', zh: '清爽日本拉格，干净收尾，百搭', ko: '상쾌한 일본 라거, 깔끔한 피니시, 모든 것과 어울림', fr: 'Lager japonaise vive, finale nette, accompagne tout', es: 'Lager japonesa fresca, final limpio, combina con todo', it: 'Lager giapponese frizzante, finale pulita, si abbina con tutto' }, category: 'beer', subcat: 'Lager' },
    { id: 'guinness', name: 'Guinness Extra Stout', nameJa: 'ギネス エクストラスタウト', price: 700, beginner: false, taste: { bitter: 4, malty: 5, refreshing: 2, strong: 4, roasted: 5 }, profile: { en: 'Dark Irish stout, coffee and chocolate notes, legendary', ja: 'スタウト、ロースト香、コーヒー・チョコ、重厚', zh: '深色爱尔兰世涛，咖啡巧克力韵味，传奇', ko: '다크 아이리시 스타우트, 커피와 초콜릿 노트, 전설적', fr: 'Stout irlandais foncé, notes de café et chocolat, légendaire', es: 'Stout irlandés oscuro, notas de café y chocolate, legendario', it: 'Stout irlandese scuro, note di caffè e cioccolato, leggendario' }, category: 'beer', subcat: 'Stout' },
  ],
  softDrinks: [
    { id: 'oolong', name: 'Oolong Tea', nameJa: 'ウーロン茶', price: 350, taste: {}, profile: { en: 'Classic Chinese tea, clean and refreshing', ja: 'すっきり、食事に◎', zh: '经典中国茶，清爽', ko: '클래식 중국차, 깔끔하고 상쾌', fr: 'Thé chinois classique, pur et rafraîchissant', es: 'Té chino clásico, limpio y refrescante', it: 'Tè cinese classico, pulito e rinfrescante' }, category: 'soft', subcat: 'Tea' },
    { id: 'ginger-ale', name: 'Ginger Ale', nameJa: 'ジンジャーエール', price: 350, taste: {}, profile: { en: 'Spicy ginger fizz, refreshing on its own', ja: 'スパイシー、爽やか', zh: '辛辣姜味气泡，单独也清爽', ko: '스파이시 진저 피즈, 그 자체로 상쾌', fr: 'Fizz de gingembre épicé, rafraîchissant seul', es: 'Fizz de jengibre picante, refrescante solo', it: 'Fizz di zenzero speziato, rinfrescante da solo' }, category: 'soft', subcat: 'Soda' },
    { id: 'cola', name: 'Coca-Cola', nameJa: 'コカコーラ', price: 350, taste: {}, profile: { en: 'The original cola, sweet and fizzy', ja: '甘い、炭酸', zh: '原创可乐，甜蜜起泡', ko: '오리지널 콜라, 달콤하고 청량', fr: 'Le cola original, sucré et pétillant', es: 'La cola original, dulce y burbujeante', it: 'La cola originale, dolce e frizzante' }, category: 'soft', subcat: 'Soda' },
    { id: 'orange-juice', name: 'Orange Juice', nameJa: 'オレンジジュース', price: 350, taste: {}, profile: { en: 'Fresh citrus vitamin boost', ja: 'フレッシュ、ビタミン', zh: '新鲜柑橘维生素', ko: '프레시 시트러스 비타민', fr: 'Boost de vitamines d\'agrumes frais', es: 'Impulso de vitaminas de cítricos frescos', it: 'Boost di vitamine di agrumi freschi' }, category: 'soft', subcat: 'Juice' },
  ]
};

// ========== SERVING STYLES ==========
const servingStyles = {
  whisky: [
    { id: 'straight', forBeginner: false },
    { id: 'rock', forBeginner: true },
    { id: 'mizuwari', forBeginner: true },
    { id: 'highball', forBeginner: true },
    { id: 'twiceup', forBeginner: false },
    { id: 'hot', forBeginner: true },
  ],
  shochu: [
    { id: 'straight', forBeginner: false },
    { id: 'rock', forBeginner: true },
    { id: 'mizuwari', forBeginner: true },
    { id: 'soda', forBeginner: true },
    { id: 'oyuwari', forBeginner: true },
    { id: 'ocha', forBeginner: true },
  ]
};

// ========== TRANSLATIONS ==========
const translations = {
  en: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "Find your perfect drink",
    startChat: "Start",
    languageSelect: "Select Language",
    bartenderName: "Master Annie",
    greeting: "Good evening! Welcome to Crazy Horse. I'm Annie. What kind of drink are you in the mood for tonight?",
    askMood: "What brings you in tonight?",
    askExperience: "How familiar are you with {type}?",
    askTaste: "What kind of flavors appeal to you?",
    askServing: "How would you like it served?",
    thinking: "Let me find something perfect for you...",
    recommendation: "I recommend this:",
    alternative: "Or perhaps you might prefer:",
    askMore: "Shall I prepare this, or would you like to see other options?",
    confirmOrder: "Excellent choice. Coming right up.",
    anythingElse: "Would you like anything else?",
    enjoyDrink: "Please enjoy.",
    moodRelax: "Unwind and relax",
    moodCelebrate: "Celebration",
    moodExplore: "Try something new",
    moodClassic: "Something classic",
    moodStrong: "Something strong",
    moodLight: "Keep it light",
    moodFood: "Pair with food",
    moodSweet: "Something sweet",
    expNew: "First time",
    expSome: "Some experience",
    expPro: "Well versed",
    tasteSmooth: "Smooth",
    tasteBold: "Bold",
    tasteSweet: "Sweet",
    tasteRefresh: "Refreshing",
    tasteSmoky: "Smoky",
    tasteSpicy: "Spicy",
    typeWhisky: "Whisky",
    typeShochu: "Shochu",
    typeCocktail: "Cocktail",
    typeBeer: "Beer",
    typeSoft: "Non-Alcoholic",
    typeAny: "Surprise me",
    serveStraight: "Straight",
    serveRock: "On the Rocks",
    serveMizuwari: "With Water",
    serveHighball: "Highball",
    serveTwiceup: "Twice Up",
    serveHot: "Hot",
    serveSoda: "Soda",
    serveOyuwari: "Hot Water",
    serveOcha: "With Tea",
    price: "Price",
    beginner: "Recommended for beginners",
    addToOrder: "I will have this",
    viewOrder: "View Order",
    orderSummary: "Your Order",
    total: "Total",
    placeOrder: "Place Order",
    orderPlaced: "Order Confirmed",
    thankYou: "Your order is being prepared.",
    startOver: "New Order",
    back: "Go back",
    remove: "Remove",
    empty: "No items yet",
    close: "Close",
    tryAnother: "Show me another",
    perfect: "This one",
    selected: "selected",
    skip: "Skip",
    print: "Print",
  },
  ja: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "最高の一杯を見つける",
    startChat: "はじめる",
    languageSelect: "言語を選択",
    bartenderName: "マスター アニー",
    greeting: "いらっしゃいませ！CRAZY HORSEへようこそ。マスターのアニーです。今夜はどんな気分ですか？",
    askMood: "今夜はどのような気分ですか？",
    askExperience: "{type}はどのくらい飲み慣れていますか？",
    askTaste: "どんな味わいがお好みですか？（複数選択可）",
    askServing: "飲み方はいかがなさいますか？",
    thinking: "お客様にぴったりの一杯をお探しします...",
    recommendation: "こちらをおすすめいたします：",
    alternative: "または、こちらはいかがでしょうか：",
    askMore: "こちらでよろしいですか？他のものもご覧になりますか？",
    confirmOrder: "かしこまりました。すぐにお作りいたします。",
    anythingElse: "他にご注文はございますか？",
    enjoyDrink: "ごゆっくりどうぞ。",
    moodRelax: "リラックスしたい",
    moodCelebrate: "お祝い",
    moodExplore: "新しいものを試したい",
    moodClassic: "定番を",
    moodStrong: "強いものを",
    moodLight: "軽めに",
    moodFood: "食事と一緒に",
    moodSweet: "甘いものを",
    expNew: "初めて",
    expSome: "ある程度",
    expPro: "詳しい",
    tasteSmooth: "まろやか",
    tasteBold: "しっかり",
    tasteSweet: "甘い",
    tasteRefresh: "爽やか",
    tasteSmoky: "スモーキー",
    tasteSpicy: "スパイシー",
    typeWhisky: "ウイスキー",
    typeShochu: "焼酎",
    typeCocktail: "カクテル",
    typeBeer: "ビール",
    typeSoft: "ソフトドリンク",
    typeAny: "おまかせ",
    serveStraight: "ストレート",
    serveRock: "ロック",
    serveMizuwari: "水割り",
    serveHighball: "ハイボール",
    serveTwiceup: "トワイスアップ",
    serveHot: "ホット",
    serveSoda: "ソーダ割り",
    serveOyuwari: "お湯割り",
    serveOcha: "お茶割り",
    price: "価格",
    beginner: "初心者におすすめ",
    addToOrder: "これにする",
    viewOrder: "注文を見る",
    orderSummary: "ご注文",
    total: "合計",
    placeOrder: "注文する",
    orderPlaced: "ご注文完了",
    thankYou: "お作りしております。",
    startOver: "追加注文",
    back: "戻る",
    remove: "削除",
    empty: "まだ注文がありません",
    close: "閉じる",
    tryAnother: "他のも見る",
    perfect: "これで",
  },
  zh: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "寻找您的完美饮品",
    startChat: "开始",
    languageSelect: "选择语言",
    bartenderName: "Master Annie",
    greeting: "晚上好！欢迎光临Crazy Horse。我是Annie。今晚想喝点什么？",
    askMood: "今晚是什么心情？",
    askExperience: "您对{type}了解多少？",
    askTaste: "您喜欢什么样的口味？",
    askServing: "您想怎么喝？",
    thinking: "让我为您找到完美的选择...",
    recommendation: "我推荐这款：",
    alternative: "或者您可能会喜欢：",
    askMore: "就这个吗？还是想看看其他的？",
    confirmOrder: "好的，马上为您准备。",
    anythingElse: "还需要其他的吗？",
    enjoyDrink: "请慢用。",
    moodRelax: "放松",
    moodCelebrate: "庆祝",
    moodExplore: "尝试新品",
    moodClassic: "经典款",
    moodStrong: "烈酒",
    moodLight: "清淡",
    moodFood: "配餐",
    moodSweet: "甜味",
    expNew: "新手",
    expSome: "有些经验",
    expPro: "很熟悉",
    tasteSmooth: "顺滑",
    tasteBold: "浓郁",
    tasteSweet: "甜美",
    tasteRefresh: "清爽",
    tasteSmoky: "烟熏",
    tasteSpicy: "辛辣",
    typeWhisky: "威士忌",
    typeShochu: "烧酒",
    typeCocktail: "鸡尾酒",
    typeBeer: "啤酒",
    typeSoft: "无酒精",
    typeAny: "推荐",
    serveStraight: "纯饮",
    serveRock: "加冰",
    serveMizuwari: "兑水",
    serveHighball: "嗨棒",
    serveTwiceup: "对半兑水",
    serveHot: "热饮",
    serveSoda: "苏打",
    serveOyuwari: "热水",
    serveOcha: "茶水",
    price: "价格",
    beginner: "推荐新手",
    addToOrder: "就这个",
    viewOrder: "查看订单",
    orderSummary: "您的订单",
    total: "总计",
    placeOrder: "下单",
    orderPlaced: "订单确认",
    thankYou: "正在准备中。",
    startOver: "再点",
    back: "返回",
    remove: "删除",
    empty: "暂无订单",
    close: "关闭",
    tryAnother: "看看其他",
    perfect: "就这个",
  },
  ko: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "완벽한 한 잔을 찾아서",
    startChat: "시작",
    languageSelect: "언어 선택",
    bartenderName: "Master Annie",
    greeting: "안녕하세요! Crazy Horse에 오신 것을 환영해요. 저는 Annie예요. 오늘 밤 어떤 기분이세요?",
    askMood: "오늘 밤 기분이 어떠세요?",
    askExperience: "{type}에 대해 얼마나 아세요?",
    askTaste: "어떤 맛을 선호하시나요?",
    askServing: "어떻게 드릴까요?",
    thinking: "완벽한 음료를 찾아볼게요...",
    recommendation: "이것을 추천드립니다:",
    alternative: "또는 이건 어떠세요:",
    askMore: "이걸로 하시겠어요? 다른 것도 보여드릴까요?",
    confirmOrder: "좋은 선택이에요. 바로 준비하겠습니다.",
    anythingElse: "더 필요하신 게 있으신가요?",
    enjoyDrink: "맛있게 드세요.",
    moodRelax: "휴식",
    moodCelebrate: "축하",
    moodExplore: "새로운 것",
    moodClassic: "클래식",
    moodStrong: "강한 것",
    moodLight: "가벼운 것",
    moodFood: "음식과 함께",
    moodSweet: "달콤한 것",
    expNew: "처음",
    expSome: "어느 정도",
    expPro: "잘 알아요",
    tasteSmooth: "부드러운",
    tasteBold: "진한",
    tasteSweet: "달콤한",
    tasteRefresh: "상쾌한",
    tasteSmoky: "스모키",
    tasteSpicy: "스파이시",
    typeWhisky: "위스키",
    typeShochu: "소주",
    typeCocktail: "칵테일",
    typeBeer: "맥주",
    typeSoft: "논알코올",
    typeAny: "추천",
    serveStraight: "스트레이트",
    serveRock: "온더락",
    serveMizuwari: "물 타서",
    serveHighball: "하이볼",
    serveTwiceup: "트와이스업",
    serveHot: "핫",
    serveSoda: "소다",
    serveOyuwari: "뜨거운 물",
    serveOcha: "차와 함께",
    price: "가격",
    beginner: "입문자 추천",
    addToOrder: "이걸로",
    viewOrder: "주문 보기",
    orderSummary: "주문 내역",
    total: "합계",
    placeOrder: "주문하기",
    orderPlaced: "주문 완료",
    thankYou: "준비 중입니다.",
    startOver: "추가 주문",
    back: "뒤로",
    remove: "삭제",
    empty: "주문 없음",
    close: "닫기",
    tryAnother: "다른 것",
    perfect: "이걸로",
  },
  fr: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "Trouvez votre boisson parfaite",
    startChat: "Commencer",
    languageSelect: "Choisir la langue",
    bartenderName: "Master Annie",
    greeting: "Bonsoir! Bienvenue au Crazy Horse. Je suis Annie. Qu'est-ce qui vous ferait plaisir ce soir?",
    askMood: "Quelle est votre humeur ce soir?",
    askExperience: "Connaissez-vous bien le {type}?",
    askTaste: "Quelles saveurs préférez-vous?",
    askServing: "Comment le souhaitez-vous?",
    thinking: "Laissez-moi trouver quelque chose de parfait...",
    recommendation: "Je vous recommande:",
    alternative: "Ou peut-être préféreriez-vous:",
    askMore: "Celui-ci vous convient? Ou voulez-vous voir d'autres options?",
    confirmOrder: "Excellent choix. Je vous le prépare.",
    anythingElse: "Autre chose?",
    enjoyDrink: "Bonne dégustation.",
    moodRelax: "Se détendre",
    moodCelebrate: "Célébration",
    moodExplore: "Découvrir",
    moodClassic: "Un classique",
    moodStrong: "Quelque chose de fort",
    moodLight: "Léger",
    moodFood: "Avec un repas",
    moodSweet: "Sucré",
    expNew: "Novice",
    expSome: "Un peu",
    expPro: "Connaisseur",
    tasteSmooth: "Doux",
    tasteBold: "Corsé",
    tasteSweet: "Sucré",
    tasteRefresh: "Rafraîchissant",
    tasteSmoky: "Fumé",
    tasteSpicy: "Épicé",
    typeWhisky: "Whisky",
    typeShochu: "Shochu",
    typeCocktail: "Cocktail",
    typeBeer: "Bière",
    typeSoft: "Sans alcool",
    typeAny: "Surprise",
    serveStraight: "Sec",
    serveRock: "Glaçons",
    serveMizuwari: "Avec eau",
    serveHighball: "Highball",
    serveTwiceup: "Twice Up",
    serveHot: "Chaud",
    serveSoda: "Soda",
    serveOyuwari: "Eau chaude",
    serveOcha: "Avec thé",
    price: "Prix",
    beginner: "Pour débutants",
    addToOrder: "Je prends",
    viewOrder: "Voir commande",
    orderSummary: "Votre commande",
    total: "Total",
    placeOrder: "Commander",
    orderPlaced: "Commande confirmée",
    thankYou: "En préparation.",
    startOver: "Nouvelle commande",
    back: "Retour",
    remove: "Supprimer",
    empty: "Aucun article",
    close: "Fermer",
    tryAnother: "Autre chose",
    perfect: "Celui-ci",
  },
  es: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "Encuentra tu bebida perfecta",
    startChat: "Empezar",
    languageSelect: "Seleccionar idioma",
    bartenderName: "Master Annie",
    greeting: "¡Buenas noches! Bienvenido a Crazy Horse. Soy Annie. ¿Qué le apetece esta noche?",
    askMood: "¿Qué le apetece esta noche?",
    askExperience: "¿Conoce el {type}?",
    askTaste: "¿Qué sabores prefiere?",
    askServing: "¿Cómo lo quiere?",
    thinking: "Déjeme encontrar algo perfecto...",
    recommendation: "Le recomiendo esto:",
    alternative: "O quizás prefiera:",
    askMore: "¿Este le gusta? ¿O quiere ver más opciones?",
    confirmOrder: "Excelente elección. Enseguida se lo preparo.",
    anythingElse: "¿Algo más?",
    enjoyDrink: "Que lo disfrute.",
    moodRelax: "Relajarse",
    moodCelebrate: "Celebración",
    moodExplore: "Probar algo nuevo",
    moodClassic: "Un clásico",
    moodStrong: "Algo fuerte",
    moodLight: "Ligero",
    moodFood: "Con comida",
    moodSweet: "Dulce",
    expNew: "Principiante",
    expSome: "Algo",
    expPro: "Conocedor",
    tasteSmooth: "Suave",
    tasteBold: "Intenso",
    tasteSweet: "Dulce",
    tasteRefresh: "Refrescante",
    tasteSmoky: "Ahumado",
    tasteSpicy: "Picante",
    typeWhisky: "Whisky",
    typeShochu: "Shochu",
    typeCocktail: "Cóctel",
    typeBeer: "Cerveza",
    typeSoft: "Sin alcohol",
    typeAny: "Sorpresa",
    serveStraight: "Solo",
    serveRock: "Con hielo",
    serveMizuwari: "Con agua",
    serveHighball: "Highball",
    serveTwiceup: "Twice Up",
    serveHot: "Caliente",
    serveSoda: "Soda",
    serveOyuwari: "Agua caliente",
    serveOcha: "Con té",
    price: "Precio",
    beginner: "Para principiantes",
    addToOrder: "Lo quiero",
    viewOrder: "Ver pedido",
    orderSummary: "Su pedido",
    total: "Total",
    placeOrder: "Pedir",
    orderPlaced: "Pedido confirmado",
    thankYou: "Preparándolo.",
    startOver: "Otro pedido",
    back: "Volver",
    remove: "Eliminar",
    empty: "Sin artículos",
    close: "Cerrar",
    tryAnother: "Otro",
    perfect: "Este",
  },
  it: {
    welcome: "CRAZY HORSE SALOON",
    tagline: "Trova il tuo drink perfetto",
    startChat: "Inizia",
    languageSelect: "Seleziona lingua",
    bartenderName: "Master Annie",
    greeting: "Buonasera! Benvenuto al Crazy Horse. Sono Annie. Cosa le va stasera?",
    askMood: "Che umore ha stasera?",
    askExperience: "Conosce il {type}?",
    askTaste: "Che sapori preferisce?",
    askServing: "Come lo desidera?",
    thinking: "Mi lasci trovare qualcosa di perfetto...",
    recommendation: "Le consiglio questo:",
    alternative: "O forse preferirebbe:",
    askMore: "Questo va bene? O vuole vedere altre opzioni?",
    confirmOrder: "Ottima scelta. Glielo preparo subito.",
    anythingElse: "Altro?",
    enjoyDrink: "Buona degustazione.",
    moodRelax: "Rilassarsi",
    moodCelebrate: "Festeggiare",
    moodExplore: "Provare qualcosa di nuovo",
    moodClassic: "Un classico",
    moodStrong: "Qualcosa di forte",
    moodLight: "Leggero",
    moodFood: "Con il cibo",
    moodSweet: "Dolce",
    expNew: "Principiante",
    expSome: "Un po'",
    expPro: "Esperto",
    tasteSmooth: "Morbido",
    tasteBold: "Deciso",
    tasteSweet: "Dolce",
    tasteRefresh: "Rinfrescante",
    tasteSmoky: "Affumicato",
    tasteSpicy: "Speziato",
    typeWhisky: "Whisky",
    typeShochu: "Shochu",
    typeCocktail: "Cocktail",
    typeBeer: "Birra",
    typeSoft: "Analcolico",
    typeAny: "Sorpresa",
    serveStraight: "Liscio",
    serveRock: "Con ghiaccio",
    serveMizuwari: "Con acqua",
    serveHighball: "Highball",
    serveTwiceup: "Twice Up",
    serveHot: "Caldo",
    serveSoda: "Soda",
    serveOyuwari: "Acqua calda",
    serveOcha: "Con tè",
    price: "Prezzo",
    beginner: "Per principianti",
    addToOrder: "Prendo questo",
    viewOrder: "Vedi ordine",
    orderSummary: "Il suo ordine",
    total: "Totale",
    placeOrder: "Ordina",
    orderPlaced: "Ordine confermato",
    thankYou: "In preparazione.",
    startOver: "Nuovo ordine",
    back: "Indietro",
    remove: "Rimuovi",
    empty: "Nessun articolo",
    close: "Chiudi",
    tryAnother: "Un altro",
    perfect: "Questo",
  }
};

const languageFlags = {
  en: { name: 'English' },
  ja: { name: '日本語' },
  zh: { name: '中文' },
  ko: { name: '한국어' },
  fr: { name: 'Français' },
  es: { name: 'Español' },
  it: { name: 'Italiano' }
};

// ========== MAIN APP ==========
export default function CrazyHorseChatbot() {
  const [lang, setLang] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userPrefs, setUserPrefs] = useState({
    mood: null,
    experience: null,
    drinkType: null,
    taste: [],
  });
  const [selectedTastes, setSelectedTastes] = useState([]);
  const [currentRecommendation, setCurrentRecommendation] = useState(null);
  const [selectedServing, setSelectedServing] = useState(null);
  const [order, setOrder] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  
  // Generate order number
  const generateOrderNumber = () => {
    const now = new Date();
    const num = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}-${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`;
    return num;
  };

  const t = lang ? translations[lang] : translations.en;

  useEffect(() => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, isTyping]);

  // メッセージ追加のヘルパー（コールバック保証型）
  const addBotMessage = (content, options = null, extra = {}) => {
    return new Promise(resolve => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { type: 'bot', content, options, timestamp: Date.now(), ...extra }]);
        resolve();
      }, 600);
    });
  };

  const addUserMessage = (content) => {
    setMessages(prev => [...prev, { type: 'user', content, timestamp: Date.now() }]);
  };

  const startConversation = async () => {
    setMessages([]);
    await addBotMessage(t.greeting, getMoodOptions());
    setCurrentStep('mood');
  };

  const getMoodOptions = () => [
    { id: 'relax', label: t.moodRelax },
    { id: 'celebrate', label: t.moodCelebrate },
    { id: 'explore', label: t.moodExplore },
    { id: 'classic', label: t.moodClassic },
    { id: 'strong', label: t.moodStrong },
    { id: 'light', label: t.moodLight },
    { id: 'food', label: t.moodFood },
    { id: 'sweet', label: t.moodSweet },
  ];

  const getDrinkTypeOptions = () => [
    { id: 'whisky', label: t.typeWhisky },
    { id: 'shochu', label: t.typeShochu },
    { id: 'cocktail', label: t.typeCocktail },
    { id: 'beer', label: t.typeBeer },
    { id: 'soft', label: t.typeSoft },
    { id: 'any', label: t.typeAny },
  ];

  const getExperienceOptions = () => [
    { id: 'new', label: t.expNew },
    { id: 'some', label: t.expSome },
    { id: 'pro', label: t.expPro },
  ];

  const getTasteOptions = () => [
    { id: 'smooth', label: t.tasteSmooth },
    { id: 'bold', label: t.tasteBold },
    { id: 'sweet', label: t.tasteSweet },
    { id: 'refresh', label: t.tasteRefresh },
    { id: 'smoky', label: t.tasteSmoky },
    { id: 'spicy', label: t.tasteSpicy },
  ];

  const getServingOptions = (drinkType) => {
    const styles = servingStyles[drinkType] || servingStyles.whisky;
    const servingLabels = {
      straight: t.serveStraight,
      rock: t.serveRock,
      mizuwari: t.serveMizuwari,
      highball: t.serveHighball,
      twiceup: t.serveTwiceup,
      hot: t.serveHot,
      soda: t.serveSoda,
      oyuwari: t.serveOyuwari,
      ocha: t.serveOcha,
    };
    return styles.map(s => ({
      id: s.id,
      label: servingLabels[s.id],
      forBeginner: s.forBeginner
    }));
  };

  const handleOptionSelect = async (optionId, optionLabel) => {
    // tasteステップはトグル選択なのでユーザーメッセージを追加しない
    if (currentStep === 'taste') {
      const newTastes = selectedTastes.includes(optionId)
        ? selectedTastes.filter(tid => tid !== optionId)
        : [...selectedTastes, optionId];
      setSelectedTastes(newTastes);
      return;
    }

    addUserMessage(optionLabel);

    switch (currentStep) {
      case 'mood': {
        setUserPrefs(prev => ({ ...prev, mood: optionId }));
        const moodResponses = {
          en: { relax: "A quiet evening.", celebrate: "A celebration deserves something special.", explore: "Adventurous. I like that.", classic: "A traditionalist. I can respect that.", strong: "Something with presence.", light: "Something gentle.", food: "Pairing with food requires care.", sweet: "A touch of sweetness." },
          ja: { relax: "ゆっくりしたい夜ですね。", celebrate: "お祝いには特別な一杯を。", explore: "冒険心がおありですね。", classic: "王道がお好みですか。", strong: "力強いものを。かしこまりました。", light: "軽やかなものを。", food: "お食事との相性、大切ですね。", sweet: "甘いものを。" },
          zh: { relax: "想放松一下。", celebrate: "庆祝需要特别的东西。", explore: "有冒险精神。", classic: "传统派。", strong: "有存在感的。", light: "温和的。", food: "配餐需要仔细考虑。", sweet: "一点甜味。" },
          ko: { relax: "편안한 저녁이군요.", celebrate: "축하에는 특별한 것이 필요하죠.", explore: "모험심이 있으시네요.", classic: "전통주의자시군요.", strong: "존재감 있는 것을.", light: "부드러운 것을.", food: "음식과의 페어링은 신중해야 해요.", sweet: "달콤한 것을." },
          fr: { relax: "Une soirée tranquille.", celebrate: "Une célébration mérite quelque chose de spécial.", explore: "Aventurier. J'aime ça.", classic: "Un traditionaliste.", strong: "Quelque chose avec du caractère.", light: "Quelque chose de doux.", food: "L'accord mets et vins demande réflexion.", sweet: "Une touche de douceur." },
          es: { relax: "Una noche tranquila.", celebrate: "Una celebración merece algo especial.", explore: "Aventurero. Me gusta.", classic: "Un tradicionalista.", strong: "Algo con presencia.", light: "Algo suave.", food: "Maridar con comida requiere consideración.", sweet: "Un toque de dulzura." },
          it: { relax: "Una serata tranquilla.", celebrate: "Una celebrazione richiede qualcosa di speciale.", explore: "Avventuroso. Mi piace.", classic: "Un tradizionalista.", strong: "Qualcosa con presenza.", light: "Qualcosa di delicato.", food: "Abbinare al cibo richiede attenzione.", sweet: "Un tocco di dolcezza." }
        };
        const askDrinkType = { en: "What would you like?", ja: "何をお飲みになりますか？", zh: "您想喝什么？", ko: "무엇을 드시겠어요?", fr: "Qu'avez-vous envie de boire?", es: "¿Qué le apetece?", it: "Cosa desidera bere?" };
        const moodText = moodResponses[lang]?.[optionId] || moodResponses.en[optionId];
        const drinkText = askDrinkType[lang] || askDrinkType.en;
        await addBotMessage(`${moodText} ${drinkText}`, getDrinkTypeOptions());
        setCurrentStep('drinkType');
        break;
      }

      case 'drinkType': {
        const selectedType = optionId === 'any' ? 'cocktail' : optionId;
        setUserPrefs(prev => ({ ...prev, drinkType: selectedType }));
        const typeLabel = optionId === 'any' ? '' : optionLabel;
        await addBotMessage(t.askExperience.replace('{type}', typeLabel), getExperienceOptions());
        setCurrentStep('experience');
        break;
      }

      case 'experience': {
        setUserPrefs(prev => ({ ...prev, experience: optionId }));
        await addBotMessage(t.askTaste, getTasteOptions());
        setCurrentStep('taste');
        break;
      }

      default:
        break;
    }
  };

  const handleTasteConfirm = async () => {
    const tastesToUse = selectedTastes.length > 0 ? selectedTastes : ['smooth'];
    const tasteLabels = tastesToUse.map(id => {
      const opt = getTasteOptions().find(o => o.id === id);
      return opt ? opt.label : id;
    });
    addUserMessage(tasteLabels.join(', '));
    
    // 完全なprefsオブジェクトを作成
    const completePrefs = { 
      ...userPrefs, 
      taste: tastesToUse 
    };
    setUserPrefs(completePrefs);
    
    await generateRecommendation(completePrefs);
  };

  const generateRecommendation = async (prefs) => {
    setCurrentStep('recommendation');
    
    // thinking表示
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsTyping(false);

    const drink = findBestMatch(prefs);
    setCurrentRecommendation(drink);

    const needsServing = drink.category === 'whisky' || drink.category === 'shochu';

    // ドリンクカード付きメッセージを直接追加
    setMessages(prev => [...prev, {
      type: 'bot',
      content: t.recommendation,
      drink: drink,
      showServing: needsServing,
      timestamp: Date.now()
    }]);

    if (needsServing) {
      setCurrentStep('serving');
    } else {
      setCurrentStep('confirm');
    }
  };

  const findBestMatch = (prefs) => {
    let allDrinks = [];
    
    // drinkTypeがない場合はカクテルをデフォルトに
    const drinkType = prefs.drinkType || 'cocktail';

    if (drinkType === 'whisky') {
      Object.values(drinkDatabase.whisky).forEach(cat => {
        allDrinks = [...allDrinks, ...cat];
      });
    } else if (drinkType === 'shochu') {
      Object.values(drinkDatabase.shochu).forEach(cat => {
        allDrinks = [...allDrinks, ...cat];
      });
    } else if (drinkType === 'cocktail') {
      Object.values(drinkDatabase.cocktails).forEach(cat => {
        allDrinks = [...allDrinks, ...cat];
      });
    } else if (drinkType === 'beer') {
      allDrinks = drinkDatabase.beer;
    } else if (drinkType === 'soft') {
      allDrinks = drinkDatabase.softDrinks;
    } else {
      // フォールバック: 全カクテルを対象に
      Object.values(drinkDatabase.cocktails).forEach(cat => {
        allDrinks = [...allDrinks, ...cat];
      });
    }
    
    // 空の場合のフォールバック
    if (allDrinks.length === 0) {
      Object.values(drinkDatabase.cocktails).forEach(cat => {
        allDrinks = [...allDrinks, ...cat];
      });
    }

    allDrinks = allDrinks.map(drink => {
      let score = 0;
      const taste = drink.taste || {};

      if (prefs.experience === 'new' && drink.beginner) score += 5;
      if (prefs.experience === 'pro' && !drink.beginner) score += 3;

      if (prefs.mood === 'relax' && (taste.smooth || taste.sweet > 3)) score += 3;
      if (prefs.mood === 'celebrate' && taste.refreshing > 3) score += 3;
      if (prefs.mood === 'strong' && (taste.strong > 3 || taste.dry > 3)) score += 3;
      if (prefs.mood === 'light' && (taste.refreshing > 3 || drink.beginner)) score += 3;
      if (prefs.mood === 'sweet' && taste.sweet > 3) score += 4;
      if (prefs.mood === 'food' && (taste.refreshing > 3 || taste.dry > 3)) score += 3;

      prefs.taste.forEach(pref => {
        if (pref === 'smooth' && (taste.sweet > 2 || taste.smooth > 2)) score += 2;
        if (pref === 'bold' && (taste.strong > 3 || taste.dry > 3)) score += 2;
        if (pref === 'sweet' && taste.sweet > 3) score += 3;
        if (pref === 'refresh' && taste.refreshing > 3) score += 3;
        if (pref === 'smoky' && taste.smoky > 2) score += 3;
        if (pref === 'spicy' && taste.spicy > 2) score += 2;
      });

      score += Math.random() * 2;

      return { ...drink, score };
    });

    allDrinks.sort((a, b) => b.score - a.score);
    return allDrinks[0] || allDrinks[Math.floor(Math.random() * allDrinks.length)];
  };

  const handleServingSelect = async (servingId, servingLabel) => {
    addUserMessage(servingLabel);
    setSelectedServing(servingId);
    await addBotMessage(t.confirmOrder, [
      { id: 'confirm', label: t.addToOrder },
      { id: 'another', label: t.tryAnother }
    ]);
    setCurrentStep('confirm');
  };

  const handleConfirm = async (action) => {
    if (action === 'confirm') {
      addUserMessage(t.addToOrder);
      const orderItem = {
        drink: currentRecommendation,
        serving: selectedServing,
        id: Date.now()
      };
      setOrder(prev => [...prev, orderItem]);
      setSelectedServing(null);
      
      await addBotMessage(t.anythingElse, [
        { id: 'more', label: t.startOver },
        { id: 'done', label: t.placeOrder }
      ]);
      setCurrentStep('final');
    } else if (action === 'another') {
      addUserMessage(t.tryAnother);
      
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      setIsTyping(false);

      const altDrink = findAlternative();
      setCurrentRecommendation(altDrink);
      const needsServing = altDrink.category === 'whisky' || altDrink.category === 'shochu';
      
      setMessages(prev => [...prev, {
        type: 'bot',
        content: t.alternative,
        drink: altDrink,
        showServing: needsServing,
        timestamp: Date.now()
      }]);

      if (needsServing) {
        setCurrentStep('serving');
      } else {
        setCurrentStep('confirm');
      }
    }
  };

  const findAlternative = () => {
    const newPrefs = { ...userPrefs, taste: userPrefs.taste.slice(0, -1) };
    let drink = findBestMatch(newPrefs);
    if (drink.id === currentRecommendation?.id) {
      newPrefs.mood = ['relax', 'celebrate', 'explore'][Math.floor(Math.random() * 3)];
      drink = findBestMatch(newPrefs);
    }
    return drink;
  };

  const handleFinal = async (action) => {
    if (action === 'more') {
      addUserMessage(t.startOver);
      setUserPrefs({ mood: null, experience: null, drinkType: null, taste: [] });
      setSelectedTastes([]);
      setCurrentRecommendation(null);
      await addBotMessage(t.askMood, getMoodOptions());
      setCurrentStep('mood');
    } else if (action === 'done') {
      addUserMessage(t.placeOrder);
      setOrderNumber(generateOrderNumber());
      setTimeout(() => {
        setOrderPlaced(true);
      }, 400);
    }
  };

  const resetAll = () => {
    setMessages([]);
    setUserPrefs({ mood: null, experience: null, drinkType: null, taste: [] });
    setSelectedTastes([]);
    setCurrentRecommendation(null);
    setSelectedServing(null);
    setOrder([]);
    setOrderPlaced(false);
    setOrderNumber(null);
    setCurrentStep('welcome');
  };

  // ===== JAPANESE LABELS FOR STAFF =====
  const servingLabelsJa = {
    straight: 'ストレート',
    rock: 'ロック',
    mizuwari: '水割り',
    highball: 'ハイボール',
    twiceup: 'トワイスアップ',
    hot: 'ホット',
    soda: 'ソーダ割り',
    oyuwari: 'お湯割り',
    ocha: 'お茶割り',
  };

  const moodLabelsJa = {
    relax: 'リラックスしたい',
    celebrate: 'お祝い',
    explore: '新しいものを試したい',
    classic: '定番が飲みたい',
    strong: '強いお酒が欲しい',
    light: '軽めにしたい',
    food: '食事に合わせたい',
    sweet: '甘いものが欲しい',
  };

  const expLabelsJa = {
    new: '初心者',
    some: 'ある程度飲み慣れている',
    pro: '詳しい',
  };

  const tasteLabelsJa = {
    smooth: 'まろやか',
    bold: 'しっかり',
    sweet: '甘い',
    refresh: '爽やか',
    smoky: 'スモーキー',
    spicy: 'スパイシー',
  };

  // ===== WELCOME SCREEN - Language Select (Western Saloon Theme) =====
  if (currentStep === 'welcome' && !lang) {
    return (
      <div className="min-h-screen saloon-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Lantern glows */}
        <div className="lantern-glow" style={{ top: '5%', left: '5%' }}></div>
        <div className="lantern-glow" style={{ top: '5%', right: '5%' }}></div>
        <div className="lantern-glow" style={{ bottom: '30%', left: '8%' }}></div>
        <div className="lantern-glow" style={{ bottom: '30%', right: '8%' }}></div>

        {/* Fireplace glow */}
        <div className="fireplace-glow"></div>

        {/* Decorative horseshoes */}
        <div className="absolute top-[15%] left-[8%] text-4xl horseshoe transform -rotate-12 opacity-60">∩</div>
        <div className="absolute top-[12%] right-[10%] text-3xl horseshoe transform rotate-12 opacity-50">∩</div>

        <div className="max-w-sm w-full relative z-10">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="wood-title text-4xl md:text-5xl leading-tight mb-1">CRAZY HORSE</h1>
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl horseshoe transform rotate-90">∩</span>
              <h2 className="wood-title text-2xl md:text-3xl">SALOON</h2>
              <span className="text-xl horseshoe transform -rotate-90">∩</span>
            </div>
          </div>

          {/* Language Selection */}
          <div className="space-y-3">
            {Object.entries(languageFlags).map(([code, { name }]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="w-full py-4 px-6 text-left transition-all duration-300 group"
                style={{
                  background: 'linear-gradient(180deg, rgba(92,68,16,0.8) 0%, rgba(74,58,14,0.9) 100%)',
                  border: '2px solid #6B4E12',
                  borderRadius: '8px',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(180deg, rgba(139,105,20,0.9) 0%, rgba(107,78,18,1) 100%)';
                  e.currentTarget.style.borderColor = '#B8860B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(180deg, rgba(92,68,16,0.8) 0%, rgba(74,58,14,0.9) 100%)';
                  e.currentTarget.style.borderColor = '#6B4E12';
                }}
              >
                <span
                  className="text-amber-200 group-hover:text-white text-sm tracking-wider transition-colors font-medium"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ===== WELCOME SCREEN - Start (Western Saloon Theme) =====
  if (currentStep === 'welcome' && lang) {
    return (
      <div className="min-h-screen saloon-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Lantern glows */}
        <div className="lantern-glow" style={{ top: '5%', left: '5%' }}></div>
        <div className="lantern-glow" style={{ top: '5%', right: '5%' }}></div>
        <div className="lantern-glow" style={{ bottom: '30%', left: '8%' }}></div>
        <div className="lantern-glow" style={{ bottom: '30%', right: '8%' }}></div>

        {/* Fireplace glow */}
        <div className="fireplace-glow"></div>

        {/* Decorative horseshoes */}
        <div className="absolute top-[15%] left-[8%] text-4xl horseshoe transform -rotate-12 opacity-60">∩</div>
        <div className="absolute top-[12%] right-[10%] text-3xl horseshoe transform rotate-12 opacity-50">∩</div>

        <div className="max-w-md w-full text-center relative z-10">
          {/* Main Title - 3D Carved Wood Style */}
          <div className="mb-4">
            <h1 className="wood-title text-5xl md:text-6xl leading-tight">CRAZY</h1>
            <h1 className="wood-title text-5xl md:text-6xl leading-tight">HORSE</h1>
          </div>

          {/* Horseshoe decorations around SALOON */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-2xl horseshoe transform rotate-90">∩</span>
            <h2 className="wood-title text-3xl md:text-4xl">SALOON</h2>
            <span className="text-2xl horseshoe transform -rotate-90">∩</span>
          </div>

          {/* Leather Banner with Tagline */}
          <div className="leather-banner mx-auto mb-12 max-w-xs">
            <p className="text-amber-100 text-sm md:text-base tracking-wide font-medium"
               style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              {t.tagline}
            </p>
          </div>

          {/* Rope/Leather Framed Start Button */}
          <button
            onClick={startConversation}
            className="rope-button text-amber-200 hover:text-white text-xl md:text-2xl tracking-[0.15em] transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {t.startChat}
          </button>

          {/* Wooden Sign Language Indicator */}
          <div className="mt-12">
            <button
              onClick={() => setLang(null)}
              className="wood-sign text-amber-200 hover:text-white text-sm tracking-wider transition-colors inline-block"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              {languageFlags[lang]?.name}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== ORDER PLACED =====
  if (orderPlaced) {
    const handlePrint = () => {
      window.print();
    };
    
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center p-6 overflow-y-auto">
        <div className="max-w-md w-full pt-12">
          {/* Customer confirmation */}
          <div className="text-center mb-12 print:hidden">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
            <h2 className="text-xl text-white tracking-[0.2em] mb-3">{t.orderPlaced}</h2>
            <p className="text-neutral-500 text-sm">{t.thankYou}</p>
          </div>
          
          {/* Staff Order Sheet - Print Optimized */}
          <div className="bg-white text-neutral-900 p-6 mb-8 print:shadow-none print:border-2 print:border-black" id="order-slip">
            {/* Header */}
            <div className="text-center mb-4 pb-4 border-b-2 border-dashed border-neutral-400">
              <h3 className="font-bold text-2xl tracking-wider">CRAZY HORSE</h3>
              <p className="text-neutral-500 text-xs mt-1">SALOON</p>
            </div>
            
            {/* Order Info */}
            <div className="flex justify-between items-start mb-4 pb-4 border-b border-neutral-200">
              <div>
                <p className="text-xs text-neutral-500">注文番号</p>
                <p className="font-bold text-2xl font-mono">{orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-neutral-600">{new Date().toLocaleDateString('ja-JP')}</p>
                <p className="text-sm text-neutral-600">{new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
            
            {/* Customer Preferences */}
            <div className="bg-neutral-100 p-3 mb-4 text-sm print:bg-white print:border print:border-neutral-300">
              <p className="font-bold text-xs text-neutral-500 mb-2 tracking-wider">お客様情報</p>
              <div className="grid grid-cols-2 gap-2 text-neutral-700 text-xs">
                <div>
                  <span className="text-neutral-500">言語:</span> {languageFlags[lang]?.name}
                </div>
                <div>
                  <span className="text-neutral-500">経験:</span> {expLabelsJa[userPrefs.experience] || '—'}
                </div>
                <div>
                  <span className="text-neutral-500">気分:</span> {moodLabelsJa[userPrefs.mood] || '—'}
                </div>
                <div>
                  <span className="text-neutral-500">好み:</span> {userPrefs.taste.map(t => tasteLabelsJa[t]).join('、') || '—'}
                </div>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="mb-4">
              <p className="font-bold text-xs text-neutral-500 mb-3 tracking-wider">ご注文内容</p>
              <table className="w-full text-sm">
                <tbody>
                  {order.map((item, idx) => (
                    <tr key={idx} className="border-b border-neutral-200">
                      <td className="py-3 pr-2">
                        <p className="font-bold">{item.drink.nameJa || item.drink.name}</p>
                        {item.serving && (
                          <p className="text-neutral-600 text-xs">{servingLabelsJa[item.serving]}</p>
                        )}
                      </td>
                      <td className="py-3 text-right font-mono whitespace-nowrap">¥{item.drink.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Total */}
            <div className="flex justify-between items-center pt-4 border-t-2 border-neutral-900">
              <p className="font-bold text-lg">合計</p>
              <p className="font-bold text-3xl font-mono">¥{order.reduce((sum, item) => sum + item.drink.price, 0)}</p>
            </div>
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-dashed border-neutral-300 text-center text-xs text-neutral-400 print:hidden">
              {order.length} 点
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="flex-1 py-4 border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-300 transition-all duration-300 text-sm tracking-[0.1em]"
            >
              印刷
            </button>
            <button
              onClick={resetAll}
              className="flex-1 py-4 border border-amber-700 text-amber-500 hover:bg-amber-700 hover:text-white transition-all duration-300 text-sm tracking-[0.2em]"
            >
              {t.startOver}
            </button>
          </div>
        </div>
        
        {/* Print Styles */}
        <style>{`
          @media print {
            body * { visibility: hidden; }
            #order-slip, #order-slip * { visibility: visible; }
            #order-slip { 
              position: absolute; 
              left: 0; 
              top: 0; 
              width: 80mm;
              padding: 5mm;
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    );
  }

  // ===== MAIN CHAT INTERFACE =====
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Head>
        <title>CRAZY HORSE SALOON</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      {/* Header */}
      <header className="bg-neutral-950 border-b border-neutral-900 p-4 flex items-center justify-between sticky top-0 z-50">
        <div>
          <span className="text-white text-sm tracking-[0.2em]">CRAZY HORSE</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setLang(null); resetAll(); }}
            className="text-neutral-600 hover:text-neutral-400 text-xs transition-colors"
          >
            {languageFlags[lang]?.name}
          </button>
          {order.length > 0 && (
            <button
              onClick={() => setShowOrder(true)}
              className="text-amber-600 hover:text-amber-500 text-sm flex items-center gap-2 transition-colors"
            >
              <span className="w-5 h-5 border border-current flex items-center justify-center text-xs">{order.length}</span>
            </button>
          )}
        </div>
      </header>

      {/* Chat Messages */}
      <style>{`
        @keyframes avatarSlideIn {
          from { opacity: 0; transform: translateY(8px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes msgSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(217,119,6,0); }
          50% { box-shadow: 0 0 12px 2px rgba(217,119,6,0.3); }
        }
        .bot-avatar-enter {
          animation: avatarSlideIn 0.4s ease-out both;
        }
        .bot-msg-enter {
          animation: msgSlideIn 0.4s ease-out 0.15s both;
        }
        .avatar-glow {
          animation: avatarGlow 2s ease-in-out 0.5s 1;
        }
      `}</style>
      <div ref={chatRef} className="flex-1 overflow-y-auto p-6 space-y-6 pb-24">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start items-start gap-3'}`}>
            {/* Master Annie Avatar */}
            {msg.type === 'bot' && (
              <div className="flex-shrink-0 bot-avatar-enter">
                <div className="w-10 h-10 avatar-glow">
                  <MasterAvatar size={40} />
                </div>
              </div>
            )}
            <div className={`max-w-[80%] ${
              msg.type === 'user'
                ? 'bg-amber-900/30 border border-amber-800/50 px-5 py-3'
                : 'bg-neutral-900/50 border border-neutral-800 px-5 py-4 bot-msg-enter'
            }`}>
              {msg.type === 'bot' && (
                <p className="text-neutral-500 text-xs tracking-wider mb-2">{t.bartenderName}</p>
              )}
              
              <p className={`text-sm leading-relaxed ${msg.type === 'user' ? 'text-amber-200' : 'text-neutral-300'}`}>{msg.content}</p>
              
              {/* Drink Card */}
              {msg.drink && (
                <div className="mt-4 border border-neutral-700 bg-neutral-900/50 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-white font-medium">{msg.drink.name}</h4>
                      {msg.drink.nameJa && (
                        <p className="text-neutral-500 text-xs mt-1">{msg.drink.nameJa}</p>
                      )}
                    </div>
                    <span className="text-amber-500">¥{msg.drink.price}</span>
                  </div>
                  
                  {msg.drink.subcat && (
                    <p className="text-neutral-600 text-xs mb-3">{msg.drink.subcat}</p>
                  )}
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-3">{msg.drink.profile?.[lang] || msg.drink.profile?.en}</p>
                  
                  {msg.drink.beginner && (
                    <p className="text-amber-700 text-xs">{t.beginner}</p>
                  )}
                  
                  {/* Serving Options */}
                  {msg.showServing && currentStep === 'serving' && idx === messages.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <p className="text-neutral-500 text-xs mb-3">{t.askServing}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {getServingOptions(msg.drink.category).map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => handleServingSelect(opt.id, opt.label)}
                            className={`p-3 text-left transition-all text-sm border ${
                              opt.forBeginner
                                ? 'border-amber-800/50 hover:border-amber-600 text-amber-200'
                                : 'border-neutral-800 hover:border-neutral-600 text-neutral-400'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Direct Add Button for Cocktails */}
                  {!msg.showServing && currentStep === 'confirm' && idx === messages.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-neutral-800 flex gap-2">
                      <button
                        onClick={() => handleConfirm('confirm')}
                        className="flex-1 border border-amber-700 text-amber-500 hover:bg-amber-700 hover:text-white py-2 text-sm transition-all"
                      >
                        {t.addToOrder}
                      </button>
                      <button
                        onClick={() => handleConfirm('another')}
                        className="px-4 border border-neutral-700 text-neutral-500 hover:border-neutral-500 py-2 text-sm transition-all"
                      >
                        {t.tryAnother}
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Option Buttons - Only show on last message */}
              {msg.options && currentStep !== 'taste' && idx === messages.length - 1 && (
                <div className="mt-4 space-y-2">
                  {msg.options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        if (currentStep === 'confirm') {
                          handleConfirm(opt.id);
                        } else if (currentStep === 'final') {
                          handleFinal(opt.id);
                        } else {
                          handleOptionSelect(opt.id, opt.label);
                        }
                      }}
                      className="w-full border border-neutral-800 hover:border-amber-700 text-neutral-400 hover:text-amber-500 p-3 transition-all duration-200 text-left text-sm"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Taste Multi-Select */}
              {msg.options && currentStep === 'taste' && idx === messages.length - 1 && (
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {msg.options.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect(opt.id, opt.label)}
                        className={`border p-3 transition-all duration-200 text-left text-sm ${
                          selectedTastes.includes(opt.id)
                            ? 'border-amber-500 bg-amber-900/30 text-amber-400'
                            : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleTasteConfirm}
                    className="w-full border border-amber-700 text-amber-500 hover:bg-amber-700 hover:text-white p-3 transition-all duration-200 text-sm tracking-wider"
                  >
                    {selectedTastes.length > 0 
                      ? (lang === 'ja' ? `${selectedTastes.length}つ選択で決定` 
                        : lang === 'zh' ? `确认选择${selectedTastes.length}个`
                        : lang === 'ko' ? `${selectedTastes.length}개 선택 확인`
                        : lang === 'fr' ? `Confirmer (${selectedTastes.length})`
                        : lang === 'es' ? `Confirmar (${selectedTastes.length})`
                        : lang === 'it' ? `Conferma (${selectedTastes.length})`
                        : `Confirm (${selectedTastes.length} selected)`)
                      : (lang === 'ja' ? 'スキップ' 
                        : lang === 'zh' ? '跳过'
                        : lang === 'ko' ? '건너뛰기'
                        : lang === 'fr' ? 'Passer'
                        : lang === 'es' ? 'Omitir'
                        : lang === 'it' ? 'Salta'
                        : 'Skip')}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start items-start gap-3">
            <div className="flex-shrink-0 bot-avatar-enter">
              <div className="w-10 h-10 avatar-glow">
                <MasterAvatar size={40} />
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 px-5 py-4 bot-msg-enter">
              <p className="text-neutral-500 text-xs tracking-wider mb-2">{t.bartenderName}</p>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Order Modal */}
      {showOrder && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-end md:items-center justify-center p-4" onClick={() => setShowOrder(false)}>
          <div className="bg-neutral-950 border border-neutral-800 w-full max-w-md max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="text-white text-sm tracking-wider">{t.orderSummary}</h3>
              <button onClick={() => setShowOrder(false)} className="text-neutral-600 hover:text-white text-xl transition-colors">×</button>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[50vh]">
              {order.length === 0 ? (
                <p className="text-neutral-600 text-center py-8 text-sm">{t.empty}</p>
              ) : (
                <div className="space-y-4">
                  {order.map((item, idx) => (
                    <div key={idx} className="border border-neutral-800 p-4 flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{item.drink.name}</p>
                        {item.serving && (
                          <p className="text-neutral-500 text-xs mt-1">{servingLabelsJa[item.serving]}</p>
                        )}
                        <p className="text-amber-500 text-sm mt-1">¥{item.drink.price}</p>
                      </div>
                      <button
                        onClick={() => setOrder(order.filter((_, i) => i !== idx))}
                        className="text-neutral-600 hover:text-red-500 text-xs transition-colors"
                      >
                        {t.remove}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {order.length > 0 && (
              <div className="p-4 border-t border-neutral-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-400 text-sm">{t.total}</span>
                  <span className="text-white text-xl">¥{order.reduce((sum, item) => sum + item.drink.price, 0)}</span>
                </div>
                <button
                  onClick={() => { setShowOrder(false); setOrderPlaced(true); }}
                  className="w-full border border-amber-700 text-amber-500 hover:bg-amber-700 hover:text-white py-4 text-sm tracking-wider transition-all"
                >
                  {t.placeOrder}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

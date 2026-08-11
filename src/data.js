export const stubs = [
  {
    channel: 'AIRBNB',
    from: 'Fatou D.',
    excerpt: 'Bonjour, la villa de Ngor est-elle dispo ce week-end ?',
    time: '08:14',
  },
  {
    channel: 'WHATSAPP',
    from: 'Moussa S.',
    excerpt: 'On peut visiter l’appart de Sacré-Cœur demain ?',
    time: '09:02',
  },
  {
    channel: 'BOOKING.COM',
    from: 'Claire M.',
    excerpt: 'Possible d’arriver après minuit ?',
    time: '09:47',
  },
]

export const stats = [
  { value: 1200, suffix: '+', label: 'messages traités chaque mois' },
  { value: 9, suffix: ' min', label: 'temps de réponse moyen' },
  { value: 46, suffix: '', label: 'biens pilotés à Dakar et sa région' },
  { value: 98, suffix: '%', label: 'de clients qui restent après 6 mois' },
]

export const channels = [
  'Airbnb',
  'Booking.com',
  'WhatsApp',
  'Email',
  'SMS',
  'Instagram',
  'Google Business',
]

export const services = [
  {
    label: 'Messages',
    title: 'Réponse aux voyageurs et acheteurs',
    text: 'Chaque message reçoit une réponse en quelques minutes, jour et nuit, sur WhatsApp, email, Airbnb ou Booking.',
    image: 'https://images.unsplash.com/photo-1719204718581-5c95889c8ec9?auto=format&fit=crop&w=900&h=1100&q=80',
  },
  {
    label: 'Réservations',
    title: 'Calendrier et disponibilités à jour',
    text: 'Vos annonces restent synchronisées. Aucune double réservation, aucune date oubliée.',
    image: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?auto=format&fit=crop&w=900&h=1100&q=80',
  },
  {
    label: 'Mise en relation',
    title: 'Acheteurs et locataires qualifiés',
    text: 'On filtre les demandes sérieuses et on vous transmet uniquement les contacts prêts à avancer.',
    image: 'https://images.unsplash.com/photo-1758519289174-72721d274e4a?auto=format&fit=crop&w=900&h=1100&q=80',
  },
  {
    label: 'Annonces',
    title: 'Rédaction et mise à jour',
    text: 'Textes, photos et tarifs pensés pour donner envie de réserver ou d’acheter, ajustés selon la saison.',
    image: 'https://images.unsplash.com/photo-1695014549562-69f3b2e90da7?auto=format&fit=crop&w=900&h=1100&q=80',
  },
  {
    label: 'Suivi',
    title: 'Service après-vente',
    text: 'Arrivée, séjour, remise des clés, avis client : on accompagne chaque étape jusqu’au bout.',
    image: 'https://images.unsplash.com/photo-1733244766159-f58f4184fd38?auto=format&fit=crop&w=900&h=1100&q=80',
  },
  {
    label: 'Reporting',
    title: 'Un point clair chaque mois',
    text: 'Nombre de demandes, taux de réponse, réservations conclues : vous savez toujours où vous en êtes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&h=1100&q=80',
  },
]

export const gallery = [
  { title: 'Villa, Ngor', tag: 'Location courte durée', image: 'https://images.unsplash.com/photo-1758448756207-54505680d130?auto=format&fit=crop&w=900&h=1100&q=80' },
  { title: 'Appartement, Sacré-Cœur', tag: 'Vente', image: 'https://images.unsplash.com/photo-1758193431351-68538bf55ec3?auto=format&fit=crop&w=900&h=700&q=80' },
  { title: 'Duplex, Almadies', tag: 'Location courte durée', image: 'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?auto=format&fit=crop&w=900&h=1100&q=80' },
  { title: 'Maison, Saly', tag: 'Location & vente', image: 'https://images.unsplash.com/photo-1759372945658-1e9f56e751bd?auto=format&fit=crop&w=900&h=700&q=80' },
  { title: 'Studio, Plateau', tag: 'Location longue durée', image: 'https://images.unsplash.com/photo-1690323223790-4df744a1a033?auto=format&fit=crop&w=900&h=1100&q=80' },
  { title: 'Villa, Popenguine', tag: 'Vente', image: 'https://images.unsplash.com/photo-1528047705243-ebb19baf436f?auto=format&fit=crop&w=900&h=700&q=80' },
]

export const steps = [
  {
    n: '01',
    title: 'Vous nous confiez vos biens',
    text: 'Un bien à louer sur Airbnb, un appartement à vendre, une villa à gérer : on prend le temps de comprendre vos biens et vos priorités.',
    image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?auto=format&fit=crop&w=700&h=500&q=80',
  },
  {
    n: '02',
    title: 'On branche vos canaux',
    text: 'WhatsApp, email, Airbnb, Booking.com : tout arrive dans un seul fil, sans rien changer à vos outils actuels.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&h=500&q=80',
  },
  {
    n: '03',
    title: 'Vos clients ont une réponse en minutes',
    text: 'On répond en votre nom, avec votre ton, et on ne vous transmet que ce qui demande votre décision.',
    image: 'https://images.unsplash.com/photo-1758874383904-c3c409aeb32d?auto=format&fit=crop&w=700&h=500&q=80',
  },
]

export const plans = [
  {
    slug: 'essentiel',
    name: 'Essentiel',
    price: '75 000',
    unit: 'FCFA / bien / mois',
    desc: 'Pour un ou deux biens en location courte durée.',
    features: [
      'Réponse aux messages sous 30 min',
      '1 canal (Airbnb ou WhatsApp)',
      'Calendrier à jour',
      'Rapport mensuel',
    ],
    featured: false,
  },
  {
    slug: 'pro',
    name: 'Pro',
    price: '180 000',
    unit: 'FCFA / mois',
    desc: 'Jusqu’à 6 biens, location et vente mélangées.',
    features: [
      'Réponse sous 10 min, 7j/7',
      'Tous les canaux connectés',
      'Qualification des acheteurs',
      'Rédaction des annonces incluse',
      'Rapport détaillé + appel mensuel',
    ],
    featured: true,
  },
  {
    slug: 'sur-mesure',
    name: 'Sur-mesure',
    price: 'À discuter',
    unit: 'portefeuille de biens',
    desc: 'Agences et propriétaires avec un portefeuille large.',
    features: [
      'Équipe dédiée',
      'Astreinte téléphonique',
      'Intégration à vos outils internes',
      'Reporting personnalisé',
    ],
    featured: false,
  },
]

export const testimonials = [
  {
    quote: 'Avant, je répondais à mes voyageurs entre deux réunions. Aujourd’hui, mes trois appartements de Ngor et Saly tournent sans que je touche à mon téléphone.',
    name: 'Aïda Fall',
    role: 'Propriétaire, Dakar',
    avatar: 'https://images.unsplash.com/photo-1568254684102-4b54479a7471?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote: 'On a vendu la villa de Popenguine en cinq semaines. Chaque visiteur sérieux était déjà qualifié avant même que je le rencontre.',
    name: 'Ibrahima Ndao',
    role: 'Vendeur, Popenguine',
    avatar: 'https://images.unsplash.com/photo-1514278033938-06f80809a42c?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote: 'Le reporting mensuel m’a permis de repérer que mes prix étaient trop bas le week-end. Un ajustement simple, un revenu en plus.',
    name: 'Sophie Renard',
    role: 'Propriétaire, Almadies',
    avatar: 'https://images.unsplash.com/photo-1542226601-bc82e276ae0a?auto=format&fit=crop&w=150&h=150&q=80',
  },
]

export const faq = [
  {
    q: 'Est-ce que je garde le contrôle de mes annonces ?',
    a: 'Oui. Vous restez propriétaire de vos comptes Airbnb, Booking.com et de vos annonces. Larpilote agit en votre nom mais ne remplace jamais vos comptes.',
  },
  {
    q: 'Que se passe-t-il si un message demande ma décision ?',
    a: 'On vous transmet uniquement ce qui compte : une négociation, une demande particulière, un imprévu. Le reste est traité directement.',
  },
  {
    q: 'Puis-je changer de formule en cours de route ?',
    a: 'Oui, à tout moment. Beaucoup de propriétaires commencent en Essentiel puis passent en Pro quand ils ajoutent des biens.',
  },
  {
    q: 'Travaillez-vous avec des agences, pas seulement des particuliers ?',
    a: 'Oui, la formule Sur-mesure est pensée pour les agences et les portefeuilles de plusieurs dizaines de biens.',
  },
]

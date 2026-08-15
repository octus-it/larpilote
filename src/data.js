// Replace with the real LARPILOTE WhatsApp number before going live.
export const whatsappNumber = '221000000000'

export function whatsappLink(message) {
  const base = `https://wa.me/${whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const painPoints = [
  { icon: 'message', title: 'Messages voyageurs', text: 'Répondre aux questions avant, pendant et après le séjour.' },
  { icon: 'calendar', title: 'Réservations', text: 'Suivre les réservations, modifications, annulations et disponibilités.' },
  { icon: 'globe', title: 'Plusieurs plateformes', text: 'Gérer Airbnb, Booking et les autres canaux de réservation.' },
  { icon: 'star', title: 'Avis voyageurs', text: 'Répondre aux avis et suivre les retours clients.' },
  { icon: 'coins', title: 'Tarification', text: 'Surveiller les prix et identifier les opportunités d’amélioration.' },
  { icon: 'alert', title: 'Incidents', text: 'Réagir rapidement lorsqu’un problème survient sur place.' },
  { icon: 'chart', title: 'Performance', text: 'Comprendre ce qui fonctionne et ce qui peut être amélioré.' },
]

export const solutionFlow = [
  { title: 'Voyageur', text: 'Signale une demande ou un problème' },
  { title: 'LARPILOTE', text: 'Analyse, répond, coordonne et suit à distance' },
  { title: 'Propriétaire / Conciergerie', text: 'Garde le contrôle et prend les décisions nécessaires' },
  { title: 'Prestataire local', text: 'Intervient lorsque la situation nécessite une présence physique' },
]

export const services = [
  { icon: 'message', title: 'Communication voyageurs', text: 'Nous gérons les échanges avec vos voyageurs avant, pendant et après leur séjour.' },
  { icon: 'calendar', title: 'Réservations', text: 'Nous suivons vos réservations, modifications, annulations et disponibilités selon vos procédures.' },
  { icon: 'globe', title: 'Gestion multicanal', text: 'Nous vous accompagnons dans la gestion de vos annonces sur Airbnb, Booking et les autres plateformes adaptées à votre activité.' },
  { icon: 'chart', title: 'Optimisation', text: 'Nous identifions les possibilités d’amélioration de vos annonces, de votre visibilité et de votre stratégie.' },
  { icon: 'handshake', title: 'Coordination à distance', text: 'Lorsqu’un incident survient, nous contactons les personnes que vous avez désignées et suivons la situation à distance.' },
  { icon: 'clipboard', title: 'Reporting', text: 'Vous recevez une vision claire de votre activité, de vos performances et des points à améliorer.' },
]

export const servicesDetailed = [
  {
    icon: 'message',
    title: 'Communication voyageurs',
    intro: 'Nous prenons en charge les échanges avec vos voyageurs selon vos procédures.',
    items: [
      { label: 'Avant la réservation', text: 'Questions, informations et demandes.' },
      { label: 'Avant l’arrivée', text: 'Informations pratiques et instructions.' },
      { label: 'Pendant le séjour', text: 'Assistance et suivi des demandes.' },
      { label: 'Après le séjour', text: 'Départ, remerciements et avis.' },
    ],
  },
  {
    icon: 'calendar',
    title: 'Réservations',
    intro: 'Nous suivons :',
    bullets: ['Nouvelles réservations', 'Modifications', 'Annulations', 'Disponibilités', 'Calendriers', 'Informations voyageurs'],
  },
  {
    icon: 'globe',
    title: 'Gestion multicanal',
    intro: 'Votre activité peut être présente sur plusieurs plateformes. LARPILOTE vous accompagne dans le suivi de vos canaux de réservation selon les outils et accès disponibles.',
    tag: 'Airbnb • Booking • Autres plateformes',
  },
  {
    icon: 'megaphone',
    title: 'Optimisation des annonces',
    intro: 'Une annonce doit être claire, attractive et cohérente avec le logement proposé. Nous pouvons intervenir sur :',
    bullets: ['Titres', 'Descriptions', 'Informations', 'Équipements', 'Structure', 'Recommandations photos', 'Référencement interne'],
  },
  {
    icon: 'chart',
    title: 'Pilotage des performances',
    intro: 'Nous suivons les indicateurs disponibles afin d’identifier :',
    bullets: ['Les périodes fortes', 'Les périodes creuses', 'Les opportunités', 'Les points faibles', 'Les améliorations possibles'],
  },
  {
    icon: 'coins',
    title: 'Recommandations tarifaires',
    intro: 'Nous surveillons les éléments disponibles liés au positionnement tarifaire et formulons des recommandations adaptées à votre activité.',
    note: 'LARPILOTE recommande. Le propriétaire ou la conciergerie conserve la décision finale.',
  },
  {
    icon: 'alert',
    title: 'Coordination des incidents',
    intro: 'Lorsqu’un problème nécessite une intervention physique :',
    flow: ['Voyageur', 'LARPILOTE', 'Prestataire désigné', 'Suivi', 'Propriétaire'],
    note: 'Nous ne remplaçons pas les équipes terrain. Nous assurons le pilotage à distance.',
  },
  {
    icon: 'clipboard',
    title: 'Reporting',
    intro: 'Selon votre formule, vous bénéficiez d’un suivi comprenant notamment :',
    bullets: ['Activité', 'Réservations', 'Performances', 'Avis', 'Points d’attention', 'Recommandations'],
  },
]

export const processSteps = [
  { n: '01', title: 'Vous nous présentez votre activité', text: 'Vous nous expliquez votre logement, vos plateformes et vos besoins.' },
  { n: '02', title: 'Nous analysons', text: 'Nous identifions les tâches que vous souhaitez déléguer et le niveau de pilotage adapté.' },
  { n: '03', title: 'Nous configurons', text: 'Nous mettons en place vos procédures, vos informations voyageurs, vos calendriers et vos contacts.' },
  { n: '04', title: 'Nous pilotons', text: 'LARPILOTE prend en charge les tâches prévues dans votre formule.' },
  { n: '05', title: 'Vous gardez le contrôle', text: 'Votre logement, vos comptes, vos revenus et vos décisions restent sous votre contrôle.' },
]

export const processDetailed = [
  {
    n: '01',
    title: 'Présentation',
    text: 'Vous nous présentez votre logement ou votre activité.',
    bullets: ['Vos plateformes', 'Votre organisation', 'Vos besoins', 'Vos difficultés', 'Votre niveau de délégation souhaité'],
  },
  {
    n: '02',
    title: 'Analyse',
    text: 'Nous analysons votre fonctionnement actuel afin de déterminer ce que LARPILOTE peut réellement prendre en charge.',
  },
  {
    n: '03',
    title: 'Configuration',
    text: 'Nous collectons les informations nécessaires :',
    bullets: ['Informations du logement', 'Procédures', 'Instructions voyageurs', 'Accès nécessaires', 'Contacts', 'Prestataires', 'Personnes de confiance'],
  },
  {
    n: '04',
    title: 'Pilotage',
    text: 'Une fois la configuration terminée, LARPILOTE commence à prendre en charge les tâches prévues dans votre formule.',
  },
  {
    n: '05',
    title: 'Suivi',
    text: 'Nous suivons l’activité et vous transmettons les informations et rapports prévus.',
  },
]

export const emergencyContacts = [
  { icon: 'key', label: 'Serrurier' },
  { icon: 'droplet', label: 'Plombier' },
  { icon: 'zap', label: 'Électricien' },
  { icon: 'sparkles', label: 'Ménage' },
  { icon: 'shirt', label: 'Blanchisserie' },
  { icon: 'snowflake', label: 'Climatisation' },
  { icon: 'wrench', label: 'Maintenance' },
  { icon: 'user', label: 'Personne de confiance' },
]

export const incidentFlow = [
  { who: 'Voyageur', action: 'signale le problème' },
  { who: 'LARPILOTE', action: 'analyse' },
  { who: 'Prestataire désigné', action: 'intervient' },
  { who: 'LARPILOTE', action: 'suit et informe' },
  { who: 'Propriétaire', action: 'garde la décision' },
]

export const whyUs = [
  { icon: 'distance', title: 'À distance', text: 'Pilotez votre activité même lorsque vous êtes loin de votre logement.' },
  { icon: 'flexible', title: 'Flexible', text: 'Choisissez le niveau de gestion correspondant réellement à vos besoins.' },
  { icon: 'transparent', title: 'Transparent', text: 'Vous savez ce qui est pris en charge et ce qui reste sous votre responsabilité.' },
  { icon: 'performance', title: 'Orienté performance', text: 'Nous ne nous contentons pas d’exécuter. Nous cherchons également les opportunités d’amélioration.' },
]

export const plans = [
  {
    slug: 'essentiel',
    name: 'Essentiel',
    price: '109',
    unit: '$ / mois / logement',
    tagline: 'La gestion voyageurs essentielle pour les propriétaires qui souhaitent gagner du temps.',
    longTagline: 'Pour les propriétaires qui veulent principalement déléguer la communication avec les voyageurs.',
    features: [
      'Communication voyageurs',
      'Questions avant réservation',
      'Messages avant arrivée',
      'Assistance pendant le séjour',
      'Messages de départ',
      'Suivi des réservations',
      'Modifications et annulations',
      'Réponse aux avis',
      'Réception et suivi des signalements',
    ],
    limit: 'Jusqu’à 10 réservations / mois',
    cta: 'Choisir Essentiel',
    audience: 'proprietaire',
    featured: false,
  },
  {
    slug: 'business',
    name: 'Business',
    badge: 'Populaire',
    price: '189',
    unit: '$US / mois / logement',
    tagline: 'Pour les propriétaires qui souhaitent déléguer leur gestion quotidienne tout en améliorant les performances de leur logement.',
    longTagline: 'Pour les propriétaires qui souhaitent déléguer leur gestion quotidienne tout en améliorant les performances de leur logement.',
    featuresIntro: 'Tout ce qui est inclus dans la Formule Essentielle, plus :',
    featureGroups: [
      {
        title: 'Gestion multicanale',
        items: [
          'Airbnb, Booking.com et canaux compatibles',
          'Synchronisation des réservations et disponibilités',
          'Centralisation des communications',
        ],
      },
      {
        title: 'Optimisation de l’annonce',
        items: [
          'Optimisation du titre et de la description',
          'Mise en valeur des atouts du logement',
          'Conseils sur les photos et la présentation',
        ],
      },
      {
        title: 'Accompagnement tarifaire',
        items: [
          'Analyse du positionnement des prix',
          'Recommandations selon les périodes',
          'Identification des périodes fortes et creuses',
        ],
      },
      {
        title: 'Suivi des performances',
        items: [
          'Suivi des réservations et de l’activité',
          'Analyse des principaux indicateurs',
          'Recommandations d’amélioration',
        ],
      },
      {
        title: 'Coordination des incidents',
        items: [
          'Suivi des signalements',
          'Coordination avec les prestataires désignés',
          'Suivi des interventions',
          'Information du propriétaire',
        ],
      },
      {
        title: 'Rapport mensuel',
        text: 'Un récapitulatif de l’activité, des principaux résultats et des recommandations Larpilote.',
      },
    ],
    limit: 'Jusqu’à 10 réservations / mois / logement',
    billingNote: 'Chaque logement est facturé séparément.',
    disclaimer: 'Les interventions physiques, le ménage, la maintenance, les déplacements et l’accueil sur place ne sont pas inclus.',
    cta: 'Choisir cette formule',
    audience: 'proprietaire',
    featured: true,
  },
  {
    slug: 'relais',
    name: 'Relais',
    badge: 'Back-office digital pour conciergeries',
    price: 'À partir de 399',
    unit: '$US / mois',
    tagline: 'Vous gérez le terrain. Larpilote gère le back-office.',
    longTagline: 'Vous gérez le terrain. Larpilote gère le back-office.',
    features: [
      'Communication voyageurs, réservations, modifications, annulations, avis, signalements et suivi des demandes sur Airbnb, Booking.com et les canaux connectés.',
      'Coordination avec vos équipes ou prestataires sur place.',
    ],
    limit: 'Jusqu’à 5 logements et 50 réservations / mois au total',
    disclaimer: 'Ménage, accueil, déplacements, maintenance et interventions physiques non inclus.',
    cta: 'Parler à Larpilote',
    audience: 'conciergerie',
    featured: false,
  },
]

export const faqItems = [
  { q: 'LARPILOTE est-elle une conciergerie ?', a: 'Non. LARPILOTE est un service de gestion virtuelle et de pilotage à distance. Nous ne remplaçons pas nécessairement les équipes physiques qui s’occupent du logement.' },
  { q: 'Qui s’occupe du ménage ?', a: 'Le propriétaire ou la conciergerie conserve ses équipes de ménage. LARPILOTE peut coordonner à distance les personnes que vous avez désignées selon votre formule.' },
  { q: 'LARPILOTE possède-t-elle les clés ?', a: 'Non. LARPILOTE n’a pas vocation à assurer la gestion physique du logement.' },
  { q: 'Que se passe-t-il en cas de problème ?', a: 'Le voyageur signale le problème à LARPILOTE. Nous analysons la situation et contactons la personne ou le prestataire que vous avez désigné, selon vos consignes.' },
  { q: 'Qui paie les réparations ?', a: 'Les coûts des interventions, réparations et prestations restent à la charge du propriétaire, de la conciergerie ou du responsable concerné.' },
  { q: 'Puis-je conserver mon compte Airbnb ?', a: 'Oui. Vous conservez la propriété de vos comptes et de vos revenus. LARPILOTE intervient dans le cadre des accès et autorisations que vous lui accordez.' },
  { q: 'LARPILOTE travaille-t-elle uniquement avec Airbnb ?', a: 'Non. Selon votre formule et votre organisation, nous pouvons travailler avec Airbnb, Booking et d’autres plateformes compatibles.' },
  { q: 'LARPILOTE garantit-elle un nombre de réservations ?', a: 'Non. Nous pouvons analyser, optimiser et piloter votre activité, mais aucune formule ne garantit un taux d’occupation, un nombre de réservations ou un chiffre d’affaires.' },
  { q: 'Puis-je changer de formule ?', a: 'Oui, sous réserve des conditions prévues dans votre contrat.' },
  { q: 'Est-ce que LARPILOTE travaille avec les conciergeries ?', a: 'Oui. Notre offre RELAIS est spécialement conçue pour les conciergeries qui souhaitent externaliser une partie de leur back-office.' },
  { q: 'LARPILOTE peut-elle travailler en marque blanche ?', a: 'Oui. La formule RELAIS peut être proposée en marque blanche afin que la conciergerie conserve sa relation client et son identité.' },
  { q: 'Dois-je être présent dans le même pays que mon logement ?', a: 'Non. Le principe de LARPILOTE est justement de permettre le pilotage à distance. La présence physique nécessaire au logement reste assurée par les personnes ou prestataires désignés localement.' },
]

export const navGroups = [
  { label: 'Nos services', to: '/services' },
  { label: 'Nos forfaits', to: '/#tarifs' },
  {
    label: 'Ressources',
    items: [
      { label: 'Comment ça marche', to: '/comment-ca-marche', text: 'Le fonctionnement, étape par étape.' },
      { label: 'FAQ', to: '/faq', text: 'Les réponses aux questions fréquentes.' },
      { label: 'À propos', to: '/a-propos', text: 'Notre mission et notre vision.' },
    ],
  },
]

export const footerColumns = [
  {
    title: 'Propriétaires',
    links: [
      { label: 'Nos services', to: '/services' },
      { label: 'Nos forfaits', to: '/#tarifs' },
      { label: 'Comment ça marche', to: '/comment-ca-marche' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Conciergeries',
    links: [
      { label: 'LARPILOTE RELAIS', to: '/conciergeries' },
      { label: 'Nos services', to: '/services' },
      { label: 'Comment ça marche', to: '/comment-ca-marche' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'LARPILOTE',
    links: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Nos valeurs', to: '/a-propos' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Mentions légales', to: '/mentions-legales' },
      { label: 'Politique de confidentialité', to: '/confidentialite' },
      { label: 'CGV', to: '/cgv' },
      { label: 'Gestion des cookies', to: '/cookies' },
    ],
  },
]

// --- Questionnaire (rule-based, no AI) ---

export const quizQuestions = [
  {
    id: 'profile',
    question: 'Vous êtes :',
    type: 'single',
    options: ['Propriétaire', 'Conciergerie'],
  },
  {
    id: 'volume',
    question: 'Combien de logements gérez-vous ?',
    type: 'single',
    options: ['1', '2–5', '6–10', '10+'],
  },
  {
    id: 'monthlyBookings',
    question: 'Quel est votre volume mensuel de réservations ?',
    type: 'single',
    options: ['1–5', '6–15', '16–30', '30+'],
  },
  {
    id: 'platforms',
    question: 'Quelles plateformes utilisez-vous ?',
    type: 'multi',
    options: ['Airbnb', 'Booking', 'Autres'],
  },
  {
    id: 'problem',
    question: 'Quel est votre principal problème ?',
    type: 'single',
    options: ['Messages voyageurs', 'Réservations', 'Optimisation', 'Manque de temps', 'Gestion de plusieurs logements', 'Autre'],
  },
  {
    id: 'needsOptimization',
    question: 'Avez-vous besoin d’optimisation de vos annonces et de vos tarifs ?',
    type: 'single',
    options: ['Oui', 'Non'],
  },
  {
    id: 'needsCoordination',
    question: 'Avez-vous besoin de coordination des prestataires en cas d’incident ?',
    type: 'single',
    options: ['Oui', 'Non'],
  },
  {
    id: 'location',
    question: 'Où se situe votre logement ?',
    type: 'text',
    placeholder: 'Ville, pays',
  },
  {
    id: 'delegation',
    question: 'Quel niveau de délégation recherchez-vous ?',
    type: 'single',
    options: ['Communication uniquement', 'Gestion digitale complète', 'Back-office pour ma conciergerie'],
  },
]

export function recommendPlan(answers) {
  if (answers.profile === 'Conciergerie' || answers.delegation === 'Back-office pour ma conciergerie') {
    return 'relais'
  }
  if (answers.delegation === 'Gestion digitale complète') return 'business'
  if (answers.delegation === 'Communication uniquement') return 'essentiel'
  return 'business'
}

export const contactPlatforms = ['Airbnb', 'Booking', 'Autres']
export const contactDelegation = ['Communication voyageurs', 'Réservations', 'Gestion multicanal', 'Optimisation', 'Reporting', 'Coordination', 'Back-office', 'Autre']

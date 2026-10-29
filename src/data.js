export const whatsappNumber = '18198095434'

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
    unit: '$ US / mois / logement',
    tagline: 'La tranquillité au quotidien.',
    longTagline: 'Déléguez vos échanges avec les voyageurs et récupérez du temps pour vous.',
    features: [
      'Gestion des messages des voyageurs avant, pendant et après leur séjour.',
      'Réponses aux questions courantes des voyageurs.',
      'Suivi des réservations, modifications et annulations.',
      'Suivi des demandes et réclamations des voyageurs.',
      'Réponses aux avis voyageurs, selon les accès autorisés.',
      'Jusqu’à 10 réservations par mois et par logement.',
    ],
    cta: 'Choisir Essentiel',
    form: 'essentiel',
    audience: 'proprietaire',
    featured: false,
  },
  {
    slug: 'business',
    name: 'Business',
    price: '189',
    unit: '$ US / mois / logement',
    tagline: 'Le pilotage de votre activité.',
    longTagline: 'Déléguez votre gestion quotidienne et prenez de meilleures décisions grâce à un suivi régulier de votre activité locative.',
    featuresIntro: 'Toutes les prestations Essentiel, plus :',
    features: [
      'Suivi des annonces sur deux plateformes maximum, selon les accès disponibles.',
      'Analyse mensuelle des indicateurs de réservation et de performance.',
      'Revue mensuelle des tarifs et des promotions.',
      'Un rapport mensuel personnalisé par logement.',
      'Jusqu’à trois recommandations prioritaires par mois.',
      'Un échange de suivi mensuel de 20 minutes.',
      'Jusqu’à 10 réservations par mois et par logement.',
    ],
    cta: 'Choisir Business',
    form: 'business',
    audience: 'proprietaire',
    featured: true,
  },
  {
    slug: 'relais',
    name: 'Relais',
    pricePrefix: 'À partir de',
    price: '419',
    unit: '$ US / mois, dès 2 logements',
    tagline: 'Votre relais opérationnel à distance.',
    longTagline: 'Pour les conciergeries et gestionnaires multi-logements qui souhaitent déléguer une partie de leur back-office digital sans recruter immédiatement une équipe supplémentaire.',
    features: [
      'Gestion des messages voyageurs et suivi des demandes.',
      'Suivi des réservations.',
      'Suivi et mise à jour des annonces, selon les accès disponibles.',
      'Suivi des incidents et coordination à distance avec vos prestataires locaux.',
      'Analyse des tarifs et suivi des performances.',
      'Rapport mensuel d’activité.',
      'Offre sur étude personnalisée, adaptée à votre portefeuille.',
    ],
    cta: 'Demander une étude personnalisée',
    form: 'relais',
    audience: 'conciergerie',
    featured: false,
  },
]

export function formatPlanPrice(plan) {
  return [plan.pricePrefix, plan.price, plan.unit].filter(Boolean).join(' ')
}

export const audit = {
  slug: 'audit',
  name: 'Audit',
  title: 'Audit de performance de votre annonce Airbnb & Booking',
  tagline: 'Identifiez ce qui freine votre annonce et repartez avec un plan d’action concret.',
  text: 'LARPILOTE analyse votre annonce et les principaux éléments visibles de votre offre afin d’identifier les améliorations prioritaires à apporter à votre présence en ligne, et vous remet un plan d’action clair.',
  features: [
    'Analyse de l’annonce et de ses informations essentielles.',
    'Vérification des informations relatives au séjour et au départ.',
    'Revue des tarifs, promotions et frais visibles.',
    'Identification des points d’amélioration prioritaires.',
    'Plan d’action personnalisé et hiérarchisé.',
    'Restitution lors d’un échange de 20 minutes.',
  ],
  price: '69',
  unit: '$ US par logement, paiement unique',
  note: 'Prestation ponctuelle, sans abonnement. Si vous souscrivez à une formule Essentiel ou Business pour le même logement dans les 30 jours suivant la livraison de votre audit, les 69 $ US déjà payés seront déduits de votre première mensualité. Déduction applicable une seule fois, non cumulable avec une autre remise.',
  cta: 'Demander un audit',
  form: 'audit',
}

export const commonConditions = [
  'Les prestations LARPILOTE sont réalisées à distance, selon un périmètre et des horaires définis avec chaque client. Les interventions physiques, le ménage et la maintenance ne sont pas inclus.',
  'Le volume de réservations, les plateformes prises en charge et les délais de réponse sont confirmés avant le démarrage. Au-delà de 10 réservations par mois et par logement pour les formules Essentiel et Business, ou au-delà du périmètre convenu pour Relais, nous ajustons ensemble la formule ou le tarif.',
  'Les demandes exceptionnelles, la création complète d’annonces et les prestations hors périmètre peuvent faire l’objet d’un devis complémentaire.',
  'LARPILOTE fournit un accompagnement opérationnel et des recommandations. Aucun résultat précis en matière de revenus, de réservations ou de classement n’est garanti.',
]

// Durée d'engagement et conditions de résiliation : à fournir par la direction.
// Tant que la valeur est null, rien n'est affiché sur le site.
export const engagementTerms = null

// Adresse qui reçoit les demandes des formulaires (envoi via Resend).
export const requestEmail = 'support@larpilote.com'

// Lien Calendly du diagnostic gratuit de 30 minutes.
export const diagnosticBookingUrl = ''

export const requestProfiles = ['Propriétaire', 'Conciergerie ou gestionnaire']

export const requestForms = {
  essentiel: {
    subject: 'LARPILOTE – Demande de formule Essentiel',
    formule: 'Essentiel',
  },
  business: {
    subject: 'LARPILOTE – Demande de formule Business',
    formule: 'Business',
  },
  relais: {
    subject: 'LARPILOTE – Demande d\'étude Relais',
    bookings: true,
    platforms: ['Airbnb', 'Booking.com', 'Autre', 'Plusieurs plateformes'],
    needs: [
      'Gestion des messages voyageurs',
      'Suivi des réservations',
      'Gestion des annonces',
      'Suivi des performances',
      'Coordination opérationnelle à distance',
      'Autre',
    ],
  },
  audit: {
    subject: 'LARPILOTE – Demande d\'audit',
    platform: ['Airbnb', 'Booking.com', 'Autre'],
    listingUrl: true,
    objectives: [
      'Améliorer la présentation de l’annonce',
      'Identifier les points à corriger',
      'Revoir les tarifs et promotions',
      'Vérifier la cohérence des informations',
      'Obtenir un diagnostic global',
      'Autre',
    ],
  },
}

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
  { label: 'Contact', to: '/contact' },
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

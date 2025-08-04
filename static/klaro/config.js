var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    lang: 'de',
    noNotice: false,
    privacyPolicy: '/datenschutz', // Passe ggf. an!

    default: false, // Standardmäßig alles deaktiviert

    mustConsent: true, // User muss explizit wählen

    translations: {
        de: {
            privacyPolicyUrl: '/datenschutz',
            consentModal: {
                title: 'Datenschutz-Einstellungen',
                description: 'Hier kannst du auswählen, welche Dienste Cookies setzen dürfen.',
            },
            consentNotice: {
                description: 'Wir nutzen Cookies und externe Dienste für ein besseres Erlebnis. Du kannst selbst wählen.',
                learnMore: 'Einstellungen',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                video: 'Videoeinbindung'
            }
        }
    },

    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga/, '_gid', '_gat'
            ],
            required: false,
            default: false,
            onlyOnce: true,
        },
        {
            name: 'youtube',
            title: 'YouTube Video',
            purposes: ['video'],
            cookies: [
                'VISITOR_INFO1_LIVE', 'YSC'
            ],
            required: false,
            default: false,
        }
    ]
};
klaro.install(klaroConfig);

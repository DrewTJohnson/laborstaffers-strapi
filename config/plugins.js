module.exports = ({ env }) => ({
    'navigation': { enabled: true },
    'graphql': { enabled: true },
    'gql': {
      navigationItemRelated: ['Page']
    },
    'ezforms' :{
        config:{
          captchaProvider: {
            name: 'none',
          },
          notificationProviders: [],
          enableFormName: true
        }
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('mail.laborstaffers.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'webadmin@laborstaffers.com',
          defaultReplyTo: 'webadmin@laborstaffers.com',
        },
      },
    },
    seo: {
      enabled: true
    }
});

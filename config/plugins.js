module.exports = ({ env }) => ({
    'navigation': { enabled: true },
    'graphql': { enabled: true },
    'gql': {
      navigationItemRelated: ['Page']
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
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

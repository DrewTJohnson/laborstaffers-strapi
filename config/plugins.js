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
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'webadmin@yoci.dev',
          defaultReplyTo: 'webadmin@yoci.dev'
        }
      },
    },
    seo: {
      enabled: true
    }
});

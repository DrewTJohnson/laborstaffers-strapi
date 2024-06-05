import type { Schema, Attribute } from '@strapi/strapi';

export interface InteractionsAttachment extends Schema.Component {
  collectionName: 'components_interactions_attachments';
  info: {
    displayName: 'Attachment';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    attachment: Attribute.String;
  };
}

export interface InteractionsButton extends Schema.Component {
  collectionName: 'components_interactions_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
    description: '';
  };
  attributes: {
    buttonText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read More'>;
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface InteractionsCallToAction extends Schema.Component {
  collectionName: 'components_interactions_call_to_actions';
  info: {
    displayName: 'Call To Action';
    icon: 'link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface InteractionsContactForm extends Schema.Component {
  collectionName: 'components_interactions_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'code';
    description: '';
  };
  attributes: {
    form: Attribute.Relation<
      'interactions.contact-form',
      'oneToOne',
      'api::form.form'
    >;
    formDescription: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface InteractionsEmail extends Schema.Component {
  collectionName: 'components_interactions_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    email: Attribute.String;
  };
}

export interface InteractionsFirstName extends Schema.Component {
  collectionName: 'components_interactions_first_names';
  info: {
    displayName: 'First Name';
    icon: 'bold';
  };
  attributes: {
    firstName: Attribute.String & Attribute.Required;
  };
}

export interface InteractionsLastName extends Schema.Component {
  collectionName: 'components_interactions_last_names';
  info: {
    displayName: 'Last Name';
    icon: 'bold';
  };
  attributes: {
    lastName: Attribute.String & Attribute.Required;
  };
}

export interface InteractionsMessage extends Schema.Component {
  collectionName: 'components_interactions_messages';
  info: {
    displayName: 'Message';
    icon: 'bold';
    description: '';
  };
  attributes: {
    message: Attribute.String & Attribute.Required;
  };
}

export interface InteractionsNavigation extends Schema.Component {
  collectionName: 'components_interactions_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'manyWays';
    description: '';
  };
  attributes: {};
}

export interface LayoutCaptcha extends Schema.Component {
  collectionName: 'components_layout_captchas';
  info: {
    displayName: 'Captcha';
    icon: 'information';
  };
  attributes: {};
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String & Attribute.Required;
    heroImage: Attribute.Media;
    pageDescription: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    callToAction: Attribute.Component<'interactions.call-to-action'>;
  };
}

export interface LayoutRichText extends Schema.Component {
  collectionName: 'components_layout_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface LayoutSplitColumn extends Schema.Component {
  collectionName: 'components_layout_split_columns';
  info: {
    displayName: 'Split Column';
    icon: 'grid';
    description: '';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    media: Attribute.Media & Attribute.Required;
    mediaAlignment: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'right'>;
    button: Attribute.Component<'interactions.button'>;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'heart';
    description: '';
  };
  attributes: {
    testimonial: Attribute.Relation<
      'layout.testimonials',
      'oneToOne',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'interactions.attachment': InteractionsAttachment;
      'interactions.button': InteractionsButton;
      'interactions.call-to-action': InteractionsCallToAction;
      'interactions.contact-form': InteractionsContactForm;
      'interactions.email': InteractionsEmail;
      'interactions.first-name': InteractionsFirstName;
      'interactions.last-name': InteractionsLastName;
      'interactions.message': InteractionsMessage;
      'interactions.navigation': InteractionsNavigation;
      'layout.captcha': LayoutCaptcha;
      'layout.hero': LayoutHero;
      'layout.rich-text': LayoutRichText;
      'layout.split-column': LayoutSplitColumn;
      'layout.testimonials': LayoutTestimonials;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

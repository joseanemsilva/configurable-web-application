import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    email: Schema.Attribute.Component<'shared.input-field', false> &
      Schema.Attribute.Required;
    fullName: Schema.Attribute.Component<'shared.input-field', false> &
      Schema.Attribute.Required;
    message: Schema.Attribute.Component<'shared.input-field', false> &
      Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.Component<'shared.input-field', false> &
      Schema.Attribute.Required;
    submit: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_contents';
  info: {
    displayName: 'CtaContent';
  };
  attributes: {
    ctaPrimary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Know More'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    tittle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedInputField extends Struct.ComponentSchema {
  collectionName: 'components_shared_input_fields';
  info: {
    displayName: 'InputField';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_titles';
  info: {
    displayName: 'SectionTitle';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSingleTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_testimonials';
  info: {
    displayName: 'SingleTestimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-form': SharedContactForm;
      'shared.content': SharedContent;
      'shared.cta-content': SharedCtaContent;
      'shared.input-field': SharedInputField;
      'shared.section-title': SharedSectionTitle;
      'shared.single-testimonial': SharedSingleTestimonial;
    }
  }
}

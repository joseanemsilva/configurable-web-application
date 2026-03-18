import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.content': SharedContent;
      'shared.cta-content': SharedCtaContent;
      'shared.section-title': SharedSectionTitle;
      'shared.single-testimonial': SharedSingleTestimonial;
    }
  }
}

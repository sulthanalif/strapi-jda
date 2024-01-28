import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAdministrator extends Schema.Component {
  collectionName: 'components_components_administrators';
  info: {
    displayName: 'administrator';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'code';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsFooterC extends Schema.Component {
  collectionName: 'components_components_footer_cs';
  info: {
    displayName: 'footerC';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    desc: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'footer';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    contact: Attribute.Component<'components.footer-c', true>;
    mediasocial: Attribute.Component<'components.mediasocial', true>;
  };
}

export interface ComponentsHeaderImg extends Schema.Component {
  collectionName: 'components_components_header_imgs';
  info: {
    displayName: 'headerIMG';
    icon: 'folder';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    imageLeft: Attribute.Media;
    imageRight: Attribute.Media;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsManagedBy extends Schema.Component {
  collectionName: 'components_components_managed_bies';
  info: {
    displayName: 'managedBy';
    icon: 'feather';
    description: '';
  };
  attributes: {
    admin: Attribute.Component<'components.administrator', true>;
  };
}

export interface ComponentsMediasocial extends Schema.Component {
  collectionName: 'components_components_mediasocials';
  info: {
    displayName: 'mediasocial';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.administrator': ComponentsAdministrator;
      'components.button': ComponentsButton;
      'components.footer-c': ComponentsFooterC;
      'components.footer': ComponentsFooter;
      'components.header-img': ComponentsHeaderImg;
      'components.header': ComponentsHeader;
      'components.managed-by': ComponentsManagedBy;
      'components.mediasocial': ComponentsMediasocial;
    }
  }
}

'use strict';

module.exports = {
  kind: 'collectionType',
  collectionName: 'audit_logs',
  info: {
    singularName: 'audit-log',
    pluralName: 'audit-logs',
    displayName: 'Audit Log',
  },
  options: {
    draftAndPublish: false,
    timestamps: false,
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  pluginOptions: {},
  attributes: {
    action: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'datetime',
      required: true,
    },
    user: {
      type: 'relation',
      relation: 'oneToOne',
      target: 'admin::user',
    },
    payload: {
      type: 'json',
    },
  },
};

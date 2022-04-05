export interface AppSettings {
  clientId: string;
  clientSecret: string;
  tenantId: string;
  authTenant: string;
  graphUserScopes: string[];
}

const settings: AppSettings = {
  'clientId': 'YOUR_CLIENT_ID_HERE',
  'clientSecret': 'YOUR_CLIENT_SECRET_HERE_IF_USING_APP_ONLY',
  'tenantId': 'YOUR_TENANT_ID_HERE_IF_USING_APP_ONLY',
  'authTenant': 'common',
  'graphUserScopes': [
    'user.read',
    'mail.read',
    'mail.send'
  ]
}

export default settings;

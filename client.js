import {Providers, Msal2Provider } from "@microsoft/mgt";

Providers.globalProvider = new Msal2Provider({
  clientId: 'fb9db9e2-939d-401c-88a4-e90909eefc42'
});
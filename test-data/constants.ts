// At current project size, we do not need them, but I decided to add them as a visual representation of dynamic variables

export const Pages = {
  devices: 'Devices',
  blueprints: 'Blueprints',
  library: 'Library',
  users: 'Users',
} as const;

export const Library = {
  addItemHeading: 'Add Library Item',
  managedOs: 'Managed OS',
  ios17: 'iOS 17',
  addAndConfigure: 'Add and configure',
} as const;

export const Devices = {
  noDevicesMessage: 'No devices to display',
  appleSilicon: 'Apple Silicon',
} as const;

export const Api = {
  validUserId: 1,
  invalidUserId: 9999,
  sqlInjectionPayload: "' OR '1'='1; DROP TABLE users;--",
} as const;

export type SystemUserAddressInterface = { street: string; number: number };

export interface SystemUserInterface {
  firstName: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressInterface[]>;
}

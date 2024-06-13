import {
  SystemUserAddressInterface,
  SystemUserInterface,
} from './system-user-interface';

export class AdminUser implements SystemUserInterface {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }
  async getAddresses(): Promise<SystemUserAddressInterface[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Rua das Flores', number: 123 },
        ]);
      }, 2000);
    });
  }
}

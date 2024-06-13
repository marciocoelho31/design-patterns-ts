import { AdminUser } from './admin-user';
import {
  SystemUserAddressInterface,
  SystemUserInterface,
} from './system-user-interface';

export class SystemUserProxy implements SystemUserInterface {
  private realUser: SystemUserInterface | null = null;
  private realUserAddresses: SystemUserAddressInterface[] | null = null;

  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  private createUser(): SystemUserInterface {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }
    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressInterface[]> {
    this.realUser = this.createUser();

    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}

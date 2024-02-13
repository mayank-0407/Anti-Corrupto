export default class NoPermissionsAcquirer {
  async getPermissions() {
    return Promise.resolve();
  }
}
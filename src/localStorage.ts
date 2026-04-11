
interface StorageItem {
  key: string;
  value: any;
}

class LocalStorage {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}

const localStorage = new LocalStorage();

export default localStorage;

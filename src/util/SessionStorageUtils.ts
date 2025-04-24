type StorageDataType = {
  data: any;
  expire: number;
};
class SessionStorageUtils {
  static setExpireItem(key?: string, data?: any, expire?: number) {
    if (!key || !data) {
      return;
    }
    sessionStorage.setItem(
      key,
      JSON.stringify({
        data,
        expire: Date.now() + (expire ?? 0) * 1000,
      }),
    );
  }

  static getExpireItem(key?: string, expireRemove?: boolean) {
    if (!key) {
      return null;
    }
    const val = sessionStorage.getItem(key!);
    if (val) {
      const storageData = JSON.parse(val);
      if (Date.now() > storageData.expire) {
        sessionStorage.removeItem(key!);
        return null;
      } else {
        return storageData?.data;
      }
    }
  }
}

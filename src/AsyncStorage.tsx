export default {
  setItem: (key: string, value: any) => {
    try {
      const obj = JSON.stringify({ key, value });
      localStorage.setItem(`${key}`, obj);
    } catch (error) {}
  },

  getItem: (key: string) => {
    try {
      const str = localStorage.getItem(`${key}`);
      const jsonValue = JSON.parse(str || '{}');
      return jsonValue.value || null;
    } catch (error) {
      return null;
    }
  },
};

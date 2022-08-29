export default {
  setItem: async (key: string, value: any) => {
    try {
      const obj = JSON.stringify({ key, value });
      await localStorage.setItem(`${key}`, obj);
    } catch (error) {}
  },

  getItem: async (key: string) => {
    try {
      const str = await localStorage.getItem(`${key}`);
      const jsonValue = JSON.parse(str || '{}');
      return jsonValue.value || null;
    } catch (error) {}
  },
};

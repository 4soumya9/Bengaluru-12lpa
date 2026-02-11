export const saveTodoToServer = (todo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Synced to server:", todo);
      resolve();
    }, 1000);
  });
};

export const reloadPage = (load) => {
    return {
      type: "RELOAD",
      payload: load,
    }
  }
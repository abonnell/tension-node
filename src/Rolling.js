const incrementPool = currentState => {
  this.setState(prevState => {
    return { currentPool: prevState.value + 1 };
  });
};

export default incrementPool;

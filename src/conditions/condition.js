exports.Condition = class {
  isSatisfiedBy(screening, audienceCount) {
    throw new Error("you have to build your own isSatisfiedBy");
  }
};

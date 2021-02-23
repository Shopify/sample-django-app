class UniqueIdFactory {
  constructor(idGeneratorFactory) {
    this.idGeneratorFactory = void 0;
    this.idGenerators = {};
    this.idGeneratorFactory = idGeneratorFactory;
  }

  nextId(prefix) {
    if (!this.idGenerators[prefix]) {
      this.idGenerators[prefix] = this.idGeneratorFactory(prefix);
    }

    return this.idGenerators[prefix]();
  }

}
function globalIdGeneratorFactory(prefix = '') {
  let index = 1;
  return () => `Polaris${prefix}${index++}`;
}

export { UniqueIdFactory, globalIdGeneratorFactory };

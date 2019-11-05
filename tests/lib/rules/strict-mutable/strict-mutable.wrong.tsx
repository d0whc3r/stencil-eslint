@Component({ tag: 'sample-tag' })
export class SampleTag {
  @Prop({ mutable: false }) readonly test?: string;
  @Prop({ mutable: true }) testMutable?: string;
  /**
   * Some property comment
   */
  @Prop({ mutable: true, attribute: 'some-attr', reflect: true }) testMutable2?: string;

  render() {
    return (<div>test</div>);
  }

  private internalMethod() {
    const test = 'hi';
    this.testMutable = 'other value';
    return 'ok';
  }
}

@Component({ tag: 'sample-tag' })
export class SampleTag {
  @Prop() readonly test?: string;
  @Prop({ mutable: true }) testMutable?: string;

  render() {
    return (<div>test</div>);
  }

  private internalMethod() {
    return 'ok';
  }

  @OwnDecorator()
  private internalDecoratedMethod() {
    return 'ok';
  };
}

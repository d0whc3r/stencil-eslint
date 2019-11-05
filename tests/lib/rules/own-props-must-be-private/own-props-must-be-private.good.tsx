@Component({ tag: 'sample-tag' })
export class SampleTag {
  @Prop() readonly test?: string;
  @Prop({ mutable: true }) testMutable?: string;
  private internalProp: string;
  @OwnDecorator() private internalDecoratedProp: string;

  render() {
    return (<div>test</div>);
  }
}

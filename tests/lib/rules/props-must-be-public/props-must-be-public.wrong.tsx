@Component({ tag: 'sample-tag' })
export class SampleTag {
  @Prop() protected testProtected?: string;
  @Prop() private testPrivate?: string;

  render() {
    return (<div>test</div>);
  }

  private someFn() {
    return 'test';
  }
}

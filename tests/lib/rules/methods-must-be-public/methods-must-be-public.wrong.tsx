@Component({ tag: 'sample-tag' })
export class SampleTag {
  render() {
    return (<div>test</div>);
  }

  @Method()
  protected async someMethod2() {
    return 'method2';
  }

  @Method()
  private async someMethod() {
    return 'method';
  }
}

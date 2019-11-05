@Component({ tag: 'sample-tag' })
export class SampleTag {

  // This is not a comment
  @Prop() readonly test?: string;

  /**
   * This is an invalid comment
   * @type string
   */
  @Prop() readonly test2?: string;

  /**
   * This is an invalid comment
   * @memberOf SampleTag
   */
  @Prop() readonly test3?: string;
  @Event() myEvent!: CustomEvent;

  @Method()
  async testMethod(test?: string) {
    return test;
  }

  @Method()
  async testMethod2() {
    return 'test';
  }

  render() {
    return (<div>test</div>);
  }
}

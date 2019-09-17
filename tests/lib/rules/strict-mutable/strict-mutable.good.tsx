@Component({ tag: 'sample-tag' })
export class SampleTag {
  @Prop() readonly test?: string;
  @Prop({ mutable: true }) testMutable?: string;
  @Prop({ mutable: true }) testMutable2?: boolean;
  @Prop({ mutable: false }) readonly testNotMutable?: boolean;
  @Prop({ mutable: true }) mutableInJsx?: boolean;
  @Prop({ mutable: true }) mutableInJsx2?: boolean;

  private internalMethod() {
    const test = 'hi';
    this.testMutable = 'other value';
    return 'ok';
  }

  private onClick(e: Event) {
    e.preventDefault();
    if (!this.testNotMutable) {
      this.testMutable = true;
    } else if (this.testMutable === undefined) {
      this.testMutable2 = !this.testMutable2;
    }
  }

  render() {
    this.mutableInJsx2 = false;
    return (<div onClick={(e) => this.mutableInJsx = true}>test</div>);
  }
}

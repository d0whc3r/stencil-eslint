@Component({ tag: 'sample-tag' })
export class SampleTag {
  private ownProp = true;
  private ownProp2 = false;

  @Element() private readonly element!: HTMLSampleTagElement;

  @State() myState?: string;

  @Watch('myState')
  myStateWatch() {
    return false;
  }

  @Prop() readonly test?: string;
  @Prop({ mutable: true }) testMutable?: string;

  @Watch('testMutable')
  testMutableWatch() {
    return true;
  }

  @Prop() readonly testProp?: string;

  @Watch('testProp')
  testPropWatch() {
    return true;
  }

  @Event() anEvent!: EventEmitter<void>;
  @Event() anBEvent!: EventEmitter<void>;

  componentWillLoad() {
    console.log('will load');
  }

  componentDidLoad() {
    console.log('did load');
  }

  @Listen('some-event')
  listenEvent() {
    console.log('listen');
  }

  @Method()
  async anElementMethod() {
    return true;
  }

  @Method()
  async elementMethod() {
    return true;
  }

  private aOwnMethod() {
    return true;
  }

  private ownMethod() {
    return false;
  }

  render() {
    return (<div>test</div>);
  }
}

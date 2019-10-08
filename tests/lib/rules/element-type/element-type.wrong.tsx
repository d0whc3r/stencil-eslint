@Component({ tag: 'sample-tag' })
export class TheSampleTag {
  @Element() private theElement!: HTMLElement;

  @Element() private readonly theElement!: HTMLElement;

  @Element() theElement!: HTMLElement;

  render() {
    return (<div>test</div>);
  }
}

@Component({ tag: 'sample-tag' })
export class SampleTag {
  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  componentWillLoad() {
    console.log('loaded');
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <span>{time}</span>
    );
  }
}

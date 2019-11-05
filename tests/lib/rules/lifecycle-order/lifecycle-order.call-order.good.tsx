@Component({ tag: 'sample-tag' })
export class SampleTag {
  timer: number;

  @State() time: number = Date.now();

  componentWillLoad() {
    console.log('loaded');
  }

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <span>{time}</span>
    );
  }
}

@Component({ tag: 'sample-tag' })
export class SampleTag {
  timer: number;

  @State() time: number = Date.now();

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
        <span>{time}</span>
    );
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }
}

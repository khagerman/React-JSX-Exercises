const App = () => (
  <div>
    <Tweet username="kh" name="katherine" message="hi!!" />
    <Tweet username="dog123" name="Dog" message="Woof!!" />
    <Tweet username="cow23" name="Cow" message="mooooo!!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

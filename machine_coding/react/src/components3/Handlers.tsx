export default function Handlers() {
  const debounce = (fn: (...args: any[]) => void, delay: number) => {
    let timer = undefined;

    return function () {
      clearTimeout(timer);
      setTimeout(() => {}, delay);
    };
  };

  return (
    <div>
      <h2>Debounce and throttle</h2>
    </div>
  );
}

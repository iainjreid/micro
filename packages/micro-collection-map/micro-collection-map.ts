import base from "@emphori/micro-base"

function map<T1, T2>(fn: (val: T1, index: number) => T2, target: T1[]): T2[] {
  const out: T2[] = [];

  for (let i = 0, n = target.length; i < n; i++) {
    out[i] = fn(target[i], i);
  }

  return out;
}

export default base(map)


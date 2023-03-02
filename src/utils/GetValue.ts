export function GetValue(obj: any, key: string) {
  const keys = key.split(".");
  let res = obj[keys[0]];
  for (let i = 1; i < keys.length; i++) {
    res = res[keys[i]];
  }
  return res;
}

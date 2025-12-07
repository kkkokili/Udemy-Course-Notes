export default async function fetchCode() {
  const resObj = await fetch("./demo.html");
  const code = await resObj.text();
  return code;
}

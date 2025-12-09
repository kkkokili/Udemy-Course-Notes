export default async function fetchCode() {
  try {
    const res = await fetch("./demo.html", { cache: "no-cache" });

    // 如果 HTTP 返回不是 200，也主动抛错
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }

    const code = await res.text();
    return code;
  } catch (err) {
    console.error("❌ Failed to fetch demo.html:", err);

    // 给编辑器一个提示文字，而不是直接崩掉
    return `<!-- ERROR: Unable to load demo.html -->\n${err}`;
  }
}

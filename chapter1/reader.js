export async function readJsonFile(filePath) {
    const data = await Deno.readTextFile(filePath);
    return JSON.parse(data);
}
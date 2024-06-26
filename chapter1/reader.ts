export async function readJsonFile(filePath: string) {
    const data = await Deno.readTextFile(filePath);
    return JSON.parse(data);
}
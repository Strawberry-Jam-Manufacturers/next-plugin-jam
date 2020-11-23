export default async function initClient() {
  if (!process.env.NEXT_PUBLIC_JAM_PROJECT_ID) {
    console.error(
      "Jam plugin: NEXT_PUBLIC_JAM_PROJECT_ID environment variable is empty!"
    );
    return;
  }
}

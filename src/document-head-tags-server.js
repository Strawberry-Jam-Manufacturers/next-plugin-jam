export default function headTags() {
  var jamId = process.env.NEXT_PUBLIC_JAM_PROJECT_ID;
  if (!jamId) {
    return;
  }
  return (
    <>
      <script src="https://jam.dev/jam.js"></script>
      <script>Jam.init(`{jamId}`)</script>
    </>
  );
}

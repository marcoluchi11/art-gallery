import DownloadButton from "../DownloadButton";
import HomeImages from "./HomeImages";
export default function Homepage() {
  return (
    <>
      <div className="max-w-[1366px]">
        <div className="mb-20">
          <DownloadButton />
          <HomeImages />
        </div>
        <DownloadButton />
      </div>
    </>
  );
}
